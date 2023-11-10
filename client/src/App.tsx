import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/SignIn/SignIn';
import ALoader from './components-global/ALoader';
import routes from './routes';
import Hero from './pages/Hero/Hero';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { CookiesProvider, useCookies } from 'react-cookie';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [cookies, setCookie] = useCookies(['user']);

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
          <Route element={<DefaultLayout cookies={cookies} />}>
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
