import {
  DocumentMagnifyingGlassIcon,
  PaperAirplaneIcon,
  Square3Stack3DIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StatsCard = () => {
  const { analytics } = useSelector((state: any) => state.cases);

  const statsData = [
    {
      count: analytics?.cases,
      path: '/cases',
      title: 'All Cases Recieved',
      icon: <Square3Stack3DIcon className="h-5 w-5" />,
    },
    {
      count: analytics?.assignedCases,
      path: '/assigned',
      title: 'Assigned Cases',
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      count: analytics?.reviewedCases,
      path: '/review',
      title: 'Reviewing Cases',
      icon: <DocumentMagnifyingGlassIcon className="h-5 w-5" />,
    },
    {
      count: analytics?.sentToBank,
      path: '/sentToBank',
      title: 'Send to Bank',
      icon: <PaperAirplaneIcon className="h-5 w-5" />,
    },
  ];
  return (
    analytics &&
    statsData.map((item: any) => (
      <div
        className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 shadow-default"
        key={item?.path}
      >
        <div className="flex justify-between">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
            {item?.icon}
          </div>
          <h4 className="text-title-lg font-bold text-black">{item?.count}</h4>
        </div>
        <div className="my-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">{item?.title}</span>
          </div>
        </div>
        <Link to={item?.path} className='flex flex-col'>
          <AButton label={'View all'} variant={'secondary'} />
        </Link>
      </div>
    ))
  );
};

export default StatsCard;
