import {
  ArrowLeftIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
  MapPinIcon,
  PlusIcon,
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
import { addCase, updateCase } from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  appoinmentStatusList,
  caseStatusList,
  caseTypeList,
  localOrOGLList,
} from '../../constants';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import store from '../../store/store';
import { getOptions } from '../../utils';
import { fetchAllUsersAsync } from '../../slices/usersSlice';
import ATextField from '../../components-global/ATextField';

const AddCase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allClients } = useSelector((state: any) => state.clients);
  const { allUsers } = useSelector((state: any) => state.users);
  const [clientOptions, setClientOptions] = useState<any>([]);
  const [branchOptions, setBranchOptions] = useState<any>([]);
  const [usersOptions, setUsersOptions] = useState<any>([]);

  const initialValues = {
    name: '',
    mobile: '',
    loanAmount: 0,
    referenceId: '',
    localOrOGL: '',
    address: '',
    city: '',
    branch: '',
    type: '',
    bankName: '',
    receivedDate: '',
    status: '',
    appoinmentStatus: '',
    assigneeId: '',
    reviewerId: '',
    remark: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    mobile: Yup.string()
      .required('This field is required')
      .test(
        'len',
        'Mobile number should be of 10 digits',
        (val: any) => val.length === 10,
      ),
    loanAmount: Yup.number().required('This field is required'),
    referenceId: Yup.string().required('This field is required'),
    localOrOGL: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    city: Yup.string().required('This field is required'),
    branch: Yup.string().required('This field is required'),
    type: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
    receivedDate: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
    appoinmentStatus: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = { ...values, mobile: parseInt(values.mobile) };
    values = await Object.assign(values);
    let addCasePromise = state?.activeItem
      ? updateCase(state?.activeItem?._id, { ...values })
      : addCase([{ ...values }]);
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
    if (allClients?.data?.length > 0) {
      setClientOptions(getOptions(allClients?.data, 'name', '_id'));
    }
  }, [allClients]);

  useEffect(() => {
    if (allBranchs?.branches?.length > 0) {
      setBranchOptions(getOptions(allBranchs?.branches, 'name', '_id'));
    }
  }, [allBranchs]);

  useEffect(() => {
    if (allUsers?.users?.length > 0) {
      setUsersOptions(
        getOptions(
          allUsers?.users?.filter((item: any) => item.isVerified),
          'fullName',
          '_id',
        ),
      );
    }
  }, [allUsers]);

  useEffect(() => {
    if (state?.activeItem) {
      formik.setFieldValue('_id', state?.activeItem?._id);
      formik.setFieldValue('name', state?.activeItem?.name);
      formik.setFieldValue('mobile', state?.activeItem?.mobile);
      formik.setFieldValue('loanAmount', state?.activeItem?.loanAmount);
      formik.setFieldValue('referenceId', state?.activeItem?.referenceId);
      formik.setFieldValue('localOrOGL', state?.activeItem?.localOrOGL);
      formik.setFieldValue('address', state?.activeItem?.address);
      formik.setFieldValue('city', state?.activeItem?.city);
      formik.setFieldValue('branch', state?.activeItem?.branch?._id);
      formik.setFieldValue('type', state?.activeItem?.type);
      formik.setFieldValue('bankName', state?.activeItem?.bankName?._id);
      const date = state?.activeItem?.receivedDate;
      formik.setFieldValue('receivedDate', date?.slice(0, 10));
      formik.setFieldValue('status', state?.activeItem?.status);
      formik.setFieldValue(
        'appoinmentStatus',
        state?.activeItem?.appoinmentStatus,
      );
      formik.setFieldValue('assigneeId', state?.activeItem?.assignTo?._id);
      formik.setFieldValue('reviewerId', state?.activeItem?.reviewer?._id);
      formik.setFieldValue('remark', state?.activeItem?.remark);
    } else {
      formik.setFieldValue('status', 'unassigned');
      formik.setFieldValue('appoinmentStatus', 'notScheduled');
    }
  }, [state]);

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync({ page: 1, limit: 200 }));
    store.dispatch(fetchAllBranchsAsync({ page: 1, limit: 200 }));
    store.dispatch(fetchAllUsersAsync({ page: 1, limit: 200 }));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Add Case" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white shadow-lg px-5 py-5">
        <p className="flex justify-between items-center font-sans text-base leading-relaxed mt-1 font-normal mb-5">
          <span className="">
            Fill below details to {state?.activeItem?._id ? 'update' : 'add'}{' '}
            new case.
          </span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:gap-3">
          <AInputField
            id={'name'}
            label="Applicant's Name"
            value={formik.values.name}
            error={formik.errors.name}
            handleChange={formik.handleChange}
            icon={<UserIcon className="h-4 w-4" />}
          />
          <AInputField
            id={'mobile'}
            type="number"
            label="Mobile"
            value={formik.values.mobile}
            error={formik.errors.mobile}
            handleChange={formik.handleChange}
            icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
          />
          <AInputField
            id={'loanAmount'}
            type="number"
            label="Loan Amount"
            rightLabel={'(In Lakhs)'}
            value={formik.values.loanAmount}
            error={formik.errors.loanAmount}
            handleChange={formik.handleChange}
            icon={<CurrencyRupeeIcon className="h-4 w-4" />}
          />
          <AInputField
            id={'referenceId'}
            label="Reference ID"
            value={formik.values.referenceId}
            error={formik.errors.referenceId}
            handleChange={formik.handleChange}
            icon={<IdentificationIcon className="h-4 w-4" />}
          />
          <ASingleSelect
            id={'localOrOGL'}
            label={'Type'}
            value={formik.values.localOrOGL}
            error={formik.errors.localOrOGL}
            handleChange={formik.handleChange}
            icon={<TagIcon className="h-4 w-4" />}
            options={localOrOGLList}
          />
          <AInputField
            id={'address'}
            label="Address"
            value={formik.values.address}
            error={formik.errors.address}
            handleChange={formik.handleChange}
            icon={<MapPinIcon className="h-4 w-4" />}
          />
          <AInputField
            id={'city'}
            label="City"
            value={formik.values.city}
            error={formik.errors.city}
            handleChange={formik.handleChange}
            icon={<MapPinIcon className="h-4 w-4" />}
          />
          <ASingleSelect
            id={'bankName'}
            label={'Bank Name'}
            value={formik.values.bankName}
            error={formik.errors.bankName}
            handleChange={formik.handleChange}
            icon={<BuildingLibraryIcon className="h-4 w-4" />}
            options={clientOptions}
          />
          <ASingleSelect
            id={'branch'}
            label={'Branch'}
            value={formik.values.branch}
            error={formik.errors.branch}
            handleChange={formik.handleChange}
            icon={<BuildingOfficeIcon className="h-4 w-4" />}
            options={branchOptions}
          />
          <ASingleSelect
            id={'type'}
            label={'Case Type'}
            value={formik.values.type}
            error={formik.errors.type}
            handleChange={formik.handleChange}
            icon={<TagIcon className="h-4 w-4" />}
            options={caseTypeList}
          />
          <ADatePicker
            id={'receivedDate'}
            label={'Received Date'}
            value={formik.values.receivedDate}
            error={formik.errors.receivedDate}
            handleChange={formik.handleChange}
          />
          {state?.activeItem?._id && (
            <>
              <ASingleSelect
                id={'status'}
                label={'Case Status'}
                value={formik.values.status}
                error={formik.errors.status}
                handleChange={formik.handleChange}
                icon={<TagIcon className="h-4 w-4" />}
                options={caseStatusList}
              />
              <ASingleSelect
                id={'appoinmentStatus'}
                label={'Appointment Status'}
                value={formik.values.appoinmentStatus}
                error={formik.errors.appoinmentStatus}
                handleChange={formik.handleChange}
                icon={<TagIcon className="h-4 w-4" />}
                options={appoinmentStatusList}
              />
              <ASingleSelect
                id="assigneeId"
                label={'Assign Executor'}
                value={formik.values.assigneeId}
                error={formik.errors.assigneeId}
                handleChange={formik.handleChange}
                icon={<UserIcon className="h-4 w-4" />}
                options={usersOptions}
              />
              <ASingleSelect
                id="reviewerId"
                label={'Assign Reviewer'}
                value={formik.values.reviewerId}
                error={formik.errors.referenceId}
                handleChange={formik.handleChange}
                icon={<UserIcon className="h-4 w-4" />}
                options={usersOptions}
              />
              <ATextField
                id={'remark'}
                label={'Remark'}
                value={formik.values.remark}
                error={formik.errors.remark}
                handleChange={formik.handleChange}
              />
            </>
          )}
        </div>
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
            label={state?.activeItem?._id ? 'Update' : 'Add'}
            variant="primary"
            action={() => formik.handleSubmit()}
            icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
          />
        </div>
      </div>
    </>
  );
};

export default AddCase;
