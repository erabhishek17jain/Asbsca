import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const TopPerformers = ({ topPerfomers }: any) => {
  return (
    <div className="col-span-12 rounded-xl bg-clip-border shadow-lg py-6 bg-white xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-main">
        Top Performers of the Month
      </h4>
      {topPerfomers?.map((user: any) => (
        <Link
          to="/"
          key={user?.fullName}
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-grey"
        >
          <div className="relative h-14 w-14 rounded-full">
            {user?.profile ? (
              <img src={user?.profile} className="rounded-full" alt="User" />
            ) : (
              <UserCircleIcon className="w-15 h-15" />
            )}
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-main">{user?.fullName}</h5>
              <p>
                <span className="text-sm">{user?.email}</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main">
              <span className="text-sm font-medium text-white">
                {user?.completedCases}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopPerformers;
