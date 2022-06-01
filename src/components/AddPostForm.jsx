import React, { useState } from "react";
import "../styles/AddPostForm.scss";
import { addPost } from "../features/post/postSlice";
import { useAppSelector } from "../hooks/Hook";
import { selectAllUsers } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";

function AddPostForm() {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  const canSave = [title, content, userID].every(Boolean);

  const handlePost = (e) => {
    e.preventDefault();
    if (canSave) {
      dispatch(addPost(title, content, userID));
      setTitle("");
      setContent("");
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
