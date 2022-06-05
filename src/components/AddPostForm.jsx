import React, { useState } from "react";
import "../styles/AddPostForm.scss";
import { addNewPost } from "../features/post/postSlice";
import { useAppSelector } from "../hooks/Hook";
import { selectAllUsers } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";

function AddPostForm() {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");
  const [addRequesStatus, setAddRequesStatus] = useState("idle");

  const canSave =
    [title, content, userID].every(Boolean) && addRequesStatus === "idle";

  const handlePost = () => {
    try {
      setAddRequesStatus("pending");
      if (canSave) {
        dispatch(addNewPost({ title, body: content, userID })).unwrap();

        setTitle("");
        setContent("");
        setUserID("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setAddRequesStatus("idle");
    }
  };

  return (
    <section className="addPostForm">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">post title :</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="What are you thinking?"
        />
        <label htmlFor="author">author :</label>
        <select onChange={(e) => setUserID(e.target.value)}>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="content">post content :</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          type="submit"
          onClick={(e) => handlePost(e)}
          className="submit-btn"
          disabled={!canSave}
        >
          save post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
