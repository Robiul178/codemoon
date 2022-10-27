
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './componants/Courses';
import Home from './componants/Home';
import Login from './componants/Login';
import FAQ from './componants/FAQ';
import Register from './componants/Register';
import Main from './Layout/Main';
import PrivetRoute from './routes/PrivetRoute';
import Blog from './componants/Blog';
import ReadMore from './componants/ReadMore/ReadMore';
import CheckOut from './componants/ChechOut/CheckOut';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/courses/:id',
          element: <Courses></Courses>,
        },
        {
          path: '/checkout/:id',
          element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/readmore/:id',
          element: <ReadMore></ReadMore>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        }

      ]
    }

  ]);



  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
