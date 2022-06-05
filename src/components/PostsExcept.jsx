import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcept = ({ ...post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="contentBottom">
        <Link to={`post/${post.id}`}>view post</Link>
        <PostAuthor userID={post.userID} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcept;
