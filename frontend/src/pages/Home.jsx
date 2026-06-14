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
      <div className="text-center mt-5">
        <h4>Loading posts...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h2>📝 Latest Blog Posts</h2>
        <p className="text-muted">Explore all posts</p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center">
          <h5>Please Upload Posts...</h5>
        </div>
      ) : (
        <PostList
          posts={posts}
          refreshPosts={fetchPosts}
        />
      )}
    </div>
  );
};

export default Home;