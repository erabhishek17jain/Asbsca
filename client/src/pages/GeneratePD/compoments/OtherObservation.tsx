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
    businessPlateName: {
      exist: '',
      reasonForNo: '',
    },
    activity: {
      exist: '',
      reasonForNo: '',
    },
    customer: {
      exist: '',
      reasonForNo: '',
    },
    stock: {
      exist: '',
      reasonForNo: '',
    },
    thirdPartyCheck: {
      exist: '',
      reasonForNo: '',
    },
    screenshotOfCCTVofPremises: {
      exist: '',
      reasonForNo: '',
    },
    behaviourOfApplicant: '',
    duringVist: {
      applicantDoing: '',
      employeesDoing: '',
      otherObservation: '',
    },
  };

  const validationSchema = Yup.object().shape({});

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
                <AInputField  name={'select'} label={'Select'} />
                <AInputField
                  
                  name={'reason'}
                  label={'Reason if No or NA'}
                />
              </AGroupFields>
            ))}
            <AGroupFields col={2}>
              <AInputField
                
                name={'behaviour'}
                label={'Behaviour of applicant'}
              />
            </AGroupFields>
            <p className="w-full mb-3">During Visit</p>
            <AGroupFields col={3}>
              <AInputField
                
                name={'applicantDoing'}
                label={'What applicant were doing?'}
              />
              <AInputField
                
                name={'employeesDoing'}
                label={'What employees were doing?'}
              />
              <AInputField
                
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
