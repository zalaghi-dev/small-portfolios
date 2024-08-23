import { ReactNode } from "react";
import { FaBackspace, FaSquareRootAlt, FaTimes } from "react-icons/fa";
import {
  Fa0,
  Fa1,
  Fa2,
  Fa3,
  Fa4,
  Fa5,
  Fa6,
  Fa7,
  Fa8,
  Fa9,
  FaC,
  FaDivide,
  FaEquals,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";

export const buttonsConfig: {
  label: ReactNode;
  key: string;
  addonClass: string;
}[] = [
  {
    label: <Fa1 />,
    key: "1",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa2 />,
    key: "2",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa3 />,
    key: "3",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <FaPlus />,
    key: "+",
    addonClass: "focus:ring-green-800 from-pink-500 to-orange-400",
  },
  {
    label: <Fa4 />,
    key: "4",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa5 />,
    key: "5",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa6 />,
    key: "6",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <FaMinus />,
    key: "-",
    addonClass: "focus:ring-green-800 from-pink-500 to-orange-400",
  },
  {
    label: <Fa7 />,
    key: "7",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa8 />,
    key: "8",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <Fa9 />,
    key: "9",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <FaTimes />,
    key: "*",
    addonClass: "focus:ring-green-800 from-pink-500 to-orange-400",
  },
  {
    label: <FaC />,
    key: "c",
    addonClass:
      "from-red-800 to-pink-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-800",
  },
  {
    label: <Fa0 />,
    key: "0",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <FaBackspace />,
    key: "b",
    addonClass: "focus:ring-green-800 from-pink-500 to-orange-400",
  },
  {
    label: <FaDivide />,
    key: "/",
    addonClass: "focus:ring-green-800 from-pink-500 to-orange-400",
  },
  {
    label: "(",
    key: "(",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: ".",
    key: ".",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: ")",
    key: ")",
    addonClass: "focus:ring-yellow-800 from-yellow-500 to-orange-700",
  },
  {
    label: <FaEquals />,
    key: "=",
    addonClass: "focus:ring-green-800 from-cyan-500 to-sky-400",
  },
  {
    label: <FaSquareRootAlt />,
    key: "root",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: (
      <>
        X<sup>2</sup>
      </>
    ),
    key: "pow2",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: (
      <>
        X<sup>3</sup>
      </>
    ),
    key: "pow3",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: "%",
    key: "%",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: "sin",
    key: "sin",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: "cos",
    key: "cos",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: "tan",
    key: "tan",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
  {
    label: "cot",
    key: "cot",
    addonClass: "focus:ring-green-800 from-emerald-500 to-cyan-700",
  },
];
