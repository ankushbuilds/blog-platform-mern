import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import {FaEdit, FaTrash} from "react-icons/fa";

const PostCard = ({ post, refreshPosts }) => {
  const navigate = useNavigate();

  // 🗑 DELETE POST
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/posts/${post._id}`);

      // refresh list after delete
      if (refreshPosts) refreshPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        {/* TITLE + EDIT ICON */}
        <div className="d-flex justify-content-between">

          <h5>{post.title}</h5>

          <div className="d-flex gap-2">

  {/* Edit */}
  <Link
    to={`/edit/${post._id}`}
    className="text-primary fs-5"
  >
    <FaEdit />
  </Link>

  {/* Delete */}
  <button
    onClick={handleDelete}
    className="btn btn-sm border-0 text-danger"
  >
    <FaTrash />
  </button>

</div>

        </div>

        <p className="text-muted">
          {post.content.length > 120
            ? post.content.slice(0, 120) + "..."
            : post.content}
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
  );
};

export default PostCard;