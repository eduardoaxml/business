import styles from "./Button.module.css";

type Props = {
  children?: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={isLoading}
        type="button"
        className={[styles.button, styles.padded].join(" ")}
        // className={`btn btn-${isLoading ? "secondary" : "primary"} mt-2 w-100 `}
      >
        {isLoading ? "Cargando..." : children}
      </button>
    </>
  );
}

export default Button;
