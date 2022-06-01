import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdd } from "../features/post/postSlice";
import "../styles/ReactionButtons.scss";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="reaction-btns">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          onClick={() =>
            dispatch(reactionAdd({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
