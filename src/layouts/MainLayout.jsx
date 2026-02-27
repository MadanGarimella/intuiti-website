import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#F7F7F7] text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;