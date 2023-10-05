import { FunctionComponent } from "react";

interface IProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: FunctionComponent<IProps> = ({ htmlFor, children }) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
