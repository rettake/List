

import { useEffect, useState } from "react";
import { useGetAllPostsQuery } from "../../app/api/posts";
import Layout from "../../shared/layout";
import PostListItem from "../../shared/post-list-item";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetAllPostsQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <Layout>
      <div className="container">
        <div className="py-8 md:py-12">
          <h1 className="text-2xl md:text-4xl mt-4">Посты:</h1>
          <div className="flex flex-col gap-5 md:gap-7 mt-5 md:mt-8">
            {data?.map((item) => (
              <PostListItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
