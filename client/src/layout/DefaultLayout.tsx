import { useEffect, useState } from 'react';
import Header from '../components-shared/Header';
import Sidebar from '../components-shared/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUserAsync } from '../slices/usersSlice';
import store from '../store/store';
import { setToken } from '../services';

const DefaultLayout = ({ cookies, setCookies }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const { userDetails, error } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (cookies?.token !== '') {
      setToken(cookies.token);
    }
    if (userDetails && error) {
      navigate('/dashboard');
    } else if (error === 'Rejected') {
      setCookies('token', '');
      setCookies('userId', '');
      navigate('/signin');
    }
  }, [userDetails, error]);

  useEffect(() => {
    store.dispatch(fetchUserAsync(''));
  }, []);

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header
            sidebarOpen={sidebarOpen}
            setCookies={setCookies}
            cookies={cookies}
            setSidebarOpen={setSidebarOpen}
          />
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
