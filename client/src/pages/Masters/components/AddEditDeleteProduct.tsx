import { statusList } from '../../../constants';
import { useState, useEffect } from 'react';
import { AModal } from '../../../components-global/AModal';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import {
  BuildingOfficeIcon,
  CheckIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import store from '../../../store/store';
import toast from 'react-hot-toast';
import { deleteProductById, addProduct } from '../../../services';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAllProductsAsync } from '../../../slices/productsSlice';
import { getOptions } from '../../../utils';

export function AddEditDeleteProduct({
  activeItem,
  showDeleteModal,
  showAddEditModal,
  closeDeleteModal,
  closeAddEditModal,
}: any) {
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);

  const initialValues = {
    name: '',
    client: '',
    status: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    client: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addProductPromise = addProduct(values);
    addProductPromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          store.dispatch(fetchAllProductsAsync());
          toast.success(<b>Product added sucessfully.</b>);
        }
      })
      .catch((e) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  const formikProduct = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const deleteProduct = (id: string) => {
    const deleteProductPromise = deleteProductById(id);
    deleteProductPromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(fetchAllProductsAsync());
          toast.success(<b>Product deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  useEffect(() => {
    setClientOptions(getOptions(allClients));
  }, [allClients]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`Add Product`}
          onSave={formikProduct.handleSubmit}
          closeModal={() => closeAddEditModal()}
        >
          <div className="flex flex-col">
            <AInputField
              type="text"
              label="Product Name*"
              error={formikProduct.errors.name}
              formik={formikProduct.getFieldProps('name')}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'client'}
              label={'Client Name*'}
              options={clientOptions}
              error={formikProduct.errors.client}
              formik={formikProduct.getFieldProps('client')}
              icon={<BuildingOfficeIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              name={'status'}
              label={'Status'}
              id="status"
              error={formikProduct.errors.status}
              formik={formikProduct.getFieldProps('status')}
              icon={<CheckIcon className="h-4 w-4" />}
              options={statusList}
            />
          </div>
        </AModal>
      )}

      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete Product`}
          onSave={() => deleteProduct(activeItem?.id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
