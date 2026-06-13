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
  const content = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    <p>No items</p>
  );
  return (
    <Card>
      <CardBody title="Hola Mundo" body="Este es un test" />
      {content}
    </Card>
  );
}

export default App;
