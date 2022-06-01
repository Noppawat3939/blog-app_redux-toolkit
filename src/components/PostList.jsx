import React from "react";
import { selectAllPosts } from "../features/post/postSlice";
import "../styles/PostList.scss";
import { useAppSelector } from "../hooks/Hook";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function PostList() {
  const posts = useAppSelector(selectAllPosts);

  const orderdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="postList">
      <h2>Posts</h2>
      {orderdPosts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="contentBottom">
              <PostAuthor userID={post.userID} />
              <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post} />
          </article>
        );
      })}
    </section>
  );
}

export default PostList;
