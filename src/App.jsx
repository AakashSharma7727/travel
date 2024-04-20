import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BestPlace from './pages/BestPlace';
import About from './pages/About';

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
      }
    ]
  )

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
