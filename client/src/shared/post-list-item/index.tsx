import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import Button from "../button";
import { useDeleteUserByIdMutation } from "../../app/api/posts";

interface IProps {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
}

const PostListItem: FunctionComponent<IProps> = ({
  id,
  firstName,
  lastName,
  avatar,
}) => {
  const navigate = useNavigate();
  const [deletePost] = useDeleteUserByIdMutation()

  return (
      <div className="p-8 rounded-2xl flex flex-row justify-between bg-white">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <span className="text-lg md:text-2xl">{id}.</span>
          <h3 className="text-lg md:text-2xl">
            {firstName} {lastName}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-3 lg:mt-0">
          <Button onClick={() => navigate(`/post/${id}`)}>Просмотр →</Button>
          <Button onClick={() => deletePost(id)}>Удалить &#215;</Button>
        </div>
      </div>
      <img src={avatar} alt="avatar" className="rounded-full w-20 md:w-32 h-20 md:h-32 object-cover" />
    </div>
    
  );
};

export default PostListItem;
