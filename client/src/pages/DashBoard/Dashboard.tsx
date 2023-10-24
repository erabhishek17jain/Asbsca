import { useSelector } from 'react-redux';
import ReportStatusPie from '../../components-shared/ReportStatusPieChart.tsx';
import TopPerformers from '../../components-shared/TopPerformers.tsx';
import StatsCard from '../../components-shared/StatsCard.tsx';
import ASingleSelect from "../../components-global/ASingleSelect.tsx"
import AButton from '../../components-global/AButton.tsx';
import { useNavigate } from 'react-router-dom';
import { CalendarDaysIcon, PlusIcon } from '@heroicons/react/24/solid';
import ATable from '../../components-global/ATable.tsx';
import { ASSIGNED_CASES_TABLE_HEAD, calander } from '../../constants/index.tsx';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody.tsx';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader.tsx';

const Dashboard = () => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.users);
  
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <ASingleSelect
            label="Filter"
            name={'calender'}
            icon={<CalendarDaysIcon className="h-4 w-4" />}
            options={calander}
          />
        </div>
        <div className="flex items-end gap-3 mb-5">
          <div>
            <AButton
              variant={'secondary'}
              label={'Bulk Upload'}
              action={() => navigate('/bulkUpload')}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
          </div>
          <div>
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
      </div>
      <div className="flex gap-6 sm:flex-row flex-col">
        <div className="w-full sm:1/2 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <StatsCard role={userDetails?.role} />
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
            tableBody={<AssignedCasesBody />}
            tableHeader={ASSIGNED_CASES_TABLE_HEAD}
            header={<AssignedCasesHeader />}
          />
        </div>

        {userDetails?.role === 'admin' && <TopPerformers />}
      </div>
    </>
  );
};

export default Dashboard;
