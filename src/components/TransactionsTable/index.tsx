import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: "deposit" | "withdrawal";
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td
                  className={
                    transaction.type === "deposit" ? "deposit" : "withdrawal"
                  }
                >
                  {transaction.type !== "deposit" && "-"}
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  { new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
