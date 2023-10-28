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
import { USER_TABLE_HEAD, pages } from '../../constants';
import UsersBody from './UsersBody';
import UsersHeader from './UsersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { addRole } from '../../services';

const Users = () => {
  const [showModalRole, setShowModalRole] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

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
    let signinPromise = addRole(values);
    toast.promise(signinPromise, {
      loading: 'Checking...',
      success: <b>Role addes successfully.</b>,
      error: <b>Something went wrong!</b>,
    });
    signinPromise.then((res: any) => {
      console.log(res.data)
      closeRoleModal()
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

  const closeRoleModal = () => {
    formik.resetForm();
    setShowModalRole(false);
  };

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
        <AModal
          saveText={'Add'}
          title={'Add Role'}
          onSave={formik.handleSubmit}
          closeModal={closeRoleModal}
        >
          <div className="flex flex-col ">
            <AInputField
              id="name"
              type="text"
              label="Role Name*"
              error={formik.errors.name}
              formik={formik.getFieldProps('name')}
              icon={<UsersIcon className="h-4 w-4" />}
            />
            {/* <AMultiSelect
              id="pageAccess"
              label={'Page Access'}
              options={pages}
              error={formik.errors.pageAccess}
              selected={formik.values.pageAccess}
              icon={<KeyIcon className="h-4 w-4" />}
              {...formik.getFieldProps('pageAccess')}
            /> */}
            <ASingleSelect
              id="pageAccess"
              label={'Page Access'}
              options={pages}
              error={formik.errors.pageAccess}
              icon={<KeyIcon className="h-4 w-4" />}
              formik={formik.getFieldProps('pageAccess')}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              error={formik.errors.status}
              formik={formik.getFieldProps('status')}
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
