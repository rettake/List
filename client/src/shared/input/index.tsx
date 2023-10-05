import { ComponentProps, FunctionComponent } from "react";

const InputField: FunctionComponent<ComponentProps<"input">> = ({
  id,
  type,
  value,
  required,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
      id={id}
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;
