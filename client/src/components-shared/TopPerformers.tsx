import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const TopPerformers = () => {
  const { users } = useSelector((state: any) => state.users);
  return (
    <div className="col-span-12 rounded-xl bg-clip-border shadow-lg py-6 bg-white xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black">
        Top Performers{' '}
        <span className="font-normal text-sm">(last 30 days)</span>
      </h4>
      {users?.map((user: any) => (
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-grey"
        >
          <div className="relative h-14 w-14 rounded-full">
            {user?.profile ? (
              <img src={user?.profile} className="rounded-full" alt="User" />
            ) : (
              <UserCircleIcon className="w-40 h-40" />
            )}
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black">Devid Heilo</h5>
              <p>
                <span className="text-sm">Last report timing </span>
                <span className="text-xs"> . 5:54 PM</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main">
              <span className="text-sm font-medium text-white">3</span>
            </div>
          </div>
        </Link>
      ))}
      <Link
        to="/"
        className="flex items-center gap-5 py-3 px-7.5 hover:bg-grey"
      >
        <div className="relative h-14 w-14 rounded-full">
          <UserCircleIcon className="w-40 h-40" />
          <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta3"></span>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div>
            <h5 className="font-medium text-black">Devid Heilo</h5>
            <p>
              <span className="text-sm">Last report timing </span>
              <span className="text-xs"> . 5:54 PM</span>
            </p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main">
            <span className="text-sm font-medium text-white">3</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopPerformers;
