import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const handleSelect = (item: string) => {
    return item;
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" body="Este es un test" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
