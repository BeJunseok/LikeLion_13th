import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { GoPerson } from "react-icons/go";

const NavBar = () => {
  return (
    <nav className="h-[80px] mx-auto mb-[20px] flex items-center justify-between border-b-1 border-slate-500">
      <Link to="/" className="font-semibold text-3xl whitespace-nowrap">
        Flick Library 🎞️
      </Link>
      <div className="flex-1 px-8">
        <SearchBar />
      </div>
      <Link to="/mypage" className="whitespace-nowrap text-[18px]">
      <GoPerson className="text-2xl"/>
      </Link>
    </nav>
  );
};

export default NavBar;
