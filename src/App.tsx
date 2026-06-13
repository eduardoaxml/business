import Card, { CardBody } from "./components/Card";
import List from "./components/List";


function App() {
  return (
    <Card>
      <CardBody title="Hola Mundo" body="Este es un test" />
      <List />
    </Card>
  );
}

export default App;