import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import Menu from './components/menu/Menu';
import routes from './config/routes'
import AuthRoute from './components/authRoute/AuthRoute';
import { useSelector } from 'react-redux';


initializeApp(config.firebaseConfig);


const App = () => {
  const user = useSelector<any>(state => state.userAuth)


  return (
    <div className='container-fluid p-0'>
      <header>
        {user ? <Menu /> : null}
      </header>
      <Routes>
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            element={(route.protected ? (
              <>
                <AuthRoute>
                  <route.element />
                </AuthRoute>
              </>
            ) :
              <route.element />)}
          />)}
      </Routes>
    </div>
  );
};

export default App;