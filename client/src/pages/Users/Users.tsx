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
import { USER_TABLE_HEAD, statusList } from '../../constants';
import UsersBody from './UsersBody';
import UsersHeader from './UsersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { addUser, deleteUserById, updateUser } from '../../services';
import store from '../../store/store';
import { fetchAllUsersAsync } from '../../slices/usersSlice';
import { fetchAllRolesAsync } from '../../slices/rolesSlice';
import { useSelector } from 'react-redux';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import AFileUpload from '../../components-global/AFileUpload';
import { getOptions } from '../../utils';

const Users = () => {
  const { allRoles } = useSelector((state: any) => state.roles);
  const { allUsers, loading } = useSelector((state: any) => state.users);
  const [user, setUser] = useState<any>(null);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showAddEditUser, setShowAddEditUser] = useState(false);
  const [roleOptions, setRoleOptions] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [defaultFilters, setDefaultFilters] = useState<any>({
    page: 1,
    limit: 10,
  });

  const initialValues = {
    fullName: '',
    username: '',
    password: 'admin@123',
    email: '',
    mobile: '',
    address: '',
    role: '',
    status: '',
    profile: '',
    about: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    username: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
    email: Yup.string().required('This field is required'),
    mobile: Yup.number().required('This field is required'),
    address: Yup.string().required('This field is required'),
    role: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addUserPromise = activeItem?._id ? updateUser(values) : addUser(values);
    addUserPromise
      .then((res: any) => {
        console.log(res.data);
        closeUserModal();
        formik.resetForm();
        setDefaultFilters({ ...{ page: 1, limit: 10 } });
        toast.success(<b>User added sucessfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const openUserAddEditModal = (item: any) => {
    setActiveItem({ ...item });
    setShowAddEditUser(true);
  };

  const closeUserModal = () => {
    formik.resetForm();
    setShowAddEditUser(false);
  };

  const closeDeleteUserModal = (item: any) => {
    setActiveItem({ ...item });
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
        closeDeleteUserModal(null);
        setDefaultFilters({ ...{ page: 1, limit: 10 } });
        toast.success(<b>User Deleted successfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (allRoles?.roles?.length > 0) {
      setRoleOptions(getOptions(allRoles?.roles, 'name', '_id'));
    }
  }, [allRoles]);

  useEffect(() => {
    if (activeItem) {
      formik.setFieldValue('_id', activeItem?._id);
      formik.setFieldValue('fullName', activeItem?.fullName);
      formik.setFieldValue('username', activeItem?.username);
      formik.setFieldValue('email', activeItem?.email);
      formik.setFieldValue('mobile', activeItem?.mobile);
      formik.setFieldValue('address', activeItem?.address);
      formik.setFieldValue('role', activeItem?.role?._id);
      formik.setFieldValue('status', activeItem?.status);
      formik.setFieldValue('profile', activeItem?.profile);
      formik.setFieldValue('about', activeItem?.about);
    }
  }, [activeItem]);

  useEffect(() => {
    store.dispatch(fetchAllUsersAsync({ ...defaultFilters }));
  }, [defaultFilters]);

  useEffect(() => {
    store.dispatch(fetchAllUsersAsync({ ...defaultFilters }));
    store.dispatch(fetchAllRolesAsync({ page: 1, limit: 200 }));
    store.dispatch(fetchAllBranchsAsync({ page: 1, limit: 200 }));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <ATable
          loading={loading}
          meta={allUsers?.meta}
          data={allUsers?.users}
          tableHeader={USER_TABLE_HEAD}
          defaultFilters={defaultFilters}
          setDefaultFilters={setDefaultFilters}
          header={
            <UsersHeader
              openUserModal={() => {
                setActiveItem(null);
                setShowAddEditUser(true);
              }}
            />
          }
          tableBody={
            <UsersBody
              meta={allUsers?.meta}
              openUserDeleteModal={handleOpenDeleteModal}
              openUserAddEditModal={openUserAddEditModal}
            />
          }
        />
      </div>
      {showAddEditUser && (
        <AModal
          saveText={`${activeItem?._id ? 'Update' : 'Add'}`}
          title={`${activeItem?._id ? 'Edit' : 'Add'} User`}
          onSave={formik.handleSubmit}
          closeModal={closeUserModal}
        >
          <div className="flex flex-col ">
            <AInputField
              id="fullName"
              label="Name"
              value={formik.values.fullName}
              error={formik.errors.fullName}
              handleChange={formik.handleChange}
              icon={<UsersIcon className="h-4 w-4" />}
            />
            <AInputField
              id="username"
              label="Emp ID"
              value={formik.values.username}
              error={formik.errors.username}
              handleChange={formik.handleChange}
              icon={<IdentificationIcon className="h-4 w-4" />}
            />
            <AInputField
              id="email"
              label="Email ID"
              value={formik.values.email}
              error={formik.errors.email}
              handleChange={formik.handleChange}
              icon={<EnvelopeIcon className="h-4 w-4" />}
            />
            <AInputField
              id="mobile"
              label="Mobile No."
              value={formik.values.mobile}
              error={formik.errors.mobile}
              handleChange={formik.handleChange}
              icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
            />
            <AInputField
              id="address"
              label={'Location'}
              value={formik.values.address}
              error={formik.errors.address}
              handleChange={formik.handleChange}
              icon={<MapPinIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id="role"
              label={'Role'}
              value={formik.values.role}
              error={formik.errors.role}
              handleChange={formik.handleChange}
              icon={<UsersIcon className="h-4 w-4" />}
              options={roleOptions}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              value={formik.values.status}
              error={formik.errors.status}
              handleChange={formik.handleChange}
              icon={<CheckIcon className="h-4 w-4" />}
              options={statusList}
            />
            <AFileUpload
              id={'profile'}
              label={'Profile'}
              value={formik.values.profile}
              error={formik.errors.profile}
              formik={formik}
              icon={<UserCircleIcon className="w-13 h-13" />}
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
    </>
  );
};

export default Users;
