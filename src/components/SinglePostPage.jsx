import React from "react";
import { useAppSelector } from "../hooks/Hook";
import { selectPost } from "../features/post/postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const { postId } = useParams();

  const post = useAppSelector((state) => selectPost(state, Number(postId)));
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="contentBottom">
        <PostAuthor userID={post.userID} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
}

export default SinglePostPage;
