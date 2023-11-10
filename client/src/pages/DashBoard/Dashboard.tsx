import { useSelector } from 'react-redux';
import ReportStatusPie from '../../components-shared/ReportStatusPieChart.tsx';
import TopPerformers from '../../components-shared/TopPerformers.tsx';
import StatsCard from '../../components-shared/StatsCard.tsx';
import AButton from '../../components-global/AButton.tsx';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import ATable from '../../components-global/ATable.tsx';
import { ASSIGNED_CASES_TABLE_HEAD, calander } from '../../constants/index.tsx';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody.tsx';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader.tsx';
import { fetchCasesAnalyticsAsync } from '../../slices/casesSlice.tsx';
import { useEffect, useState } from 'react';
import store from '../../store/store.tsx';
import { fetchTopPerformersAsync } from '../../slices/usersSlice.tsx';

const Dashboard = ({ cookies }: any) => {
  const navigate = useNavigate();
  const { analytics } = useSelector((state: any) => state.cases);
  const { userDetails } = useSelector((state: any) => state.users);
  const [filterBy, setFilterBy] = useState('30days');
  const [topAssignedCases, setTopAssignedCases] = useState<any>([]);

  const filterByDays = (e: any) => {
    setFilterBy(e.target.value);
  };

  useEffect(() => {
    store.dispatch(fetchCasesAnalyticsAsync(filterBy));
  }, [filterBy]);

  useEffect(() => {
    if (analytics?.assigned?.length) {
      setTopAssignedCases([...analytics.assigned.slice(0, 5)]);
    }
  }, [analytics]);

  useEffect(() => {
    store.dispatch(fetchTopPerformersAsync());
  }, []);

  console.log(cookies);

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
          {userDetails?.role === 'admin' && (
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
        <div className="w-full sm:1/2 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <StatsCard />
        </div>
        <div className="w-full sm:1/2 ">
          <ReportStatusPie />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div
          className={
            userDetails?.role === 'admin'
              ? 'col-span-12 xl:col-span-8'
              : 'col-span-12 xl:col-span-12'
          }
        >
          <ATable
            data={topAssignedCases}
            header={<AssignedCasesHeader />}
            tableHeader={ASSIGNED_CASES_TABLE_HEAD}
            tableBody={<AssignedCasesBody assigned={topAssignedCases} />}
          />
        </div>
        {userDetails?.role === 'admin' && <TopPerformers />}
      </div>
    </>
  );
};

export default Dashboard;
