import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import Button from "../button";

interface IProps {
  id: number;
  title: string;
  body: string;
}

const PostListItem: FunctionComponent<IProps> = ({ id, title, body }) => {
  const navigate = useNavigate();

  return (
    <div className="p-8 rounded-2xl flex flex-col gap-4 bg-white">
      <div className="flex flex-row gap-2">
        <span className="text-lg md:text-2xl">{id}.</span>
        <h3 className="text-lg md:text-2xl">{title}</h3>
      </div>
      <p className="text-base md:text-lg truncate">{body}</p>
      <Button onClick={() => navigate(`/post/${id}`)}>Просмотр →</Button>
    </div>
  );
};

export default PostListItem;
