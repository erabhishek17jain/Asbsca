import { useEffect, useState } from 'react';
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

const ExistingLoan = ({ formik }: any) => {
  const [isExistingLoan, setIsExistingLoan] = useState('Yes');

  const handleExistingLoan = (title: string, val: string) => {
    console.log(title);
    setIsExistingLoan(val);
    if (val !== 'Yes') {
      formik.setFieldValue('existanceLoan.isExistanceLoan', val);
    } else {
      formik.setFieldValue('existanceLoan', {
        ...initialValues?.existanceLoan,
        isExistanceLoan: val,
      });
    }
  };

  const setTotalBT = () => {
    let totalLoanBt = 0;
    let totalLoanBtEmi = 0;
    let totalLoanBtOut = 0;
    formik?.values?.existanceLoan?.balanceTransfer?.forEach((item: any) => {
      if (item.loanAmount !== '') {
        totalLoanBt = totalLoanBt + item.loanAmount;
      }
      if (item.emi !== '') {
        totalLoanBtEmi = totalLoanBtEmi + item.emi;
      }
      if (item.outstanding !== '') {
        totalLoanBtOut = totalLoanBtOut + item.outstanding;
      }
    });
    formik.setFieldValue('existanceLoan.totalLoanBt', totalLoanBt);
    formik.setFieldValue('existanceLoan.totalLoanBtEmi', totalLoanBtEmi);
    formik.setFieldValue('existanceLoan.totalLoanBtOut', totalLoanBtOut);
  };

  useEffect(() => {
    setTotalBT();
  }, [formik?.values?.existanceLoan?.balanceTransfer]);

  const setTotalClose = () => {
    let totalLoanEc = 0;
    let totalLoanEcEmi = 0;
    let totalLoanEcOut = 0;
    formik?.values?.existanceLoan?.existingLoanClosed?.forEach((item: any) => {
      if (item.loanAmount !== '') {
        totalLoanEc = totalLoanEc + item.loanAmount;
      }
      if (item.emi !== '') {
        totalLoanEcEmi = totalLoanEcEmi + item.emi;
      }
      if (item.outstanding !== '') {
        totalLoanEcOut = totalLoanEcOut + item.outstanding;
      }
    });
    formik.setFieldValue('existanceLoan.totalLoanEc', totalLoanEc);
    formik.setFieldValue('existanceLoan.totalLoanEcEmi', totalLoanEcEmi);
    formik.setFieldValue('existanceLoan.totalLoanEcOut', totalLoanEcOut);
  };

  useEffect(() => {
    setTotalClose();
  }, [formik?.values?.existanceLoan?.existingLoanClosed]);

  const setTotalEMI = () => {
    let totalLoanEm = 0;
    let totalLoanEmEmi = 0;
    let totalLoanEmOut = 0;
    formik?.values?.existanceLoan?.existingLoanEMI?.forEach((item: any) => {
      if (item.loanAmount !== '') {
        totalLoanEm = totalLoanEm + item.loanAmount;
      }
      if (item.emi !== '') {
        totalLoanEmEmi = totalLoanEmEmi + item.emi;
      }
      if (item.outstanding !== '') {
        totalLoanEmOut = totalLoanEmOut + item.outstanding;
      }
    });
    formik.setFieldValue('existanceLoan.totalLoanEm', totalLoanEm);
    formik.setFieldValue('existanceLoan.totalLoanEmEmi', totalLoanEmEmi);
    formik.setFieldValue('existanceLoan.totalLoanEmOut', totalLoanEmOut);
  };

  useEffect(() => {
    setTotalEMI();
  }, [formik?.values?.existanceLoan?.existingLoanEMI]);

  const errors: any = formik?.errors?.existanceLoan;

  return (
    <>
      <ARadioButtonGroup
        value={isExistingLoan}
        title={'Existing Loan'}
        radioValues={yesNoOptions}
        handleChange={handleExistingLoan}
      />
      {isExistingLoan === 'Yes' && (
        <>
          <ASection
            footers={[
              {
                label: 'Total Loan Amt',
                value: formik?.values?.existanceLoan?.totalLoanBt,
              },
              {
                label: 'Total EMI Amt',
                value: formik?.values?.existanceLoan?.totalLoanBtEmi,
              },
              {
                label: 'Total Outstanding Amt',
                value: formik?.values?.existanceLoan?.totalLoanBtOut,
              },
            ]}
            title={'Balance Transfer Loans (If Any)'}
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="existanceLoan.balanceTransfer"
                  render={(tag) => (
                    <div>
                      {formik?.values?.existanceLoan?.balanceTransfer?.length >
                      0 ? (
                        formik?.values?.existanceLoan?.balanceTransfer?.map(
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
                                        ?.balanceTransfer[index]?.typeOfLoan
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]?.typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.balanceTransfer[index]?.bankName
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]?.bankName
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
                                        ?.balanceTransfer[index]?.loanAmount
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]?.loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount (Lakhs)'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.balanceTransfer[index]?.tenureMonth
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]
                                        ?.tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure'}
                                    rightLabel={'(In Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.balanceTransfer[index]?.emi
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]?.emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                    rightLabel={'(Rs.)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.balanceTransfer[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.balanceTransfer[index]?.outstanding
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]
                                        ?.outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.balanceTransfer[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.balanceTransfer[index]?.remark
                                    }
                                    error={
                                      errors?.balanceTransfer?.length > 0 &&
                                      errors?.balanceTransfer[index]?.remark
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
            footers={[
              {
                label: 'Total Loan Amt',
                value: formik?.values?.existanceLoan?.totalLoanEc,
              },
              {
                label: 'Total EMI Amt',
                value: formik?.values?.existanceLoan?.totalLoanEcEmi,
              },
              {
                label: 'Total Outstanding Amt',
                value: formik?.values?.existanceLoan?.totalLoanEcOut,
              },
            ]}
            title={
              'Existing Loan- Loan which will be closed from Current Applied Loan Amt or which are to be closed within 12 months. (If Any)'
            }
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="existanceLoan.existingLoanClosed"
                  render={(tag) => (
                    <div>
                      {formik?.values?.existanceLoan?.existingLoanClosed
                        ?.length > 0 ? (
                        formik?.values?.existanceLoan?.existingLoanClosed.map(
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
                                    id={`existanceLoan.existingLoanClosed[${index}].typeOfLoan`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].typeOfLoan
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index]
                                        .typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosed[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].bankName
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index].bankName
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Bank Name'}
                                    options={banksList}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosed[${index}].loanAmount`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].loanAmount
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index]
                                        .loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount (Lakhs)'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosed[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].tenureMonth
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index]
                                        .tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure'}
                                    rightLabel={'(In Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosed[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].emi
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index].emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                    rightLabel={'(Rs.)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanClosed[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].outstanding
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index]
                                        .outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanClosed[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanClosed[index].remark
                                    }
                                    error={
                                      errors?.existingLoanClosed?.length > 0 &&
                                      errors?.existingLoanClosed[index].remark
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
            footers={[
              {
                label: 'Total Loan Amt',
                value: formik?.values?.existanceLoan?.totalLoanEm,
              },
              {
                label: 'Total EMI Amt',
                value: formik?.values?.existanceLoan?.totalLoanEmEmi,
              },
              {
                label: 'Total Outstanding Amt',
                value: formik?.values?.existanceLoan?.totalLoanEmOut,
              },
            ]}
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
                      {formik?.values?.existanceLoan?.existingLoanEMI?.length >
                      0 ? (
                        formik?.values?.existanceLoan?.existingLoanEMI?.map(
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
                                        ?.existingLoanEMI[index]?.typeOfLoan
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.typeOfLoan
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Type of Loan'}
                                    options={typesOfLoan}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].bankName`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanEMI[index]?.bankName
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.bankName
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
                                        ?.existingLoanEMI[index]?.loanAmount
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.loanAmount
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Loan Amount'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].tenureMonth`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanEMI[index]?.tenureMonth
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.tenureMonth
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Tenure'}
                                    rightLabel={'(In Months)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].emi`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanEMI[index]?.emi
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.emi
                                    }
                                    handleChange={formik.handleChange}
                                    label={'EMI'}
                                    rightLabel={'(Rs.)'}
                                  />
                                  <AInputField
                                    type={'number'}
                                    id={`existanceLoan.existingLoanEMI[${index}].outstanding`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanEMI[index]?.outstanding
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.outstanding
                                    }
                                    handleChange={formik.handleChange}
                                    label={'Outstanding'}
                                    rightLabel={'(Lakhs)'}
                                  />
                                  <ASingleSelect
                                    id={`existanceLoan.existingLoanEMI[${index}].remark`}
                                    value={
                                      formik?.values?.existanceLoan
                                        ?.existingLoanEMI[index]?.remark
                                    }
                                    error={
                                      errors?.existingLoanEMI?.length > 0 &&
                                      errors.existingLoanEMI[index]?.remark
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
  const [isCreditFacility, setIsCreditFacility] = useState('Yes');

  const handleCreditFacility = (title: string, val: string) => {
    console.log(title);
    setIsCreditFacility(val);
    if (val !== 'Yes') {
      formik.setFieldValue('creditFacility.isCreditFacility', val);
    } else {
      formik.setFieldValue('creditFacility', {
        ...initialValues?.creditFacility,
        isCreditFacility: val,
      });
    }
  };

  const setTotalCredits = () => {
    let totalLoanCfAu = 0;
    let totalLoanCfLimit = 0;
    formik?.values?.creditFacility?.creditDetails?.forEach((item: any) => {
      if (item.limit !== '') {
        totalLoanCfLimit = totalLoanCfLimit + item.limit;
      }
      if (item.averageUtilization !== '') {
        totalLoanCfAu = totalLoanCfAu + item.averageUtilization;
      }
    });
    formik.setFieldValue('creditFacility.totalLoanCfAu', totalLoanCfAu);
    formik.setFieldValue('creditFacility.totalLoanCfLimit', totalLoanCfLimit);
  };

  useEffect(() => {
    setTotalCredits();
  }, [formik?.values?.creditFacility?.creditDetails]);

  const errors: any = formik?.errors?.creditFacility;

  return (
    <>
      <ARadioButtonGroup
        value={isCreditFacility}
        title={'Credit Facility'}
        radioValues={yesNoOptions}
        handleChange={handleCreditFacility}
      />
      {isCreditFacility === 'Yes' && (
        <ASection
          footers={[
            {
              label: 'Total Limit',
              value: formik?.values?.creditFacility?.totalLoanCfLimit,
            },
            {
              label: 'Average Utilization',
              value: formik?.values?.creditFacility?.totalLoanCfAu,
            },
          ]}
          title={'Credit Facility Details'}
        >
          <FormikProvider value={formik}>
            <form>
              <FieldArray
                name="creditFacility.creditDetails"
                render={(tag) => (
                  <div>
                    {formik?.values?.creditFacility?.creditDetails.length >
                    0 ? (
                      formik?.values?.creditFacility?.creditDetails.map(
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
                                  rightLabel={'(Lakhs)'}
                                />
                                <AInputField
                                  type={'number'}
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
                                  rightLabel={'(Lakhs)'}
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
                                  label={'Interest Rate'}
                                  rightLabel={'(%)'}
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
  const [isOtherCommitments, setIsOtherCommitments] = useState('Yes');

  const handleOtherCommitments = (title: string, val: string) => {
    console.log(title);
    setIsOtherCommitments(val);
    if (val !== 'Yes') {
      formik.setFieldValue('otherCommitments.isOtherCommitmemts', val);
    } else {
      formik.setFieldValue('otherCommitments', {
        ...initialValues?.otherCommitments,
        isOtherCommitmemts: val,
      });
    }
  };

  const setTotalComitments = () => {
    let totalCon = 0;
    let totalSum = 0;
    formik?.values?.otherCommitments?.commitmentsDetails?.forEach(
      (item: any) => {
        if (item.contribution !== '') {
          totalCon = totalCon + item.contribution;
        }
        if (item.sumAssured !== '') {
          totalSum = totalSum + item.sumAssured;
        }
      },
    );
    formik.setFieldValue('otherCommitments.totalCon', totalCon);
    formik.setFieldValue('otherCommitments.totalSum', totalSum);
  };

  useEffect(() => {
    setTotalComitments();
  }, [formik?.values?.otherCommitments?.commitmentsDetails]);

  const errors: any = formik?.errors?.otherCommitments;

  return (
    <>
      <ARadioButtonGroup
        value={isOtherCommitments}
        title={'Other Commitments'}
        radioValues={yesNoOptions}
        handleChange={handleOtherCommitments}
      />
      {isOtherCommitments === 'Yes' && (
        <ASection
          footers={[
            {
              label: 'Total Contribution',
              value: formik?.values?.otherCommitments?.totalCon,
            },
            {
              label: 'Total Sum Assured/Maturity',
              value: formik?.values?.otherCommitments?.totalSum,
            },
          ]}
          title={'Other Commitments Details'}
        >
          <FormikProvider value={formik}>
            <form>
              <FieldArray
                name="otherCommitments.commitmentsDetails"
                render={(tag) => (
                  <div>
                    {formik?.values?.otherCommitments?.commitmentsDetails
                      .length > 0 ? (
                      formik?.values?.otherCommitments?.commitmentsDetails.map(
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
                                      ?.commitmentsDetails[index].particulars
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
                                      ?.commitmentsDetails[index].contribution
                                  }
                                  error={
                                    errors?.commitmentsDetails?.length > 0 &&
                                    errors?.commitmentsDetails[index]
                                      .contribution
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Contribution P.A.'}
                                  rightLabel={'(Lakhs)'}
                                />
                                <AInputField
                                  type={'number'}
                                  id={`otherCommitments.commitmentsDetails[${index}].sumAssured`}
                                  value={
                                    formik?.values?.otherCommitments
                                      ?.commitmentsDetails[index].sumAssured
                                  }
                                  error={
                                    errors?.commitmentsDetails?.length > 0 &&
                                    errors?.commitmentsDetails[index].sumAssured
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Sum Assured/Maturity Value'}
                                  rightLabel={'(Rs.)'}
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
  interestRate: '',
  remark: '',
};

const commitmentsInfo = {
  title: '',
  particulars: '',
  contribution: '',
  sumAssured: '',
};

const initialValues = {
  existanceLoan: {
    isExistanceLoan: 'Yes',
    balanceTransfer: [] as any,
    totalLoanBt: 0,
    totalLoanBtEmi: 0,
    totalLoanBtOut: 0,
    existingLoanClosed: [] as any,
    totalLoanEc: 0,
    totalLoanEcEmi: 0,
    totalLoanEcOut: 0,
    existingLoanEMI: [] as any,
    totalLoanEm: 0,
    totalLoanEmEmi: 0,
    totalLoanEmOut: 0,
  },
  creditFacility: {
    isCreditFacility: 'Yes',
    creditDetails: [] as any,
    totalLoanCfLimit: 0,
    totalLoanCfAu: 0,
  },
  otherCommitments: {
    isOtherCommitmemts: 'Yes',
    commitmentsDetails: [] as any,
    totalCon: 0,
    totalSum: 0,
  },
};

const ExistingLoanCredit = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
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
      existingLoanClosed: Yup.array().of(
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
    setPayloads({ ...payloads, existingLoan: { ...values } });
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
    if (payloads?.existingLoan) {
      formik.setFieldValue('existanceLoan', payloads.existingLoan);
    } else {
      formik.setFieldValue('existanceLoan', {
        ...initialValues?.existanceLoan,
      });
    }
    if (payloads?.existingLoan) {
      formik.setFieldValue('creditFacility', payloads?.creditFacility);
    } else {
      formik.setFieldValue('creditFacility', {
        ...initialValues?.creditFacility,
      });
    }
    if (payloads?.existingLoan) {
      formik.setFieldValue('otherCommitments', payloads?.otherCommitments);
    } else {
      formik.setFieldValue('otherCommitments', {
        ...initialValues?.otherCommitments,
      });
    }
  }, [payloads]);

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
