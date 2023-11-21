import {
  ArrowLeftIcon,
  BookmarkIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
  MapPinIcon,
  TagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ADatePicker from '../../components-global/ADatePicker';
import AInputField from '../../components-global/AInputField';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useLocation, useNavigate } from 'react-router-dom';
import { addCase } from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { caseTypeList, localOrOGLList } from '../../constants';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import store from '../../store/store';

const AddCase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeItem } = location.state;
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);
  const [branchOptions, setBranchOptions] = useState<any>([]);

  const initialValues = {
    name: '',
    address: '',
    mobile: 0,
    loanAmount: 0,
    referenceId: '',
    localOrOGL: '',
    city: '',
    branch: '',
    type: '',
    bankName: '',
    recievedDate: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    mobile: Yup.number().required('This field is required'),
    loanAmount: Yup.number().required('This field is required'),
    referenceId: Yup.string().required('This field is required'),
    localOrOGL: Yup.string().required('This field is required'),
    city: Yup.string().required('This field is required'),
    branch: Yup.string().required('This field is required'),
    type: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
    recievedDate: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addCasePromise = addCase([{ ...values }]);
    addCasePromise
      .then((res: any) => {
        if (res) {
          formik.resetForm();
          navigate(-1);
          toast.success(<b>Case added sucessfully.</b>);
        }
      })
      .catch((e: any) => {
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

  useEffect(() => {
    if (allClients?.length > 0) {
      const clientOptions: any = [];
      allClients.map((item: any) => {
        clientOptions.push({ label: item.name, value: item.name });
      });
      setClientOptions(clientOptions);
    }
  }, [allClients]);

  useEffect(() => {
    if (allBranchs?.length > 0) {
      const branchOptions: any = [];
      allBranchs?.map((item: any) => {
        branchOptions.push({ label: item.name, value: item.name });
      });
      setBranchOptions(branchOptions);
    }
  }, [allBranchs]);

   useEffect(() => {
     if (activeItem) {
       formik.setFieldValue('_id', activeItem?._id);
       formik.setFieldValue('name', activeItem?.name);
       formik.setFieldValue('address', activeItem?.address);
       formik.setFieldValue('mobile', activeItem?.mobile);
       formik.setFieldValue('loanAmount', activeItem?.loanAmount);
       formik.setFieldValue('referenceId', activeItem?.referenceId);
       formik.setFieldValue('localOrOGL', activeItem?.localOrOGL);
       formik.setFieldValue('city', activeItem?.city);
       formik.setFieldValue('branch', activeItem?.branch);
       formik.setFieldValue('type', activeItem?.type);
       formik.setFieldValue('bankName', activeItem?.bankName);
       formik.setFieldValue('recievedDate', activeItem?.recievedDate);
     }
   }, [activeItem]);

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync(''));
    store.dispatch(fetchAllBranchsAsync(''));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Add Case" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <p className="flex justify-between items-center font-sans text-base leading-relaxed text-grey-700 mt-1 font-normal mb-5">
          <span className="">Fill below details to add new case.</span>
          <AButton
            label={'Back'}
            variant={'link'}
            action={() => {
              navigate(-1);
              formik.resetForm();
            }}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
        </p>
        <div className="flex flex-col w-[70%]">
          <AInputField
            type="text"
            label="Applicant's Name"
            variant="horizantal"
            error={formik.errors.name}
            formik={formik.getFieldProps('name')}
            icon={<UserIcon className="h-4 w-4" />}
          />
          <AInputField
            type="number"
            label="Mobile"
            variant="horizantal"
            error={formik.errors.mobile}
            formik={formik.getFieldProps('mobile')}
            icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
          />
          <AInputField
            type="number"
            label="Loan Amt. (Lacs)"
            variant="horizantal"
            error={formik.errors.loanAmount}
            formik={formik.getFieldProps('loanAmount')}
            icon={<CurrencyRupeeIcon className="h-4 w-4" />}
          />
          <AInputField
            type="text"
            label="Reference ID"
            variant="horizantal"
            error={formik.errors.referenceId}
            formik={formik.getFieldProps('referenceId')}
            icon={<IdentificationIcon className="h-4 w-4" />}
          />
          <ASingleSelect
            id={'localOrOGL'}
            label={'Type'}
            variant={'horizantal'}
            error={formik.errors.localOrOGL}
            formik={formik.getFieldProps('localOrOGL')}
            icon={<TagIcon className="h-4 w-4" />}
            options={localOrOGLList}
          />
          <AInputField
            type="text"
            label="Address"
            variant="horizantal"
            error={formik.errors.address}
            formik={formik.getFieldProps('address')}
            icon={<MapPinIcon className="h-4 w-4" />}
          />
          <AInputField
            type="text"
            label="City"
            variant="horizantal"
            error={formik.errors.city}
            formik={formik.getFieldProps('city')}
            icon={<MapPinIcon className="h-4 w-4" />}
          />
          <ASingleSelect
            id={'branch'}
            label={'Branch'}
            variant={'horizantal'}
            error={formik.errors.branch}
            formik={formik.getFieldProps('branch')}
            icon={<BuildingOfficeIcon className="h-4 w-4" />}
            options={branchOptions}
          />
          <ASingleSelect
            id={'type'}
            label={'Case Type'}
            variant={'horizantal'}
            error={formik.errors.type}
            formik={formik.getFieldProps('type')}
            icon={<TagIcon className="h-4 w-4" />}
            options={caseTypeList}
          />
          <ASingleSelect
            id={'bankName'}
            label={'Bank Name'}
            variant={'horizantal'}
            error={formik.errors.bankName}
            formik={formik.getFieldProps('bankName')}
            icon={<BuildingLibraryIcon className="h-4 w-4" />}
            options={clientOptions}
          />
          <ADatePicker
            id={'recievedDate'}
            variant={'horizantal'}
            label={'Received Date'}
            error={formik.errors.recievedDate}
            formik={formik.getFieldProps('recievedDate')}
          />
          <div className="flex gap-2 justify-end">
            <AButton
              label="Cancel"
              variant="secondary"
              action={() => {
                navigate(-1);
                formik.resetForm();
              }}
              icon={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
            <AButton
              label="Add"
              variant="primary"
              action={() => formik.handleSubmit()}
              icon={<BookmarkIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCase;
