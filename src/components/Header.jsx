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
          <span className="hidden sm:inline">Contribute</span>
        </a>
      </div>
    </div>
  );
}
