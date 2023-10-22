import { EyeIcon } from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import { mastersCards } from '../constants';

const MastersCard = ({}: any) => {
  let updatedCards = [...mastersCards];

  return (
    <>
      {updatedCards.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-col w-1/3 mx-2 justify-between bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 pt-5 shadow-default"
          >
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                <span>{item.icon}</span>
              </div>
              <h4 className="text-title-lg font-bold text-black">
                {item.count}
              </h4>
            </div>
            <div className="my-4 flex items-end justify-between">
              <span className="text-sm font-medium">{item.title}</span>
            </div>
            <AButton
              label={'View all'}
              variant={'secondary'}
              action={() => {}}
              icon={<EyeIcon className="h-5 w-5" />}
            />
          </div>
        );
      })}
    </>
  );
};

export default MastersCard;
