import { Navigate } from "react-router-dom";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
