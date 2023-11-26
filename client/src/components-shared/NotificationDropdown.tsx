import { BellAlertIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllNotificationsAsync } from '../slices/notificationsSlice';
import store from '../store/store';

const NotificationDropdown = () => {
  const { allNotifications } = useSelector((state: any) => state.notifications);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [defaultFilters] = useState<any>({
    page: 1,
    limit: 10,
  });

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

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    store.dispatch(fetchAllNotificationsAsync({ ...defaultFilters }));
  }, []);

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-grey hover:text-main"
      >
        <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta1 opacity-75"></span>
        </span>

        <BellAlertIcon className="h-5 w-5" />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute top-12 right-0 flex flex-col w-50 border border-stroke bg-clip-border rounded-lg bg-white text-grey-700 shadow-lg ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-body">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {allNotifications.length > 0 ? (
            allNotifications.map((item: any) => (
              <li>
                <div className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-grey">
                  <p className="text-sm">
                    <span className="text-main">{item?.title}</span>
                    {item?.body}
                  </p>
                  <p className="text-xs">{item?.createdAt}</p>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-grey">
                <p className="text-sm">
                  <span className="text-main">No notification found.</span>
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default NotificationDropdown;
