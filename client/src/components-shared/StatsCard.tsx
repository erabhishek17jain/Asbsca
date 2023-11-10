import {
  ArrowDownTrayIcon,
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

  return (
    analytics && (
      <>
        <div
          className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 shadow-default"
          key="cases"
        >
          <Link to="/cases" key="cases">
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                <Square3Stack3DIcon className="h-5 w-5" />
              </div>
              <h4 className="text-title-lg font-bold text-black">
                {analytics?.allcases?.length}
              </h4>
            </div>
            <div className="my-4 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium">All Cases Recieved</span>
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
        <div
          className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 shadow-default"
          key="assigned"
        >
          <Link to="/assigned" key="assigned">
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                <UserIcon className="h-5 w-5" />
              </div>
              <h4 className="text-title-lg font-bold text-black">
                {analytics?.assigned?.length}
              </h4>
            </div>
            <div className="my-4 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium">Assigned Cases</span>
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
        <div
          className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 shadow-default"
          key="review"
        >
          <Link to="/review" key="review">
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                <DocumentMagnifyingGlassIcon className="h-5 w-5" />
              </div>
              <h4 className="text-title-lg font-bold text-black">
                {analytics?.reviewed?.length}
              </h4>
            </div>
            <div className="my-4 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium">Reviewing Cases</span>
              </div>
            </div>
          </Link>
          <AButton
            label={'Download'}
            variant={'secondary'}
            action={() => {}}
            icon={<ArrowDownTrayIcon className="h-5 w-5 stroke-main" />}
          />
        </div>
        <div
          className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 shadow-default"
          key="reports"
        >
          <Link to="/reports" key="reports">
            <div className="flex justify-between">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta2">
                <PaperAirplaneIcon className="h-5 w-5" />
              </div>
              <h4 className="text-title-lg font-bold text-black">
                {analytics?.sentToBank?.length}
              </h4>
            </div>
            <div className="my-4 flex items-end justify-between">
              <div>
                <span className="text-sm font-medium">Sent To Bank</span>
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
      </>
    )
  );
};

export default StatsCard;
