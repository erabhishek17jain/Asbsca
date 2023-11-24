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

  const validationSchema = Yup.object().shape({});

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: {} });
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
    // setClientOptions(getOptions(allClients, 'name', '_id'));
    setClientOptions([{label:'Axis Bank', value:'hkhbkxjkxcmxkcm'}]);
  }, [allClients]);
  return (
    <>
      <div className="flex flex-col w-[60%] py-4">
        <ASingleSelect
          id={'bankName'}
          label={'Bank Name*'}
          options={clientOptions}
          variant={'horizantal'}
          error={formik.errors.bankName}
          formik={formik.getFieldProps('bankName')}
        />
        <ASingleSelect
          id={'loan'}
          label={'Loan'}
          options={loans}
          variant={'horizantal'}
          error={formik.errors.loan}
          formik={formik.getFieldProps('loan')}
        />
        <ASingleSelect
          id={'loanType'}
          label={'Loan Type'}
          options={loanTypes}
          variant={'horizantal'}
          error={formik.errors.loanType}
          formik={formik.getFieldProps('loanType')}
        />
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
