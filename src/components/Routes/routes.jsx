import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Singup/Signup";
import ResetPassword from "../Authentication/ResetPassword/ResetPassword";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Collage/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collage/${params.id}`),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;