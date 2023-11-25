import ASingleSelect from '../../../components-global/ASingleSelect';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOptions } from '../../../utils';
import { loanTypes, loans } from '../constants';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';

const LoanDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);

  const initialValues = {
    loan: '',
    loanType: '',
    bankName: '',
  };

  const validationSchema = Yup.object().shape({
    loan: Yup.string().required('This field is required'),
    loanType: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: { ...values } });
    handleNext();
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
  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-[60%] py-4">
          <ASingleSelect
            id={'bankName'}
            label={'Bank Name*'}
            options={clientOptions}
            variant={'horizantal'}
            value={formik.values.bankName}
            error={formik.errors.bankName}
            handleChange={formik.handleChange}
          />
          <ASingleSelect
            id={'loan'}
            label={'Loan'}
            options={loans}
            variant={'horizantal'}
            value={formik.values.loan}
            error={formik.errors.loan}
            handleChange={formik.handleChange}
          />
          <ASingleSelect
            id={'loanType'}
            label={'Loan Type'}
            options={loanTypes}
            variant={'horizantal'}
            value={formik.values.loanType}
            error={formik.errors.loanType}
            handleChange={formik.handleChange}
          />
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
