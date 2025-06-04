import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Details/Details';
import { addToCartList, addToWishList } from './Utilies/SaveToLS';
import TextChart from './Components/Statistics/TextChart';
import { ToastContainer } from 'react-toastify';


// Handle Mark Read
const handleAddToCart = (ID) => {
    addToCartList(ID);
}
// Handle Wish List
const addWithList = (ID) => {
    addToWishList(ID);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'product-details/:productid',
        loader: () => fetch('/gadgets.json'),
        element: <Details handleAddToCart={handleAddToCart} addWithList={addWithList}></Details>
      },
      {
        path: 'statistics',
        element: <TextChart></TextChart>
      },
      {
        path: 'dashboard',
        loader: () => fetch('/gadgets.json'),
        element: <Dashboard handleAddToCart={handleAddToCart}></Dashboard>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
