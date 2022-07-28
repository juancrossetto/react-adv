import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')} end>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate replace to={routes[0].to} />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
