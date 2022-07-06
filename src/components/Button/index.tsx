import "./Button.scss";
interface ButtonProps {
  title?: string,
  type: string,
  value?: boolean,
  onClick?: React.MouseEventHandler,
}
const Button = ({ title, value, type, ...rest }: ButtonProps) => {
  return (
    <button
      type='button'
      className={value === false ? "custom__button__circle__empty" :
        value ? type : type === 'circle-add' ? "custom__button__circle__add" :
          "custom__button__primary"}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
