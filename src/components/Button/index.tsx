import AddIcon from '@mui/icons-material/Add';
import "./Button.scss";
interface ButtonProps {
  title?: string;
  designType?: string;
  type?: "button" | "submit" | "reset" | undefined,
  value?: boolean;
  addClasses?: string;
  onClick?: React.MouseEventHandler;
}
const Button = ({ title, value, type, designType, ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      className={value === false ? "custom__button__circle__empty" :
        value ? designType : designType === 'circle-add' ? "custom__button__circle__add" :
          designType === 'done-tasks' ? "custom__button__done__tasks" :
            "custom__button__primary"}
      {...rest}
    >
      {designType === 'circle-add' && <AddIcon color="primary" style={{ color: "white" }} fontSize="large" />}
      {title}
    </button>
  );
};

export default Button;
