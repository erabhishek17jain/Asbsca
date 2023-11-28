import { useState } from 'react';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AInputField from '../../../components-global/AInputField';
import { AddTagButton, AddTagHeader } from '../../../components-global/ATags';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import {
  banksList,
  existingLoanRemark,
  particularsCommitment,
  typeOfFacility,
  typesOfLoan,
  yesNoOptions,
} from '../constants';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';

const existingLoanFooter = [
  {
    label: 'Total Loan Amt',
    value: '0',
  },
  {
    label: 'Total EMI Amt',
    value: '0',
  },
  {
    label: 'Total Outstanding Amt',
    value: '0',
  },
];

const creditFacilityFooter = [
  {
    label: 'Total Loan Amt',
    value: '0',
  },
  {
    label: 'Total Limit',
    value: '0',
  },
  {
    label: 'Average Utilization',
    value: '0',
  },
];

const commitmentsFooter = [
  {
    label: 'Total Contribution',
    value: '0',
  },
  {
    label: 'Total Sum Assured/Maturity',
    value: '0',
  },
];

const ExistingLoan = ({ formik }: any) => {
  const [isExistingLoan, setIsExistingLoan] = useState('yes');

  const handleExistingLoan = (title: string, val: string) => {
    console.log(title);
    setIsExistingLoan(val);
    formik.setFieldValue('existanceLoan.isExistanceLoan', val);
  };

  const errors: any = formik?.errors?.existanceLoan;

  return (
    <>
      <ARadioButtonGroup
        value={isExistingLoan}
        title={'Existing Loan'}
        radioValues={yesNoOptions}
        handleChange={handleExistingLoan}
      />
      {isExistingLoan === 'yes' && (
        <>
          <ASection
            footers={existingLoanFooter}
            title={'Balance Transfer Loans (If Any)'}
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="existanceLoan.balanceTransfer"
                  render={(tag) => (
                    <div>
                      {formik.values.existanceLoan.balanceTransfer.length >
                      0 ? (
                        formik.values.existanceLoan.balanceTransfer.map(
                          (item: any, index: number) => (
                            <div className="mb-3">
                              <AddTagHeader
                                title={item?.title}
                                removeTag={() => tag.remove(index)}
                                addTag={() =>
                                  tag.push({
                                    ...existingLoanInfo,
                                    title: 'Balance Transfer',
                                  })
                                }
                              />
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].typeOfLoan
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].bankName
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].bankName
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Bank Name'}
                                    options={banksList}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].loanAmount`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].loanAmount
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount (Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].tenureMonth
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure (Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].emi
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                  />
                                  <AInputField
                                    id={`existanceLoan.balanceTransfer[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].outstanding
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].remark
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors.balanceTransfer[index].remark
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Remark'}
                                    options={existingLoanRemark}
                                  />
                                </AGroupFields>
                              </div>
                            </div>
                          ),
                        )
                      ) : (
                        <AddTagButton
                          title={'Add Balance Transfer'}
                          addTag={() =>
                            tag.push({
                              ...existingLoanInfo,
                              title: 'Balance Transfer',
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                />
              </form>
            </FormikProvider>
          </ASection>
          <ASection
            footers={existingLoanFooter}
            title={
              'Existing Loan- Loan which will be closed from Current Applied Loan Amt or which are to be closed within 12 months. (If Any)'
            }
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="existanceLoan.existingLoanClosedThisYear"
                  render={(tag) => (
                    <div>
                      {formik.values.existanceLoan.existingLoanClosedThisYear
                        .length > 0 ? (
                        formik.values.existanceLoan.existingLoanClosedThisYear.map(
                          (item: any, index: number) => (
                            <div className="mb-3">
                              <AddTagHeader
                                title={item?.title}
                                removeTag={() => tag.remove(index)}
                                addTag={() =>
                                  tag.push({
                                    ...existingLoanInfo,
                                    title: 'Existing Loan Closed',
                                  })
                                }
                              />
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .typeOfLoan
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .bankName
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .bankName
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Bank Name'}
                                    options={banksList}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].loanAmount`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .loanAmount
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount (Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .tenureMonth
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure (Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index].emi
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                  />
                                  <AInputField
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .outstanding
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .remark
                                    }
                                    error={
                                      errors?.existingLoanClosedThisYear
                                        ?.length > 0 &&
                                      errors.existingLoanClosedThisYear[index]
                                        .remark
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Remark'}
                                    options={existingLoanRemark}
                                  />
                                </AGroupFields>
                              </div>
                            </div>
                          ),
                        )
                      ) : (
                        <AddTagButton
                          title={'Add Existing Loan'}
                          addTag={() =>
                            tag.push({
                              ...existingLoanInfo,
                              title: 'Existing Loan Closed',
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                />
              </form>
            </FormikProvider>
          </ASection>
          <ASection
            footers={existingLoanFooter}
            title={
              'Existing Loan (These EMI will be added in FOIR Ratio calculation)'
            }
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="existanceLoan.existingLoanEMI"
                  render={(tag) => (
                    <div>
                      {formik.values.existanceLoan.existingLoanEMI.length >
                      0 ? (
                        formik.values.existanceLoan.existingLoanEMI.map(
                          (item: any, index: number) => (
                            <div className="mb-3">
                              <AddTagHeader
                                title={item?.title}
                                removeTag={() => tag.remove(index)}
                                addTag={() =>
                                  tag.push({
                                    ...existingLoanInfo,
                                    title: 'Existing Loan EMI',
                                  })
                                }
                              />
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].typeOfLoan
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].bankName
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].bankName
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Bank Name'}
                                    options={banksList}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].loanAmount`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].loanAmount
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount (Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].tenureMonth
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure (Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].emi
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                  />
                                  <AInputField
                                    id={`existanceLoan.existingLoanEMI[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].outstanding
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].remark
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index].remark
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Remark'}
                                    options={existingLoanRemark}
                                  />
                                </AGroupFields>
                              </div>
                            </div>
                          ),
                        )
                      ) : (
                        <AddTagButton
                          title={'Add Existing Loan'}
                          addTag={() =>
                            tag.push({
                              ...existingLoanInfo,
                              title: 'Existing Loan EMI',
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                />
              </form>
            </FormikProvider>
          </ASection>
        </>
      )}
    </>
  );
};

const CreditFacility = ({ formik }: any) => {
  const [isCreditFacility, setIsCreditFacility] = useState('yes');

  const handleCreditFacility = (title: string, val: string) => {
    console.log(title);
    setIsCreditFacility(val);
    formik.setFieldValue('creditFacility.isCreditFacility', val);
  };

  const errors: any = formik?.errors?.creditFacility;

  return (
    <>
      <ARadioButtonGroup
        value={isCreditFacility}
        title={'Credit Facility'}
        radioValues={yesNoOptions}
        handleChange={handleCreditFacility}
      />
      {isCreditFacility === 'yes' && (
        <ASection
          footers={creditFacilityFooter}
          title={'Credit Facility Details'}
        >
          <FormikProvider value={formik}>
            <form>
              <FieldArray
                name="creditFacility.creditDetails"
                render={(tag) => (
                  <div>
                    {formik.values.creditFacility.creditDetails.length > 0 ? (
                      formik.values.creditFacility.creditDetails.map(
                        (item: any, index: number) => (
                          <div className="mb-3">
                            <AddTagHeader
                              title={item?.title}
                              removeTag={() => tag.remove(index)}
                              addTag={() =>
                                tag.push({
                                  ...ceditFacilityInfo,
                                  title: 'Credit Facility',
                                })
                              }
                            />
                            <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                              <AGroupFields>
                                <ASingleSelect
                                  id={`creditFacility.creditDetails[${index}].typeOfFacility`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].typeOfFacility
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].typeOfFacility
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Type of Facility'}
                                  options={typeOfFacility}
                                />
                                <ASingleSelect
                                  id={`creditFacility.creditDetails[${index}].bankName`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].bankName
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].bankName
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Bank Name'}
                                  options={banksList}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`creditFacility.creditDetails[${index}].limit`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].limit
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].limit
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Limit'}
                                />
                                <AInputField
                                  id={`creditFacility.creditDetails[${index}].averageUtilization`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].averageUtilization
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index]
                                      .averageUtilization
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Average Utilization'}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`creditFacility.creditDetails[${index}].emi`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].emi
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].emi
                                  }
                                  handleChange={formik.handleChange}
                                  label={'EMI'}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`creditFacility.creditDetails[${index}].interestRate`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].interestRate
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].interestRate
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Interest Rate (%)'}
                                />
                                <ASingleSelect
                                  id={`creditFacility.creditDetails[${index}].remark`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].remark
                                  }
                                  error={
                                    errors?.creditDetails?.length > 0 &&
                                    errors.creditDetails[index].remark
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Remark'}
                                  options={existingLoanRemark}
                                />
                              </AGroupFields>
                            </div>
                          </div>
                        ),
                      )
                    ) : (
                      <AddTagButton
                        title={'Add Credit Facility'}
                        addTag={() =>
                          tag.push({
                            ...ceditFacilityInfo,
                            title: 'Credit Facility',
                          })
                        }
                      />
                    )}
                  </div>
                )}
              />
            </form>
          </FormikProvider>
        </ASection>
      )}
    </>
  );
};

const OtherCommitments = ({ formik }: any) => {
  const [isOtherCommitments, setIsOtherCommitments] = useState('yes');

  const handleOtherCommitments = (title: string, val: string) => {
    console.log(title);
    setIsOtherCommitments(val);
    formik.setFieldValue('otherCommitments.isOtherCommitmemts', val);
  };

  const errors: any = formik?.errors?.otherCommitments;

  return (
    <>
      <ARadioButtonGroup
        value={isOtherCommitments}
        title={'Other Commitments'}
        radioValues={yesNoOptions}
        handleChange={handleOtherCommitments}
      />
      {isOtherCommitments === 'yes' && (
        <ASection
          footers={commitmentsFooter}
          title={'Other Commitments Details'}
        >
          <FormikProvider value={formik}>
            <form>
              <FieldArray
                name="otherCommitments.commitmentsDetails"
                render={(tag) => (
                  <div>
                    {formik.values.otherCommitments.commitmentsDetails.length >
                    0 ? (
                      formik.values.otherCommitments.commitmentsDetails.map(
                        (item: any, index: number) => (
                          <div className="mb-3">
                            <AddTagHeader
                              title={item?.title}
                              removeTag={() => tag.remove(index)}
                              addTag={() =>
                                tag.push({
                                  ...commitmentsInfo,
                                  title: 'Other Commitment',
                                })
                              }
                            />
                            <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                              <AGroupFields>
                                <ASingleSelect
                                  id={`otherCommitments.commitmentsDetails[${index}].particulars`}
                                  value={
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].particulars
                                  }
                                  error={
                                    errors?.commitmentsDetails?.length > 0 &&
                                    errors?.commitmentsDetails[index]
                                      .particulars
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Particulars'}
                                  options={particularsCommitment}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`otherCommitments.commitmentsDetails[${index}].contribution`}
                                  value={
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].contribution
                                  }
                                  error={
                                    errors?.commitmentsDetails?.length > 0 &&
                                    errors?.commitmentsDetails[index]
                                      .contribution
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Contribution P.A.'}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`otherCommitments.commitmentsDetails[${index}].sumAssured`}
                                  value={
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].sumAssured
                                  }
                                  error={
                                    errors?.commitmentsDetails?.length > 0 &&
                                    errors?.commitmentsDetails[index].sumAssured
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Sum Assured/Maturity Value (Rs.)'}
                                />
                              </AGroupFields>
                            </div>
                          </div>
                        ),
                      )
                    ) : (
                      <AddTagButton
                        title={'Add Commitment'}
                        addTag={() =>
                          tag.push({
                            ...commitmentsInfo,
                            title: 'Other Commitment',
                          })
                        }
                      />
                    )}
                  </div>
                )}
              />
            </form>
          </FormikProvider>
        </ASection>
      )}
    </>
  );
};

const existingLoanInfo = {
  title: '',
  typeOfLoan: '',
  bankName: '',
  loanAmount: '',
  tenureMonth: '',
  emi: '',
  outstanding: '',
  remark: '',
};

const ceditFacilityInfo = {
  title: '',
  typeOfFacility: '',
  bankName: '',
  limit: '',
  averageUtilization: '',
  emi: '',
  interestRate: '',
  remark: '',
};

const commitmentsInfo = {
  title: '',
  particulars: '',
  contribution: '',
  sumAssured: '',
};

const ExistingLoanCredit = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const initialValues = {
    existanceLoan: {
      isExistanceLoan: 'yes',
      balanceTransfer: [] as any,
      existingLoanClosedThisYear: [] as any,
      existingLoanEMI: [] as any,
    },
    creditFacility: {
      isCreditFacility: 'yes',
      creditDetails: [] as any,
    },
    otherCommitments: {
      isOtherCommitmemts: 'yes',
      commitmentsDetails: [] as any,
    },
  };

  const validationSchema = Yup.object().shape({
    existanceLoan: Yup.object({
      balanceTransfer: Yup.array().of(
        Yup.object().shape({
          typeOfLoan: Yup.string().required('This field is required'),
          bankName: Yup.string().required('This field is required'),
          loanAmount: Yup.string().required('This field is required'),
          tenureMonth: Yup.string().required('This field is required'),
          emi: Yup.string().required('This field is required'),
          outstanding: Yup.string().required('This field is required'),
          remark: Yup.string().required('This field is required'),
        }),
      ),
      existingLoanClosedThisYear: Yup.array().of(
        Yup.object().shape({
          typeOfLoan: Yup.string().required('This field is required'),
          bankName: Yup.string().required('This field is required'),
          loanAmount: Yup.string().required('This field is required'),
          tenureMonth: Yup.string().required('This field is required'),
          emi: Yup.string().required('This field is required'),
          outstanding: Yup.string().required('This field is required'),
          remark: Yup.string().required('This field is required'),
        }),
      ),
      existingLoanEMI: Yup.array().of(
        Yup.object().shape({
          typeOfLoan: Yup.string().required('This field is required'),
          bankName: Yup.string().required('This field is required'),
          loanAmount: Yup.string().required('This field is required'),
          tenureMonth: Yup.string().required('This field is required'),
          emi: Yup.string().required('This field is required'),
          outstanding: Yup.string().required('This field is required'),
          remark: Yup.string().required('This field is required'),
        }),
      ),
    }),
    creditFacility: Yup.object({
      creditDetails: Yup.array().of(
        Yup.object().shape({
          typeOfFacility: Yup.string().required('This field is required'),
          bankName: Yup.string().required('This field is required'),
          limit: Yup.string().required('This field is required'),
          averageUtilization: Yup.string().required('This field is required'),
          emi: Yup.string().required('This field is required'),
          interestRate: Yup.string().required('This field is required'),
          remark: Yup.string().required('This field is required'),
        }),
      ),
    }),
    otherCommitments: Yup.object({
      commitmentsDetails: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          contribution: Yup.string().required('This field is required'),
          sumAssured: Yup.string().required('This field is required'),
        }),
      ),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ExistingLoan formik={formik} />
          <CreditFacility formik={formik} />
          <OtherCommitments formik={formik} />
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

export default ExistingLoanCredit;
