import { useEffect, useLayoutEffect, useState } from 'react';
import Header from '../components-shared/Header';
import Sidebar from '../components-shared/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { setAsbdToken } from '../services';
import { useSelector } from 'react-redux';
import { onMessageListener, getFirebaseToken } from '../firebase';
import { fetchUserAsync } from '../slices/usersSlice';
import store from '../store/store';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userDetails } = useSelector((state: any) => state.users);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setAsbdTokenFound] = useState(false);
  const cookie: any = document.cookie;

  onMessageListener()
    .then((payload: any) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log('failed: ', err));

  useEffect(() => {
    onMessageListener();
  });

  useEffect(() => {
    if (userDetails && userDetails?.firebaseTokens[0] !== '') {
      if (!isTokenFound) {
        getFirebaseToken(setAsbdTokenFound);
      } else {
        setAsbdTokenFound(true);
      }
    }
  }, [userDetails]);

  useLayoutEffect(() => {
    if (cookie.includes('asbsToken')) {
      const asbsToken = cookie?.replace('asbsToken=', '');
      if (asbsToken !== '') {
        setAsbdToken(asbsToken);
        store.dispatch(fetchUserAsync(''));
      } else {
        navigate('/signin');
      }
    } else {
      navigate('/signin');
    }
  }, [cookie]);

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
