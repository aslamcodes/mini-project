import React, { useEffect, useState } from "react";
import VoteCard from "../components/ui/votecard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
      });

    return () => {};
  }, []);
  return (
    <div className="flex flex-col gap-5 bg-red-50 justify-center items-center  p-3 pt-24">
      {posts.map((post) => (
        <VoteCard title={post.text} />
      ))}
    </div>
  );
};

export default Home;
