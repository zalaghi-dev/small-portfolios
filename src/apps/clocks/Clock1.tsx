import { useOutletContext } from "react-router-dom";
import { weekDay } from "./weekDay";
import { monthName } from "./monthName";
import { numZero } from "./numZero";

const Clock1 = () => {
  const time = useOutletContext<Date>();

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="text-6xl text-white font-bold font-mono">
        {`${numZero(time.getHours())}:${numZero(time.getMinutes())}:`}
        <span className="text-red-600 font-light">
          {numZero(time.getSeconds())}
        </span>
      </div>
      <div className="text-white text-xl">
        {weekDay(time.getDay())},
        <span className="text-red-600">
          {` ${numZero(time.getDate())} ${monthName(time.getMonth())} `}
        </span>
        <span>{time.getFullYear()}</span>
      </div>
    </div>
  );
};

export default Clock1;
