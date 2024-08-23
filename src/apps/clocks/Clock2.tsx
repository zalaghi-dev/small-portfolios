import { useOutletContext } from "react-router-dom";

const Clock2 = () => {
  const time = useOutletContext<Date>();

  const secondDegrees = time.getSeconds() * 6;
  const minuteDegrees = time.getMinutes() * 6 + (time.getSeconds() / 60) * 6;
  const hourDegrees =
    (time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30;
  const radius = 40;

  const positions = [
    { number: 1, angle: 30 },
    { number: 2, angle: 60 },
    { number: 3, angle: 90 },
    { number: 4, angle: 120 },
    { number: 5, angle: 150 },
    { number: 6, angle: 180 },
    { number: 7, angle: 210 },
    { number: 8, angle: 240 },
    { number: 9, angle: 270 },
    { number: 10, angle: 300 },
    { number: 11, angle: 330 },
    { number: 12, angle: 0 },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-slate-800 border-[20px] outline-8 border-slate-900 size-80 rounded-full relative">
        {/* HANDS */}
        <div className="absolute size-4 z-20 bg-red-800 border-2 border-bg-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className="w-[3px] bottom-1/2 translate-y-1/2 origin-bottom h-[135px] absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple-800 via-purple-500 to-purple-800 z-10"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        ></div>
        <div
          className="w-[3px] origin-bottom h-[120px] absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-red-800 via-red-500 to-red-800 z-10"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        ></div>
        <div
          className="w-[3px] origin-bottom h-[60px] absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-800 to-red-500 z-10"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>

        {positions.map(({ number, angle }) => {
          const top = 50 - radius * Math.cos((angle * Math.PI) / 180) + "%";
          const left = 50 + radius * Math.sin((angle * Math.PI) / 180) + "%";
          const isMajor =
            number === 12 || number === 3 || number === 6 || number === 9;

          return (
            <div
              key={number}
              className={`absolute -translate-y-1/2 -translate-x-1/2 text-center ${
                isMajor
                  ? "text-2xl font-semibold font-mono"
                  : "w-[2px] h-[10px] bg-bg-100"
              }`}
              style={{
                top: top,
                left: left,
                transform: isMajor
                  ? `translate(-50%, -50%)`
                  : `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            >
              {isMajor ? number : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clock2;
