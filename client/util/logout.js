import { useNavigate } from "react-router-dom";
import { useUser } from "../src/context/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";

export async function HandleSignOut(e) {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  e.preventDefault();
  console.log("clicked");
  if (user)
    axios.post("/user/logout").then(() => {
      navigate("/");
      setUser(false);
      toast.success("You have logged out. 👋");
    });
  else {
    toast.error("Error trying to logout. Please try again 😢");
  }
}
