import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function HeartButton() {
  const [liked, setIsLiked] = useState(false);

  return (
    <button
      className={`flex items-center  rounded-md sm:text-3xl  text-5xl  hover:text-red-400 ${
        liked && "text-red-400"
      } font-bold`}
      onClick={() => setIsLiked(!liked)}
    >
      {liked ? <FaHeart /> : <CiHeart />}
    </button>
  );
}

export default HeartButton;
