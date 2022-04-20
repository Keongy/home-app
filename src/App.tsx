import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import Menu from './components/menu/Menu';
import routes from './config/routes'
import AuthRoute from './components/authRoute/AuthRoute';

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