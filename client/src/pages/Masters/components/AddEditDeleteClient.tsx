import { branchsList, statusList } from '../../../constants';
import { useState, useEffect } from 'react';
import { AModal } from '../../../components-global/AModal';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AFileUpload from '../../../components-global/AFileUpload';
import AInputField from '../../../components-global/AInputField';
import {
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CheckIcon,
  LinkIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import store from '../../../store/store';
import toast from 'react-hot-toast';
import { deleteClientById, addClient } from '../../../services';
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
    let addClientPromise = addClient(values);
    addClientPromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          store.dispatch(fetchAllClientsAsync());
          toast.success(<b>Client added sucessfully.</b>);
        }
      })
      .catch((e) => {
        toast.error(<b>{e.error.response.data.message}</b>);
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
          store.dispatch(fetchAllClientsAsync());
          toast.success(<b>Client deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  useEffect(() => {
    // setBranchs(getOptions(allBranchs));
    setBranchs(branchsList);
  }, [allBranchs]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`Add Client`}
          onSave={formikClient.handleSubmit}
          closeModal={() => closeAddEditModal()}
        >
          <div className="flex flex-col">
            <AInputField
              type="text"
              label="Client Name*"
              error={formikClient.errors.name}
              formik={formikClient.getFieldProps('name')}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'branch'}
              label={'Branch*'}
              options={branchs}
              error={formikClient.errors.branch}
              formik={formikClient.getFieldProps('branch')}
              icon={<BuildingOfficeIcon className="h-4 w-4" />}
            />
            <AFileUpload
              id={'logo'}
              label={'Client Logo'}
              formik={formikClient}
              error={formikClient.errors.logo}
              icon={<BuildingLibraryIcon className="w-15 h-15 -mt-2" />}
            />
            <AFileUpload
              id={'signature'}
              label={'Signature'}
              formik={formikClient}
              error={formikClient.errors.signature}
              icon={<LinkIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'status'}
              label={'Status'}
              id="status"
              error={formikClient.errors.status}
              formik={formikClient.getFieldProps('status')}
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
          onSave={() => deleteClient(activeItem?.id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}