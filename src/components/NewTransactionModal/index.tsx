import Modal from "react-modal";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useRef, useState } from "react";
import { api } from "../../service/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const valueInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);

  function handleCreateNewTransaction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const transactionData = {
      name: nameInputRef.current?.value,
      value: Number(valueInputRef.current?.value),
      category: categoryInputRef.current?.value,
      type,
      createdAt: Date(),
    };

    api.post("/transactions", transactionData);

    console.log(transactionData);
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

        <input ref={nameInputRef} placeholder="Nome" />
        <input ref={valueInputRef} type="number" placeholder="Preço" />

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

        <input ref={categoryInputRef} placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
