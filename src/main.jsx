import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './error-page'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <App />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> 
)
