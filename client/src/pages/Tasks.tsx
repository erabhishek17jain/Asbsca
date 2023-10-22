import ABreadcrumb from '../components-global/ABreadcrumb';
import TasksTable from '../components-shared/TasksTable';

const Cases = () => {
  return (
    <>
      <ABreadcrumb pageName="Cases" />
      <div className="flex flex-col gap-10">
        <TasksTable />
      </div>
    </>
  );
};

export default Cases;
