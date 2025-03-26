import { useSelector } from "react-redux";
import Userlogo from "./Logoutbtn";
import Sitelogo from "./sitelogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="bg-pink-100 h-20 mt-2 ml-10 mr-10 flex justify-around p-3 gap-10">
      {/* ✅ Logo */}
      <Sitelogo />

      {/* ✅ Navigation Links (Individually Written) */}
      <ul className="flex gap-6 list-none text-pink-500 font-bold font-lora text-xl">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        
          <li className="hover:underline">
            <Link to="/explore">Explore</Link>

          </li>
        
        {authStatus && (
          <>
            <li className="hover:underline">
              <Link to="/lifestyle">Lifestyle</Link>
            </li>
            <li className="hover:underline">
              <Link to="/counsel">Counsel</Link>
            </li>
          </>
        )}
        {!authStatus && (
          <>
            <li className="hover:underline">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:underline">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>

      {/* ✅ User Profile / Logout Button */}
      <Userlogo />
      {/* //<Signup /> */}
    </div>
  );
};

export default Navbar;
