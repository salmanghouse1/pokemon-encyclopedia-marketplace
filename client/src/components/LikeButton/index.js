import { ADD_TO_WISHLIST } from "../../utils/mutations";

function LikeButton({ postId, id, Image, Name }) {
  const [liked, setLiked] = useState(false);

  const [likePost] = useMutation(ADD_TO_WISHLIST, {
    variables: { postId: postId, id: id, Image: Image, Name: Name },
  });

  return (
    <div>
      <div className="badge badge-outline-primary" onClick={() => likePost}>
        ❤️Wishlist
      </div>
    </div>
  );
}

export default LikeButton;
