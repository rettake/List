import { useState } from "react";
import Layout from "../../shared/layout";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/button";
import { useAddUserMutation } from "../../app/api/posts";
import InputField from "../../shared/input";
import Label from "../../shared/label";

const AddUser = () => {
  const [addPost] = useAddUserMutation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });

  const onAdd = () => {
    addPost({ ...form });
    setForm({
      first_name: "",
      last_name: "",
      avatar: "",
      email: "",
    });
    navigate(`/`);
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
            onSubmit={() => onAdd()}
          >
            <Label htmlFor="firstName">Имя</Label>
            <InputField
              id="firstName"
              type="text"
              value={form.first_name}
              required={true}
              placeholder="Имя"
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
            <Label htmlFor="lastName">Фамилия</Label>
            <InputField
              id="lastName"
              type="text"
              value={form.last_name}
              required={true}
              placeholder="Фамилия"
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
            <Label htmlFor="email">Email</Label>
            <InputField
              id="email"
              type="email"
              value={form.email}
              required={true}
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Label htmlFor="avatar">Аватар</Label>
            <InputField
              id="avatar"
              type="text"
              value={form.avatar}
              required={true}
              placeholder="Ссылка на аватар"
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            />
            <Button type="submit">Добавить</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddUser;
