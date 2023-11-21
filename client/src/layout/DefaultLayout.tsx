import { useEffect, useState } from 'react';
import Header from '../components-shared/Header';
import Sidebar from '../components-shared/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchUserAsync } from '../slices/usersSlice';
import store from '../store/store';
import { setToken } from '../services';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token: any = document.cookie?.replace('token=', '');

  useEffect(() => {
    if (token !== '') {
      setToken(token);
      store.dispatch(fetchUserAsync(''));
    } else {
      navigate('/signin');
    }
  }, []);

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
