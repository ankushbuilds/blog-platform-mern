import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaArrowLeft, FaTrash, FaPaperPlane } from "react-icons/fa";

const PostComments = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    const token = localStorage.getItem("token");

    // GET COMMENTS
    useEffect(() => {
        fetchComments();
    }, [id]);

    const fetchComments = async () => {
        try {
            const res = await API.get(`/comments/${id}`);
            setComments(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ADD COMMENT
    const handleComment = async () => {
        if (!text.trim()) return;

        try {
            const res = await API.post(
                "/comments",
                {
                    content: text,
                    postId: id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setComments([res.data, ...comments]);
            setText("");
        } catch (err) {
            console.log(err);
        }
    };

    // DELETE COMMENT
    const deleteComment = async (commentId) => {
        try {
            await API.delete(`/comments/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setComments(comments.filter((c) => c._id !== commentId));
        } catch (err) {
            console.log(err);
        }
    };

    return (
  <div className="comments-wrapper">

    <div className="comments-box">

      <h3 className="comments-title">Comments</h3>

      {/* INPUT */}
      <div className="comment-input-row">

        <input
          className="form-control"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <FaPaperPlane
          className="comment-send-icon"
          onClick={handleComment}
        />

      </div>

      {/* LIST */}
      {comments.length === 0 ? (
        <p className="text-muted">No comments yet</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="comment-item">

            <div>
              <div className="comment-user">{c.user?.name}</div>
              <div className="comment-text">{c.content}</div>
            </div>

            <FaTrash
              className="comment-delete"
              onClick={() => deleteComment(c._id)}
            />

          </div>
        ))
      )}

      {/* BACK */}
      <button
        className="btn btn-outline-dark comment-back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="me-2" />
        Back
      </button>

    </div>

  </div>
);
};

export default PostComments;