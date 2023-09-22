import Layout from "../../shared/layout";
import { useParams } from "react-router";
import { useGetPostByIdQuery } from "../../app/api/posts";
import PostInfoItem from "../../shared/post-info-item";
import { Link } from "react-router-dom";

const PostPage = () => {
  const param = useParams();
  const { data, isLoading } = useGetPostByIdQuery(param?.id || "");

  const dataToShow = [
    {
      title: "ID",
      body: data?.id,
    },
    {
      title: "TITLE",
      body: data?.title,
    },
    {
      title: "BODY",
      body: data?.body,
    },
  ];

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <Link to='/'>
            <span className="transition-opacity duration-300 hover:opacity-70">← Венуться назад</span>
          </Link>
          <h1 className="text-2xl md:text-4xl mt-4">Пост:</h1>
          <div className="flex flex-col gap-5 md:gap-7 mt-5 md:mt-8">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              dataToShow.map((item, index) => (
                <PostInfoItem title={item.title} body={item.body} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
