import { useEffect } from "react";
import { api } from "../../service/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  });

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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.580,00</td>
            <td>Desenvolvimento</td>
            <td>19/09/2021</td>
          </tr>

          <tr>
            <td>Combustível</td>
            <td className="withdrawal">-R$ 120,00</td>
            <td>Desenvolvimento</td>
            <td>19/09/2021</td>
          </tr>

          <tr>
            <td>Acessoria em tecnologia</td>
            <td className="deposit">R$ 7.200,00</td>
            <td>Desenvolvimento</td>
            <td>19/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
