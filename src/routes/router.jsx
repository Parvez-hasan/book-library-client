import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Pages/Profile/Profile";
import AllBooks from "../Pages/Books/AllBooks";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/Books/BookDetails";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Loading from "../components/Loading";
import AboutUs from "../Pages/About/AboutUs";
import Contact from "../Pages/Contact/Contact";
import DashboardRoot from "../components/Dashboard/DashboardRoot/DashboardRoot";
import UserRouter from "./RoleRouter/UserRouter";
import DashboardLayout from "../Layouts/DashboardLayout"
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Invoices from "../Pages/Dashboard/Invoices/Invoices";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess/PaymentSuccess";
import WisList from "../Pages/Dashboard/WishList/WisList";
import LibrarianRouter from "./RoleRouter/LibrarianRouter"
import AddBook from "../Pages/Dashboard/AddBook/AddBook";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyBook from "../Pages/Dashboard/MyBook/MyBook";
import BookUpdate from "../Pages/Dashboard/BookUpdate/BookUpdate";

import AdminRoter from "../routes/RoleRouter/AdminRoter";
import UserManagement from "../Pages/Dashboard/Admin/UserManagement/UserManagement";
import Order from "../Pages/Dashboard/Order/Order"
import BookManege from "../Pages/Dashboard/Admin/BookManege/BookManege";
//import BookManege from "../Pages/Dashboard/Admin/BookManege"




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
        path: 'all-books',
        Component: AllBooks,
         hydrateFallbackElement: <Loading></Loading>  
      },
      {
        path: 'books/:id',
        element: ( <PrivateRouter>
          <BookDetails></BookDetails>
        </PrivateRouter> 
        ),
         hydrateFallbackElement: <Loading></Loading>  
      },
      {
       path: 'about-us',
       element: <AboutUs></AboutUs>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
       {
       path: 'profile',
       element: ( <PrivateRouter>
        <Profile></Profile>
       </PrivateRouter>
       ),
      },
      {
        path: 'coverage',
        Component: Coverage,
      }
    ]
  },


  // auth route
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


  // dashboard route

  {
   path: 'dashboard',
   errorElement: <ErrorPage />,
   element: (
     <PrivateRouter>
        <DashboardLayout></DashboardLayout>
     </PrivateRouter>
   ),

   children: [

    {
      index: true,
      element: <DashboardRoot></DashboardRoot>
    },

    // User
    {
     path: 'my-orders',
     element: (
         <UserRouter>
          <MyOrder></MyOrder>
         </UserRouter>
     ),
    },
    {
      path: 'invoices',
      element: (
        <UserRouter><Invoices></Invoices>
      </UserRouter>
      ),
    },

   {
      path: 'payment-success' ,
      element : (
          <UserRouter>
            <PaymentSuccess></PaymentSuccess>
          </UserRouter>
      ),
      
   },

    {
      path: 'wish-list',
      element: (
        <UserRouter>
           <WisList></WisList>
        </UserRouter>
      )
    },

    // Librarian 
    {
      path: 'add-books',
      element: (
       <LibrarianRouter>
        <AddBook></AddBook>
       </LibrarianRouter>    
      ),
    },
    {
      path : 'my-books',
      element : (
        <PrivateRouter>
          <MyBook></MyBook>
        </PrivateRouter>
      ),
    },
    {
     path : 'update-book/:id',
     element: (
      <LibrarianRouter>
        <BookUpdate></BookUpdate>
      </LibrarianRouter>
     )
    },
     

    {
      path: 'orders',
      element : (
         <LibrarianRouter>
          <Order></Order>
         </LibrarianRouter>
      ),
    },
    
   
    // Admin 
    {
      path: 'all-user',
      element: (
         <AdminRoter>
           <UserManagement></UserManagement>
         </AdminRoter>
      ),
    
    },
    {
     path: 'manage-book',
     element: (
        <AdminRoter>
          <BookManege></BookManege>
        </AdminRoter>
     ),
    },
   {
      path: 'my-profile',
      element : <MyProfile></MyProfile>
    },
   ]

  }
]);