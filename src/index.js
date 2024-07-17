import { createRoot } from "react-dom/client";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "conctacts/:contactId",
                element: <Contact />
            }
        ]
    },
])

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById("app"))
root.render(<RouterProvider router={router} />)