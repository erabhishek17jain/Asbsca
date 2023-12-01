import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const UserDropdown = () => {
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
    navigate('/signin');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-main">
            {userDetails?.fullName}
          </span>
          <span className="block text-xs">{userDetails?.email}</span>
        </span>
        {userDetails?.profile ? (
          <img src={userDetails?.profile} className="h-8 w-8 rounded-full" />
        ) : (
          <UserCircleIcon className="h-10 w-10 rounded-full" />
        )}
        <ChevronDownIcon
          className={`hidden h-4 w-4 fill-current stroke-main stroke-2 sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute top-12 right-0 flex flex-col w-50 border border-stroke bg-clip-border rounded-lg bg-white shadow-lg ${
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
    </div>
  );
};

export default UserDropdown;
