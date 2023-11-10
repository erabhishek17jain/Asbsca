import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.png';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import { pages } from '../constants';
import { useSelector } from 'react-redux';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const { userDetails } = useSelector((state: any) => state.users);
  const [sideBarPages, setSideBarPages] = useState<any>([...pages]);

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    if (userDetails && userDetails?.role !== 'admin') {
      const menu = pages.filter(
        (item) => !['cases', 'users', 'masters'].includes(item.value),
      );
      setSideBarPages(menu);
    }
  }, [userDetails]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white shadow-4 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${pathname.includes('masters') ? 'z-2' : 'z-30'}`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-4 lg:py-5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ArrowSmallLeftIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-5 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {sideBarPages.map((item: any) => (
                <li key={item.value}>
                  <NavLink
                    to={`/${item.value}`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-dark duration-300 ease-in-out hover:bg-grey ${
                      pathname.includes(item.value) && 'bg-grey'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
