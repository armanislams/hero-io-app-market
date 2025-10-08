import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../components/Home/Home';
import Error from '../pages/Error/Error';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    
    children:[
      {
        index: true,
        loader:() => fetch('/apps.json'),
          Component: Home
      },
      {
        path: 'apps',
        loader: () => fetch('/apps.json'),
        Component: Apps
      },
      {
        path: 'appDetails/:id',
        loader:() => fetch('/apps.json'),
        Component: AppDetails
      },
      {
        path: '*', Component: Error
      }
    ]
  },
]);