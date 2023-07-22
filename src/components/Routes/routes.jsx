import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Singup/Signup";
import ResetPassword from "../Authentication/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        element: <ResetPassword/>
      },
    ],
  },
]);

export default router;