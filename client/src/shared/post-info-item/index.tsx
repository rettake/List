import { FunctionComponent } from "react";

interface IProps {
  title?: number;
  body?: string | number;
}

const PostInfoItem: FunctionComponent<IProps> = ({ title, body }) => {
  return (
    <div>
      <h3 className="mb-2 text-lg md:text-xl">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostInfoItem;
