import { useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import {
  CheckIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  IdentificationIcon,
  KeyIcon,
  MapPinIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { AModal } from '../../components-global/AModal';
import AInputField from '../../components-global/AInputField';
import ATable from '../../components-global/ATable';
import { USER_TABLE_HEAD } from '../../constants';
import UsersBody from './UsersBody';
import UsersHeader from './UsersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';

const Users = () => {
  const [showModalRole, setShowModalRole] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

  return (
    <>
      <ABreadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <ATable
          header={
            <UsersHeader
              openRoleModal={() => setShowModalRole(true)}
              openUserModal={() => setShowModalUser(true)}
            />
          }
          tableBody={<UsersBody />}
          tableHeader={USER_TABLE_HEAD}
        />
      </div>
      {showModalRole && (
        <AModal title={'Add Role'} closeModal={() => setShowModalRole(false)}>
          <div className="flex flex-col ">
            <AInputField
              type="text"
              label="Role Name*"
              icon={<UsersIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Page Access*"
              icon={<KeyIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'select'}
              label={'Status'}
              icon={<CheckIcon className="h-4 w-4" />}
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
              ]}
            />
          </div>
        </AModal>
      )}
      {showModalUser && (
        <AModal title={'Add User'} closeModal={() => setShowModalUser(false)}>
          <div className="flex flex-col ">
            <AInputField
              type="text"
              label="Name*"
              icon={<UserIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Emp ID*"
              icon={<IdentificationIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Email ID*"
              icon={<EnvelopeIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Mobile No.**"
              icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'location'}
              label={'Location*'}
              icon={<MapPinIcon className="h-4 w-4" />}
              options={[]}
            />
            <ASingleSelect
              name={'roles'}
              label={'Roles*'}
              icon={<UsersIcon className="h-4 w-4" />}
              options={[]}
            />
            <ASingleSelect
              name={'status'}
              label={'Status'}
              icon={<CheckIcon className="h-4 w-4" />}
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
              ]}
            />
          </div>
        </AModal>
      )}
    </>
  );
};

export default Users;
