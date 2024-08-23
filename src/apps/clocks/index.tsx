import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import GradientButton from "../../components/common/GradientButton";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const updateClock = () => {
      setTime(new Date());
    };
    const timerId = setTimeout(updateClock, 1000);
    return () => clearTimeout(timerId);
  }, [time]);
  useEffect(() => {
    location.pathname === "/clock" || location.pathname === "/clock/"
      ? navigate("1")
      : null;
  }, [location.pathname, navigate]);

  return (
    <div className="max-w-6xl m-auto">
      <div className="flex flex-wrap gap-4 my-5 items-center justify-center">
        <NavLink to={"1"}>
          {({ isActive }) => (
            <GradientButton title="1" onClick={() => {}} isActive={isActive} />
          )}
        </NavLink>
        <NavLink to={"2"}>
          {({ isActive }) => (
            <GradientButton title="2" onClick={() => {}} isActive={isActive} />
          )}
        </NavLink>
        <NavLink to={"3"}>
          {({ isActive }) => (
            <GradientButton title="3" onClick={() => {}} isActive={isActive} />
          )}
        </NavLink>
      </div>
      <div className="text-center m-auto">
        <Outlet context={time} />
      </div>
    </div>
  );
};

export default Clock;
