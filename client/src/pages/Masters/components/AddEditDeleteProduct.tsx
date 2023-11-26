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
import {
  deleteProductById,
  addProduct,
  updateProduct,
} from '../../../services';
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
    let addProductPromise = activeItem?._id
      ? updateProduct(values)
      : addProduct(values);
    addProductPromise
      .then((res: any) => {
        if (res) {
          closeAddEditModal();
          formikProduct.resetForm();
          store.dispatch(fetchAllProductsAsync({ page: 1, limit: 10 }));
          toast.success(
            <b>Product {activeItem?._id ? 'updated' : 'added'} sucessfully.</b>,
          );
        }
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
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
          store.dispatch(fetchAllProductsAsync({ page: 1, limit: 10 }));
          toast.success(<b>Product deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (allClients?.data?.length > 0) {
      setClientOptions(getOptions(allClients?.data, 'name', '_id'));
    }
  }, [allClients]);

  useEffect(() => {
    if (activeItem) {
      formikProduct.setFieldValue('_id', activeItem?._id);
      formikProduct.setFieldValue('name', activeItem?.name);
      formikProduct.setFieldValue('status', activeItem?.status);
      formikProduct.setFieldValue('client', activeItem?.client?._id);
    }
  }, [activeItem]);

  return (
    <>
      {showAddEditModal && (
        <AModal
          title={`${activeItem?._id ? 'Edit' : 'Add'} Product`}
          onSave={formikProduct.handleSubmit}
          closeModal={() => {
            closeAddEditModal();
            formikProduct.resetForm();
          }}
        >
          <div className="flex flex-col">
            <AInputField
              id={'name'}
              label="Product Name*"
              value={formikProduct.values.name}
              error={formikProduct.errors.name}
              handleChange={formikProduct.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
            />
            <ASingleSelect
              id={'client'}
              label={'Client Name*'}
              value={formikProduct.values.client}
              error={formikProduct.errors.client}
              handleChange={formikProduct.handleChange}
              icon={<BuildingOfficeIcon className="h-4 w-4" />}
              options={clientOptions}
            />
            <ASingleSelect
              id="status"
              label={'Status'}
              value={formikProduct.values.status}
              error={formikProduct.errors.status}
              handleChange={formikProduct.handleChange}
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
          onSave={() => deleteProduct(activeItem?._id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
