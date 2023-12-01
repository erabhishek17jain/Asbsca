import { useEffect, useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AModal } from '../../../components-global/AModal';
import ASection, { SectionFooter } from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { applicantIncome } from '../constants';

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

const FinancialType = ({ formik, title, type, value, handleAnnualy }: any) => {
  const errors: any = formik?.errors;
  return (
    <AGroupFields col={4} title={title}>
      <AInputField
        type={'number'}
        id={`${type}.${value}.amountPA`}
        label={'Amount PA'}
        rightLabel={'(Lakhs)'}
        value={formik.values[type][value].amountPA}
        error={
          errors[type] && errors[type][value] && errors[type][value].amountPA
        }
        handleChange={handleAnnualy}
      />
      <AInputField
        type={'number'}
        disabled={true}
        id={`${type}.${value}.amountPM`}
        label={'Amount PM'}
        rightLabel={'(Lakhs)'}
        value={formik.values[type][value].amountPM}
        error={
          errors[type] && errors[type][value] && errors[type][value].amountPM
        }
        handleChange={formik.handleChange}
      />
      <AInputField
        type={'number'}
        disabled={true}
        id={`${type}.${value}.months`}
        label={'Months'}
        value={formik.values[type][value].months}
        error={
          errors[type] && errors[type][value] && errors[type][value].months
        }
        handleChange={formik.handleChange}
      />
    </AGroupFields>
  );
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
      totalAmountPA: '',
      totalAmountPM: '',
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

  const validationSchema = Yup.object().shape({
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
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, financials: { ...values } });
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

  const setTotalIncome = () => {
    const finance: any = formik?.values?.income;
    const totalAP =
      finance.turnoverGrossReciepts.amountPA - finance.purchases.amountPA;
    const totalPM =
      finance.purchases.amountPA / finance.turnoverGrossReciepts.amountPA;
    formik.setFieldValue('income.totalAmountPA', totalAP);
    formik.setFieldValue(
      'income.totalAmountPM',
      `${(100 - totalPM * 100).toFixed(0)}%`,
    );
  };

  const setTotalExpenses = () => {
    let totalAP = 0;
    const finance: any = formik?.values?.expenses;
    for (const key in finance) {
      if (
        typeof finance[key] !== 'string' &&
        typeof finance[key]?.amountPA === 'number'
      ) {
        totalAP = totalAP + finance[key]?.amountPA;
      }
    }
    formik.setFieldValue('expenses.totalExpensePA', totalAP);
    formik.setFieldValue('expenses.totalExpensePM', totalAP);
    formik.setFieldValue(
      'expenses.netProfitPA',
      formik?.values?.income.totalAmountPA - totalAP,
    );
    formik.setFieldValue(
      'expenses.netProfitPM',
      `${(
        ((formik?.values?.income.totalAmountPA - totalAP) * 100) /
        formik?.values?.income.turnoverGrossReciepts.amountPA
      ).toFixed(0)}%`,
    );
    formik.setFieldValue(
      'expenses.shareOfProfitPA',
      formik?.values?.income.totalAmountPA - totalAP,
    );
    formik.setFieldValue('expenses.shareOfProfitPM', `${100}%`);
  };

  const setBusinessIncome = () => {
    let totalAP = formik?.values?.expenses.shareOfProfitPA;
    const finance: any = formik?.values?.businessIncome;
    for (const key in finance) {
      if (
        typeof finance[key] !== 'string' &&
        typeof finance[key]?.amountPA === 'number'
      ) {
        totalAP = finance[key]?.amountPA + totalAP;
      }
    }
    formik.setFieldValue('businessIncome.totalIncomePA', totalAP);
    formik.setFieldValue('businessIncome.totalEarning', totalAP);
  };

  const handleAnnualy = (e: any) => {
    const { id, value } = e.target;
    formik.setFieldValue(`${id.slice(0, -1)}M`, (value / 12).toFixed(2));
    formik.handleChange(e);
  };

  useEffect(() => {
    setBusinessIncome();
    setTotalExpenses();
    setTotalIncome();
  }, [formik.values]);

  useEffect(() => {
    if (payloads.financials) {
      formik.setFieldValue('entityName', payloads.financials?.entityName);
      formik.setFieldValue(
        'applicantIncome',
        payloads?.financials?.applicantIncome,
      );
      formik.setFieldValue('income', payloads?.financials?.income);
      formik.setFieldValue('expenses', payloads?.financials?.expenses);
      formik.setFieldValue(
        'businessIncome',
        payloads?.financials?.businessIncome,
      );
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col py-4">
          <AGroupFields col={2}>
            <AInputField
              id={'entityName'}
              label={'Entity Name'}
              value={formik?.values?.entityName}
              error={formik.errors.entityName}
              handleChange={formik.handleChange}
            />
            <ASingleSelect
              id={'applicantIncome'}
              label={'Income of which applicant?'}
              value={formik?.values?.applicantIncome}
              error={formik.errors.applicantIncome}
              handleChange={formik.handleChange}
              options={applicantIncome}
            />
          </AGroupFields>
          <ASection
            footers={[
              {
                label: 'Total Amount PA',
                value: formik?.values?.income.totalAmountPA,
              },
              {
                label: 'Total Amount PM',
                value: formik?.values?.income.totalAmountPM,
              },
            ]}
          >
            {incomes.map((item) => (
              <FinancialType
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
                  type={'expenses'}
                  formik={formik}
                  key={item.value}
                  title={item.title}
                  value={item.value}
                  handleAnnualy={handleAnnualy}
                />
              );
            })}
            {/* <div className="flex items-center justify-center">
              <AButton
                label={'Add More'}
                variant="small"
                action={() => {
                  setShowModal(true);
                  setAddType('business');
                }}
                icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
            </div> */}
            <SectionFooter
              footers={[
                {
                  label: 'Total Expenses P.A.',
                  value: formik?.values?.expenses.totalExpensePA,
                },
                {
                  label: 'Net Profit P.A.',
                  value: formik?.values?.expenses.netProfitPA,
                },
                {
                  label: 'Share of Profit P.A.',
                  value: formik?.values?.expenses.shareOfProfitPA,
                },
              ]}
            />
            <SectionFooter
              footers={[
                {
                  label: 'Total Expenses P.M.',
                  value: formik?.values?.expenses.totalExpensePM,
                },
                {
                  label: 'Net Profit P.M.',
                  value: formik?.values?.expenses.netProfitPM,
                },
                {
                  label: 'Share of Profit P.M.',
                  value: formik?.values?.expenses.shareOfProfitPM,
                },
              ]}
            />
          </ASection>
          <ASection
            footers={[
              {
                label: 'Total P.A.',
                value: formik?.values?.businessIncome.totalIncomePA,
              },
              {
                label: 'Total Earning',
                value: formik?.values?.businessIncome.totalEarning,
              },
            ]}
          >
            {bussinessSalary.map((item: any) => {
              return (
                <FinancialType
                  type={'businessIncome'}
                  formik={formik}
                  key={item.value}
                  title={item.title}
                  value={item.value}
                  handleAnnualy={handleAnnualy}
                />
              );
            })}
            {/* <div className="flex justify-center">
              <AButton
                label={'Add More'}
                variant="small"
                action={() => {
                  setShowModal(true);
                  setAddType('business');
                }}
                icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
            </div> */}
          </ASection>
        </div>
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
