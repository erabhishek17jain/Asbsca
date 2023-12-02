import { useEffect, useState } from 'react';
import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AddTagButton, AddTagHeader } from '../../../components-global/ATags';
import {
  bankTypes,
  banksList,
  particularsAssets,
  particularsInvestment,
  statusAssets,
  yesNoOptions,
} from '../constants';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';

const assetInfo: any = {
  title: 'Asset',
  particulars: '',
  location: '',
  purchaseYear: '',
  carpetArea: '',
  status: '',
  marketValue: '',
  rentPM: '',
};

const investmentInfo: any = {
  title: 'Investment',
  particulars: '',
  contribution: '',
  marketValue: '',
};

const bankAccountInfo: any = {
  title: 'Bank Account',
  bankName: '',
  branch: '',
  type: '',
  balanceOnDay: '',
};

const initialValues = {
  isBussinessAssets: 'Yes',
  bussinessAssetDetails: {
    bussinessAssets: [] as any,
    totalMarketValue: 0,
    totalRentPM: 0,
  },
  isPersonalAssets: 'Yes',
  personalAssetDetails: {
    personalAssets: [] as any,
    totalMarketValue: 0,
    totalRentPM: 0,
  },
  isInvestments: 'Yes',
  investmentDetails: {
    investments: [] as any,
    totalContribution: 0,
    totalMarketValue: 0,
  },
  isBankAccount: 'Yes',
  bankAccountDetails: {
    bankAccounts: [] as any,
    totalBalance: 0,
  },
  assetsBacking: '',
};

