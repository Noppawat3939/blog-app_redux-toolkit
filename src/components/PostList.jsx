import React, { useEffect } from "react";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "../features/post/postSlice";
import "../styles/PostList.scss";
import { useAppSelector } from "../hooks/Hook";
import { useDispatch } from "react-redux";
import PostsExcept from "./PostsExcept";

function PostList() {
  const dispatch = useDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postsStatus = useAppSelector(getPostsStatus);
  const error = useAppSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = "loading...";
  } else if (postsStatus === "succeeded") {
    const OrderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = OrderPosts.map((post) => <PostsExcept key={post.id} {...post} />);
  } else if (postsStatus === "failed") {
    content = { error };
  }

  return (
    <section className="postList">
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default PostList;
