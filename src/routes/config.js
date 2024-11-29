import Browse from "../components/Browse";
import Login from "../components/Login";
import Signup from "../components/Signup";

const config = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export default config;
