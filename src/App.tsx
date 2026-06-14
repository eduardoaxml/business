import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ]);
  // const [isLoading, setIsLoading] = useState(false);
  // const list = [
  //   "An item",
  //   "A second item",
  //   "A third item",
  //   "A fourth item",
  //   "And a fifth one",
  // ];
  // const handleSelect = (item: string) => {
  //   return item;
  // };

  // const handleClick = () => {
  //   setIsLoading(!isLoading);
  // };

  // const content = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   <p>No items</p>
  // );
  // return (
  //   <Card className="py-2">
  //     <CardBody title="Hola Mundo" body="Este es un test" />
  //     {content}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola Mundo
  //     </Button>
  //   </Card>
  // );
  const addItem = () => {
    setData([...data, `Item ${data.length + 1}`]);
  };
  const deleteItem = () => {
    setData(data.slice(0, -1));
  };
  return (
    <Card>
      <Button onClick={addItem}>Agregar</Button>
      <Button onClick={deleteItem}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
