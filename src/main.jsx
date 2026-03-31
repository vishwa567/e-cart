import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routers/Router';
import AuthContext from './contexts/AuthContext';
import './index.css';
import ItemContext from './contexts/ItemContext';
import CartContext from './contexts/CartContext';

createRoot(document.getElementById("root")).render(
    <AuthContext>
        <ItemContext>
            <CartContext>
                <RouterProvider router={myRouter} />
            </CartContext>
        </ItemContext>
    </AuthContext>
);