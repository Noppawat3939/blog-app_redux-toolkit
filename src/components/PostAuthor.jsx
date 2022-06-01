import { useAppSelector } from "../hooks/Hook";
import { selectAllUsers } from "../features/users/usersSlice";

const PostAuthor = ({ userID }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id == userID);

  return <span>by {author ? author.name : "unknow author"}</span>;
};

export default PostAuthor;
