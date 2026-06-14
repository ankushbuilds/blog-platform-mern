import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaEdit, FaTrash, FaHeart } from "react-icons/fa";

const PostCard = ({ post, refreshPosts }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));



  const isLiked = post.likes?.some(
    (id) => id.toString() === user?.id?.toString()
  );

  // ❤️ LIKE
  const handleLike = async () => {
    try {
      await API.put(`/posts/${post._id}/like`);

      // refresh data from backend so UI updates correctly
      if (refreshPosts) refreshPosts();

    } catch (error) {
      console.log(error);
    }
  };

  // 🗑 DELETE
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/posts/${post._id}`);

      if (refreshPosts) refreshPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        {/* TITLE + ACTIONS */}
        <div className="d-flex justify-content-between">

          <h5>{post.title}</h5>

          <div className="d-flex gap-2 align-items-center">

            {/* EDIT */}
            <Link to={`/edit/${post._id}`} className="text-primary fs-5">
              <FaEdit />
            </Link>

            {/* DELETE */}
            <button onClick={handleDelete} className="btn text-danger">
              <FaTrash />
            </button>

            {/* LIKE */}
            <button
              onClick={handleLike}
              className="btn border-0 p-0 d-flex align-items-center gap-1"
            >
              <FaHeart
                size={18}
                style={{
                  color: isLiked ? "red" : "gray",
                  transition: "0.2s",
                  transform: isLiked ? "scale(1.2)" : "scale(1)",
                }}
              />

              <span>{post.likes?.length || 0}</span>
            </button>

          </div>
        </div>

        {/* CONTENT */}
        <p className="text-muted">
          {post.content?.length > 120
            ? post.content.slice(0, 120) + "..."
            : post.content}
        </p>

      </div>

      {/* FOOTER */}
      <div className="card-footer bg-white border-0">

        <button
          onClick={() => navigate(`/posts/${post._id}`)}
          className="btn btn-outline-primary w-100"
        >
          Read More
        </button>

      </div>

    </div>
  );
};

export default PostCard;