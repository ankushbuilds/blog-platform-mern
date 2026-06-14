import PostCard from "./PostCard";

const PostList = ({ posts, refreshPosts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-6 mb-3" key={post._id}>
          <PostCard post={post} refreshPosts={refreshPosts} />
        </div>
      ))}
    </div>
  );
};

export default PostList;