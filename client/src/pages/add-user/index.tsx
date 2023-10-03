import { useState } from "react";
import Layout from "../../shared/layout";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/button";
import { useAddUserMutation } from "../../app/api/posts";

const AddUser = () => {
  const [addPost] = useAddUserMutation();
  const navigate = useNavigate();
  const id = Date.now()

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });

  const onAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addPost({ ...form, id });
    setForm({
      first_name: "",
      last_name: "",
      avatar: "",
      email: "",
    })
    navigate(`/post/${id}`)
  };

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <Link to="/">
            <span className="transition-opacity duration-300 hover:opacity-70">
              ← Венуться назад
            </span>
          </Link>
          <h1 className="text-2xl md:text-4xl mt-4">Добавить пользователя</h1>
          <form
            className="p-4 rounded-2xl bg-white w-full md: max-w-[400px] mt-6"
            onSubmit={() => onAdd}
          >
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Имя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              id="firstName"
              type="text"
              value={form.first_name}
              placeholder="Имя"
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Фамилия
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              id="lastName"
              type="text"
              value={form.last_name}
              placeholder="Фамилия"
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avatar"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              id="email"
              type="email"
              value={form.email}
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Аватар
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              id="avatar"
              type="text"
              value={form.avatar}
              placeholder="Ссылка на аватар"
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            />
            <Button
              onClick={(e) => onAdd(e)}
              type="submit"
            >
              Добавить
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddUser;
