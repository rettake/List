import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import PostPage from './pages/post-page';
import { Routes } from './utils/routes';
import AddUser from './pages/add-user';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />
  },
  {
    path: Routes.postPage,
    element: <PostPage />
  },
  {
    path: Routes.addUser,
    element: <AddUser />
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
