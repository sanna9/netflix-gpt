import Browse from "../pages/Browse";
import Login from "../pages/Login";

const config = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
];

export default config;
