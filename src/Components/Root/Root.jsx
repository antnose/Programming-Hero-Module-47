import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
