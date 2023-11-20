import { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/SignIn/SignIn';
import ALoader from './components-global/ALoader';
import routes from './routes';
import Hero from './pages/Hero/Hero';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import DefaultLayout from './layout/DefaultLayout';
import { setToken } from './services';

function App() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies<any>(['user']);
  const { userDetails } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (cookies?.token !== '' && userDetails === null) {
      setToken(cookies.token);
    } else {
      setToken('');
      navigate('/signin');
    }
  }, [cookies]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <CookiesProvider>
        <Routes>
          <Route
            path="/signin"
            element={<SignIn cookies={cookies} setCookies={setCookies} />}
          />
          <Route index element={<Hero />} />
          <Route
            element={
              <DefaultLayout cookies={cookies} setCookies={setCookies} />
            }
          >
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <>
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Suspense fallback={<ALoader />}>
                        <Component />
                      </Suspense>
                    }
                  />
                  <Route path="/resetPassword" element={<ResetPassword />} />
                </>
              );
            })}
          </Route>
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
