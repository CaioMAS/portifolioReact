import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import PagProject from './components/PagProject'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>

  },
  {
    path: "/project",
    element: <PagProject/>

  }

])

router.subscribe(({pathname}) => {
  if (pathname !== window.location.pathname) {
    window.scrollTo(0, 0);
  }
})


import './styles/main.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
