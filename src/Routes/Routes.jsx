import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../components/Home/Home';
import Error from '../pages/Error/Error';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[
      {
        index: true, Component: Home
      }
    ]
  },
]);