import { FunctionComponent } from "react";

interface IProps {
  name: string;
  text: string;
}

const Message: FunctionComponent<IProps> = ({ name, text }) => {
  return (
    <div className="mb-2 bg-slate-100 p-2 rounded-lg">
      <h5>{name}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Message;
