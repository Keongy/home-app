import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import Menu from './components/menu/Menu';
import routes from './config/routes'
import AuthRoute from './components/authRoute/AuthRoute';
import { useEffect } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database';
import { initState } from './redux/redux';
import { useDispatch } from 'react-redux';


initializeApp(config.firebaseConfig);


const App = () => {
  const dbRef = ref(getDatabase());
  const dispatch = useDispatch()

  useEffect(() => {
    get(child(dbRef, 'homeApp/listeCourse')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('DATA', snapshot.val());
        dispatch(initState(snapshot.val()))
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])


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