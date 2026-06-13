import { useState } from "react";

type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number) => {
    setIndex(i);
  };
  return (
    <div>
      <ul className="list-group">
        {data.map((item, i) => (
          <li
            onClick={() => handleClick(i)}
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
