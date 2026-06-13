type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  return (
    <div>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
