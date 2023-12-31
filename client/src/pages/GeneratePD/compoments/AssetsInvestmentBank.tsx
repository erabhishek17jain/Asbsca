import { useEffect } from 'react';
import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AddTagButton, AddTagHeader } from '../../../components-global/ATags';
import {
  assetReasons,
  assetStatus,
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
  otherparticulars: '',
  location: '',
  purchaseYear: '',
  carpetArea: '',
  status: '',
  otherstatus: '',
  assetStatus: '',
  otherassetstatus: '',
  marketValue: '',
  rentPM: '',
};

const investmentInfo: any = {
  title: 'Investment',
  particulars: '',
  otherparticulars: '',
  contribution: '',
  marketValue: '',
};

const bankAccountInfo: any = {
  title: 'Bank Account',
  bankName: '',
  otherbankName: '',
  branch: '',
  type: '',
  othertype: '',
  balanceOnDay: '',
};

const initialValues = {
  isBussinessAssets: 'Yes',
  bussinessAssetDetails: {
    bussinessAssets: [] as any,
    totalMarketValue: '',
    totalRentPM: '',
  },
  isPersonalAssets: 'Yes',
  personalAssetDetails: {
    personalAssets: [] as any,
    totalMarketValue: '',
    totalRentPM: '',
  },
  isInvestments: 'Yes',
  investmentDetails: {
    investments: [] as any,
    totalContribution: '',
    totalMarketValue: '',
  },
  isBankAccount: 'Yes',
  bankAccountDetails: {
    bankAccounts: [] as any,
    totalBalance: '',
  },
  assetReason: '',
  otherassetReason: '',
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
  const handleBusinessAssets = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isBussinessAssets', val);
    formik.setFieldValue(
      'bussinessAssetDetails',
      initialValues?.bussinessAssetDetails,
    );
  };

  const handlePersonalAssets = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isPersonalAssets', val);
    formik.setFieldValue(
      'personalAssetDetails',
      initialValues?.personalAssetDetails,
    );
  };

  const handleInvestments = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isInvestments', val);
    formik.setFieldValue('investmentDetails', initialValues?.investmentDetails);
  };

  const handleBankAccounts = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isBankAccount', val);
    formik.setFieldValue(
      'bankAccountDetails',
      initialValues?.bankAccountDetails,
    );
  };

  const validationSchema = Yup.object().shape({
    bussinessAssetDetails: Yup.object({
      bussinessAssets: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          location: Yup.string().required('This field is required'),
          purchaseYear: Yup.string().required('This field is required'),
          carpetArea: Yup.string().required('This field is required'),
          status: Yup.string().required('This field is required'),
          assetStatus: Yup.string().required('This field is required'),
          marketValue: Yup.string().required('This field is required'),
        }),
      ),
    }),
    personalAssetDetails: Yup.object({
      personalAssets: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          location: Yup.string().required('This field is required'),
          purchaseYear: Yup.string().required('This field is required'),
          carpetArea: Yup.string().required('This field is required'),
          status: Yup.string().required('This field is required'),
          assetStatus: Yup.string().required('This field is required'),
          marketValue: Yup.string().required('This field is required'),
        }),
      ),
    }),
    investmentDetails: Yup.object({
      investments: Yup.array().of(
        Yup.object().shape({
          particulars: Yup.string().required('This field is required'),
          contribution: Yup.string().required('This field is required'),
          marketValue: Yup.string().required('This field is required'),
        }),
      ),
    }),
    bankAccountDetails: Yup.object({
      bankAccounts: Yup.array().of(
        Yup.object().shape({
          bankName: Yup.string().required('This field is required'),
          branch: Yup.string().required('This field is required'),
          type: Yup.string().required('This field is required'),
          balanceOnDay: Yup.string().required('This field is required'),
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
          const marketValue = Number.isNaN(parseFloat(item.marketValue))
            ? 0
            : parseFloat(item.marketValue);
          total = total + marketValue;
        }
        if (item.rentPM !== '') {
          const rentPM = Number.isNaN(parseFloat(item.rentPM))
            ? 0
            : parseFloat(item.rentPM);
          totalRent = totalRent + rentPM;
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
          const marketValue = Number.isNaN(parseFloat(item.marketValue))
            ? 0
            : parseFloat(item.marketValue);
          total = total + marketValue;
        }
        if (item.rentPM !== '') {
          const rentPM = Number.isNaN(parseFloat(item.rentPM))
            ? 0
            : parseFloat(item.rentPM);
          totalRent = totalRent + rentPM;
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
        const marketValue = Number.isNaN(parseFloat(item.marketValue))
          ? 0
          : parseFloat(item.marketValue);
        total = total + marketValue;
      }
      if (item.contribution !== '') {
        const contribution = Number.isNaN(parseFloat(item.contribution))
          ? 0
          : parseFloat(item.contribution);
        totalRent = totalRent + contribution;
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
        const balanceOnDay = Number.isNaN(parseFloat(item.balanceOnDay))
          ? 0
          : parseFloat(item.balanceOnDay);
        total = total + balanceOnDay;
      }
    });
    formik.setFieldValue('bankAccountDetails.totalBalance', total);
  };

  useEffect(() => {
    setTotalBC();
  }, [formik?.values?.bankAccountDetails?.bankAccounts]);

  useEffect(() => {
    const bTotal = Number.isNaN(
      parseFloat(formik?.values?.bussinessAssetDetails?.totalMarketValue),
    )
      ? 0
      : parseFloat(formik?.values?.bussinessAssetDetails?.totalMarketValue);
    const pTotal = Number.isNaN(
      parseFloat(formik?.values?.personalAssetDetails?.totalMarketValue),
    )
      ? 0
      : parseFloat(formik?.values?.personalAssetDetails?.totalMarketValue);
    const iTotal = Number.isNaN(
      parseFloat(formik?.values?.investmentDetails?.totalMarketValue),
    )
      ? 0
      : parseFloat(formik?.values?.investmentDetails?.totalMarketValue);
    let assetsBacking = bTotal + pTotal + iTotal;
    formik.setFieldValue('assetsBacking', assetsBacking);
  }, [formik?.values]);

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
        (item: any) => item?.resiType === 'B',
      );
      const personal = payloads?.personalDetails?.residents.filter(
        (item: any) => item?.resiType === 'P',
      );
      const bussAssets: any = [];
      if (business?.length > 0) {
        business.forEach((el: any, index: number) => {
          bussAssets.push({
            ...assetInfo,
            title: `Business Asset ${index + 1}`,
            particulars: 'NP',
            location: '-',
            purchaseYear: el?.purchaseYear,
            carpetArea: el?.carpetArea,
            status: el?.resiStatus,
            assetStatus: 'NP',
            marketValue: el?.marketValue,
            rentPM: '',
          });
        });
      }
      const perAssets: any = [];
      if (personal?.length > 0) {
        personal.forEach((el: any, index: number) => {
          perAssets.push({
            ...assetInfo,
            title: `Personal Asset ${index + 1}`,
            particulars: 'NP',
            location: '-',
            purchaseYear: el?.purchaseYear,
            carpetArea: el?.carpetArea,
            status: el?.resiStatus,
            assetStatus: 'NP',
            marketValue: el?.marketValue,
            rentPM: '',
          });
        });
      }
      if (
        payloads?.detailsOfProp?.propertyLoanDetails?.propertyValue?.ocrPaid > 0
      ) {
        perAssets.push({
          ...assetInfo,
          title: `Personal Asset ${perAssets.length}`,
          particulars: 'NP',
          location: '-',
          purchaseYear: '-',
          carpetArea: '-',
          status: 'NP',
          assetStatus: 'NP',
          marketValue:
            payloads?.detailsOfProp?.propertyLoanDetails?.propertyValue
              ?.ocrPaid,
          rentPM: '',
        });
      }
      formik.setFieldValue('personalAssetDetails.personalAssets', perAssets);
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
            value={formik?.values?.isBussinessAssets}
            title={'Business Assets'}
            radioValues={yesNoOptions}
            handleChange={handleBusinessAssets}
          />
          {formik?.values?.isBussinessAssets === 'Yes' && (
            <ASection
              title={'Business Asset Details'}
              footers={[
                {
                  label: 'Total Market Value',
                  value: `${formik?.values?.bussinessAssetDetails?.totalMarketValue} Lakhs`,
                },
                {
                  label: 'Total Rent P.M',
                  value: `${formik?.values?.bussinessAssetDetails?.totalRentPM} Lakhs`,
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
                                      label={'Particulars'}
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
                                    {formik?.values?.bussinessAssetDetails
                                      ?.bussinessAssets[index]?.particulars ===
                                      'Other' && (
                                      <AInputField
                                        id={`bussinessAssetDetails.bussinessAssets[${index}].otherparticulars`}
                                        label={'Particulars'}
                                        value={
                                          formik?.values?.bussinessAssetDetails
                                            ?.bussinessAssets[index]
                                            ?.otherparticulars
                                        }
                                        error={
                                          errorsBd?.bussinessAssets?.length >
                                            0 &&
                                          errorsBd?.bussinessAssets[index]
                                            ?.otherparticulars
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].location`}
                                      label={'Location'}
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
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].carpetArea`}
                                      label={'Carpet Area'}
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
                                      label={'Status'}
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
                                    {formik?.values?.bussinessAssetDetails
                                      .bussinessAssets[index].status ===
                                      'Other' && (
                                      <AInputField
                                        id={`bussinessAssetDetails.bussinessAssets[${index}].otherstatus`}
                                        label={'Status'}
                                        value={
                                          formik?.values?.bussinessAssetDetails
                                            .bussinessAssets[index].otherstatus
                                        }
                                        error={
                                          errorsBd?.bussinessAssets?.length >
                                            0 &&
                                          errorsBd?.bussinessAssets[index]
                                            ?.otherstatus
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <ASingleSelect
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].assetStatus`}
                                      label={'Asset Status'}
                                      options={assetStatus}
                                      value={
                                        formik?.values?.bussinessAssetDetails
                                          .bussinessAssets[index].assetStatus
                                      }
                                      error={
                                        errorsBd?.bussinessAssets?.length > 0 &&
                                        errorsBd?.bussinessAssets[index]
                                          ?.assetStatus
                                      }
                                      handleChange={formik.handleChange}
                                    />{' '}
                                    {formik?.values?.bussinessAssetDetails
                                      .bussinessAssets[index].assetStatus ===
                                      'Other' && (
                                      <AInputField
                                        id={`bussinessAssetDetails.bussinessAssets[${index}].otherassetstatus`}
                                        label={'Asset Status'}
                                        value={
                                          formik?.values?.bussinessAssetDetails
                                            .bussinessAssets[index]
                                            .otherassetstatus
                                        }
                                        error={
                                          errorsBd?.bussinessAssets?.length >
                                            0 &&
                                          errorsBd?.bussinessAssets[index]
                                            ?.otherassetstatus
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].marketValue`}
                                      label={'Market Value'}
                                      rightLabel={'(In Lakhs)'}
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
                                      id={`bussinessAssetDetails.bussinessAssets[${index}].rentPM`}
                                      label={'Rent P.M.'}
                                      rightLabel={'(In Lakhs)'}
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
            value={formik?.values?.isPersonalAssets}
            title={'Personal Assets'}
            radioValues={yesNoOptions}
            handleChange={handlePersonalAssets}
          />
          {formik?.values?.isPersonalAssets === 'Yes' && (
            <ASection
              title={'Personal Asset Details'}
              footers={[
                {
                  label: 'Total Market Value',
                  value: `${formik?.values?.personalAssetDetails?.totalMarketValue} Lakhs`,
                },
                {
                  label: 'Total Rent P.M',
                  value: `${formik?.values?.personalAssetDetails?.totalRentPM} Lakhs`,
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
                                      label={'Particulars'}
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
                                    {formik?.values?.personalAssetDetails
                                      ?.personalAssets[index]?.particulars ===
                                      'Other' && (
                                      <AInputField
                                        id={`personalAssetDetails.personalAssets[${index}].otherparticulars`}
                                        label={'Particulars'}
                                        value={
                                          formik?.values?.personalAssetDetails
                                            ?.personalAssets[index]
                                            ?.otherparticulars
                                        }
                                        error={
                                          errorsBd?.personalAssets?.length >
                                            0 &&
                                          errorsBd?.personalAssets[index]
                                            ?.otherparticulars
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`personalAssetDetails.personalAssets[${index}].location`}
                                      label={'Location'}
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
                                      id={`personalAssetDetails.personalAssets[${index}].carpetArea`}
                                      label={'Carpet Area'}
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
                                      label={'Status'}
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
                                    />{' '}
                                    {formik?.values?.personalAssetDetails
                                      .personalAssets[index].status ===
                                      'Other' && (
                                      <AInputField
                                        id={`personalAssetDetails.personalAssets[${index}].otherstatus`}
                                        label={'Status'}
                                        value={
                                          formik?.values?.personalAssetDetails
                                            .personalAssets[index].otherstatus
                                        }
                                        error={
                                          errorsBd?.personalAssets?.length >
                                            0 &&
                                          errorsBd?.personalAssets[index]
                                            ?.otherstatus
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <ASingleSelect
                                      id={`personalAssetDetails.personalAssets[${index}].assetStatus`}
                                      label={'Asset Status'}
                                      options={assetStatus}
                                      value={
                                        formik?.values?.personalAssetDetails
                                          .personalAssets[index].assetStatus
                                      }
                                      error={
                                        errorsBd?.personalAssets?.length > 0 &&
                                        errorsBd?.personalAssets[index]
                                          ?.assetStatus
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    {formik?.values?.personalAssetDetails
                                      .personalAssets[index].assetStatus ===
                                      'Other' && (
                                      <AInputField
                                        id={`personalAssetDetails.personalAssets[${index}].otherassetstatus`}
                                        label={'Asset Status'}
                                        value={
                                          formik?.values?.personalAssetDetails
                                            .personalAssets[index]
                                            .otherassetstatus
                                        }
                                        error={
                                          errorsBd?.personalAssets?.length >
                                            0 &&
                                          errorsBd?.personalAssets[index]
                                            ?.otherassetstatus
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`personalAssetDetails.personalAssets[${index}].marketValue`}
                                      label={'Market Value'}
                                      rightLabel={'(In Lakhs)'}
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
                                      id={`personalAssetDetails.personalAssets[${index}].rentPM`}
                                      label={'Rent P.M.'}
                                      rightLabel={'(In Lakhs)'}
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
            value={formik?.values?.isInvestments}
            title={'Investments'}
            radioValues={yesNoOptions}
            handleChange={handleInvestments}
          />
          {formik?.values?.isInvestments === 'Yes' && (
            <ASection
              title={'Investment Details'}
              footers={[
                {
                  label: 'Total Contribution',
                  value: `${formik?.values?.investmentDetails?.totalContribution} Lakhs`,
                },
                {
                  label: 'Total Market Value',
                  value: `${formik?.values?.investmentDetails?.totalMarketValue} Lakhs`,
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
                                      label={'Particulars'}
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
                                    {formik?.values?.investmentDetails
                                      ?.investments[index]?.particulars ===
                                      'Other' && (
                                      <AInputField
                                        id={`investmentDetails.investments[${index}].otherparticulars`}
                                        label={'Particulars'}
                                        value={
                                          formik?.values?.investmentDetails
                                            ?.investments[index]
                                            ?.otherparticulars
                                        }
                                        error={
                                          errorsI?.investments?.length > 0 &&
                                          errorsI?.investments[index]
                                            ?.otherparticulars
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`investmentDetails.investments[${index}].contribution`}
                                      label={'Contribution'}
                                      rightLabel={'(In Lakhs)'}
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
                                      id={`investmentDetails.investments[${index}].marketValue`}
                                      label={'Market Value'}
                                      rightLabel={'(In Lakhs)'}
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
            value={formik?.values?.isBankAccount}
            title={'Bank Account'}
            radioValues={yesNoOptions}
            handleChange={handleBankAccounts}
          />
          {formik?.values?.isBankAccount === 'Yes' && (
            <ASection
              title={'Bank Account Details'}
              footers={[
                {
                  label: 'Total Balance on Day',
                  value: `${formik?.values?.bankAccountDetails?.totalBalance} Lakhs`,
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
                                      label={'Bank Name'}
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
                                    {formik?.values?.bankAccountDetails
                                      ?.bankAccounts[index]?.bankName ===
                                      'Other' && (
                                      <AInputField
                                        id={`bankAccountDetails.bankAccounts[${index}].otherbankName`}
                                        label={'Bank Name'}
                                        value={
                                          formik?.values?.bankAccountDetails
                                            ?.bankAccounts[index]?.otherbankName
                                        }
                                        error={
                                          errorsBa?.bankAccounts?.length > 0 &&
                                          errorsBa?.bankAccounts[index]
                                            ?.otherbankName
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`bankAccountDetails.bankAccounts[${index}].branch`}
                                      label={'Branch'}
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
                                      label={'Account Type'}
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
                                    {formik?.values?.bankAccountDetails
                                      ?.bankAccounts[index]?.type ===
                                      'Other' && (
                                      <AInputField
                                        id={`bankAccountDetails.bankAccounts[${index}].othertype`}
                                        label={'Account Type'}
                                        value={
                                          formik?.values?.bankAccountDetails
                                            ?.bankAccounts[index]?.othertype
                                        }
                                        error={
                                          errorsBa?.bankAccounts?.length > 0 &&
                                          errorsBa?.bankAccounts[index]
                                            ?.othertype
                                        }
                                        handleChange={formik?.handleChange}
                                      />
                                    )}
                                    <AInputField
                                      id={`bankAccountDetails.bankAccounts[${index}].balanceOnDay`}
                                      label={'Balance on Day'}
                                      rightLabel={'(In Lakhs)'}
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
        <AGroupFields col={3}>
          <AInputField
            disabled={true}
            id={`assetsBacking`}
            label={'Assets Backing'}
            rightLabel={'(In Lakhs)'}
            value={formik?.values?.assetsBacking}
            error={formik?.errors?.assetsBacking}
            handleChange={formik.handleChange}
          />
          <ASingleSelect
            id={`assetReason`}
            options={assetReasons}
            label={'Why asset Backing is low?'}
            value={formik?.values?.assetReason}
            error={formik?.errors?.assetReason}
            handleChange={formik.handleChange}
          />
          {formik?.values?.assetReason === 'Other' && (
            <AInputField
              id={`otherassetReason`}
              label={'Why asset Backing is low?'}
              value={formik?.values?.otherassetReason}
              error={formik?.errors?.otherassetReason}
              handleChange={formik.handleChange}
            />
          )}
        </AGroupFields>
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
