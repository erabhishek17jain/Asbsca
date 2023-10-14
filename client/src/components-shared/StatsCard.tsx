import { statsCards } from '../constants';

const StatsCard = ({ role }:any) => {
  
  let updatedCards = []
  if (role !== 'admin') {
    updatedCards = statsCards.filter(
      (item: any) => item.title !== 'Total Users',
    );
  } else{
    updatedCards = [...statsCards];
  }

  return (
    <>
      {updatedCards.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5 shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <span>{item.icon}</span>
              </div>
              <h4 className="text-title-lg font-bold text-black dark:text-white">
                {item.count}
              </h4>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StatsCard;
