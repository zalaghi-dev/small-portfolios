import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { tabsConfig } from "../../config/tabsConfig";
import Logo from "../common/Logo";

const TopHeaderLinks = () => {
  return (
    <div className="flex p-1 items-center justify-between">
      <Link to="/">
        <Logo
          name={
            <>
              AmirZalaghi <span className="text-base">(Portfolio)</span>
            </>
          }
        />
      </Link>
      <div className="flex flex-row gap-5">
        {tabsConfig.map(({ icon, title, to }) => (
          <NavLink to={to} key={to}>
            {({ isActive }) => (
              <div
                className={classNames(
                  "transition-transform ease-in-out flex items-center gap-1 font-bold text-base scale-100 hover:scale-110",
                  { "text-orange-400": isActive }
                )}
              >
                <span className="text-lg font-bold"> {icon} </span>
                {title}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopHeaderLinks;
