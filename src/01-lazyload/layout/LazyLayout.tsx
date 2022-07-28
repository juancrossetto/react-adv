import * as React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage2, LazyPage3 } from '../pages';
import LazyPage1 from '../pages/LazyPage1';

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>
      {/* Rutas hijas iran aquí */}

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<LazyPage1 />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
