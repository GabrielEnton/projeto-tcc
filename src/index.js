import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Text from './page/Text';
import Img from './page/Img';
import Code from './page/Code';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Text />
      },
      {
        path: '/imagem',
        element: < Img />
      },
      {
        path: '/codigo',
        element: <Code/>
      }
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);