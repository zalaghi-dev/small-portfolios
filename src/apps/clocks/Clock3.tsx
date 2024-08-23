import { useOutletContext } from "react-router-dom";
import { numZero } from "./numZero";
import { monthName } from "./monthName";

const Clock3 = () => {
  const time = useOutletContext<Date>();
  return (
    <div className="flex items-center justify-center">
      <div className="before:absolute before:bg-primary-500 before:w-3 before:h-12 before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-slate-600 relative w-60 h-60 bg-primary-500 shadow-inner shadow-slate-600 flex justify-center items-center rounded-3xl">
        <div className="w-56 h-56 bg-bg-900 shadow-inner shadow-slate-6000 flex justify-center items-center rounded-3xl">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-bg-900 shadow-inner shadow-slate-600 w-52 h-52">
            <div className="before:absolute before:w-12 before:h-12 before:bg-primary-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-44 h-40 bg-bg-900 text-slate-600">
              <span className="text-red-100">
                {` ${numZero(time.getDate())} ${monthName(
                  time.getMonth()
                )} ${time.getFullYear()}`}
              </span>
              <span className="z-10 -mt-20 flex font-mono items-center text-6xl text-primary-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
                {numZero(time.getHours())}
                <span className="text-4xl mx-1 font-bold text-slate-600 [text-shadow:none]">
                  :
                </span>
                {numZero(time.getMinutes())}
              </span>
            </div>
            <span className="text-gray-700 text-lg font-light">
              Henry Allen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock3;
