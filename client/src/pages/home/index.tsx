import { useGetAllUsersQuery } from "../../app/api/posts";
import Layout from "../../shared/layout";
import PostListItem from "../../shared/post-list-item";

const Home = () => {
  const { data } = useGetAllUsersQuery();

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <h1 className="text-2xl md:text-4xl mt-4">Посты:</h1>
          <div className="flex flex-col gap-5 md:gap-7 mt-5 md:mt-8">
            {data?.map((item) => (
              <PostListItem
                key={item._id}
                id={item._id}
                firstName={item.first_name}
                lastName={item.last_name}
                avatar={item.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
