// const LikeComponent = ({ isLiked, toggleLike }: any) => {
//   return <button onDoubleClick={toggleLike}>{isLiked ? 'UnLike' : 'Like'}</button>;
// };

// export default LikeComponent
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
const LikeComponent = ({HandleLike,GetCount }) => {
  return (
    <>
    <p>Like component</p>
    <IconButton aria-label="add to favorites" onClick={HandleLike}>
      <FavoriteIcon/><span>{GetCount}</span>
    </IconButton>
    </>
  )
};

export default LikeComponent;