import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <div className="card  bg-neutral text-neutral-content mt-5">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{post.title}</h2>
          <h2 className="card-title">{post.id}</h2>
          {/* <p>{post.body}</p> */}
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={`/Posts/${post?.id}`}>
              see details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
