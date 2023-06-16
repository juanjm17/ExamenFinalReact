import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Error from "./components/error/Error";
import Nav from "./components/nav/Nav";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import UserInfo from "./components/user/UserInfo";
import Products from "./components/products/Products"
import CardProduct from "./components/cardproduct/CardProduct";
import EditProduct from "./components/editproduct/EditProduct";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },

  {
    path: "/login",
    element: <Login />,
  },

  
  {
    path: "/productos",
    element: <Products />
  },

  {
    path: "/user",
    element: <UserInfo />,
  },

  {
    path:"/products/:idProducto",
    element: <EditProduct />,
  },


  {
    path: "*",
    element: <Error />,
  },

]);

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <RouterProvider router={router} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
