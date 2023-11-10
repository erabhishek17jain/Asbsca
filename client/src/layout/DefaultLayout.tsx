import { useEffect, useState } from 'react';
import Header from '../components-shared/Header';
import Sidebar from '../components-shared/Sidebar';
import { Outlet } from 'react-router-dom';
import store from '../store/store';
import { fetchUserAsync } from '../slices/usersSlice';
import { useSelector } from 'react-redux';

const DefaultLayout = ({ cookies }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userDetails } = useSelector((state: any) => state.users);

  useEffect(() => {
    // uncomment
    // if (cookies?.user && userDetails === null) {
    //   store.dispatch(fetchUserAsync(cookies.user._id));
    // }

    // remove
    if (userDetails === null) {
      store.dispatch(fetchUserAsync('userid'));
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
