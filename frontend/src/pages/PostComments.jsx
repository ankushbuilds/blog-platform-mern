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
        <div className="container mt-4">



            <h3>Comments</h3>

            {/* INPUT */}
            <div className="d-flex gap-2 mb-3">
                <input
                    className="form-control"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <FaPaperPlane
                    onClick={handleComment}
                    style={{
                        color: "#0095f6",
                        cursor: "pointer",
                        fontSize: "18px",
                        transition: "0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
            </div>

            {/* LIST */}
            {comments.length === 0 ? (
                <p className="text-muted">No comments yet</p>
            ) : (
                comments.map((c) => (
                    <div
                        key={c._id}
                        className="border p-2 rounded mb-2 d-flex justify-content-between"
                    >
                        <div>
                            <b>{c.user?.name}</b>
                            <p className="mb-0">{c.content}</p>
                        </div>

                        <FaTrash
                            onClick={() => deleteComment(c._id)}
                            style={{
                                color: "#161515",
                                cursor: "pointer",
                                fontSize: "14px",
                            }}
                        />


                    </div>
                ))
            )}
            <button
                className="btn btn-outline-dark w-100"
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className="me-2" />
                Back
            </button>
        </div>
    );
};

export default PostComments;