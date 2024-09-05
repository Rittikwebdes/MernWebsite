import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
   

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("error:" + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="p-2 text-black font-bold  bg-accent hover:bg-accent hover:text-white duration-200 rounded-md"
        >
          Logout
        </button>
      </div>
    </>
  );
}
