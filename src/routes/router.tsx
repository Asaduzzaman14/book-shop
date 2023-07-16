import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AllBooks from "../pages/AllBooks";
import SignUp from "../pages/SignUp";
import AddNewBook from "../pages/AddNewBook";
import BookDetails from "../pages/BookDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,

            },
            {
                path: '/sign-up',
                element: <SignUp />,
            },
            {
                path: "/all-books",
                element: <AllBooks />
            },
            {
                path: "/book-details/:id",
                element: <BookDetails />
            },
            {
                path: "/add-new-book",
                element: <AddNewBook />
            }
        ],
    },

    // {
    //     path: '/signup',
    //     element: <Signup />,
    // },
    {
        path: '*',
        element: <NotFound />,
    },
]);
export default routes;