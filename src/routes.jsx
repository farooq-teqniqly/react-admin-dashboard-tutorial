import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <List />,
  },
  {
    path: "/users/:userId",
    element: <Single />,
  },
  {
    path: "/users/new",
    element: <New />,
  },
  {
    path: "/products",
    element: <List />,
  },
  {
    path: "/products/:productId",
    element: <Single />,
  },
  {
    path: "/products/new",
    element: <New />,
  },
];

export default routes;
