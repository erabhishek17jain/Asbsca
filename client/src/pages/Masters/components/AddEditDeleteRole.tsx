import { useEffect, useState } from 'react';
import { pages, statusList } from '../../../constants';
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
import ACheckbox from '../../../components-global/ACheckbox';

export function AddEditDeleteRole({
  activeItem,
  showDeleteModal,
  showAddEditModal,
  closeDeleteModal,
  closeAddEditModal,
}: any) {
  const [permissions, setPermissions] = useState([...pages]);

  const initialValues = {
    name: '',
    status: '',
    permissions: [],
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
    values.permissions = permissions
      .filter((item: any) => item?.isChecked)
      .map((item: any) => item.label);
    values = await Object.assign(values);
    let addRolePromise = activeItem?._id ? updateRole(values) : addRole(values);
    addRolePromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          formikRole.resetForm();
          store.dispatch(fetchAllRolesAsync({ page: 1, limit: 10 }));
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

  const selectPermissions = (id: string, isChecked: boolean) => {
    const index = permissions.findIndex((item: any) => item.value === id);
    permissions[index].isChecked = isChecked;
    setPermissions([...permissions]);
  };

  const deleteRole = (id: string) => {
    const deleteRolePromise = deleteRoleById(id);
    deleteRolePromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(fetchAllRolesAsync({ page: 1, limit: 10 }));
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
      permissions.filter((item: any) => {
        item.isChecked = activeItem?.permissions.includes(item.label)
          ? true
          : false;
      });
      setPermissions([...permissions]);
    }
  }, [activeItem]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          saveText={`${activeItem?._id ? 'Update' : 'Add'}`}
          title={`${activeItem?._id ? 'Edit' : 'Add'} Role`}
          onSave={formikRole.handleSubmit}
          closeModal={() => {
            closeAddEditModal();
            formikRole.resetForm();
          }}
        >
          <div className="flex flex-col">
            <AInputField
              id={'name'}
              label="Role Name"
              value={formikRole.values.name}
              error={formikRole.errors.name}
              handleChange={formikRole.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              options={statusList}
              value={formikRole.values.status}
              error={formikRole.errors.status}
              handleChange={formikRole.handleChange}
              icon={<CheckIcon className="h-4 w-4" />}
            />
            <label className="block text-main text-sm mb-4">
              Select Permissions
            </label>
            <div className="grid grid-cols-3 gap-2 flex-wrap mb-4">
              {permissions.map((item: any) => {
                return (
                  <ACheckbox
                    id={item?.value}
                    label={item?.label}
                    checked={item?.isChecked}
                    handleChecked={(e: any) =>
                      selectPermissions(item?.value, e.target.checked)
                    }
                  />
                );
              })}
            </div>
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
