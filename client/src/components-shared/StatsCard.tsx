import { statsCards } from '../constants';

const StatsCard = ({ role }: any) => {

  let updatedCards = []
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
            <button className="bg-gray-300 hover:text-gray-900 text-gray-500 font-bold py-1 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download</span>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default StatsCard;
