import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserOne from '../assets/images/logo/logo-dark.png';
import { useSelector } from 'react-redux';
import { ArrowLeftOnRectangleIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/solid';

const ADropdownUser = () => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.users);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  function userLogout() {
    localStorage.removeItem('token');
    navigate('/auth/signin');
  }

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            {userDetails?.fullname}
          </span>
          <span className="block text-xs">{userDetails?.email}</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img
            src={userDetails?.profile || UserOne}
            className="rounded-full"
            alt="User"
          />
        </span>
        <ChevronDownIcon
          className={`hidden h-5 w-5 fill-current sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute top-13 right-0 mt-4 flex flex-col w-50 bg-clip-border rounded-lg bg-white text-grey-700 shadow-lg ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-4">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-main lg:text-base"
            >
              <UserIcon className="h-5 w-5" />
              My Profile
            </Link>
          </li>
        </ul>
        <button
          onClick={userLogout}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-main lg:text-base"
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default ADropdownUser;
