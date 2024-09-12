import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

export default function Navigation() {
  return (
      <RouterProvider router={router} />
  )
}
