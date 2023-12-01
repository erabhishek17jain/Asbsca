import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AddTagButton } from '../../../components-global/ATags';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import {
  occupiedBy,
  sourceOcr,
  propertyLoanOptions,
  purchaseYear,
  putPB,
} from '../constants';
import { useEffect } from 'react';

const loanInfo = { amount: '', emi: '', roi: '', year: '' };
const DetailsOfProperty = ({
  steps,

  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const handleLoanPropertyEMI = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('propertyLoanDetails.isLoanProvided', val);
  };

  const initialValues: any = {
    purchaseYear: '',
    buildUpArea: '',
    caretArea: '',
    occupiedBy: '',
    loanPropertyAddress: '',
    builderName: '',
    propertyLoanDetails: {
      isLoanProvided: '',
      loanDetails: [{ ...loanInfo }],
      propertyValue: {
        agreementValue: '',
        purchaseValue: '',
        marketValue: '',
        ocrPaid: '',
        pOrb: '',
        balanceOcr: '',
        sourceOcr: '',
      },
      loanAsPerForm: '',
    },
  };

  const validationSchema = Yup.object().shape({
    purchaseYear: Yup.string().required('This field is required'),
    buildUpArea: Yup.number().required('This field is required'),
    caretArea: Yup.number().required('This field is required'),
    occupiedBy: Yup.string().required('This field is required'),
    loanPropertyAddress: Yup.string().required('This field is required'),
    builderName: Yup.string().required('This field is required'),
    propertyLoanDetails: Yup.object({
      propertyValue: Yup.object({
        agreementValue: Yup.number().required('This field is required'),
        purchaseValue: Yup.number().required('This field is required'),
        marketValue: Yup.number().required('This field is required'),
        ocrPaid: Yup.number().required('This field is required'),
        pOrb: Yup.string().required('This field is required'),
        sourceOcr: Yup.string().required('This field is required'),
      }),
      loanAsPerForm: Yup.number().required('This field is required'),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, detailsOfProp: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const handlePurchaseYear = (e: any) => {
    const { value } = e.target;
    const option = purchaseYear.find((item: any) => item.value === value);
    formik.setFieldValue('buildUpArea', value !== 'lastYear' ? 0 : '');
    formik.setFieldValue('caretArea', value !== 'lastYear' ? 0 : '');
    formik.setFieldValue('occupiedBy', value !== 'lastYear' ? value : '');
    formik.setFieldValue(
      'loanPropertyAddress',
      value !== 'lastYear' ? option?.label : '',
    );
    formik.setFieldValue(
      'builderName',
      value !== 'lastYear' ? option?.label : '',
    );
    formik.handleChange(e);
  };

  const handleLoanAmount = (e: any) => {
    const { id, value } = e.target;
    if (id.includes('loan')) {
      const n = id.lastIndexOf('.');
      const parentId = id.substring(0, n);
      formik.setFieldValue(`${parentId}.emi`, 10); // to do calculate emi
    }
    formik.setFieldValue('propertyLoanDetails.propertyValue.balanceOcr', value); // to do calculate balance ocr
    formik.handleChange(e);
  };

  useEffect(() => {
    formik.setFieldValue(`propertyLoanDetails.loanDetails[0].roi`, 8);
    formik.setFieldValue(`propertyLoanDetails.loanDetails[0].year`, 20);
  }, []);

  useEffect(() => {
    if (payloads.detailsOfProp) {
      formik.setFieldValue(
        'purchaseYear',
        payloads.detailsOfProp?.purchaseYear,
      );
      formik.setFieldValue('buildUpArea', payloads?.detailsOfProp?.buildUpArea);
      formik.setFieldValue('caretArea', payloads.detailsOfProp?.caretArea);
      formik.setFieldValue('occupiedBy', payloads?.detailsOfProp?.occupiedBy);
      formik.setFieldValue(
        'loanPropertyAddress',
        payloads.detailsOfProp?.loanPropertyAddress,
      );
      formik.setFieldValue('builderName', payloads?.detailsOfProp?.builderName);
      formik.setFieldValue(
        'propertyLoanDetails',
        payloads?.detailsOfProp?.propertyLoanDetails,
      );
    }
  }, [payloads]);

  const errors: any = formik?.errors?.propertyLoanDetails;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col">
          <ASection title={'Property Details'}>
            <AGroupFields>
              <ASingleSelect
                id={'purchaseYear'}
                label={'Purchase Year'}
                options={purchaseYear}
                value={formik?.values?.purchaseYear}
                error={formik?.errors?.purchaseYear}
                handleChange={handlePurchaseYear}
              />
              <AInputField
                type={'number'}
                id={'buildUpArea'}
                label={'Build-up Area'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.buildUpArea}
                error={formik?.errors?.buildUpArea}
                handleChange={formik?.handleChange}
                disabled={formik?.values?.purchaseYear !== 'lastYear'}
              />
              <AInputField
                type={'number'}
                id={'caretArea'}
                label={'Carpet Area'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.caretArea}
                error={formik?.errors?.caretArea}
                handleChange={formik?.handleChange}
                disabled={formik?.values?.purchaseYear !== 'lastYear'}
              />
              <ASingleSelect
                id={'occupiedBy'}
                label={'Occupied By'}
                options={occupiedBy}
                value={formik?.values?.occupiedBy}
                error={formik?.errors?.occupiedBy}
                handleChange={formik?.handleChange}
                disabled={formik?.values?.purchaseYear !== 'lastYear'}
              />
              <AInputField
                id={'loanPropertyAddress'}
                label={'Loan Property Address'}
                value={formik?.values?.loanPropertyAddress}
                error={formik?.errors?.loanPropertyAddress}
                handleChange={formik?.handleChange}
                disabled={formik?.values?.purchaseYear !== 'lastYear'}
              />
              <AInputField
                id={'builderName'}
                label={'Builder Name'}
                value={formik?.values?.builderName}
                error={formik?.errors?.builderName}
                handleChange={formik?.handleChange}
                disabled={formik?.values?.purchaseYear !== 'lastYear'}
              />
            </AGroupFields>
          </ASection>
          <ARadioButtonGroup
            isReset={() => handleLoanPropertyEMI('', '')}
            value={formik?.values?.propertyLoanDetails?.isLoanProvided}
            title={'Loan to Property'}
            radioValues={propertyLoanOptions}
            handleChange={handleLoanPropertyEMI}
          />
          {(formik?.values?.propertyLoanDetails?.isLoanProvided ===
            'propertyValueNotProvided' ||
            formik?.values?.propertyLoanDetails?.isLoanProvided === '') && (
            <ASection title={'Loan Applied'}>
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="propertyLoanDetails?.loanDetails"
                    render={(tag) => (
                      <div>
                        {formik?.values?.propertyLoanDetails?.loanDetails
                          ?.length > 0 ? (
                          formik?.values?.propertyLoanDetails?.loanDetails?.map(
                            (item: any, index: any) => (
                              <div
                                key={item?.name}
                                className="flex items-center w-full gap-3 mb-3"
                              >
                                <div className="w-full border-2 rounded-lg pt-3 px-3">
                                  <AGroupFields>
                                    <AInputField
                                      type={'number'}
                                      label={'Amount'}
                                      rightLabel={'(Lakhs)'}
                                      id={`propertyLoanDetails.loanDetails[${index}].amount`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          ?.loanDetails[index]?.amount
                                      }
                                      error={
                                        errors?.loanDetails?.length > 0 &&
                                        errors?.loanDetails[index]?.amount
                                      }
                                      handleChange={handleLoanAmount}
                                    />
                                    <AInputField
                                      type={'number'}
                                      label={'ROI'}
                                      rightLabel={'(%)'}
                                      id={`propertyLoanDetails.loanDetails[${index}].roi`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          ?.loanDetails[index]?.roi
                                      }
                                      error={
                                        errors?.loanDetails?.length > 0 &&
                                        errors?.loanDetails[index]?.roi
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      label={'Year'}
                                      id={`propertyLoanDetails.loanDetails[${index}].year`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          ?.loanDetails[index]?.year
                                      }
                                      error={
                                        errors?.loanDetails?.length > 0 &&
                                        errors?.loanDetails[index]?.year
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      label={'EMI'}
                                      disabled={true}
                                      rightLabel={'(Rs.)'}
                                      id={`propertyLoanDetails.loanDetails[${index}].emi`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          ?.loanDetails[index]?.emi
                                      }
                                      error={
                                        errors?.loanDetails?.length > 0 &&
                                        errors?.loanDetails[index]?.emi
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                  </AGroupFields>
                                </div>
                              </div>
                            ),
                          )
                        ) : (
                          <AddTagButton
                            title={'Add Loan'}
                            addTag={() => tag.push(loanInfo)}
                          />
                        )}
                      </div>
                    )}
                  />
                </form>
              </FormikProvider>
            </ASection>
          )}
          {(formik?.values?.propertyLoanDetails?.isLoanProvided ===
            'loanDetailsNotProvided' ||
            formik?.values?.propertyLoanDetails?.isLoanProvided === '') && (
            <ASection title={'Property Value'}>
              <AGroupFields>
                <AInputField
                  type={'number'}
                  rightLabel={'(Lakhs)'}
                  id={'propertyLoanDetails.propertyValue.agreementValue'}
                  label={'Agreement Value'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.agreementValue
                  }
                  error={errors?.propertyValue?.agreementValue}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  type={'number'}
                  rightLabel={'(Lakhs)'}
                  id={'propertyLoanDetails.propertyValue.purchaseValue'}
                  label={'Purchase Value'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.purchaseValue
                  }
                  error={errors?.propertyValue?.purchaseValue}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  type={'number'}
                  rightLabel={'(Lakhs)'}
                  label={'Market Value'}
                  id={'propertyLoanDetails.propertyValue.marketValue'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.marketValue
                  }
                  error={errors?.propertyValue?.marketValue}
                  handleChange={formik.handleChange}
                />
                <div className="flex gap-3">
                  <AInputField
                    type={'number'}
                    rightLabel={'(Lakhs)'}
                    id={'propertyLoanDetails.propertyValue.ocrPaid'}
                    label={'OCR Paid'}
                    value={
                      formik?.values?.propertyLoanDetails?.propertyValue
                        ?.ocrPaid
                    }
                    error={errors?.propertyValue?.ocrPaid}
                    handleChange={formik.handleChange}
                  />
                  <ASingleSelect
                    id={'propertyLoanDetails.propertyValue.pOrb'}
                    label={'P/B'}
                    options={putPB}
                    value={
                      formik?.values?.propertyLoanDetails?.propertyValue?.pOrb
                    }
                    error={errors?.propertyValue?.pOrb}
                    handleChange={formik.handleChange}
                  />
                </div>
                <AInputField
                  type={'number'}
                  disabled={true}
                  rightLabel={'(Lakhs)'}
                  id={'propertyLoanDetails.propertyValue.balanceOcr'}
                  label={'Balance OCR'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.balanceOcr
                  }
                  error={errors?.propertyValue?.balanceOcr}
                  handleChange={formik.handleChange}
                />
                <ASingleSelect
                  id={'propertyLoanDetails.propertyValue.sourceOcr'}
                  label={'Source OCR'}
                  options={sourceOcr}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.sourceOcr
                  }
                  error={errors?.propertyValue?.sourceOcr}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            </ASection>
          )}
          <AGroupFields col={2}>
            <AInputField
              id={'propertyLoanDetails.loanAsPerForm'}
              rightLabel={'(Lakhs)'}
              label={'Loan as per application Form'}
              value={formik?.values?.propertyLoanDetails?.loanAsPerForm}
              error={errors?.loanAsPerForm}
              handleChange={formik.handleChange}
            />
          </AGroupFields>
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

export default DetailsOfProperty;
