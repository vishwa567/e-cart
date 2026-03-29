import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routers/Router';
import './index.css';

createRoot(document.getElementById("root")).render(
    <RouterProvider router={myRouter} />
);