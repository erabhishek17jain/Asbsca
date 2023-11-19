import { useEffect, useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import {
  CheckIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapPinIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { AModal } from '../../components-global/AModal';
import AInputField from '../../components-global/AInputField';
import ATable from '../../components-global/ATable';
import {
  USER_TABLE_HEAD,
  branchsList,
  rolesList,
  statusList,
} from '../../constants';
import UsersBody from './UsersBody';
import UsersHeader from './UsersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { addRole, addUser, deleteUserById } from '../../services';
import store from '../../store/store';
import { fetchAllUsersAsync } from '../../slices/usersSlice';
import { fetchAllRolesAsync } from '../../slices/rolesSlice';
import { useSelector } from 'react-redux';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import AFileUpload from '../../components-global/AFileUpload';

const Users = () => {
  const { allRoles } = useSelector((state: any) => state.roles);
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allUsers } = useSelector((state: any) => state.users);
  const [showAddRole, setShowAddRole] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showAddEditUser, setShowAddEditUser] = useState(false);
  const [roleOptions, setRoleOptions] = useState<any>([]);
  const [branchOptions, setBranchOptions] = useState<any>([]);

  const initialValuesRole = {
    name: '',
    permissions: [],
    status: '',
  };

  const validationSchemaRole = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunctionRole = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmitRole = async (values: any) => {
    values = await Object.assign(values);
    let addRolePromise = addRole(values);
    addRolePromise
      .then((res: any) => {
        console.log(res.data);
        closeRoleModal();
        formikRole.resetForm();
        store.dispatch(fetchAllRolesAsync(''));
        toast.success(<b>Role added sucessfully.</b>);
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikRole = useFormik({
    initialValues: initialValuesRole,
    validate: validateFunctionRole,
    validationSchema: validationSchemaRole,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmitRole,
  });

  const initialValuesUser = {
    fullName: '',
    username: '',
    password: 'admin@123',
    email: '',
    mobile: 0,
    address: '',
    role: '',
    status: '',
    profile: '',
    about: '',
  };

  const validationSchemaUser = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    username: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
    email: Yup.string().required('This field is required'),
    mobile: Yup.number().required('This field is required'),
    address: Yup.string().required('This field is required'),
    role: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunctionUser = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmitUser = async (values: any) => {
    values = await Object.assign(values);
    let addUserPromise = addUser(values);
    addUserPromise
      .then((res: any) => {
        console.log(res.data);
        closeUserModal();
        formikUser.resetForm();
        store.dispatch(fetchAllUsersAsync(''));
        toast.success(<b>User added sucessfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikUser = useFormik({
    initialValues: initialValuesUser,
    validate: validateFunctionUser,
    validationSchema: validationSchemaUser,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmitUser,
  });

  const closeUserModal = () => {
    formikUser.resetForm();
    setShowAddEditUser(false);
  };

  const closeRoleModal = () => {
    formikRole.resetForm();
    setShowAddRole(false);
  };

  const closeDeleteUserModal = () => {
    setShowDeleteUser(false);
  };

  const handleOpenDeleteModal = (user: any) => {
    setUser(user);
    setShowDeleteUser(true);
  };

  const deleteUser = (id: any) => {
    let deleteUserPromise = deleteUserById(id);
    deleteUserPromise
      .then((res: any) => {
        console.log(res?.data);
        closeDeleteUserModal();
        store.dispatch(fetchAllUsersAsync(''));
        toast.success(<b>User Deleted successfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (allRoles?.length > 0) {
      const roleOptions: any = [];
      allRoles.map((item: any) => {
        roleOptions.push({ label: item.name, value: item.name });
      });
      setRoleOptions(roleOptions);
    } else {
      setRoleOptions(rolesList);
    }
  }, [allRoles]);

  useEffect(() => {
    if (allBranchs?.length > 0) {
      const branchOptions: any = [];
      allBranchs?.map((item: any) => {
        branchOptions.push({ label: item.name, value: item.name });
      });
      setBranchOptions(branchsList);
    } else {
      setBranchOptions(branchsList);
    }
  }, [allBranchs]);

  useEffect(() => {
    store.dispatch(fetchAllUsersAsync(''));
    store.dispatch(fetchAllRolesAsync(''));
    store.dispatch(fetchAllBranchsAsync(''));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <ATable
          data={allUsers}
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
      {showAddEditUser && (
        <AModal
          saveText={'Add'}
          title={'Add User'}
          onSave={formikUser.handleSubmit}
          closeModal={closeUserModal}
        >
          <div className="flex flex-col ">
            <AInputField
              type="text"
              label="Name*"
              id="fullName"
              error={formikUser.errors.fullName}
              formik={formikUser.getFieldProps('fullName')}
              icon={<UsersIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Emp ID*"
              id="username"
              error={formikUser.errors.username}
              formik={formikUser.getFieldProps('username')}
              icon={<IdentificationIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Email ID*"
              id="email"
              error={formikUser.errors.email}
              formik={formikUser.getFieldProps('email')}
              icon={<EnvelopeIcon className="h-4 w-4" />}
            />
            <AInputField
              type="text"
              label="Mobile No.*"
              id="mobile"
              error={formikUser.errors.mobile}
              formik={formikUser.getFieldProps('mobile')}
              icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id="address"
              label={'Location*'}
              error={formikUser.errors.address}
              formik={formikUser.getFieldProps('address')}
              icon={<MapPinIcon className="h-4 w-4" />}
              options={branchOptions}
            />
            <ASingleSelect
              id="role"
              label={'Role*'}
              error={formikUser.errors.role}
              formik={formikUser.getFieldProps('role')}
              icon={<UsersIcon className="h-4 w-4" />}
              options={roleOptions}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              error={formikUser.errors.status}
              formik={formikUser.getFieldProps('status')}
              icon={<CheckIcon className="h-4 w-4" />}
              options={statusList}
            />
            <AFileUpload
              id={'profile'}
              label={'Profile'}
              formik={formikUser}
              icon={<UserCircleIcon className="w-15 h-15 -mt-2" />}
            />
          </div>
        </AModal>
      )}
      {showDeleteUser && (
        <AModal
          saveText={'Delete'}
          title={'Delete User'}
          onSave={() => deleteUser(user?._id)}
          closeModal={closeDeleteUserModal}
        >
          <div className="flex gap-1">
            Are you sure want to delete this <b> {user?.fullName}</b>?
          </div>
        </AModal>
      )}
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
          </div>
        </AModal>
      )}
    </>
  );
};

export default Users;
