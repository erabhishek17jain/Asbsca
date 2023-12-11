import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ASingleSelect from '../../../components-global/ASingleSelect';
import {
  activityReason,
  applicantDoing,
  employeeDoing,
  stockReason,
  thirdPartyCheck,
  yesNoOptions,
} from '../constants';
import { useEffect } from 'react';

const initialValues = {
  businessPlateName: {
    exist: '',
    reasonForNo: '-',
  },
  activity: {
    exist: '',
    reasonForNo: '-',
  },
  customer: {
    exist: '',
    reasonForNo: '',
  },
  stock: {
    exist: '',
    reasonForNo: '-',
  },
  thirdPartyCheck: {
    exist: '',
    reasonForNo: '',
  },
  screenshotOfCCTV: {
    exist: '',
    reasonForNo: '-',
  },
  behaviourOfApplicant: '',
  duringVist: {
    applicantDoing: '',
    employeesDoing: '',
    otherObservation: '',
  },
} as any;

const OtherObservation = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const validationSchema = Yup.object().shape({
    businessPlateName: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.string().required('This field is required'),
    }),
    activity: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.string().required('This field is required'),
    }),
    customer: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.number().required('This field is required'),
    }),
    stock: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.string().required('This field is required'),
    }),
    thirdPartyCheck: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.string().required('This field is required'),
    }),
    screenshotOfCCTV: Yup.object({
      exist: Yup.string().required('This field is required'),
      reasonForNo: Yup.string().required('This field is required'),
    }),
    behaviourOfApplicant: Yup.string().required('This field is required'),
    duringVist: Yup.object({
      applicantDoing: Yup.string().required('This field is required'),
      employeesDoing: Yup.string().required('This field is required'),
      otherObservation: Yup.string().required('This field is required'),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, observations: { ...values } });
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
    if (payloads.observations) {
      formik.setFieldValue(
        'businessPlateName',
        payloads?.observations?.businessPlateName,
      );
      formik.setFieldValue('activity', payloads?.observations?.activity);
      formik.setFieldValue('customer', payloads?.observations?.customer);
      formik.setFieldValue('stock', payloads?.observations?.stock);
      formik.setFieldValue(
        'thirdPartyCheck',
        payloads?.observations?.thirdPartyCheck,
      );
      formik.setFieldValue(
        'screenshotOfCCTV',
        payloads?.observations?.screenshotOfCCTV,
      );
      formik.setFieldValue(
        'behaviourOfApplicant',
        payloads?.observations?.behaviourOfApplicant,
      );
      formik.setFieldValue('duringVist', payloads?.observations?.duringVist);
    }
  }, [payloads]);

  const errors: any = formik.errors;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ASection>
            <AGroupFields col={2} title={'Business Plate name seen'}>
              <ASingleSelect
                label={'Select'}
                options={yesNoOptions}
                id={`businessPlateName.exist`}
                value={formik?.values?.businessPlateName?.exist}
                error={errors?.businessPlateName?.exist}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Reason for No or NA'}
                options={yesNoOptions}
                disabled={
                  formik?.values?.businessPlateName?.exist === '' ||
                  formik?.values?.businessPlateName?.exist === 'Yes'
                }
                id={`businessPlateName.reasonForNo`}
                value={formik?.values?.businessPlateName?.reasonForNo}
                error={errors?.businessPlateName?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2} title={'Activtity Seen'}>
              <ASingleSelect
                label={'Select'}
                options={yesNoOptions}
                id={`activity.exist`}
                value={formik?.values?.activity?.exist}
                error={errors?.activity?.exist}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                label={'Reason for No or NA'}
                options={activityReason}
                id={`activity.reasonForNo`}
                disabled={
                  formik?.values?.activity?.exist === '' ||
                  formik?.values?.activity?.exist === 'Yes'
                }
                value={formik?.values?.activity?.reasonForNo}
                error={errors?.activity?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2} title={'Customer Seen'}>
              <ASingleSelect
                label={'Select'}
                options={yesNoOptions}
                id={`customer.exist`}
                value={formik?.values?.customer?.exist}
                error={errors?.customer?.exist}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={
                  formik?.values?.customer?.exist !== 'Yes'
                    ? 'Reason for No or NA'
                    : 'How many'
                }
                type={'number'}
                id={`customer.reasonForNo`}
                disabled={
                  formik?.values?.customer?.exist === '' ||
                  formik?.values?.customer?.exist !== 'Yes'
                }
                value={formik?.values?.customer?.reasonForNo}
                error={errors?.customer?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2} title={'Stock Seen'}>
              <ASingleSelect
                label={'Select'}
                options={yesNoOptions}
                id={`stock.exist`}
                value={formik?.values?.stock?.exist}
                error={errors?.stock?.exist}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                label={'Reason for No or NA'}
                options={stockReason}
                id={`stock.reasonForNo`}
                disabled={
                  formik?.values?.stock?.exist === '' ||
                  formik?.values?.stock?.exist === 'Yes'
                }
                value={formik?.values?.stock?.reasonForNo}
                error={errors?.stock?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2} title={'Third Party Check'}>
              <ASingleSelect
                label={'Select'}
                options={thirdPartyCheck}
                id={`thirdPartyCheck.exist`}
                value={formik?.values?.thirdPartyCheck?.exist}
                error={errors?.thirdPartyCheck?.exist}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={
                  formik?.values?.thirdPartyCheck?.exist === 'positive'
                    ? 'Done With'
                    : formik?.values?.thirdPartyCheck?.exist === 'negative'
                    ? 'Why Negative?'
                    : 'Why not Done?'
                }
                id={`thirdPartyCheck.reasonForNo`}
                disabled={formik?.values?.thirdPartyCheck?.exist === ''}
                value={formik?.values?.thirdPartyCheck?.reasonForNo}
                error={errors?.thirdPartyCheck?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields
              col={2}
              title={'Screenshot of CCTV of premises other than Visited'}
            >
              <ASingleSelect
                label={'Select'}
                options={[...yesNoOptions, { value: 'NA', label: 'NA' }]}
                id={`screenshotOfCCTV.exist`}
                value={formik?.values?.screenshotOfCCTV?.exist}
                error={errors?.screenshotOfCCTV?.exist}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Reason for No or NA'}
                disabled={formik?.values?.screenshotOfCCTV?.exist === 'Yes'}
                id={`screenshotOfCCTV.reasonForNo`}
                value={formik?.values?.screenshotOfCCTV?.reasonForNo}
                error={errors?.screenshotOfCCTV?.reasonForNo}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                id={'behaviourOfApplicant'}
                label={'Behaviour of applicant'}
                value={formik?.values?.behaviourOfApplicant}
                error={errors?.behaviourOfApplicant}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <p className="w-full mb-3">During Visit</p>
            <AGroupFields col={3}>
              <ASingleSelect
                options={applicantDoing}
                id={'duringVist.applicantDoing'}
                label={'What applicant were doing?'}
                value={formik?.values?.duringVist?.applicantDoing}
                error={errors?.duringVist?.applicantDoing}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                options={employeeDoing}
                id={'duringVist.employeesDoing'}
                label={'What employees were doing?'}
                value={formik?.values?.duringVist?.employeesDoing}
                error={errors?.duringVist?.employeesDoing}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'duringVist.otherObservation'}
                label={'Other observation during visit?'}
                value={formik?.values?.duringVist?.otherObservation}
                error={errors?.duringVist?.otherObservation}
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
