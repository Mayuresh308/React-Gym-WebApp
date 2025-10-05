import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Tips from "./pages/Tips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tips", element: <Tips /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
