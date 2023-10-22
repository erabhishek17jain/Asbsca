import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ALoader from './components-global/ALoader';
import routes from './routes';
import Hero from './pages/Hero';
import { useDispatch } from 'react-redux';
import { getUsername } from './helper/helper';
import { fetchCurrentUserAsync } from './slices/usersSlice';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUsername()
        .then((response:any) => {
          dispatch(fetchCurrentUserAsync(response?.username));
        })
        .catch(() => {
          navigate('/auth/signin');
        });
    } else{
      navigate('/auth/signin');
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
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
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

      {/* <ACheckbox name={'checkbox'} label={'CheckBox Text'} />
      <ASwitcher name={'switch'} label={'Switch Text'} />
      <AInputField type={'text'} name={'inputName'} label={'Input Text'} />
      <ASingleSelect
        name={'select'}
        label={'Country'}
        options={[
          { label: 'India', value: 'india' },
          { label: 'USA', value: 'usa' },
        ]}
      />
      <AMultiSelect
        name={'select'}
        label={'Country'}
        selected={[{ label: 'India', value: 'india' }]}
        options={[
          { label: 'India', value: 'india' },
          { label: 'USA', value: 'usa' },
          { label: 'UK', value: 'uk' },
        ]}
      />
      <AFileUpload type={'file'} name={'fileUpload'} label={'File Text'} />
      <ADatePicker type={'date'} name={'datePicker'} label={'Date Text'} />
      <ATextField name={'textarea'} label={'Text area Text'} />
      <AFileDragAndUpload
        type={'date'}
        name={'datePicker'}
        label={'Date Text'}
      /> */}
    </>
  );
}

export default App;
