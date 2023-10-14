import ABreadcrumb from '../components-global/ABreadcrumb';
import { UsersTable } from '../components-shared/UsersTable';

const Users = () => {
  return (
    <>
      <ABreadcrumb pageName="Members" />
      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
    </>
  );
};

export default Users;
