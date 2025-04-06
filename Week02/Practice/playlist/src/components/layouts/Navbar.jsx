import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl">
          Playlist 🎧
        </Link>
        <Link to="/TOP100">TOP100</Link>
        <Link to="/mypage">My Page</Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
};
