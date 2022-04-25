import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import Menu from './components/menu/Menu';
import routes from './config/routes'
import AuthRoute from './components/authRoute/AuthRoute';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Items } from './interfaces/interface';

initializeApp(config.firebaseConfig);


const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>

      <Routes>
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            element={(route.protected ? <AuthRoute><route.element /></AuthRoute> : <route.element />)}
          />)}
      </Routes>

    </>
  );
};

export default App;