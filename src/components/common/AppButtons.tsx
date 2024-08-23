import { ReactNode } from "react";
import { Link } from "react-router-dom";

const AppButtons = ({
  to,
  title,
  icon,
}: {
  to: string;
  icon: ReactNode;
  title: string;
}) => {
  return (
    <Link
      to={to}
      className="transition-all ease-in-out hover:scale-105 flex w-56 h-56 flex-col items-center justify-center gap-2 text-white bg-gradient-to-br from-primary-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <div className="text-8xl font-extrabold">{icon}</div>
      <div className="text-3xl font-extrabold uppercase">{title}</div>
    </Link>
  );
};

export default AppButtons;
