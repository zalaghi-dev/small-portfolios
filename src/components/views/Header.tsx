import MobileLinksModal from "./MobileLinksModal";
import TopHeaderLinks from "./TopHeaderLinks";

const Header = () => {
  return (
    <>
      <div className="lg:block bg-gradient-to-br backdrop-blur-sm from-primary-600 to-blue-500 m-4 rounded-xl z-50 hidden mx-auto sticky top-3 text-sm max-w-6xl px-10 p-3">
        {/* HEADER */}
        <TopHeaderLinks />
      </div>
      <div className="lg:hidden mb-5 z-50 block w-full sticky top-0 text-base">
        {/* DRAWER */}
        <MobileLinksModal />
      </div>
    </>
  );
};

export default Header;
