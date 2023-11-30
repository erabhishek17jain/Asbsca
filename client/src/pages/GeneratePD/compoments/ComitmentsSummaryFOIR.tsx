import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';

const comitments = [
  { title: 'Proposed EMI', value: 'proposedEMI' },
  { title: 'Existing EMI', value: 'existingEMI' },
  { title: 'BT EMI', value: 'btEMI' },
  { title: 'Closure EMI', value: 'closureEMI' },
  { title: 'LIC/Med./SIP/TP/Other', value: 'licMedSipTpOther' },
  { title: 'House Rent', value: 'houseRent' },
  { title: 'Total Commitments (Current)', value: 'totalCommitments' },
  { title: 'Total Present EMI', value: 'totalPresentEMI' },
  { title: 'Existing Commitments', value: 'existingCommitments' },
];

const ComitmentsSummaryFOIR = ({
  steps,
  action,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const initialValues: any = {
    proposedEMI: { amountPA: '', amountPM: '' },
    existingEMI: { amountPA: '', amountPM: '' },
    btEMI: { amountPA: '', amountPM: '' },
    closureEMI: { amountPA: '', amountPM: '' },
    licMedSipTpOther: { amountPA: '', amountPM: '' },
    houseRent: { amountPA: '', amountPM: '' },
    totalCommitments: { amountPA: '', amountPM: '' },
    totalPresentEMI: { amountPA: '', amountPM: '' },
    existingCommitments: { amountPA: '', amountPM: '' },
    onlyEMIRatio: '',
    foirRatio: '',
    totalCommitmentsRatio: '',
  };

  const validationSchema = Yup.object().shape({
    proposedEMI: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    existingEMI: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    btEMI: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    closureEMI: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    licMedSipTpOther: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    houseRent: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    totalCommitments: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    totalPresentEMI: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
    existingCommitments: Yup.object({
      amountPM: Yup.number().required('This field is required'),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, comitmentSummary: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const handleMonthly = (e: any) => {
    const { id, value } = e.target;
    formik.setFieldValue(`${id.slice(0, -1)}A`, (value * 12) / 100000);
    formik.handleChange(e);
  };

  useEffect(() => {
    if (action === 'start') {
      const emi = 41822;
      const yearEmi = ((emi * 12) / 100000).toFixed(2);
      const ratioPer = ((emi * 12) / 100000 / 75) * 100000;
      const ratioStr = `${ratioPer} (${yearEmi} Lakhs/${75} Lakhs)`;

      formik.setFieldValue('proposedEMI.amountPM', emi);
      formik.setFieldValue('proposedEMI.amountPA', yearEmi);
      formik.setFieldValue('totalCommitments.amountPM', emi);
      formik.setFieldValue('totalCommitments.amountPA', yearEmi);
      formik.setFieldValue('existingCommitments.amountPM', emi);
      formik.setFieldValue('existingCommitments.amountPA', yearEmi);
      formik.setFieldValue('onlyEMIRatio', ratioStr);
      formik.setFieldValue('foirRatio', ratioStr);
      formik.setFieldValue('totalCommitmentsRatio', ratioStr);
    }
  }, []);

  useEffect(() => {
    if (action === 'edit') {
      formik.setFieldValue(
        'proposedEMI',
        payloads.comitmentSummary?.proposedEMI,
      );
      formik.setFieldValue(
        'existingEMI',
        payloads?.comitmentSummary?.existingEMI,
      );
      formik.setFieldValue('btEMI', payloads?.comitmentSummary?.btEMI);
      formik.setFieldValue(
        'closureEMI',
        payloads?.comitmentSummary?.closureEMI,
      );
      formik.setFieldValue(
        'licMedSipTpOther',
        payloads.comitmentSummary?.licMedSipTpOther,
      );
      formik.setFieldValue('houseRent', payloads?.comitmentSummary?.houseRent);
      formik.setFieldValue(
        'totalCommitments',
        payloads?.comitmentSummary?.totalCommitments,
      );
      formik.setFieldValue(
        'totalPresentEMI',
        payloads.comitmentSummary?.totalPresentEMI,
      );
      formik.setFieldValue(
        'existingCommitments',
        payloads?.comitmentSummary?.existingCommitments,
      );
      formik.setFieldValue(
        'onlyEMIRatio',
        payloads.comitmentSummary?.onlyEMIRatio,
      );
      formik.setFieldValue('foirRatio', payloads?.comitmentSummary?.foirRatio);
      formik.setFieldValue(
        'totalCommitmentsRatio',
        payloads?.comitmentSummary?.totalCommitmentsRatio,
      );
    }
  }, [payloads]);

  const errors: any = formik?.errors;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ASection>
            {comitments?.map((item) => (
              <AGroupFields col={3} title={item?.title}>
                <AInputField
                  type={'number'}
                  id={`${item?.value}.amountPM`}
                  label={'Amount PM'}
                  rightLabel={'(Rs.)'}
                  value={formik?.values[item?.value]?.amountPM}
                  error={errors[item?.value] && errors[item?.value]?.amountPM}
                  handleChange={handleMonthly}
                />
                <AInputField
                  type={'number'}
                  id={`${item?.value}?.amountPA`}
                  label={'Amount PA'}
                  rightLabel={'(Lakhs)'}
                  value={formik?.values[item?.value]?.amountPA}
                  error={errors[item?.value] && errors[item?.value]?.amountPA}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            ))}
            <AGroupFields col={3}>
              <AInputField
                disabled={true}
                id={'onlyEMIRatio'}
                label={'Only EMI Ratio'}
                value={formik?.values?.onlyEMIRatio}
                error={errors?.onlyEMIRatio}
                handleChange={formik.handleChange}
              />
              <AInputField
                disabled={true}
                id={'foirRatio'}
                label={'FOIR Ratio (EMI + Other Con.)'}
                value={formik?.values?.foirRatio}
                error={errors?.foirRatio}
                handleChange={formik.handleChange}
              />
              <AInputField
                disabled={true}
                id={'totalCommitmentsRatio'}
                label={'Total Commitments Ratio'}
                value={formik?.values?.totalCommitmentsRatio}
                error={errors?.totalCommitmentsRatio}
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

export default ComitmentsSummaryFOIR;
