import Breadcrumb from '../components/Breadcrumb';
import TasksTable from '../components/TasksTable';

const Tasks = () => {
  return (
    <>
      <Breadcrumb pageName="Tasks" />
      <div className="flex flex-col gap-10">
        <TasksTable />
      </div>
    </>
  );
};

export default Tasks;
