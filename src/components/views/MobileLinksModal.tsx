import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import Logo from "../common/Logo";
import { NavLink } from "react-router-dom";
import { tabsConfig } from "../../config/tabsConfig";
import classNames from "classnames";

const MobileLinksModal = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="lg:hidden w-full flex justify-between bg-gradient-to-br backdrop-blur-sm from-primary-600 to-blue-500 z-50 text-xl p-3">
        <Logo
          name={
            <>
              AmirZalaghi <span className="text-base">(Portfolio)</span>
            </>
          }
        />{" "}
        <span className="transition ease-in-out hover:scale-110">
          {!isDrawerOpen ? (
            <HiBars3BottomLeft
              onClick={() => setIsDrawerOpen(true)}
              className="size-8 cursor-pointer"
            />
          ) : (
            <HiXMark
              onClick={() => setIsDrawerOpen(false)}
              className="size-8 cursor-pointer"
            />
          )}
        </span>
      </div>
      <div
        className={`lg:hidden backdrop-blur-lg w-full p-5 fixed z-50 min-h-screen  transition-transform duration-500 ${
          isDrawerOpen
            ? "translate-x-0"
            : "-translate-x-full rtl:translate-x-full"
        }`}
      >
        {tabsConfig.map(({ icon, title, to }) => (
          <NavLink
            key={title}
            onClick={() => setIsDrawerOpen(false)}
            className="transition ease-in-out flex items-center gap-2 text-3xl hover:scale-110 hover:translate-x-10 rtl:hover:-translate-x-10 my-5"
            to={to}
          >
            {({ isActive }) => (
              <div
                className={classNames(
                  "transition-transform ease-in-out flex items-center gap-1 font-bold text-xl scale-100 hover:scale-110",
                  { "text-orange-400": isActive }
                )}
              >
                {" "}
                <span className="text-2xl font-bold"> {icon} </span>
                {title}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileLinksModal;
