import "./Input.scss"
interface InputProps {
  previewMode?: boolean,
  placeholder: string,
  value: string,
  type: string,
  onChange?: void,
}
const Input: React.FC<InputProps> = ({ previewMode, placeholder, value, type }) => {
  return (
    <div>
      {type === "input" &&
        <input
          placeholder={placeholder}
          disabled={previewMode}
          className={"custom__input__input"}
        value={value}
        />}
      {type === "description" &&
        <textarea className={"custom__input__textarea"} />
      }
    </div>
  );
};

export default Input;
