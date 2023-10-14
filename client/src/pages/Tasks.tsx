import ABreadcrumb from '../components-global/ABreadcrumb';
import TasksTable from '../components-shared/TasksTable';

const Tasks = () => {
  return (
    <>
      <ABreadcrumb pageName="Tasks" />
      <div className="flex flex-col gap-10">
        <TasksTable />
      </div>
    </>
  );
};

export default Tasks;
