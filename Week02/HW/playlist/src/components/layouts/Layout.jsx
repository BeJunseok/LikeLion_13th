import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 bg-black text-white min-h-screen">
        <Outlet />
      </div>
    </>
  );
};
