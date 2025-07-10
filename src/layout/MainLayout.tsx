import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <a href="http://instagram">Instagram</a>
      </footer>
    </>
  );
}
