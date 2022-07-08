import "./Input.scss"
interface InputProps {
  previewMode?: boolean,
  placeholder: string,
  value: string,
  type: string,
  required?: boolean,
  onChange?: any
}
const Input = ({ previewMode, placeholder, value, type, ...rest }: InputProps) => {
  return (
    <div>
      {type === "input" &&
        <input
          placeholder={placeholder}
          disabled={previewMode}
          className={"custom__input__input"}
          value={value}
          {...rest}
        />}
      {type === "description" &&
        <textarea className={"custom__input__textarea"}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      }
    </div>
  );
};

export default Input;
