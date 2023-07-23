import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Singup/Signup";
import ResetPassword from "../Authentication/ResetPassword/ResetPassword";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Collage/Details/Details";
import Colleges from "../Pages/Colleges/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission/Admission";
import Form from "../Pages/Admission/Form/Form";
import PrivateRoutes from "./PrivateRoutes";
import MyCollege from "../Pages/MyCollege/MyCollege";

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
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collage/${params.id}`),
      },

      {
        path: "collage",
        element: <Colleges />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission/form",
        element: (
          <PrivateRoutes>
            <Form />
          </PrivateRoutes>
        ),
      },
      {
        path: "myCollege",
        element: <MyCollege/>,
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