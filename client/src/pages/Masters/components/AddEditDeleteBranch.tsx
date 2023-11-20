import { statusList } from '../../../constants';
import { AModal } from '../../../components-global/AModal';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import { CheckIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid';
import store from '../../../store/store';
import toast from 'react-hot-toast';
import { deleteBranchById, addBranch, updateBranch } from '../../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAllBranchsAsync } from '../../../slices/branchsSlice';
import { useEffect } from 'react';
import ATextField from '../../../components-global/ATextField';

export function AddEditDeleteBranch({
  activeItem,
  showDeleteModal,
  showAddEditModal,
  closeDeleteModal,
  closeAddEditModal,
}: any) {
  const initialValues = {
    name: '',
    address: '',
    status: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addBranchPromise = activeItem?._id
      ? updateBranch(values)
      : addBranch(values);
    addBranchPromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          formikBranch.resetForm();
          store.dispatch(fetchAllBranchsAsync(''));
          toast.success(
            <b>Branch {activeItem?._id ? 'updated' : 'added'} sucessfully.</b>,
          );
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikBranch = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const deleteBranch = (id: string) => {
    const deleteBranchPromise = deleteBranchById(id);
    deleteBranchPromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(fetchAllBranchsAsync(''));
          toast.success(<b>Branch deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (activeItem) {
      formikBranch.setFieldValue('_id', activeItem?._id);
      formikBranch.setFieldValue('name', activeItem?.name);
      formikBranch.setFieldValue('address', activeItem?.address);
      formikBranch.setFieldValue('status', activeItem?.status);
    }
  }, [activeItem]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`${activeItem?._id ? 'Edit' : 'Add'} Branch`}
          onSave={formikBranch.handleSubmit}
          closeModal={() => {
            closeAddEditModal();
            formikBranch.resetForm();
          }}
        >
          <div className="flex flex-col">
            <AInputField
              type="text"
              label="Branch Name*"
              error={formikBranch.errors.name}
              formik={formikBranch.getFieldProps('name')}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ATextField
              id={'address'}
              label={'Address'}
              formik={formikBranch.getFieldProps('address')}
              icon={<MapPinIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'status'}
              label={'Status'}
              id="status"
              options={statusList}
              error={formikBranch.errors.status}
              formik={formikBranch.getFieldProps('status')}
              icon={<CheckIcon className="h-4 w-4" />}
            />
          </div>
        </AModal>
      )}

      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete Branch`}
          onSave={() => deleteBranch(activeItem?._id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
