import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Paths } from './paths';
import { ConfigProvider, theme } from 'antd';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import Register from './pages/register';
import './index.css';

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <h1>Main</h1>,
    },
    {
        path: Paths.login,
        element: <Login />,
    },
    {
        path: Paths.register,
        element: <Register />,
    },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ConfigProvider>
    </React.StrictMode>
);

reportWebVitals();
