import { useEffect, useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AModal } from '../../../components-global/AModal';
import ASection, { SectionFooter } from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { applicantIncome } from '../constants';
import { AddTagHeader } from '../../../components-global/ATags';

const incomes = [
  { title: 'Turnover/Gross Receipts', value: 'turnoverGrossReciepts' },
  { title: 'Purchases', value: 'purchases' },
];

const expenses = [
  { title: 'Salary', value: 'salary' },
  { title: 'Maintanance', value: 'maintanance' },
  { title: 'Transport', value: 'transport' },
  { title: 'Electricity', value: 'electricity' },
  { title: 'Travelling Expenses', value: 'travelling' },
  { title: 'Fuel', value: 'fuel' },
  { title: 'Office Rent', value: 'officeRent' },
  { title: "Partner's Salary", value: 'partnersSalary' },
  { title: "Partner's Remuneration", value: 'partnersRemuneration' },
  { title: 'Other Expenses', value: 'otherExpenses' },
  {
    title: 'Bifercation of Expense not provided, Total Expenses',
    value: 'bifercationOfExpenses',
  },
];

const salaryFromBusiness = [
  { title: 'Salary from above business', value: 'salaryFromBusiness' },
  {
    title: 'Remuneration from above business',
    value: 'remunerationFromBusiness',
  },
  { title: 'Rent', value: 'rent' },
];

const FinancialType = ({
  index,
  formik,
  title,
  type,
  value,
  handleAnnualy,
}: any) => {
  const errorPA: any =
    formik?.errors?.finances?.length > 0 &&
    formik?.errors?.finances[index][type] &&
    formik?.errors?.finances[index][type][value] &&
    formik?.errors?.finances[index][type][value]?.amountPA;
  const errorPM: any =
    formik?.errors?.finances?.length > 0 &&
    formik?.errors?.finances[index][type] &&
    formik?.errors?.finances[index][type][value] &&
    formik?.errors?.finances[index][type][value]?.amountPM;
  const valuePA: any =
    formik?.values?.finances?.length > 0 &&
    formik?.values?.finances[index][type][value]?.amountPA;
  const valuePM: any =
    formik?.values?.finances?.length > 0 &&
    formik?.values?.finances[index][type][value]?.amountPM;
  return (
    <AGroupFields col={3} title={title}>
      <AInputField
        type={'number'}
        id={`finances[${index}].${type}.${value}.amountPA`}
        label={'Amount PA'}
        rightLabel={'(Lakhs)'}
        value={valuePA}
        error={errorPA}
        handleChange={handleAnnualy}
      />
      <AInputField
        type={'number'}
        disabled={true}
        id={`${type}.${value}.amountPM`}
        label={'Amount PM'}
        rightLabel={'(Lakhs)'}
        value={valuePM}
        error={errorPM}
        handleChange={formik.handleChange}
      />
    </AGroupFields>
  );
};

const financeInfo = {
  title: 'Financial Details',
  entityName: '',
  applicantIncome: '',
  income: {
    turnoverGrossReciepts: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    purchases: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    grossProfit: 0,
    grossProfitPer: 0,
  },
  expenses: {
    salary: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    maintanance: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    transport: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    electricity: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    travelling: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    fuel: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    officeRent: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    partnersSalary: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    partnersRemuneration: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    otherExpenses: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    bifercationOfExpenses: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    totalExpensePA: '',
    totalExpensePM: '',
    netProfitPA: '',
    netProfitPM: '',
    shareOfProfitPA: '',
    shareOfProfitPM: '',
  },
  businessIncome: {
    salaryFromBusiness: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    remunerationFromBusiness: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    rent: {
      amountPA: '',
      amountPM: '',
      months: 12,
    },
    totalIncomePA: '',
    totalEarning: '',
  },
};

