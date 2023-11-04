import { useEffect, useState } from 'react';
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
import { USER_TABLE_HEAD, pages } from '../../constants';
import UsersBody from './UsersBody';
import UsersHeader from './UsersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { addRole, deleteUserById } from '../../services';
import store from '../../store/store';
import { fetchAllUsersAsync } from '../../slices/usersSlice';
import { fetchAllRolesAsync } from '../../slices/rolesSlice';
import { useSelector } from 'react-redux';

const Users = () => {
  const { allRoles } = useSelector((state: any) => state.roles);
  const [showAddRole, setShowAddRole] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState('');
  const [showAddEditUser, setShowAddEditUser] = useState(false);
  const [roleOptions, setRoleOptions] = useState([]);

  const initialValues = {
    name: '',
    status: '',
    pageAccess: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
    pageAccess: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addRolePromise = addRole(values);
    addRolePromise
      .then((res: any) => {
        console.log(res.data);
        closeRoleModal();
        toast.success(<b>Role addes successfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  const formikRole = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const closeRoleModal = () => {
    formikRole.resetForm();
    setShowAddRole(false);
  };

  const closeDeleteUserModal = () => {
    setShowDeleteUser(false);
  };

  const handleOpenDeleteModal = (id: string) => {
    setDeleteUserId(id);
    setShowDeleteUser(true);
  };

  const deleteUser = (id: any) => {
    let deleteUserPromise = deleteUserById(id);
    deleteUserPromise
      .then((res: any) => {
        console.log(res.data);
        closeDeleteUserModal();
        store.dispatch(fetchAllUsersAsync());
        toast.success(<b>User Deleted successfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };
  useEffect(() => {
    if (allRoles.length > 0) {
      const roleOptions: any = [];
      allRoles.map((item: any) => {
        roleOptions.push({ label: item.name, value: item.name });
      });
      setRoleOptions(roleOptions);
    }
  }, [allRoles]);

  useEffect(() => {
    store.dispatch(fetchAllRolesAsync());
    store.dispatch(fetchAllUsersAsync());
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <ATable
          header={
            <UsersHeader
              openRoleModal={() => setShowAddRole(true)}
              openUserModal={() => setShowAddEditUser(true)}
            />
          }
          tableBody={
            <UsersBody
              openUserDeleteModal={handleOpenDeleteModal}
              openUserAddEditModal={() => setShowAddEditUser(true)}
            />
          }
          tableHeader={USER_TABLE_HEAD}
        />
      </div>
      {showAddRole && (
        <AModal
          saveText={'Add'}
          title={'Add Role'}
          onSave={formikRole.handleSubmit}
          closeModal={closeRoleModal}
        >
          <div className="flex flex-col ">
            <AInputField
              id="name"
              type="text"
              label="Role Name*"
              error={formikRole.errors.name}
              formik={formikRole.getFieldProps('name')}
              icon={<UsersIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              error={formikRole.errors.status}
              formik={formikRole.getFieldProps('status')}
              icon={<CheckIcon className="h-4 w-4" />}
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
              ]}
            />
            {/* <AMultiSelect
              id="pageAccess"
              label={'Page Access'}
              options={pages}
              error={formikRole.errors.pageAccess}
              selected={formikRole.values.pageAccess}
              icon={<KeyIcon className="h-4 w-4" />}
              {...formikRole.getFieldProps('pageAccess')}
            /> */}
            <ASingleSelect
              id="pageAccess"
              label={'Page Access'}
              options={pages}
              error={formikRole.errors.pageAccess}
              icon={<KeyIcon className="h-4 w-4" />}
              formik={formikRole.getFieldProps('pageAccess')}
            />
          </div>
        </AModal>
      )}
      {showAddEditUser && (
        <AModal title={'Add User'} closeModal={() => setShowAddEditUser(false)}>
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
              options={roleOptions}
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
      {showDeleteUser && (
        <AModal
          saveText={'Delete'}
          title={'Delete User'}
          onSave={() => deleteUser(deleteUserId)}
          closeModal={closeDeleteUserModal}
        >
          <div className="flex flex-col ">
            Are you sure want to delete thi user?
          </div>
        </AModal>
      )}
    </>
  );
};

export default Users;
