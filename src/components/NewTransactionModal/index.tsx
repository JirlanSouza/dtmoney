import Modal from "react-modal";

import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function handleFormSubmit(event: React.FormEvent) {
  event.preventDefault();
}

export function NewTransactionModal(props: NewTransactionModalProps) {
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
      <Container onSubmit={handleFormSubmit}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Nome" />
        <input placeholder="Preço" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
