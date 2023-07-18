import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import SuperHeroes from "./routes/superheroes";
import Home from "./routes/home";
import RqSuperheroes from "./routes/rq-superheroes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Heroes from "./routes/heroID";
import RqParallel from "./routes/rq-parallel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "superheroes",
        element: <SuperHeroes />,
      },
      {
        path: "rq-parallel",
        element: <RqParallel arrayIds={[1, 2, 3]} />,
      },
      {
        path: "rq-superheroes",
        element: <RqSuperheroes />,
      },
      {
        path: "rq-superheroes/:heroID",
        element: <Heroes />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
