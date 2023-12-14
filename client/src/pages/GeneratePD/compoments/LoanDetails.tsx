import ASingleSelect from '../../../components-global/ASingleSelect';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOptions } from '../../../utils';
import { alcList, loanTypes, loans } from '../constants';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';
import { fetchAllClientsAsync } from '../../../slices/clientsSlice';
import store from '../../../store/store';
import moment from 'moment';
import AInputField from '../../../components-global/AInputField';

const initialValues = {
  alc: '',
  otheralc:'',
  loan: '',
  otherloan: '',
  loanType: '',
  otherloanType: '',
  bankName: '',
};

const LoanDetails = ({
  steps,
  payloads,
  activeItem,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);
  const [pdDetails, setPdDetails] = useState<any>({});

  const validationSchema = Yup.object().shape({
    alc: Yup.string().required('This field is required'),
    loan: Yup.string().required('This field is required'),
    loanType: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({
      ...payloads,
      loanDetails: { ...values },
      pdDetails: { ...pdDetails },
    });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    if (allClients?.data?.length > 0) {
      setClientOptions(getOptions(allClients?.data, 'name', 'name'));
    }
  }, [allClients]);

  useEffect(() => {
    let details = {};
    if (payloads.pdDetails) {
      details = payloads.pdDetails;
    } else {
      details = {
        location: activeItem?.city,
        reporterName: activeItem?.assignTo?.fullName,
        reporterContact: activeItem?.assignTo?.mobile,
        pdVisitDate: moment().format('DD-MM-YYYY'),
        pdConductTime: moment().format('hh:MM a'),
        reviewerName: activeItem?.reviewer?.fullName,
        reviewerContact: activeItem?.reviewer?.mobile,
        reportTat: moment().add(1, 'd').format('DD-MM-YYYY hh:MM a'),
        reportSentDate: moment().add(1, 'd').format('DD-MM-YYYY'),
      };
    }
    setPdDetails(details);
    formik.setFieldValue('bankName', activeItem?.bankName?.name);
    store.dispatch(fetchAllClientsAsync({ page: 1, limit: 200 }));
  }, [activeItem]);

  useEffect(() => {
    if (payloads.loanDetails) {
      formik.setFieldValue('alc', payloads.loanDetails?.alc);
      formik.setFieldValue('otheralc', payloads.loanDetails?.otheralc);
      formik.setFieldValue('loan', payloads.loanDetails?.loan);
      formik.setFieldValue('otherloan', payloads.loanDetails?.otherloan);
      formik.setFieldValue('loanType', payloads?.loanDetails?.loanType);
      formik.setFieldValue(
        'otherloanType',
        payloads?.loanDetails?.otherloanType,
      );
      formik.setFieldValue('bankName', payloads?.loanDetails?.bankName);
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col sm:w-[60%] py-4">
          <ASingleSelect
            id={'bankName'}
            label={'Bank Name'}
            options={clientOptions}
            variant={'horizantal'}
            value={formik?.values?.bankName}
            error={formik.errors.bankName}
            handleChange={formik.handleChange}
          />
          <ASingleSelect
            id={'alc'}
            label={'ALC'}
            options={alcList}
            variant={'horizantal'}
            value={formik?.values?.alc}
            error={formik.errors.alc}
            handleChange={formik.handleChange}
          />
          {formik?.values?.alc === 'Other' && (
            <AInputField
              id={'otheralc'}
              label={'ALC'}
              variant={'horizantal'}
              value={formik?.values?.otheralc}
              error={formik?.errors?.otheralc}
              handleChange={formik?.handleChange}
            />
          )}
          <ASingleSelect
            id={'loan'}
            label={'Loan'}
            options={loans}
            variant={'horizantal'}
            value={formik?.values?.loan}
            error={formik.errors.loan}
            handleChange={formik.handleChange}
          />
          {formik?.values?.loan === 'Other' && (
            <AInputField
              id={'otherloan'}
              label={'Loan Type'}
              variant={'horizantal'}
              value={formik?.values?.otherloan}
              error={formik?.errors?.otherloan}
              handleChange={formik?.handleChange}
            />
          )}
          <ASingleSelect
            id={'loanType'}
            label={'Loan Type'}
            options={loanTypes}
            variant={'horizantal'}
            value={formik?.values?.loanType}
            error={formik.errors.loanType}
            handleChange={formik.handleChange}
          />
          {formik?.values?.loanType === 'Other' && (
            <AInputField
              id={'otherloanType'}
              label={'Loan Type'}
              variant={'horizantal'}
              value={formik?.values?.otherloanType}
              error={formik?.errors?.otherloanType}
              handleChange={formik?.handleChange}
            />
          )}
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={() => formik.handleSubmit()}
      />
    </>
  );
};

export default LoanDetails;
