import classNames from "classnames";

const GradientButton = ({
  title,
  onClick,
  isActive,
}: {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-semibold uppercase text-text rounded-lg group bg-gradient-to-br from-primary-600 to-blue-500 group-hover:from-primary-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span
        className={classNames(
          { "bg-opacity-0": isActive },
          "relative px-5 py-2 transition-all ease-in duration-75 bg-bg-900 rounded-md group-hover:bg-opacity-0"
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default GradientButton;