const AssetsInvestmentBank = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isBusinessAssets, setIsBusinessAssets] = useState('Yes');
  const handleBusinessAssets = (title: string, val: string) => {
    console.log(title);
    setIsBusinessAssets(val);
  };

  const [isPersonalAssets, setIsPersonalAssets] = useState('Yes');
  const handlePersonalAssets = (title: string, val: string) => {
    console.log(title);
    setIsPersonalAssets(val);
  };

  const [isInvestments, setIsInvestments] = useState('Yes');
  const handleInvestments = (title: string, val: string) => {
    console.log(title);
    setIsInvestments(val);
  };

  const [isBankAccounts, setIsBankAccounts] = useState('Yes');
  const handleBankAccounts = (title: string, val: string) => {
    console.log(title);
    setIsBankAccounts(val);
  };

  const validationSchema = Yup.object().shape({
    bussinessAssetDetails: Yup.object({
      bussinessAssets: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          location: Yup.string().required('This field is required'),
          purchaseYear: Yup.number().required('This field is required'),
          carpetArea: Yup.string().required('This field is required'),
          status: Yup.string().required('This field is required'),
          marketValue: Yup.number().required('This field is required'),
          rentPM: Yup.number().required('This field is required'),
        }),
      ),
    }),
    personalAssetDetails: Yup.object({
      personalAssets: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          location: Yup.string().required('This field is required'),
          purchaseYear: Yup.number().required('This field is required'),
          carpetArea: Yup.string().required('This field is required'),
          status: Yup.string().required('This field is required'),
          marketValue: Yup.number().required('This field is required'),
          rentPM: Yup.number().required('This field is required'),
        }),
      ),
    }),
    investmentDetails: Yup.object({
      investments: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          contribution: Yup.number().required('This field is required'),
          marketValue: Yup.number().required('This field is required'),
        }),
      ),
    }),
    bankAccountDetails: Yup.object({
      bankAccounts: Yup.array().of(
        Yup.object().shape({
          bankName: Yup.string().required('This field is required'),
          branch: Yup.string().required('This field is required'),
          type: Yup.string().required('This field is required'),
          balanceOnDay: Yup.number().required('This field is required'),
        }),
      ),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, assets: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const setTotalBA = () => {
    let total = 0;
    let totalRent = 0;
    formik?.values?.bussinessAssetDetails?.bussinessAssets?.forEach(
      (item: any) => {
        if (item.marketValue !== '') {
          total = total + item.marketValue;
        }
        if (item.rentPM !== '') {
          totalRent = totalRent + item.rentPM;
        }
      },
    );
    formik.setFieldValue('bussinessAssetDetails.totalRentPM', totalRent);
    formik.setFieldValue('bussinessAssetDetails.totalMarketValue', total);
  };

  useEffect(() => {
    setTotalBA();
  }, [formik?.values?.bussinessAssetDetails?.bussinessAssets]);

  const setTotalPA = () => {
    let total = 0;
    let totalRent = 0;
    formik?.values?.personalAssetDetails?.personalAssets?.forEach(
      (item: any) => {
        if (item.marketValue !== '') {
          total = total + item.marketValue;
        }
        if (item.rentPM !== '') {
          totalRent = totalRent + item.rentPM;
        }
      },
    );
    formik.setFieldValue('personalAssetDetails.totalRentPM', totalRent);
    formik.setFieldValue('personalAssetDetails.totalMarketValue', total);
  };

  useEffect(() => {
    setTotalPA();
  }, [formik?.values?.personalAssetDetails?.personalAssets]);

  const setTotalInv = () => {
    let total = 0;
    let totalRent = 0;
    formik?.values?.investmentDetails?.investments?.forEach((item: any) => {
      if (item.marketValue !== '') {
        total = total + item.marketValue;
      }
      if (item.contribution !== '') {
        totalRent = totalRent + item.contribution;
      }
    });
    formik.setFieldValue('investmentDetails.totalMarketValue', total);
    formik.setFieldValue('investmentDetails.totalContribution', totalRent);
  };

  useEffect(() => {
    setTotalInv();
  }, [formik?.values?.investmentDetails?.investments]);

  const setTotalBC = () => {
    let total = 0;
    formik?.values?.bankAccountDetails?.bankAccounts?.forEach((item: any) => {
      if (item.balanceOnDay !== '') {
        total = total + item.balanceOnDay;
      }
    });
    formik.setFieldValue('bankAccountDetails.totalBalance', total);
  };

  useEffect(() => {
    setTotalBC();
  }, [formik?.values?.bankAccountDetails?.bankAccounts]);

  useEffect(() => {
    if (payloads.assets) {
      formik.setFieldValue(
        'isBussinessAssets',
        payloads?.assets?.isBussinessAssets,
      );
      formik.setFieldValue(
        'bussinessAssetDetails',
        payloads?.assets?.bussinessAssetDetails,
      );
      formik.setFieldValue(
        'isPersonalAssets',
        payloads?.assets?.isPersonalAssets,
      );
      formik.setFieldValue(
        'personalAssetDetails',
        payloads?.assets?.personalAssetDetails,
      );
      formik.setFieldValue('isInvestments', payloads?.assets?.isInvestments);
      formik.setFieldValue(
        'investmentDetails',
        payloads?.assets?.investmentDetails,
      );
      formik.setFieldValue('isBankAccount', payloads?.assets?.isBankAccount);
      formik.setFieldValue(
        'bankAccountDetails',
        payloads?.assets?.bankAccountDetails,
      );
    } else {
      const business = payloads?.personalDetails?.residents.filter(
        (item: any) => item?.resiType === 'P',
      );
      const personal = payloads?.personalDetails?.residents.filter(
        (item: any) => item?.resiType === 'P',
      );
      const bussAssets: any = [];
      if (business?.length > 0) {
        business.forEach((el: any) => {
          bussAssets.push({
            ...assetInfo,
            purchaseYear: el?.purchaseYear,
            carpetArea: el?.carpetArea,
            status: el?.resiStatus,
            marketValue: el?.marketValue,
          });
        });
      }
      const perAssets: any = [];
      if (personal?.length > 0) {
        personal.forEach((el: any) => {
          perAssets.push({
            ...assetInfo,
            purchaseYear: el?.purchaseYear,
            carpetArea: el?.carpetArea,
            status: el?.resiStatus,
            marketValue: el?.marketValue,
          });
        });
      }
      if (
        payloads?.detailsOfProp?.propertyLoanDetails?.propertyValue?.ocrPaid > 0
      ) {
        perAssets.push({
          ...assetInfo,
          particulars: '-',
          localStorage: '-',
          purchaseYear: '-',
          carpetArea: '-',
          status: '-',
          marketValue:
            payloads?.detailsOfProp?.propertyLoanDetails?.propertyValue
              ?.ocrPaid,
        });
      }
      formik.setFieldValue('bussinessAssetDetails.bussinessAssets', perAssets);
      formik.setFieldValue('bussinessAssetDetails.bussinessAssets', bussAssets);
    }
  }, [payloads]);

  const errorsBd: any = formik?.errors?.bussinessAssetDetails;
  const errorsPb: any = formik?.errors?.personalAssetDetails;
  const errorsI: any = formik?.errors?.investmentDetails;
  const errorsBa: any = formik?.errors?.bankAccountDetails;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            value={isBusinessAssets}
            title={'Business Assets'}
            radioValues={yesNoOptions}
            handleChange={handleBusinessAssets}
          />
          {isBusinessAssets === 'Yes' && (
            <ASection
              title={'Business Asset Details'}
              footers={[
                {
                  label: 'Total Market Value',
                  value:
                    formik?.values?.bussinessAssetDetails?.totalMarketValue,
                },
                {
                  label: 'Total Rent P.M',
                  value: formik?.values?.bussinessAssetDetails?.totalRentPM,
                },
              ]}
            >
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="bussinessAssetDetails.bussinessAssets"
                    render={(tag) => (
                      <div>
                        {formik?.values?.bussinessAssetDetails?.bussinessAssets
                          ?.length > 0 ? (
                          formik?.values?.bussinessAssetDetails?.bussinessAssets.map(
                            (item: any, index: number) => (
                              <div className="mb-3">
                                <AddTagHeader
                                  title={item?.title}
                                  removeTag={() => tag.remove(index)}
                                  addTag={() =>
                                    tag.push({
                                      ...assetInfo,
                                      title: 'Business Asset',
                                    })
                                  }
                                />
                                <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                  <AGroupFields>
                                    <ASingleSelect
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].particulars`}
                                      label={'Particulars*'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          ?.bussinessAssets[index]?.particulars
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.particulars
                                      }
                                      options={particularsAssets}
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].location`}
                                      label={'Location*'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].location
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.location
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].purchaseYear`}
                                      label={'Purchase Year'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].purchaseYear
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.purchaseYear
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].carpetArea`}
                                      label={'Carpet Area*'}
                                      rightLabel={'(Sq. Ft.)'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].carpetArea
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.carpetArea
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <ASingleSelect
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].status`}
                                      label={'Status*'}
                                      options={statusAssets}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].status
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]?.status
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].marketValue`}
                                      label={'Market Value*'}
                                      rightLabel={'(Lakhs)'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].marketValue
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.marketValue
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].rentPM`}
                                      label={'Rent P.M.*'}
                                      rightLabel={'(Rs.)'}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].rentPM
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]?.rentPM
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
                            title={'Add Business Asset'}
                            addTag={() =>
                              tag.push({
                                ...assetInfo,
                                title: 'Business Asset',
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
          <ARadioButtonGroup
            value={isPersonalAssets}
            title={'Personal Assets'}
            radioValues={yesNoOptions}
            handleChange={handlePersonalAssets}
          />
          {isPersonalAssets === 'Yes' && (
            <ASection
              title={'Personal Asset Details'}
              footers={[
                {
                  label: 'Total Market Value',
                  value: formik?.values?.personalAssetDetails?.totalMarketValue,
                },
                {
                  label: 'Total Rent P.M',
                  value: formik?.values?.personalAssetDetails?.totalRentPM,
                },
              ]}
            >
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="personalAssetDetails.personalAssets"
                    render={(tag) => (
                      <div>
                        {formik?.values?.personalAssetDetails?.personalAssets
                          ?.length > 0 ? (
                          formik?.values?.personalAssetDetails?.personalAssets?.map(
                            (item: any, index: number) => (
                              <div className="mb-3">
                                <AddTagHeader
                                  title={item?.title}
                                  removeTag={() => tag?.remove(index)}
                                  addTag={() =>
                                    tag?.push({
                                      ...assetInfo,
                                      title: 'Personal Asset',
                                    })
                                  }
                                />
                                <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                  <AGroupFields>
                                    <ASingleSelect
                                      id={`personalAssetDetails.personalAssets[${index}].particulars`}
                                      label={'Particulars*'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.particulars
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]
                                          ?.particulars
                                      }
                                      options={particularsAssets}
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      id={`personalAssetDetails.personalAssets[${index}].location`}
                                      label={'Location*'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.location
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]
                                          ?.location
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`personalAssetDetails.personalAssets[${index}].purchaseYear`}
                                      label={'Purchase Year'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.purchaseYear
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]
                                          ?.purchaseYear
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`personalAssetDetails.personalAssets[${index}].carpetArea`}
                                      label={'Carpet Area*'}
                                      rightLabel={'(Sq. Ft.)'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.carpetArea
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]
                                          ?.carpetArea
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <ASingleSelect
                                      id={`personalAssetDetails.personalAssets[${index}].status`}
                                      label={'Status*'}
                                      options={statusAssets}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.status
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]?.status
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`personalAssetDetails.personalAssets[${index}].marketValue`}
                                      label={'Market Value*'}
                                      rightLabel={'(Lakhs)'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.marketValue
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]
                                          ?.marketValue
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`personalAssetDetails.personalAssets[${index}].rentPM`}
                                      label={'Rent P.M.*'}
                                      rightLabel={'(Rs.)'}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          ?.personalAssets[index]?.rentPM
                                      }
                                      error={
                                        errorsPb?.personalAssets?.length > 0 &&
                                        errorsPb?.personalAssets[index]?.rentPM
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
                            title={'Add Personal Asset'}
                            addTag={() =>
                              tag.push({
                                ...assetInfo,
                                title: 'Personal Asset',
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
          <ARadioButtonGroup
            value={isInvestments}
            title={'Investments'}
            radioValues={yesNoOptions}
            handleChange={handleInvestments}
          />
          {isInvestments === 'Yes' && (
            <ASection
              title={'Investment Details'}
              footers={[
                {
                  label: 'Total Contribution',
                  value: formik?.values?.investmentDetails?.totalContribution,
                },
                {
                  label: 'Total Market Value',
                  value: formik?.values?.investmentDetails?.totalMarketValue,
                },
              ]}
            >
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="investmentDetails.investments"
                    render={(tag) => (
                      <div>
                        {formik?.values?.investmentDetails?.investments
                          ?.length > 0 ? (
                          formik?.values?.investmentDetails?.investments?.map(
                            (item: any, index: number) => (
                              <div className="mb-3">
                                <AddTagHeader
                                  title={item?.title}
                                  removeTag={() => tag.remove(index)}
                                  addTag={() =>
                                    tag.push({
                                      ...investmentInfo,
                                      title: 'Investment',
                                    })
                                  }
                                />
                                <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                  <AGroupFields col={3}>
                                    <ASingleSelect
                                      id={`investmentDetails.investments[${index}].particulars`}
                                      label={'Particulars*'}
                                      value={
                                        formik?.values?.investmentDetails
                                          ?.investments[index]?.particulars
                                      }
                                      error={
                                        errorsI?.investments?.length > 0 &&
                                        errorsI?.investments[index]?.particulars
                                      }
                                      options={particularsInvestment}
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`investmentDetails.investments[${index}].contribution`}
                                      label={'Contribution*'}
                                      rightLabel={'(Rs.)'}
                                      value={
                                        formik?.values?.investmentDetails
                                          ?.investments[index]?.contribution
                                      }
                                      error={
                                        errorsI?.investments?.length > 0 &&
                                        errorsI?.investments[index]
                                          ?.contribution
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`investmentDetails.investments[${index}].marketValue`}
                                      label={'Market Year'}
                                      rightLabel={'(Lakhs)'}
                                      value={
                                        formik?.values?.investmentDetails
                                          ?.investments[index]?.marketValue
                                      }
                                      error={
                                        errorsI?.investments?.length > 0 &&
                                        errorsI?.investments[index]?.marketValue
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
                            title={'Add Investment'}
                            addTag={() =>
                              tag.push({
                                ...investmentInfo,
                                title: 'Investment',
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
          <ARadioButtonGroup
            value={isBankAccounts}
            title={'Bank Account'}
            radioValues={yesNoOptions}
            handleChange={handleBankAccounts}
          />
          {isBankAccounts === 'Yes' && (
            <ASection
              title={'Bank Account Details'}
              footers={[
                {
                  label: 'Total Balance on Day',
                  value: formik?.values?.bankAccountDetails?.totalBalance,
                },
              ]}
            >
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="bankAccountDetails.bankAccounts"
                    render={(tag) => (
                      <div>
                        {formik?.values?.bankAccountDetails?.bankAccounts
                          ?.length > 0 ? (
                          formik?.values?.bankAccountDetails?.bankAccounts?.map(
                            (item: any, index: number) => (
                              <div className="mb-3">
                                <AddTagHeader
                                  title={item?.title}
                                  removeTag={() => tag.remove(index)}
                                  addTag={() =>
                                    tag.push({
                                      ...bankAccountInfo,
                                      title: 'Bank Account',
                                    })
                                  }
                                />
                                <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                                  <AGroupFields>
                                    <ASingleSelect
                                      id={`bankAccountDetails.bankAccounts[${index}].bankName`}
                                      label={'Bank Name*'}
                                      value={
                                        formik?.values?.bankAccountDetails
                                          ?.bankAccounts[index]?.bankName
                                      }
                                      error={
                                        errorsBa?.bankAccounts?.length > 0 &&
                                        errorsBa?.bankAccounts[index]?.bankName
                                      }
                                      options={banksList}
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      id={`bankAccountDetails.bankAccounts[${index}].branch`}
                                      label={'Branch*'}
                                      value={
                                        formik?.values?.bankAccountDetails
                                          ?.bankAccounts[index]?.branch
                                      }
                                      error={
                                        errorsBa?.bankAccounts?.length > 0 &&
                                        errorsBa?.bankAccounts[index]?.branch
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <ASingleSelect
                                      id={`bankAccountDetails.bankAccounts[${index}].type`}
                                      label={'Bank Type'}
                                      value={
                                        formik?.values?.bankAccountDetails
                                          ?.bankAccounts[index]?.type
                                      }
                                      error={
                                        errorsBa?.bankAccounts?.length > 0 &&
                                        errorsBa?.bankAccounts[index]?.type
                                      }
                                      options={bankTypes}
                                      handleChange={formik?.handleChange}
                                    />
                                    <AInputField
                                      type={'number'}
                                      id={`bankAccountDetails.bankAccounts[${index}].balanceOnDay`}
                                      label={'Balance on Day*'}
                                      rightLabel={'(Lakhs)'}
                                      value={
                                        formik?.values?.bankAccountDetails
                                          ?.bankAccounts[index]?.balanceOnDay
                                      }
                                      error={
                                        errorsBa?.bankAccounts?.length > 0 &&
                                        errorsBa?.bankAccounts[index]
                                          ?.balanceOnDay
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
                            title={'Add Bank Account'}
                            addTag={() =>
                              tag.push({
                                ...bankAccountInfo,
                                title: 'Bank Account',
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

export default AssetsInvestmentBank;
