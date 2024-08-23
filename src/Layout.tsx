import { Outlet } from "react-router-dom";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";

const Layout = () => {
  return (
    <div className="dark">
      <Header />
      <div className="mb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
