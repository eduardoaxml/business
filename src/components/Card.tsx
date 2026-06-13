import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card m-auto"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  readonly title?: string;
  readonly body?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, body } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </>
  );
}
export default Card;
