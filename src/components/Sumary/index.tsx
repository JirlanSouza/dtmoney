import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../context/TransactionsContext";

import { Container } from "./styles";

export function Sumary() {
  const { transactions } = useTransaction();
  const currency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;

        return acc;
      }
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Sntradas" />
        </header>
        <strong>{currency.format(sumary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {currency.format(sumary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{currency.format(sumary.total)}</strong>
      </div>
    </Container>
  );
}
