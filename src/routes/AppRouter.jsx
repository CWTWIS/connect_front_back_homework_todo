import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import RegisterForm from "../layouts/RegisterForm";
import LoginForm from "../layouts/LoginForm";
import Header from "../layouts/Header";
import useAuth from "../../hooks/useAuth";
import HomeworkForm from "../layouts/HomeworkForm";

const routerGuest = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

const routerTeacher = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <p>Teacher Home</p> },
      { path: "/new", element: <HomeworkForm /> },
    ],
  },
]);

const routerStudent = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <p>Student Home</p> },
      { path: "/profile", element: <p>Show Profile</p> },
    ],
  },
]);
export default function AppRouter() {
  const { user } = useAuth();
  console.log("====================", user);
  const finalRouter = !user?.role
    ? routerGuest
    : user.role === "teacher"
    ? routerTeacher
    : routerStudent;
  return <RouterProvider router={finalRouter} />;
}
