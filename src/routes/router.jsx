import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import AllBooks from "../Pages/Books/AllBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'books',

      },
       {
       path: 'profile',
       element: <PrivateRouter>
        <Profile></Profile>
       </PrivateRouter>
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenter.json').then(res => res.json())
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
       {
        path: 'login',
        Component: Login
       },
       {
        path: 'register',
        Component: Register
       }
    ]
  },

  {
   path: 'dashboard',
   element: (
     <PrivateRouter>
        <DashboardLayout></DashboardLayout>
     </PrivateRouter>
   ),
   children: [
    {
      path: 'addBooks',
      Component: AddBooks
    }
   ]

  }
]);