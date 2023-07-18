import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail" className="main">
        <Outlet />
      </div>
    </>
  );
}
