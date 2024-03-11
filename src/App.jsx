import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//routes
import { PublicRoutes, AuthProtectedRoutes } from './routes';
import AuthMiddleware from './routes/route';


function App() {
  return (
    <React.Fragment>
      <Router>
      <Routes>
        {PublicRoutes.map((route, idx) => (
          <Route
            key = {idx}
            path = {route.path}
            element = {route.component}
          />
        ))}
        {AuthProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element = {
              <AuthMiddleware>
                 {route.component}
              </AuthMiddleware>
            }
           
          />
        ))}
      </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;
