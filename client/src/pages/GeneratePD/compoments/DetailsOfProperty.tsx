import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  occupiedBy,
  sourceOcr,
  propertyLoanOptions,
  purchaseYear,
  putPB,
} from '../constants';
import { useEffect } from 'react';

const initialValues: any = {
  purchaseYear: '',
  otherpurchaseYear: '',
  buildUpArea: '',
  carpetArea: '',
  occupiedBy: '',
  otheroccupiedBy: '',
  loanPropertyAddress: '',
  builderName: '',
  propertyLoanDetails: {
    isLoanProvided: '',
    loanDetails: { amount: '', emi: '', roi: '', year: '' },
    propertyValue: {
      agreementValue: '',
      purchaseValue: '',
      marketValue: '',
      ocrPaid: '',
      pOrb: '',
      balanceOcr: '',
      sourceOcr: '',
      othersourceOcr: '',
    },
    loanAsPerForm: '',
  },
};

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
    formik.setFieldValue('propertyLoanDetails.propertyValue.pOrb', 'NP');
    formik.setFieldValue('propertyLoanDetails.propertyValue.sourceOcr', 'NP');
    formik.setFieldValue('propertyLoanDetails.loanDetails.amount', 0);
  };

  const validationSchema = Yup.object().shape({
    purchaseYear: Yup.string().required('This field is required'),
    buildUpArea: Yup.string().required('This field is required'),
    carpetArea: Yup.string().required('This field is required'),
    occupiedBy: Yup.string().required('This field is required'),
    loanPropertyAddress: Yup.string().required('This field is required'),
    builderName: Yup.string().required('This field is required'),
    propertyLoanDetails: Yup.object({
      propertyValue: Yup.object({
        agreementValue: Yup.string().required('This field is required'),
        purchaseValue: Yup.string().required('This field is required'),
        marketValue: Yup.string().required('This field is required'),
        ocrPaid: Yup.string().required('This field is required'),
        pOrb: Yup.string().required('This field is required'),
        sourceOcr: Yup.string().required('This field is required'),
      }),
      loanDetails: Yup.object({
        amount: Yup.string().required('This field is required'),
        emi: Yup.string().required('This field is required'),
        roi: Yup.string().required('This field is required'),
        year: Yup.string().required('This field is required'),
      }),
      loanAsPerForm: Yup.string().required('This field is required'),
    }),
  });

  const validation = async (values: any) => {
    const errors: any = {};
    if (parseInt(values?.buildUpArea) < parseInt(values?.carpetArea)) {
      errors.buildUpArea =
        'Build up area should be more than or equal to carpet area';
    }
    if (
      parseInt(values?.propertyLoanDetails?.propertyValue?.agreementValue) >
        parseInt(values?.propertyLoanDetails?.propertyValue?.marketValue) ||
      parseInt(values?.propertyLoanDetails?.propertyValue?.agreementValue) >
        parseInt(values?.propertyLoanDetails?.propertyValue?.purchaseValue)
    ) {
      errors.propertyLoanDetails.propertyValue.agreementValue =
        'Agreement value should be less than or equal to purchase/market value';
    }
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, detailsOfProp: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validate: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const handlePurchaseYear = (e: any) => {
    const { value } = e.target;
    const option = purchaseYear.find((item: any) => item.value === value);
    formik.setFieldValue(
      'buildUpArea',
      !(value === 'Select Year' || value === 'NP') ? 0 : '',
    );
    formik.setFieldValue(
      'carpetArea',
      !(value === 'Select Year' || value === 'NP') ? 0 : '',
    );
    formik.setFieldValue(
      'occupiedBy',
      !(value === 'Select Year' || value === 'NP') ? value : '',
    );
    formik.setFieldValue(
      'loanPropertyAddress',
      !(value === 'Select Year' || value === 'NP') ? option?.label : '',
    );
    formik.setFieldValue(
      'builderName',
      !(value === 'Select Year' || value === 'NP') ? option?.label : '',
    );
    formik.handleChange(e);
  };

  const setBalance = () => {
    const agreementValue =
      formik.values.propertyLoanDetails.propertyValue.agreementValue === '' ||
      formik.values.propertyLoanDetails.propertyValue.agreementValue === 'NP'
        ? 0
        : formik.values.propertyLoanDetails.propertyValue.agreementValue;
    const purchaseValue =
      formik.values.propertyLoanDetails.propertyValue.purchaseValue === '' ||
      formik.values.propertyLoanDetails.propertyValue.purchaseValue === 'NP'
        ? 0
        : formik.values.propertyLoanDetails.propertyValue.purchaseValue;
    const amount =
      formik.values.propertyLoanDetails.loanDetails.amount === '' ||
      formik.values.propertyLoanDetails.loanDetails.amount === 'NP'
        ? 0
        : formik.values.propertyLoanDetails.loanDetails.amount;
    const ocrPaid =
      formik.values.propertyLoanDetails.propertyValue.ocrPaid === '' ||
      formik.values.propertyLoanDetails.propertyValue.ocrPaid === 'NP'
        ? 0
        : formik.values.propertyLoanDetails.propertyValue.ocrPaid;

    const balance = Math.max(agreementValue, purchaseValue) - amount - ocrPaid;

    formik.setFieldValue(
      'propertyLoanDetails.propertyValue.balanceOcr',
      balance,
    );
  };

  const calculateEMI = () => {
    const ir = formik?.values?.propertyLoanDetails?.loanDetails?.roi / 100 / 12;
    const np = formik?.values?.propertyLoanDetails?.loanDetails?.year * 12;
    const pv =
      formik?.values?.propertyLoanDetails?.loanDetails?.amount * 100000;
    const pvif = Math.pow(1 + ir, np);
    const pmt = (-ir * (pv * pvif)) / (pvif - 1);
    formik.setFieldValue(
      'propertyLoanDetails.loanDetails.emi',
      (-pmt / 100000).toFixed(2),
    );
  };

  useEffect(() => {
    if (formik?.values.occupiedBy !== '') {
      formik.setFieldValue(
        'builderName',
        formik?.values.occupiedBy !== 'Under Construction'
          ? 'NA'
          : formik?.values.builderName,
      );
    }
  }, [formik?.values?.occupiedBy]);

  useEffect(() => {
    calculateEMI();
  }, [formik?.values?.propertyLoanDetails?.loanDetails]);

  useEffect(() => {
    setBalance();
  }, [formik?.values?.propertyLoanDetails?.propertyValue]);

  useEffect(() => {
    if (payloads.detailsOfProp) {
      formik.setFieldValue(
        'purchaseYear',
        payloads.detailsOfProp?.purchaseYear,
      );
      formik.setFieldValue(
        'otherpurchaseYear',
        payloads.detailsOfProp?.otherpurchaseYear,
      );
      formik.setFieldValue('buildUpArea', payloads?.detailsOfProp?.buildUpArea);
      formik.setFieldValue('carpetArea', payloads.detailsOfProp?.carpetArea);
      formik.setFieldValue('occupiedBy', payloads?.detailsOfProp?.occupiedBy);
      formik.setFieldValue(
        'otheroccupiedBy',
        payloads?.detailsOfProp?.otheroccupiedBy,
      );
      formik.setFieldValue(
        'loanPropertyAddress',
        payloads.detailsOfProp?.loanPropertyAddress,
      );
      formik.setFieldValue('builderName', payloads?.detailsOfProp?.builderName);
      formik.setFieldValue(
        'propertyLoanDetails',
        payloads?.detailsOfProp?.propertyLoanDetails,
      );
    } else {
      formik.setFieldValue(`propertyLoanDetails.loanDetails.roi`, 8);
      formik.setFieldValue(`propertyLoanDetails.loanDetails.year`, 20);
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
                isSelectOption={false}
                value={formik?.values?.purchaseYear}
                error={formik?.errors?.purchaseYear}
                handleChange={handlePurchaseYear}
              />
              {(formik?.values?.purchaseYear === 'NP' ||
                formik?.values?.purchaseYear === 'Select Year') && (
                <AInputField
                  id={'otherpurchaseYear'}
                  label={'Purchase Year'}
                  value={formik?.values?.otherpurchaseYear}
                  error={formik?.errors?.otherpurchaseYear}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
                id={'carpetArea'}
                label={'Carpet Area'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.carpetArea}
                error={formik?.errors?.carpetArea}
                handleChange={formik?.handleChange}
                disabled={
                  !(
                    formik?.values?.purchaseYear === 'Select Year' ||
                    formik?.values?.purchaseYear === 'NP'
                  )
                }
              />
              <AInputField
                id={'buildUpArea'}
                label={'Build-up Area'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.buildUpArea}
                error={formik?.errors?.buildUpArea}
                handleChange={formik?.handleChange}
                disabled={
                  !(
                    formik?.values?.purchaseYear === 'Select Year' ||
                    formik?.values?.purchaseYear === 'NP'
                  )
                }
              />
              <ASingleSelect
                id={'occupiedBy'}
                label={'Occupied By'}
                options={occupiedBy}
                value={formik?.values?.occupiedBy}
                error={formik?.errors?.occupiedBy}
                handleChange={formik?.handleChange}
                disabled={
                  !(
                    formik?.values?.purchaseYear === 'Select Year' ||
                    formik?.values?.purchaseYear === 'NP'
                  )
                }
              />
              {formik?.values?.occupiedBy === 'Other' && (
                <AInputField
                  id={'otheroccupiedBy'}
                  label={'Occupied By'}
                  value={formik?.values?.otheroccupiedBy}
                  error={formik?.errors?.otheroccupiedBy}
                  handleChange={formik?.handleChange}
                  disabled={
                    !(
                      formik?.values?.purchaseYear === 'Select Year' ||
                      formik?.values?.purchaseYear === 'NP'
                    )
                  }
                />
              )}
              <AInputField
                id={'loanPropertyAddress'}
                label={'Loan Property Address'}
                value={formik?.values?.loanPropertyAddress}
                error={formik?.errors?.loanPropertyAddress}
                handleChange={formik?.handleChange}
                disabled={
                  !(
                    formik?.values?.purchaseYear === 'Select Year' ||
                    formik?.values?.purchaseYear === 'NP'
                  )
                }
              />
              <AInputField
                id={'builderName'}
                label={'Builder Name'}
                value={formik?.values?.builderName}
                error={formik?.errors?.builderName}
                handleChange={formik?.handleChange}
                disabled={
                  !(
                    formik?.values?.purchaseYear === 'Select Year' ||
                    formik?.values?.purchaseYear === 'NP'
                  ) || formik?.values.occupiedBy !== 'Under Construction'
                }
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
            'Property Vaue Not Provided' ||
            formik?.values?.propertyLoanDetails?.isLoanProvided === '') && (
            <ASection title={'Loan Applied'}>
              <AGroupFields>
                <AInputField
                  label={'Amount'}
                  rightLabel={'(In Lakhs)'}
                  id={`propertyLoanDetails.loanDetails.amount`}
                  value={
                    formik?.values?.propertyLoanDetails?.loanDetails?.amount
                  }
                  error={errors?.loanDetails?.amount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'ROI'}
                  rightLabel={'(%)'}
                  id={`propertyLoanDetails.loanDetails.roi`}
                  value={formik?.values?.propertyLoanDetails?.loanDetails?.roi}
                  error={errors?.loanDetails?.roi}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'Year'}
                  id={`propertyLoanDetails.loanDetails.year`}
                  value={formik?.values?.propertyLoanDetails?.loanDetails?.year}
                  error={errors?.loanDetails?.year}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'EMI'}
                  disabled={true}
                  rightLabel={'(In Lakhs)'}
                  id={`propertyLoanDetails.loanDetails.emi`}
                  value={formik?.values?.propertyLoanDetails?.loanDetails?.emi}
                  error={errors?.loanDetails?.emi}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            </ASection>
          )}
          {(formik?.values?.propertyLoanDetails?.isLoanProvided ===
            'Loan Details Not Provided' ||
            formik?.values?.propertyLoanDetails?.isLoanProvided === '') && (
            <ASection title={'Property Value'}>
              <AGroupFields>
                <AInputField
                  rightLabel={'(In Lakhs)'}
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
                  rightLabel={'(In Lakhs)'}
                  label={'Market Value'}
                  id={'propertyLoanDetails.propertyValue.marketValue'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.marketValue
                  }
                  error={errors?.propertyValue?.marketValue}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  rightLabel={'(In Lakhs)'}
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
                  rightLabel={'(In Lakhs)'}
                  id={'propertyLoanDetails.propertyValue.ocrPaid'}
                  label={'OCR Paid'}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue?.ocrPaid
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
                <AInputField
                  disabled={true}
                  rightLabel={'(In Lakhs)'}
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
                  isSelectOption={false}
                  value={
                    formik?.values?.propertyLoanDetails?.propertyValue
                      ?.sourceOcr
                  }
                  error={errors?.propertyValue?.sourceOcr}
                  handleChange={formik.handleChange}
                />
                {formik?.values?.propertyLoanDetails?.propertyValue
                  ?.sourceOcr === 'Other' && (
                  <AInputField
                    id={'propertyLoanDetails.propertyValue.othersourceOcr'}
                    label={'Source OCR'}
                    value={
                      formik?.values?.propertyLoanDetails?.propertyValue
                        ?.othersourceOcr
                    }
                    error={errors?.propertyValue?.othersourceOcr}
                    handleChange={formik.handleChange}
                  />
                )}
              </AGroupFields>
            </ASection>
          )}
          <AGroupFields col={2}>
            <AInputField
              id={'propertyLoanDetails.loanAsPerForm'}
              rightLabel={'(In Lakhs)'}
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
