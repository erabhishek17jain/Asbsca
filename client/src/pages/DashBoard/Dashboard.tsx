import { useSelector } from 'react-redux';
import ReportStatusPie from '../../components-shared/ReportStatusPieChart.tsx';
import TopPerformers from '../../components-shared/TopPerformers.tsx';
import StatsCard from '../../components-shared/StatsCard.tsx';
import AButton from '../../components-global/AButton.tsx';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import ATable from '../../components-global/ATable.tsx';
import { calander, casesTypes } from '../../constants/index.tsx';
import { fetchCasesAnalyticsAsync } from '../../slices/casesSlice.tsx';
import { useEffect, useState } from 'react';
import store from '../../store/store.tsx';
import moment from 'moment';
import CasesBody from '../Cases/CasesBody.tsx';
import { Typography } from '@material-tailwind/react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { analytics } = useSelector((state: any) => state.cases);
  const { userDetails } = useSelector((state: any) => state.users);
  const [filterBy, setFilterBy] = useState(30);
  const [topAssignedCases, setTopAssignedCases] = useState<any>([]);
  const [topPerfomers, setTopPerfomers] = useState<any>([]);
  const [tableRaw, setTableRaw] = useState<any>({});

  const filterByDays = (e: any) => {
    setFilterBy(e.target.value);
  };

  useEffect(() => {
    const payload = {
      startDate: moment(new Date()).format('YYYY-MM-DD'),
      endDate: moment(new Date()).subtract(filterBy, 'd').format('YYYY-MM-DD'),
    };
    store.dispatch(fetchCasesAnalyticsAsync(payload));
  }, [filterBy]);

  useEffect(() => {
    if (analytics?.topFiveCases?.length) {
      setTopAssignedCases([...analytics.topFiveCases]);
    }
    if (analytics?.productiveUsers?.length) {
      setTopPerfomers([...analytics.productiveUsers]);
    }
    const raw = casesTypes.find((item: any) => item.id === 'assigned');
    setTableRaw({ ...raw });
  }, [analytics]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-4/12">
          <div className="relative inline-block">
            <select
              id="filter"
              name="filter"
              value={filterBy}
              onChange={filterByDays}
              className="relative w-auto appearance-none bg-transparent py-1 pl-3 pr-8 text-base font-medium outline-none"
            >
              {calander.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-2 -translate-y-1/2">
              <ChevronDownIcon className="h-5 w-5 stroke-main stroke-1" />
            </span>
          </div>
        </div>
        <div className="w-8/12 flex gap-3">
          {userDetails?.role?.name === 'admin' && (
            <div className="flex gap-2 w-full flex-col">
              <div className="flex justify-end gap-3">
                <AButton
                  variant={'secondary'}
                  label={'Bulk Upload'}
                  action={() => navigate('/bulkUpload')}
                  icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
                />
                <AButton
                  variant={'primary'}
                  label={'Add Case'}
                  action={() => {
                    navigate('/addCase');
                  }}
                  icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 sm:flex-row flex-col">
        <div className="w-full sm:1/2 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <StatsCard />
        </div>
        <div className="w-full sm:1/2 ">
          <ReportStatusPie />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {topAssignedCases.length > 0 && (
          <>
            <Typography variant="h5" color="blue-gray" className="px-4">
              Top Assigned Cases
            </Typography>
            <div
              className={
                userDetails?.role?.name === 'admin'
                  ? 'col-span-12 xl:col-span-8'
                  : 'col-span-12 xl:col-span-12'
              }
            >
              <ATable
                data={topAssignedCases}
                tableHeader={tableRaw?.header}
                tableBody={
                  <CasesBody
                    status={'assigned'}
                    allcases={topAssignedCases}
                    role={userDetails?.role?.name}
                  />
                }
              />
            </div>
          </>
        )}
        {userDetails?.role?.name === 'admin' && topPerfomers.length > 0 && (
          <TopPerformers topPerfomers={topPerfomers} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
