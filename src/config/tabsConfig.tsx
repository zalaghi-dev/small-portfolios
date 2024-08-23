import { ReactElement } from "react";
import { FaBitcoin } from "react-icons/fa6";
import {
  RxCheckCircled,
  RxDashboard,
  RxImage,
  RxRulerHorizontal,
  RxStopwatch,
} from "react-icons/rx";
import { TbTicTac } from "react-icons/tb";
// LINKS CONFIG
export const tabsConfig: {
  to: string;
  title: string;
  icon: ReactElement;
}[] = [
  {
    to: "/",
    title: "Menu",
    icon: <RxDashboard />,
  },
  {
    to: "clock",
    title: "Clock",
    icon: <RxStopwatch />,
  },
  {
    to: "todo",
    title: "Todo",
    icon: <RxCheckCircled />,
  },
  {
    to: "crypto",
    title: "Crypto",
    icon: <FaBitcoin />,
  },
  {
    to: "tictactoe",
    title: "TicTacToe",
    icon: <TbTicTac />,
  },
  {
    to: "calculator",
    title: "Calculator",
    icon: <RxRulerHorizontal />,
  },
  {
    to: "gallery",
    title: "Gallery",
    icon: <RxImage />,
  },
];
