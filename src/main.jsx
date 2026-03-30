import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routers/Router';
import AuthContext from './contexts/AuthContext';
import './index.css';
import ItemContext from './contexts/ItemContext';

createRoot(document.getElementById("root")).render(
    <AuthContext>
        <ItemContext>
            <RouterProvider router={myRouter} />
        </ItemContext>
    </AuthContext>
);