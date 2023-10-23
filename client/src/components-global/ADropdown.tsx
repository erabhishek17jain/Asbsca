import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  ShareIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const ADropdown = () => {
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

  return (
    <div className="relative w-auto">
      <Link
        to="#"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-center items-center gap-1 rounded-lg p-2 font-medium px-4 border border-main text-main hover:bg-grey"
      >
        <span className="text-right">
          <span className="flex gap-1 text-sm font-medium text-black">
            <ShareIcon className="h-4 w-4" />
            <span>Export</span>
          </span>
        </span>
        <ChevronDownIcon
          className={`h-4 w-4 fill-current stroke-main stroke-1 sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute top-6 right-0 mt-4 flex flex-col w-50 bg-clip-border rounded-lg bg-white text-grey-700 shadow-lg ${
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
      </div>
    </div>
  );
};

export default ADropdown;
