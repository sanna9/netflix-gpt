import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Error from "../pages/Error";
import MovieDetail from "../pages/MovieDetail";

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
  {
    path: "/movie-detail/:id",
    element: <MovieDetail />,
  },
];

export default config;
