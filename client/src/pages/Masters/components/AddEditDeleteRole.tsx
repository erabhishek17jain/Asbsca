import { useEffect } from 'react';
import { statusList } from '../../../constants';
import { AModal } from '../../../components-global/AModal';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import { CheckIcon, UserIcon } from '@heroicons/react/24/solid';
import store from '../../../store/store';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addRole, deleteRoleById, updateRole } from '../../../services';
import { fetchAllRolesAsync } from '../../../slices/rolesSlice';

export function AddEditDeleteRole({
  activeItem,
  showDeleteModal,
  showAddEditModal,
  closeDeleteModal,
  closeAddEditModal,
}: any) {
  const initialValues = {
    name: '',
    permissions: [],
    status: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addRolePromise = activeItem?._id
      ? updateRole(values)
      : addRole(values);
    addRolePromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          formikRole.resetForm();
          store.dispatch(fetchAllRolesAsync(''));
          toast.success(
            <b>Role {activeItem?._id ? 'updated' : 'added'} sucessfully.</b>,
          );
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
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

  const deleteRole = (id: string) => {
    const deleteRolePromise = deleteRoleById(id);
    deleteRolePromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(fetchAllRolesAsync(''));
          toast.success(<b>Role deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (activeItem) {
      formikRole.setFieldValue('_id', activeItem?._id);
      formikRole.setFieldValue('name', activeItem?.name);
      formikRole.setFieldValue('status', activeItem?.status);
    }
  }, [activeItem]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`${activeItem?._id ? 'Edit' : 'Add'} Role`}
          onSave={formikRole.handleSubmit}
          closeModal={() => {
            closeAddEditModal();
            formikRole.resetForm();
          }}
        >
          <div className="flex flex-col">
            <AInputField
              type="text"
              label="Role Name*"
              error={formikRole.errors.name}
              formik={formikRole.getFieldProps('name')}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              options={statusList}
              error={formikRole.errors.status}
              formik={formikRole.getFieldProps('status')}
              icon={<CheckIcon className="h-4 w-4" />}
            />
          </div>
        </AModal>
      )}

      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete Role`}
          onSave={() => deleteRole(activeItem?._id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
