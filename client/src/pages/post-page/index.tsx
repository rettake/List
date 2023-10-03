import Layout from "../../shared/layout";
import { useParams } from "react-router";
import { useGetUserByIdQuery } from "../../app/api/posts";
import { Link } from "react-router-dom";

const PostPage = () => {
  const param = useParams();
  const { data, isLoading } = useGetUserByIdQuery(param?.id || "");

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <Link to="/">
            <span className="transition-opacity duration-300 hover:opacity-70">
              ← Венуться назад
            </span>
          </Link>
          <h1 className="text-2xl md:text-4xl mt-4">Пользователь:</h1>
          {isLoading ? (
            <h1 style={{ textAlign: "center" }}>Loading...</h1>
          ) : (
            <div className="flex flex-col md:flex-row items-start mt-6 gap-6">
              <img
                src={data?.avatar}
                alt="user_photo"
                className="w-full md:w-[300px] rounded-lg"
              />
              <div>
                <span className="opacity-200">name</span>
                <h2 className="text-3xl mb-3">
                  {data?.first_name} {data?.last_name}
                </h2>
                <span className="opacity-700">email</span>
                <h3 className="text-lg">{data?.email}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
