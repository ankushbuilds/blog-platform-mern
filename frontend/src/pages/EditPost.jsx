import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.get(`/api/posts/${id}`);
        setForm({
          title: res.data.title,
          content: res.data.content,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("Updating post with ID:", id);
       await API.put(`/api/posts/${id}`, form);
      alert("Post updated successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Failed to update post");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
            name="content"
            className="form-control"
            rows="6"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
          />
        </div>

        <button className="btn btn-primary">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;