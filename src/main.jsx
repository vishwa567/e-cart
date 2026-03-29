import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routers/Router';
import AuthContext from './contexts/AuthContext';
import './index.css';

createRoot(document.getElementById("root")).render(
    <AuthContext>
        <RouterProvider router={myRouter} />
    </AuthContext>
);