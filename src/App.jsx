import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BestPlace from './pages/BestPlace';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/blogs",
        element:<Blog/>
      },
      {
        path: "/best-places",
        element:<BestPlace/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/services",
        element:<Services/>
      },
      {
        path: "/contact",
        element:<Contact/>
      }
    ]
  )

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
