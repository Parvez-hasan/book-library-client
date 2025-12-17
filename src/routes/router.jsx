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
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/Books/BookDetails";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Loading from "../components/Loading";
import MyOrders from "../components/Dashboard/UserDash/MyOrders";
import MyProfile from "../components/Dashboard/UserDash/MyProfile";
import Invoices from "../components/Dashboard/UserDash/Invoices";
import AddBooks from "../components/Dashboard/Librarian-Dash/AddBooks";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/serviceCenter.json').then(res => res.json()),
        hydrateFallbackElement: <Loading></Loading>  
      },
      {
        path: 'books',
        Component: AllBooks,
         hydrateFallbackElement: <Loading></Loading>  
      },
      {
        path: 'books-details',
        element: <PrivateRouter><BookDetails></BookDetails></PrivateRouter>
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
       },
       {
        path: 'forgetPassword',
        Component: ForgetPassword
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

    // User
    {
     path: 'my-orders',
     element: <MyOrders></MyOrders>
    },
    {
      path: 'my-profile',
      element: <MyProfile></MyProfile>
    },
    {
      path: 'invoices',
      element: <Invoices></Invoices>
    },


    // Librarian 
    {
      path: 'add-books',
      element: <AddBooks></AddBooks>
    }
   ]

  }
]);