import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-violet-500/20 px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-lg bg-base-200 rounded-box w-52 border border-violet-500/20"
          >
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
         <figure>
            <img src={Logo} alt="AppNest Logo" className="w-10 h-10" />
          </figure>
          <span className="font-syne font-extrabold text-xl text-base-content tracking-tight">AppNest</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/apps", label: "Apps" },
            { to: "/installation", label: "Installation" },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary bg-violet-500/10 rounded-lg"
                    : "text-base-content/70 hover:text-base-content hover:bg-violet-500/5 rounded-lg"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Contribute button */}
      <div className="navbar-end">
        <a
          
          className="btn btn-primary btn-sm gap-2 shadow-lg shadow-violet-500/30"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="hidden sm:inline">Contribute</span>
        </a>
      </div>
    </div>
  );
}
