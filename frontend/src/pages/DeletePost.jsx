import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts");
        setPosts(res.data.posts || res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    try {
      await API.delete(`/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post._id !== id && post.id !== id));
      alert("Post deleted");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => {
          const postId = post._id || post.id;
          return (
            <div className="card mb-3" key={postId}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5>{post.title}</h5>
                    <small className="text-muted">
                      {new Date(post.createdAt || post.updatedAt || Date.now()).toLocaleString()}
                    </small>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(postId)}
                    >
                      ✏️
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(postId)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <p>{post.content}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;