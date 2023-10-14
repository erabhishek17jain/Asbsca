import { Link } from 'react-router-dom';
import UserOne from '../assets/images/logo/logo-dark.png';

const TopPerformers = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Top Performers{' '}
        <span className="font-normal text-sm">(last 30 days)</span>
      </h4>

      <div>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserOne} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Devid Heilo
              </h5>
              <p>
                <span className="text-sm">Last report timing </span>
                <span className="text-xs"> . 5:54 PM</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#02385e]">
              <span className="text-sm font-medium text-white">3</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopPerformers;
