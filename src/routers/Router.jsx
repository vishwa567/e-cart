import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/layout/home/Home';
import Login from '../components/navigation/auth/Login';
import Register from '../components/navigation/auth/Register';
import ProductDetail from '../components/layout/product/ProductDetail';

export let myRouter = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/productDetail/:id",
            element: <ProductDetail />
        }
    ]
}])