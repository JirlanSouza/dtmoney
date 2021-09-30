import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../service/api";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdrawal";
  createdAt: string;
}

export interface TransactionData
  extends Omit<Transaction, "id" | "createdAt"> {}

interface TransactionContextValue {
  transactions: Transaction[];
  createTransaction: (transactionData: TransactionData) => Promise<boolean>;
}

const TransactionContext = createContext<TransactionContextValue>(
  {} as TransactionContextValue
);

interface TransactionProviderProps {
  children: ReactNode;
}
export function TransactionProvider(props: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const result = await api.get("transactions");
      setTransactions(result.data);
    }

    getTransactions();
  }, []);

  async function createTransaction(transactionData: TransactionData) {
    const transaction = {
      ...transactionData,
      createdAt: Date(),
    };

    const result = await api.post("transactions", transaction);

    if (result.status === 201) {
      setTransactions([...transactions, result.data.transaction]);

      return true;
    }

    return false;
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
