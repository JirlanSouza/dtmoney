import Modal from "react-modal";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useRef, useState } from "react";
import { api } from "../../service/api";
import { useTransaction } from "../../context/TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const [type, setType] = useState<"deposit" | "withdrawal">("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const { createTransaction } = useTransaction();

  async function handleCreateNewTransaction(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const transactionData = {
      title,
      amount: Number(amount),
      category,
      type,
    };

    const createdTransaction = await createTransaction(transactionData);

    if (!createdTransaction) {
      return;
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setType("deposit");

    props.onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      {...props}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={props.onRequestClose}
      >
        <img src={closeImg} alt="Close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
          placeholder="Nome"
        />
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          type="number"
          placeholder="Preço"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdrawal"}
            activeColor="red"
            onClick={() => setType("withdrawal")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
