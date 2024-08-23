import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Clock from "./apps/clocks";
import Todo from "./apps/todo/Todo";
import Menu from "./apps/Menu";
import Clock1 from "./apps/clocks/Clock1";
import Clock2 from "./apps/clocks/Clock2";
import Clock3 from "./apps/clocks/Clock3";
import Calculator from "./apps/calculator/Calculator";
import Crypto from "./apps/crypto/Crypto";
import TicTacToe from "./apps/tictactoe/TicTacToe";
import Gallery from "./apps/gallery/Gallery";
//< ROUTES CONFIGURATION >
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Menu /> },
      {
        path: "clock",
        element: <Clock />,
        children: [
          { index: true, path: "1", element: <Clock1 /> },
          { path: "2", element: <Clock2 /> },
          { path: "3", element: <Clock3 /> },
        ],
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "calculator",
        element: <Todo />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
