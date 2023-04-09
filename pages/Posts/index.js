// import { data } from "autoprefixer";

import Post from "@/Components/Post/Post";

const Posts = ({ posts }) => {
  console.log(posts.posts);
  // const { posts } = props.posts;

  return (
    <div>
      <h1>the number of posts {posts.posts.length}</h1>
      <div className="">
        {posts.posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};
