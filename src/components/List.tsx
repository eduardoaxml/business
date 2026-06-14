import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (item: string) => void;
};

const List = ({ data, onSelect }: Props) => {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number, item: string) => {
    setIndex(i);
    onSelect?.(item);
  };
  return (
    <div className="p-2">
      <ul className="list-group">
        {data.map((item, i) => (
          <li
            onClick={() => handleClick(i, item)}
            key={item}
            className={`list-group-item ${index == i ? "active" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
