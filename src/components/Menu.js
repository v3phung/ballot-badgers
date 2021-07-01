import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/register-voter">Register Voter</Link>
        </li>
        <li className="menu-item">
          <Link to="/voters">Voters</Link>
        </li>
        <li className="menu-item">
          <Link to="/add-election">Add Election</Link>
        </li>
        <li className="menu-item">
          <Link to="/elections">Elections</Link>
        </li>
      </ul>
    </nav>
  );
};
