import Link from "next/link";
import { useRouter } from "next/router";

const postDetails = ({ post }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/Posts");
  };

 

  return (
    <div>
      <div className="card  bg-neutral shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn">
              {post.title}
              <span className="text-red-500 mx-2">{post.id}</span>
            </button>

            <button onClick={handleBack} className="btn ">
              back to posts
            </button>
          </div>
          <p className="text-white">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  console.log(context.req);
  const { params } = context;
  const res = await fetch(`https://dummyjson.com/posts/${params?.postId}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  const paths = posts.posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};



export default postDetails;


