import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AddTagButton, AddTagFooter } from '../../../components-global/ATags';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import {
  purchaseYear,
  occupiedBy,
  putPB,
  sourceOcr,
  propertyLoanOptions,
} from '../constants';

const loanFooter = [
  {
    label: 'Total Amt',
    value: '0',
  },
  {
    label: 'Total EMI',
    value: '0',
  },
];

const loanInfo = { amount: '', emi: '', roi: '', year: '' };

const DetailsOfProperty = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [loanPropertyEMI, setLoanPropertyEMI] = useState<string>('');

  const handleLoanPropertyEMI = (title: string, val: string) => {
    setLoanPropertyEMI(val);
  };
  const initialValues = {
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
        <div className="flex flex-col">
          <ASection title={'Property Details'}>
            <AGroupFields>
              <ASingleSelect
                id={'purchaseYear'}
                label={'Purchase Year'}
                options={purchaseYear}
                value={formik.values.purchaseYear}
                error={formik.errors.purchaseYear}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'buildUpArea'}
                label={'Build-up Area (Sq. Ft.)'}
                value={formik.values.buildUpArea}
                error={formik.errors.buildUpArea}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'caretArea'}
                label={'Carpet Area (Sq. Ft.)'}
                value={formik.values.caretArea}
                error={formik.errors.caretArea}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                id={'occupiedBy'}
                label={'Occupied By'}
                options={occupiedBy}
                value={formik.values.occupiedBy}
                error={formik.errors.occupiedBy}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'loanPropertyAddress'}
                label={'Loan Property Address'}
                value={formik.values.loanPropertyAddress}
                error={formik.errors.loanPropertyAddress}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'builderName'}
                label={'Builder Name'}
                value={formik.values.builderName}
                error={formik.errors.builderName}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
          </ASection>
          <ARadioButtonGroup
            isReset={true}
            value={loanPropertyEMI}
            title={'Loan to Property'}
            radioValues={propertyLoanOptions}
            handleChange={handleLoanPropertyEMI}
          />
          {(loanPropertyEMI === 'propertyValueNotProvided' ||
            loanPropertyEMI === '') && (
            <ASection title={'Loan Applied'} footers={loanFooter}>
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="propertyLoanDetails.loanDetails"
                    render={(tag) => (
                      <div>
                        {formik.values.propertyLoanDetails.loanDetails.length >
                        0 ? (
                          formik.values.propertyLoanDetails.loanDetails.map(
                            (item: any, index: any) => (
                              <div
                                key={item?.name}
                                className="flex items-center w-full gap-3 mb-3"
                              >
                                <div className="w-full border-2 rounded-lg pt-3 px-3">
                                  <AGroupFields col={3}>
                                    <AInputField
                                      label={'Amount'}
                                      id={`propertyLoanDetails.loanDetails[${index}].amount`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].amount
                                      }
                                      error={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].amount
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      label={'EMI'}
                                      id={`propertyLoanDetails.loanDetails[${index}].emi`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].emi
                                      }
                                      error={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].emi
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      label={'ROI'}
                                      id={`propertyLoanDetails.loanDetails[${index}].roi`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].roi
                                      }
                                      error={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].roi
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      label={'Year'}
                                      id={`propertyLoanDetails.loanDetails[${index}].year`}
                                      value={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].year
                                      }
                                      error={
                                        formik?.values?.propertyLoanDetails
                                          .loanDetails[index].year
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                  </AGroupFields>
                                </div>
                                <AddTagFooter
                                  addTag={() => tag.push(loanInfo)}
                                  removeTag={() => tag.remove(index)}
                                />
                              </div>
                            ),
                          )
                        ) : (
                          <AddTagButton
                            title={'Add Family Member'}
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
          {(loanPropertyEMI === 'loanDetailsNotProvided' ||
            loanPropertyEMI === '') && (
            <ASection title={'Property Value'}>
              <AGroupFields>
                <AInputField
                  id={'agreementValue'}
                  label={'Agreement Value'}
                  value={
                    formik.values.propertyLoanDetails.propertyValue
                      .agreementValue
                  }
                  error={
                    formik.values.propertyLoanDetails.propertyValue
                      .agreementValue
                  }
                  handleChange={formik.handleChange}
                />
                <AInputField
                  id={'purchaseValue'}
                  label={'Purchase Value'}
                  value={
                    formik.values.propertyLoanDetails.propertyValue
                      .purchaseValue
                  }
                  error={
                    formik.values.propertyLoanDetails.propertyValue
                      .purchaseValue
                  }
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'Market Value'}
                  id={'marketValue'}
                  value={
                    formik.values.propertyLoanDetails.propertyValue.marketValue
                  }
                  error={
                    formik.values.propertyLoanDetails.propertyValue.marketValue
                  }
                  handleChange={formik.handleChange}
                />
                <div className="flex gap-3">
                  <AInputField
                    id={'ocrPaid'}
                    label={'OCR Paid'}
                    value={
                      formik.values.propertyLoanDetails.propertyValue.ocrPaid
                    }
                    error={
                      formik.values.propertyLoanDetails.propertyValue.ocrPaid
                    }
                    handleChange={formik.handleChange}
                  />
                  <ASingleSelect
                    id={'pOrb'}
                    label={'P/B'}
                    options={putPB}
                    value={formik.values.propertyLoanDetails.propertyValue.pOrb}
                    error={formik.values.propertyLoanDetails.propertyValue.pOrb}
                    handleChange={formik.handleChange}
                  />
                </div>
                <AInputField
                  id={'balanceOcr'}
                  label={'Balance OCR'}
                  value={
                    formik.values.propertyLoanDetails.propertyValue.balanceOcr
                  }
                  error={
                    formik.values.propertyLoanDetails.propertyValue.balanceOcr
                  }
                  handleChange={formik.handleChange}
                />
                <ASingleSelect
                  id={'sourceOcr'}
                  label={'Source OCR'}
                  options={sourceOcr}
                  value={
                    formik.values.propertyLoanDetails.propertyValue.sourceOcr
                  }
                  error={
                    formik.values.propertyLoanDetails.propertyValue.sourceOcr
                  }
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            </ASection>
          )}
          <AGroupFields col={2}>
            <AInputField
              id={'loanAsPerForm'}
              label={'Loan as per application Form'}
              value={formik.values.propertyLoanDetails.loanAsPerForm}
              error={formik.values.propertyLoanDetails.loanAsPerForm}
              handleChange={formik.handleChange}
            />
          </AGroupFields>
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

export default DetailsOfProperty;
