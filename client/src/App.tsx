import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/SignIn/SignIn';
import ALoader from './components-global/ALoader';
import routes from './routes';
import Hero from './pages/Hero/Hero';
import DefaultLayout from './layout/DefaultLayout';
import {getFirebaseToken, onMessageListener} from "./firebase"

function App() {
  const navigate = useNavigate();

  const cookies: any = document.cookie;

  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  const [show, setShow] = useState(false);

  getFirebaseToken(setTokenFound);

  onMessageListener().then((payload: any) => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  useEffect(() => {
    if (cookies === '') {
      navigate('/signin');
    }
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route index element={<Hero />} />
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<ALoader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
