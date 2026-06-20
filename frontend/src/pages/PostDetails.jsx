import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import API from "../services/api";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.get(`/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading post...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">

   

      {/* POST CARD */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h2 className="card-title mb-3">{post.title}</h2>

          <p className="text-muted mb-3">
            <strong>Author:</strong>{" "}
            {post.author?.name || "Unknown"}
          </p>

          <hr />

          <p
            className="card-text"
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.8",
            }}
          >
            {post.content}
          </p>

        </div>
         {/* GO TO COMMENTS PAGE */}
    
      </div>

        <div className="mt-1">
        <button
          className="btn btn-outline-primary w-100"
          onClick={() => navigate(`/posts/${id}/comments`)}
        >
          View Comments
        </button>

           {/* BACK BUTTON */}
      <button
        className="btn btn-outline-dark w-100"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="me-2" />
        Back
      </button>
      </div>

     

    </div>
  );
};

export default PostDetails;