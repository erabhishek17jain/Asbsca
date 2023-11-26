import { statusList } from '../../../constants';
import { useState, useEffect } from 'react';
import { AModal } from '../../../components-global/AModal';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AFileUpload from '../../../components-global/AFileUpload';
import AInputField from '../../../components-global/AInputField';
import {
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CheckIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import store from '../../../store/store';
import toast from 'react-hot-toast';
import { deleteClientById, addClient, updateClient } from '../../../services';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAllClientsAsync } from '../../../slices/clientsSlice';
import { getOptions } from '../../../utils';

export function AddEditDeleteClient({
  activeItem,
  showDeleteModal,
  showAddEditModal,
  closeDeleteModal,
  closeAddEditModal,
}: any) {
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const [branchs, setBranchs] = useState<any>([]);

  const initialValues = {
    name: '',
    branch: '',
    logo: '',
    signature: '',
    status: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    branch: Yup.string().required('This field is required'),
    logo: Yup.string().required('This field is required'),
    signature: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addClientPromise = activeItem?._id
      ? updateClient(values)
      : addClient(values);
    addClientPromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          formikClient.resetForm();
          store.dispatch(fetchAllClientsAsync({ page: 1, limit: 10 }));
          toast.success(
            <b>Client {activeItem?._id ? 'updated' : 'added'} sucessfully.</b>,
          );
        }
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikClient = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const deleteClient = (id: string) => {
    const deleteClientPromise = deleteClientById(id);
    deleteClientPromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(fetchAllClientsAsync({ page: 1, limit: 10 }));
          toast.success(<b>Client deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (allBranchs?.branches?.length > 0) {
      setBranchs(getOptions(allBranchs?.branches, 'name', '_id'));
    }
  }, [allBranchs]);

  useEffect(() => {
    if (activeItem) {
      formikClient.setFieldValue('_id', activeItem?._id);
      formikClient.setFieldValue('name', activeItem?.name);
      formikClient.setFieldValue('branch', activeItem?.branch?._id);
      formikClient.setFieldValue('logo', activeItem?.logo);
      formikClient.setFieldValue('signature', activeItem?.signature);
      formikClient.setFieldValue('status', activeItem?.status);
    }
  }, [activeItem]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`${activeItem?._id ? 'Edit' : 'Add'} Client`}
          onSave={formikClient.handleSubmit}
          closeModal={() => {
            closeAddEditModal();
            formikClient.resetForm();
          }}
        >
          <div className="flex flex-col">
            <AInputField
              id={'name'}
              label="Client Name*"
              value={formikClient.values.name}
              error={formikClient.errors.name}
              handleChange={formikClient.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id={'branch'}
              label={'Branch*'}
              options={branchs}
              value={formikClient.values.branch}
              error={formikClient.errors.branch}
              handleChange={formikClient.handleChange}
              icon={<BuildingOfficeIcon className="h-4 w-4" />}
            />
            <AFileUpload
              id={'logo'}
              label={'Client Logo'}
              value={formikClient.values.logo}
              error={formikClient.errors.logo}
              formik={formikClient.getFieldProps('logo')}
              icon={<BuildingLibraryIcon className="w-15 h-15 -mt-2" />}
            />
            <AFileUpload
              id={'signature'}
              label={'Signature'}
              value={formikClient.values.signature}
              error={formikClient.errors.signature}
              formik={formikClient.getFieldProps('signature')}
              icon={<BuildingLibraryIcon className="w-15 h-15 -mt-2" />}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              value={formikClient.values.status}
              error={formikClient.errors.status}
              handleChange={formikClient.handleChange}
              icon={<CheckIcon className="h-4 w-4" />}
              options={statusList}
            />
          </div>
        </AModal>
      )}

      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete Client`}
          onSave={() => deleteClient(activeItem?._id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
