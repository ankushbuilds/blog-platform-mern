import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

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

    // 🔐 Protect Home page
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
      <div className="row">

        {posts.length === 0 ? (
          <div className="text-center">
            <h5>Sorry!! No posts found.</h5>
          </div>
        ) : (
          posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>

              <div className="card h-100 shadow-sm">

                <div className="card-body">

                  <h5 className="card-title">
                    {post.title}
                  </h5>

                  <p className="card-text text-muted">
                    {post.content.length > 120
                      ? post.content.substring(0, 120) + "..."
                      : post.content}
                  </p>

                  <p className="small text-secondary">
                    ✍️ By: {post.author?.name || "Unknown"}
                  </p>

                </div>

                <div className="card-footer bg-white border-0">

                  <button
                    className="btn btn-outline-primary btn-sm w-100"
                    onClick={() => navigate(`/posts/${post._id}`)}
                  >
                    Read More
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Home;