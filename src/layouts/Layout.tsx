import { Outlet, NavLink } from "react-router-dom";
import { FiHome, FiBookOpen } from "react-icons/fi";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <main className="content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" className="nav-item">
          <FiHome size={18} />
          <span>Workout</span>
        </NavLink>

        <NavLink to="/tips" className="nav-item">
          <FiBookOpen size={18} />
          <span>Tips</span>
        </NavLink>
      </nav>
    </div>
  );
}
