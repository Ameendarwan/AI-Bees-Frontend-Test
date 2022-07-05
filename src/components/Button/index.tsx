import "./Button.scss";
interface ButtonProps {
  title: string
}
const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button
      className="button"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
