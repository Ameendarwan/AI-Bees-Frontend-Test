import "./Button.scss";
interface ButtonProps {
  title?: string,
  type: string,
  onClick? : React.MouseEventHandler,
}
const Button = ({ title, type, ...rest }: ButtonProps) => {
  return (
    <button
      className={type === 'circle-red' ? "custom__button__circle__red" :
        type === 'circle-yellow' ? "custom__button__circle__yellow" :
          type === 'circle-green' ? "custom__button__circle__green" :
            type === 'circle-add' ? "custom__button__circle__add" :
              type === 'circle-empty' ? "custom__button__circle__empty" : "custom__button__primary"}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
