import { useGetAllPostsQuery } from "../../app/api/posts";
import Layout from "../../shared/layout";
import PostListItem from "../../shared/post-list-item";

const Home = () => {
  const { data, isLoading } = useGetAllPostsQuery("2");

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <h1 className="text-2xl md:text-4xl mt-4">Посты:</h1>
          <div className="flex flex-col gap-5 md:gap-7 mt-5 md:mt-8">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              data?.map((item) => (
                <PostListItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  body={item.body}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
