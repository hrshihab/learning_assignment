import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../layout/Main";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";
import MiddleSideNav from "../../Pages/Shared/MiddleSideNav/MiddleSideNav";

export const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/categories/:id',
        element:<LeftSideNav></LeftSideNav>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        
      },
      {
        path:'/topics/:topicId',
        element:<MiddleSideNav></MiddleSideNav>,
        loader: ({params}) => fetch(`http://localhost:5000/topics/${params.topicId}`)
      }

    ]

}])