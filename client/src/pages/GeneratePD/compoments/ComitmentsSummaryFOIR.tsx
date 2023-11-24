import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const comitments = [
  { title: 'Proposed EMI' },
  { title: 'Existing EMI' },
  { title: 'BT EMI' },
  { title: 'Closure EMI' },
  { title: 'LIC/Med./SIP/TP/Other' },
  { title: 'House Rent' },
  { title: 'Total Commitments (Current)' },
  { title: 'Total Present EMI' },
  { title: 'Existing Commitments' },
];

const ComitmentsSummaryFOIR = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {

  
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
  
  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ASection>
            {comitments.map((item) => (
              <AGroupFields col={2} title={item.title}>
                <AInputField
                  type={'text'}
                  name={'amountPA'}
                  label={'Amount P.A.'}
                />
                <AInputField
                  type={'text'}
                  name={'amountPM'}
                  label={'Amount P.M.'}
                />
              </AGroupFields>
            ))}
            <AGroupFields col={3}>
              <AInputField
                type={'text'}
                name={'emiRatio'}
                label={'Only EMI Ratio'}
              />
              <AInputField
                type={'text'}
                name={'emiRatio'}
                label={'FOIR Ratio (EMI + Other Con.)'}
              />
              <AInputField
                type={'text'}
                name={'emiRatio'}
                label={'Total Commitments Ratio'}
              />
            </AGroupFields>
          </ASection>
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};

export default ComitmentsSummaryFOIR;