const Financials = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  const [expenseList, setExpenseList] = useState<any>([...expenses]);
  const [bussinessSalary] = useState<any>([...salaryFromBusiness]);

  const initialValues: any = {
    totalEarning: '',
    finances: [{ ...financeInfo }] as any,
  };

  const validationSchema = Yup.object().shape({
    finances: Yup.array().of(
      Yup.object().shape({
        entityName: Yup.string().required('This field is required'),
        applicantIncome: Yup.string().required('This field is required'),
        income: Yup.object({
          turnoverGrossReciepts: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          purchases: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
        }),
        expenses: Yup.object({
          salary: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          maintanance: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          transport: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          electricity: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          travelling: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          fuel: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          officeRent: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          partnersSalary: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          partnersRemuneration: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          otherExpenses: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          bifercationOfExpenses: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
        }),
        businessIncome: Yup.object({
          salaryFromBusiness: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          remunerationFromBusiness: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
          rent: Yup.object({
            amountPA: Yup.number().required('This field is required'),
          }),
        }),
      }),
    ),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let totalEarning = 0;
    values?.finances.forEach((item: any) => {
      totalEarning = totalEarning + item?.businessIncome?.totalEarning;
    });
    setPayloads({
      ...payloads,
      financials: { ...values, totalEarning: totalEarning },
    });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const formikAddMore = useFormik({
    initialValues: {
      name: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      setShowModal(false);
      expenseList.push({
        title: values.name,
        value: values.name.replaceAll(' ', ''),
      });
      setExpenseList([...expenseList]);
    },
  });

  const handleAnnualy = (e: any) => {
    const { id, value } = e.target;
    formik.setFieldValue(`${id.slice(0, -1)}M`, (value / 12).toFixed(2));
    formik.handleChange(e);
  };

  const setTotalIncome = (item: any, index: number) => {
    const finance: any = item?.income;
    const totalAP =
      finance.turnoverGrossReciepts.amountPA - finance.purchases.amountPA;
    const totalPM =
      finance.purchases.amountPA / finance.turnoverGrossReciepts.amountPA;
    formik.setFieldValue(`finances[${index}]income.grossProfit`, totalAP);
    formik.setFieldValue(
      `finances[${index}]income.grossProfitPer`,
      `${(100 - totalPM * 100).toFixed(0)}%`,
    );
  };

  const setTotalExpenses = (item: any, index: number) => {
    let totalAP = 0;
    const finance: any = item?.expenses;
    for (const key in finance) {
      if (
        typeof finance[key] !== 'string' &&
        typeof finance[key]?.amountPA === 'number'
      ) {
        totalAP = totalAP + finance[key]?.amountPA;
      }
    }
    formik.setFieldValue(
      `finances[${index}]expenses.totalExpensePA`,
      totalAP.toFixed(1),
    );
    formik.setFieldValue(
      `finances[${index}]expenses.totalExpensePM`,
      totalAP.toFixed(1),
    );
    formik.setFieldValue(
      `finances[${index}]expenses.netProfitPA`,
      item?.income?.grossProfit - totalAP,
    );
    formik.setFieldValue(
      `finances[${index}]expenses.netProfitPM`,
      (
        ((item.income?.grossProfit - totalAP) * 100) /
        item.income?.turnoverGrossReciepts?.amountPA
      ).toFixed(0),
    );
    formik.setFieldValue(
      `finances[${index}]expenses.shareOfProfitPA`,
      item?.income?.grossProfit - totalAP,
    );
    formik.setFieldValue(`finances[${index}]expenses.shareOfProfitPM`, 100);
  };

  const setBusinessIncome = (item: any, index: number) => {
    let totalAP = item?.expenses?.shareOfProfitPA;
    const finance: any = item?.businessIncome;
    for (const key in finance) {
      if (
        typeof finance[key] !== 'string' &&
        typeof finance[key]?.amountPA === 'number'
      ) {
        totalAP = finance[key]?.amountPA + totalAP;
      }
    }
    formik.setFieldValue(
      `finances[${index}]businessIncome.totalIncomePA`,
      totalAP,
    );
    formik.setFieldValue(
      `finances[${index}]businessIncome.totalEarning`,
      totalAP,
    );
  };

  useEffect(() => {
    formik?.values?.finances?.forEach((item: any, index: number) => {
      item = formik?.values?.finances[index];
      setTotalIncome(item, index);
      setTotalExpenses(item, index);
      setBusinessIncome(item, index);
    });
  }, [formik?.values?.finances]);

  useEffect(() => {
    if (payloads.financials) {
      formik.setFieldValue('finances', payloads.financials?.finances);
    }
  }, [payloads]);

  const errorsFs: any = formik?.errors?.finances;
  const valuesFs: any = formik?.values?.finances;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <FormikProvider value={formik}>
          <form>
            <FieldArray
              name="finances"
              render={(tag) => (
                <div>
                  {formik?.values?.finances.map((item: any, index: number) => (
                    <div className="mb-3">
                      <AddTagHeader
                        title={item?.title}
                        removeTag={() => tag.remove(index)}
                        addTag={() =>
                          tag.push({
                            ...financeInfo,
                            title: 'Co-Applicant',
                          })
                        }
                      />
                      <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                        <div className="flex flex-col py-4">
                          <AGroupFields col={2}>
                            <AInputField
                              id={`finances[${index}].entityName`}
                              label={'Entity Name'}
                              value={valuesFs[index]?.entityName}
                              error={
                                errorsFs?.length > 0 &&
                                errorsFs[index]?.entityName
                              }
                              handleChange={formik.handleChange}
                            />
                            <ASingleSelect
                              id={`finances[${index}].applicantIncome`}
                              label={'Income of which applicant?'}
                              value={valuesFs[index]?.applicantIncome}
                              error={
                                errorsFs?.length > 0 &&
                                errorsFs[index]?.applicantIncome
                              }
                              handleChange={formik.handleChange}
                              options={applicantIncome}
                            />
                          </AGroupFields>
                          <ASection
                            footers={[
                              {
                                label: 'Total Amount PA',
                                value:
                                  formik?.values?.finances[index]?.income
                                    ?.grossProfit,
                              },
                              {
                                label: 'Total Amount PM',
                                value:
                                  formik?.values?.finances[index]?.income
                                    ?.grossProfitPer,
                              },
                            ]}
                          >
                            {incomes.map((item) => (
                              <FinancialType
                                index={index}
                                type={'income'}
                                formik={formik}
                                key={item.value}
                                title={item.title}
                                value={item.value}
                                handleAnnualy={handleAnnualy}
                              />
                            ))}
                          </ASection>
                          <ASection>
                            {expenseList.map((item: any) => {
                              return (
                                <FinancialType
                                  index={index}
                                  type={'expenses'}
                                  formik={formik}
                                  key={item.value}
                                  title={item.title}
                                  value={item.value}
                                  handleAnnualy={handleAnnualy}
                                />
                              );
                            })}
                            <SectionFooter
                              footers={[
                                {
                                  label: 'Total Expenses P.A.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.totalExpensePA,
                                },
                                {
                                  label: 'Net Profit P.A.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.netProfitPA,
                                },
                                {
                                  label: 'Share of Profit P.A.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.shareOfProfitPA,
                                },
                              ]}
                            />
                            <SectionFooter
                              footers={[
                                {
                                  label: 'Total Expenses P.M.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.totalExpensePM,
                                },
                                {
                                  label: 'Net Profit P.M.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.netProfitPM,
                                },
                                {
                                  label: 'Share of Profit P.M.',
                                  value:
                                    formik?.values?.finances[index]?.expenses
                                      ?.shareOfProfitPM,
                                },
                              ]}
                            />
                          </ASection>
                          <ASection
                            footers={[
                              {
                                label: 'Total P.A.',
                                value:
                                  formik?.values?.finances[index]
                                    ?.businessIncome?.totalIncomePA,
                              },
                              {
                                label: 'Total Earning',
                                value:
                                  formik?.values?.finances[index]
                                    ?.businessIncome?.totalEarning,
                              },
                            ]}
                          >
                            {bussinessSalary.map((item: any) => {
                              return (
                                <FinancialType
                                  index={index}
                                  type={'businessIncome'}
                                  formik={formik}
                                  key={item.value}
                                  title={item.title}
                                  value={item.value}
                                  handleAnnualy={handleAnnualy}
                                />
                              );
                            })}
                          </ASection>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </form>
        </FormikProvider>
      </div>
      {showModal && (
        <AModal
          saveText={'Add'}
          title={'Add Expenses'}
          onSave={formikAddMore.handleSubmit}
          closeModal={() => setShowModal(false)}
        >
          <AInputField
            id={'name'}
            label={'Expense Type'}
            value={formikAddMore.values.name}
            error={formikAddMore.errors.name}
            handleChange={formikAddMore.handleChange}
          />
        </AModal>
      )}
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={() => formik.handleSubmit()}
      />
    </>
  );
};

export default Financials;
