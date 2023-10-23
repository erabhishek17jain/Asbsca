import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { statsCards } from '../constants';
import AButton from '../components-global/AButton';
import { Link } from 'react-router-dom';

const StatsCard = ({ role }: any) => {
  let updatedCards = [];
  if (role !== 'admin') {
    updatedCards = statsCards.filter(
      (item: any) => item.title !== 'Total Users',
    );
  } else {
    updatedCards = [...statsCards];
  }

  return (
    <>
      {updatedCards.map((item) => {
        return (
          <div className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5 shadow-default">
            <Link to={item.path} key={item.title}>
              <div className="flex justify-between">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                  <span>{item.icon}</span>
                </div>
                <h4 className="text-title-lg font-bold text-black">
                  {item.count}
                </h4>
              </div>
              <div className="my-4 flex items-end justify-between">
                <div>
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              </div>
            </Link>
            <AButton
              label={'Download'}
              variant={'secondary'}
              action={() => {}}
              icon={<ArrowDownTrayIcon className="h-5 w-5" />}
            />
          </div>
        );
      })}
    </>
  );
};

export default StatsCard;
