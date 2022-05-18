import React, { useState, createContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { ADD_TO_WISHLIST } from "../../utils/mutations";

function LikeButton(props) {
  const [liked, setLiked] = useState(false);

  const [likePost, { data, loading, error }] = useMutation(ADD_TO_WISHLIST);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          console.log("enteredOnClick");
          likePost({
            variables: {
              id: props.userId,
              Name: props.pokemonName,
              Image: props.image,
              postId: props.postId,
            },
          });
        }}
        className="badge badge-outline-primary"
      >
        ❤️Wishlist
      </div>
    </div>
  );
}

export default LikeButton;
