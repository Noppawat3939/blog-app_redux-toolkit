import React from "react";
import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";
import "./styles/App.scss";

function App() {
  return (
    <main>
      <div className="hero">
        <h1>blog app</h1>
      </div>
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
