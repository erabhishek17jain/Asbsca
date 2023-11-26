import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { applicantDoing, employeeDoing, yesNoOptions } from '../constants';

const observations = [
  { title: 'Business Plate name seen', value: 'businessPlateName' },
  { title: 'Activtity Seen', value: 'activity' },
  { title: 'Customer Seen', value: 'customer' },
  { title: 'Stock seen', value: 'stock' },
  { title: 'Third Party Check', value: 'thirdPartyCheck' },
  {
    title: 'Screenshot of CCTV of premises other than Visited',
    value: 'screenshotOfCCTVofPremises',
  },
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
  } as any;

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
            {observations.map((item: any) => (
              <AGroupFields col={2} title={item.title}>
                <ASingleSelect
                  label={'Select'}
                  options={yesNoOptions}
                  id={`[${item.value}].exist`}
                  value={formik.values[item.value].exist}
                  error={formik.values[item.value].exist}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  id={`[${item.value}].reasonForNo`}
                  label={'Reason if No or NA'}
                  value={formik.values[item.value].reasonForNo}
                  error={formik.values[item.value].reasonForNo}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            ))}
            <AGroupFields col={2}>
              <AInputField
                id={'behaviourOfApplicant'}
                label={'Behaviour of applicant'}
                value={formik.values.behaviourOfApplicant}
                error={formik.errors.behaviourOfApplicant}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <p className="w-full mb-3">During Visit</p>
            <AGroupFields col={3}>
              <ASingleSelect
                options={applicantDoing}
                id={'duringVist.applicantDoing'}
                label={'What applicant were doing?'}
                value={formik.values.duringVist.applicantDoing}
                error={formik.values.duringVist.applicantDoing}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                options={employeeDoing}
                id={'duringVist.employeesDoing'}
                label={'What employees were doing?'}
                value={formik.values.duringVist.employeesDoing}
                error={formik.values.duringVist.employeesDoing}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'duringVist.otherObservation'}
                label={'Other observation during visit?'}
                value={formik.values.duringVist.otherObservation}
                error={formik.values.duringVist.otherObservation}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
          </ASection>
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

export default OtherObservation;
