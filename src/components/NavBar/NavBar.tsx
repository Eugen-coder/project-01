import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/registration"> Sing Up </Link>
        <Link to="/gender-predictor"> Gender Response </Link>
        <Link to="/age-predictor"> Age predictor </Link>
        <Link to="/counter"> Counter </Link>
      </nav>
    </>
  );
}
