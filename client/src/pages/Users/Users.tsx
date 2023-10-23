import { useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import { UsersTable } from '../../components-shared/UsersTable';
import { PlusIcon } from '@heroicons/react/24/solid';
import { AModal } from '../../components-global/AModal';
import AInputField from '../../components-global/AInputField';

const Users = () => {
  const [showModalRole, setShowModalRole] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

  return (
    <>
      <ABreadcrumb pageName="Members" />
      <div className="flex justify-end items-center gap-3">
        <AButton
          variant={'secondary'}
          label={'Add Role'}
          action={() => setShowModalRole(true)}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
        <AButton
          variant={'primary'}
          label={'Add User'}
          action={() => setShowModalUser(true)}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
      </div>
      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
      {showModalRole && (
        <AModal title={'Task'} closeModal={() => setShowModalRole(false)}>
          <div className="flex flex-col ">
            <AInputField type="text" label="Role Name" variant="horizantal"/>
            <AInputField type="text" label="Page Access*" variant="horizantal" />
            <AInputField type="text" label="Status*" variant="horizantal" />
          </div>  
        </AModal>
      )}
      {showModalUser && (
        <AModal title={'Task'} closeModal={() => setShowModalUser(false)}>
          <div className="flex flex-col ">
            <AInputField type="text" label="Name*" variant="horizantal"/>
            <AInputField type="text" label="Emp ID*" variant="horizantal" />
            <AInputField type="text" label="Email ID*" variant="horizantal" />
            <AInputField type="text" label="Mobile No.**" variant="horizantal" />
            <AInputField type="text" label="Location*" variant="horizantal" />
            <AInputField type="text" label="Status*" variant="horizantal" />
          </div>  
        </AModal>
      )}
    </>
  );
};

export default Users;
