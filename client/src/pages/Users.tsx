import Breadcrumb from '../components/Breadcrumb';
import { UsersTable } from '../components/UsersTable';

const Users = () => {
  return (
    <>
      <Breadcrumb pageName="Reporters" />
      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
    </>
  );
};

export default Users;
