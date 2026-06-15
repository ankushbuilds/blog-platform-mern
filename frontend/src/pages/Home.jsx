import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import PostList from "../components/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Protect Home page
    if (!token) {
      navigate("/login");
      return;
    }

    fetchPosts();
  }, [navigate]);

  // Loading UI
  if (loading) {
    return (
      <div className="loading-text mt-5">
        Loading posts...
      </div>
    );
  }

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="home-header">
        <h2>📝 Latest Blog Posts</h2>
        <p>Explore all posts from the community</p>
      </div>

      {/* POSTS */}
      {posts.length === 0 ? (
        <div className="empty-state">
          No posts yet. Be the first to post 🚀
        </div>
      ) : (
        <div className="posts-grid">
          <PostList
            posts={posts}
            refreshPosts={fetchPosts}
          />
        </div>
      )}

    </div>
  );
};

export default Home;