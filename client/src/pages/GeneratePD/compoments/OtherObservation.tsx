import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const observations = [
  { title: 'Business Plate name seen' },
  { title: 'Activtity Seen' },
  { title: 'Customer Seen' },
  { title: 'Stock seen' },
  { title: 'Third Party Check' },
  { title: 'Screenshot of CCTV of premises other than Visited' },
];

const OtherObservation = ({
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
            {observations.map((item) => (
              <AGroupFields col={2} title={item.title}>
                <AInputField type={'text'} name={'select'} label={'Select'} />
                <AInputField
                  type={'text'}
                  name={'reason'}
                  label={'Reason if No or NA'}
                />
              </AGroupFields>
            ))}
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
                name={'behaviour'}
                label={'Behaviour of applicant'}
              />
            </AGroupFields>
            <p className="w-full mb-3">During Visit</p>
            <AGroupFields col={3}>
              <AInputField
                type={'text'}
                name={'applicantDoing'}
                label={'What applicant were doing?'}
              />
              <AInputField
                type={'text'}
                name={'employeesDoing'}
                label={'What employees were doing?'}
              />
              <AInputField
                type={'text'}
                name={'other'}
                label={'Other observation during visit?'}
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

export default OtherObservation;
