import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTables } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTables />
    </Container>
  )
}