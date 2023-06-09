import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../layout/Main";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";
import MiddleSideNav from "../../Pages/Shared/MiddleSideNav/MiddleSideNav";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ErrorPage from "../../Error/ErrorPage";
import PrivateRoutes from "../PrivateRoutes";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Blogs from "../../Pages/Blogs/Blogs";
import Mode from "../../Pages/Others/Mode/Mode";

export const routes = createBrowserRouter([
  {
    path:'/',
    errorElement: <ErrorPage />,
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/categories/:id',
        element:<LeftSideNav></LeftSideNav>,
        loader: ({params}) => fetch(`https://learning-server-site-hrshihab.vercel.app/categories/${params.id}`)
        
      },
      {
        path:'/topics/:topicId',
        element:<PrivateRoutes><MiddleSideNav></MiddleSideNav></PrivateRoutes>,
        loader: ({params}) => fetch(`https://learning-server-site-hrshihab.vercel.app/topics/${params.topicId}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },{
        path:'/terms',
        element:<TermsAndConditions></TermsAndConditions>
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      }

    ]

}])