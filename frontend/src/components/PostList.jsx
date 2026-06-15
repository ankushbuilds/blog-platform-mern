import PostCard from "./PostCard";

const PostList = ({ posts, refreshPosts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          refreshPosts={refreshPosts}
        />
      ))}
    </>
  );
};

export default PostList;