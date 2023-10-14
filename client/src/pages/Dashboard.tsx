import { useSelector } from 'react-redux';
import ReportStatusPie from '../components-shared/ReportStatusPieChart.tsx';
import TopPerformers from '../components-shared/TopPerformers.tsx';
import TasksTable from '../components-shared/TasksTable.tsx';
import StatsCard from '../components-shared/StatsCard.tsx';

const Dashboard = () => {
  const { userDetails } = useSelector((state: any) => state.users);

  return (
    <>
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
          <TasksTable />
        </div>

        {userDetails?.role === 'admin' && <TopPerformers />}
      </div>
    </>
  );
};

export default Dashboard;
