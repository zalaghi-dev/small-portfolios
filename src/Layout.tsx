import { Outlet } from "react-router-dom";
import Header from "./components/views/Header";
import ParticlesContainer from "./components/views/ParticlesContainer";
import Footer from "./components/views/Footer";

const Layout = () => {
  return (
    <div className="relative dark">
      <div className="-z-10 absolute inset-0">
        <ParticlesContainer />
      </div>
      <div className="relative">
        <Header />
      </div>
      <div className="relative z-20 mb-8">
        <Outlet />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
