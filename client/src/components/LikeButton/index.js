import { ADD_TO_WISHLIST } from "../../utils/mutations";

function LikeButton({ user, id, likeCount, likes }) {
  const [liked, setLiked] = useState(false);

  const [likePost] = useMutation(ADD_TO_WISHLIST, {
    variables: { postId: id },
  });

  return (
    <div>
      <div className="badge badge-outline-primary" onClick={likePost}>
        ❤️Wishlist
      </div>
    </div>
  );
}

export default LikeButton;
