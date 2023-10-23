import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/logo-dark.png';
import ADropdownUser from '../components-global/ADropdownUser';
import ADropdownNotification from '../components-global/ADropdownNotification';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = ({ sidebarOpen, setSidebarOpen }: any) => {
  return (
    <header className="sticky top-0 z-10 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-10 block rounded-sm border border-stroke bg-white p-1 shadow-sm lg:hidden"
          >
            <span className="relative block h-7 w-7 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                {sidebarOpen ? (
                  <XMarkIcon
                    className={
                      'delay-400 absolute top-0 left-0 block duration-200 ease-in-out'
                    }
                  />
                ) : (
                  <Bars3Icon
                    className={
                      'delay-400 absolute top-0 left-0 block duration-200 ease-in-out'
                    }
                  />
                )}
              </span>
            </span>
          </button>

          <Link className="block flex-shrink-0 w-14 lg:hidden" to="/">
            <img className="" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block"></div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <ADropdownNotification />
          </ul>
          <ADropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
