import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/SignIn/SignIn';
import ALoader from './components-global/ALoader';
import routes from './routes';
import Hero from './pages/Hero/Hero';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { fetchUserAsync } from './slices/usersSlice';
import store from './store/store';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies<any>(['user']);
  const { userDetails, error } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (userDetails || error) {
      navigate('/dashboard');
    }
  }, [userDetails]);

  useEffect(() => {
    if (cookies?.userId && userDetails === null) {
      store.dispatch(fetchUserAsync());
    } else {
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
      <CookiesProvider>
        <Routes>
          <Route path="/signin" element={<SignIn setCookie={setCookie} />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
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
      </CookiesProvider>
    </>
  );
}

export default App;
