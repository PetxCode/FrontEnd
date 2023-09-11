import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import HomeScreen from "../pages/home/HomeScreen";
import MessagePage from "../utils/MessagePage";
import SignIn from "../pages/auth/Signin";

export const mainRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/:token/verify-account",
    element: <SignIn />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
]);
