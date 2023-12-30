import { useState } from "react";
import { CiHeart } from "react-icons/ci";

function HeartButton() {
  const [liked, setIsLiked] = useState(false);

  return (
    <button
      className={`flex items-center   rounded-md sm:text-3xl  text-5xl hover:text-red-400 ${
        liked && "text-red-400"
      } font-extrabold`}
      onClick={() => setIsLiked(!liked)}
    >
      <CiHeart />
    </button>
  );
}

export default HeartButton;
