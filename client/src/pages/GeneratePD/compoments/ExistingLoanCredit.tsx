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
    setIsExistingLoan(val);
    formik.setFieldValue('existanceLoan.isExistanceLoan', val);
  };

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
                      {formik.values.existanceLoan.balanceTransfer > 0 ? (
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
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].typeOfLoan
                                    }
                                    error={
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].typeOfLoan
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].bankName
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].loanAmount
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].tenureMonth
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].emi
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].outstanding
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
                                      formik?.values?.existanceLoan
                                        .balanceTransfer[index].remark
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
                      {formik.values.existanceLoan.existingLoanClosedThisYear >
                      0 ? (
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
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosedThisYear[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
                                        .typeOfLoan
                                    }
                                    error={
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index].emi
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                                      formik?.values?.existanceLoan
                                        .existingLoanClosedThisYear[index]
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
                      {formik.values.existanceLoan.existingLoanEMI > 0 ? (
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
                              <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                                <AGroupFields>
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].typeOfLoan
                                    }
                                    error={
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].typeOfLoan
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].bankName
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].loanAmount
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].tenureMonth
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].emi
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].outstanding
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
                                      formik?.values?.existanceLoan
                                        .existingLoanEMI[index].remark
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
    setIsCreditFacility(val);
    formik.setFieldValue('creditFacility.isCreditFacility', val);
  };

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
                    {formik.values.creditFacility.creditDetails > 0 ? (
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
                            <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                              <AGroupFields>
                                <ASingleSelect
                                  id={`creditFacility.creditDetails[${index}].typeOfFacility`}
                                  value={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].typeOfFacility
                                  }
                                  error={
                                    formik?.values?.creditFacility
                                      .creditDetails[index].typeOfFacility
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].bankName
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].limit
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].averageUtilization
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].emi
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].interestRate
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
                                    formik?.values?.creditFacility
                                      .creditDetails[index].remark
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
    setIsOtherCommitments(val);
    formik.setFieldValue('otherCommitments.isOtherCommitmemts', val);
  };

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
                    {formik.values.otherCommitments.commitmentsDetails > 0 ? (
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
                            <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                              <AGroupFields>
                                <ASingleSelect
                                  id={`otherCommitments.commitmentsDetails[${index}].particulars`}
                                  value={
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].particulars
                                  }
                                  error={
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].particulars
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
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].contribution
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
                                    formik?.values?.otherCommitments
                                      .commitmentsDetails[index].sumAssured
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
  loanAmount: 0,
  tenureMonth: 0,
  emi: 0,
  outstanding: '',
  remark: '',
};

const ceditFacilityInfo = {
  title: '',
  typeOfFacility: '',
  bankName: '',
  limit: 0,
  averageUtilization: 0,
  emi: 0,
  interestRate: 0,
  remark: '',
};

const commitmentsInfo = {
  title: '',
  particulars: '',
  contributionPA: 0,
  sumAssured: 0,
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
      balanceTransfer: [],
      existingLoanClosedThisYear: [],
      existingLoanEMI: [],
    },
    creditFacility: {
      isCreditFacility: 'yes',
      creditDetails: [],
    },
    otherCommitments: {
      isOtherCommitmemts: 'yes',
      commitmentsDetails: [],
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
          <ExistingLoan formik={formik} />
          <CreditFacility formik={formik} />
          <OtherCommitments formik={formik} />
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

export default ExistingLoanCredit;
