import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Error from "../pages/Error";


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
    path: "/error",
    element: <Error />,
  },
];

export default config;
