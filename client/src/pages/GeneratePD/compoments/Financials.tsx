import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AModal } from '../../../components-global/AModal';
import ASection, { SectionFooter } from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { applicantIncome } from '../constants';

const turnoverFooter = [
  {
    label: 'Total Amount PA',
    value: '0',
  },
  {
    label: 'Total Amount PM',
    value: '0',
  },
];

const totalExpensesFooter = [
  { label: 'Total Expenses P.A.', value: '0' },
  { label: 'Net Profit P.A.', value: '0' },
  { label: 'Share of Profit P.A.', value: '0' },
];

const profitFooter = [
  { label: 'Total Expenses P.M.', value: '0' },
  { label: 'Net Profit P.M.', value: '0' },
  { label: 'Share of Profit P.M.', value: '0' },
];

const totalEarningFooter = [
  { label: 'Total P.A.', value: '0' },
  { label: 'Total P.M.', value: '0' },
  { label: 'Total Earning', value: '0' },
];

const financials = [
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
  { title: 'Bifercation of Expense not provided, Total Expenses', value: 'bifercationOfExpenses' },
];

const salaryFromBusiness = [
  { title: 'Salary from above business', value: 'salaryFromBusiness' },
  {
    title: 'Remuneration from above business',
    value: 'remunerationFromBusiness',
  },
  { title: 'Rent', value: 'rent' },
];

const FinancialType = ({ formik, title, type, value }: any) => {
  return (
    <AGroupFields col={3} title={title}>
      <AInputField
        id={`${value}.amountPA`}
        label={'Amount PA'}
        value={formik.values[type][value].amountPA}
        error={formik.errors[type][value].amountPA}
        handleChange={formik.handleChange}
      />
      <AInputField
        id={`${value}.amountPM`}
        label={'Amount PM'}
        value={formik.values[type][value].amountPM}
        error={formik.errors[type][value].amountPM}
        handleChange={formik.handleChange}
      />
      <AInputField
        id={`${value}.months`}
        label={'Months'}
        value={formik.values[type][value].months}
        error={formik.errors[type][value].months}
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

  const initialValues = {
    entityName: '',
    applicantIncome: '',
    income: {
      turnoverGrossReciepts: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      purchases: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      totalAmountPA: '',
      totalAmountPM: '',
    },
    expenses: {
      salary: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      maintanance: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      transport: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      electricity: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      travelling: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      fuel: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      officeRent: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      partnersSalary: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      partnersRemuneration: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      otherExpenses: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      bifercationOfExpenses: {
        amountPA: '',
        amountPM: '',
        months: 0,
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
        months: 0,
      },
      remunerationFromBusiness: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      rent: {
        amountPA: '',
        amountPM: '',
        months: 0,
      },
      totalIncomePA: '',
      totalIncomePM: '',
      totalEarning: '',
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
        <div className="flex flex-col py-4">
          <AGroupFields col={2}>
            <AInputField
              id={'entityName'}
              label={'Entity Name'}
              value={formik.values.entityName}
              error={formik.errors.entityName}
              handleChange={formik.handleChange}
            />
            <ASingleSelect
              id={'applicantIncome'}
              label={'Income of which applicant?'}
              options={applicantIncome}
              value={formik.values.applicantIncome}
              error={formik.errors.applicantIncome}
              handleChange={formik.handleChange}
            />
          </AGroupFields>
          <ASection footers={turnoverFooter}>
            {financials.map((item) => (
              <FinancialType
                type={'income'}
                formik={formik}
                key={item.value}
                title={item.title}
                value={item.value}
              />
            ))}
          </ASection>
          <ASection>
            {expenses.map((item) => {
              return (
                <FinancialType
                  type={'expenses'}
                  formik={formik}
                  key={item.value}
                  title={item.title}
                  value={item.value}
                />
              );
            })}
            <div className="flex items-center justify-center">
              <AButton
                label={'Add More'}
                variant="small"
                action={() => setShowModal(true)}
                icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
            </div>
            {showModal && (
              <AModal
                saveText={'Add'}
                title={'Add More Expenses'}
                closeModal={() => setShowModal(false)}
              >
                <AInputField id={'expenseType'} label="Expense Type" />
              </AModal>
            )}
            <SectionFooter footers={totalExpensesFooter} />
            <SectionFooter footers={profitFooter} />
          </ASection>
          <ASection footers={totalEarningFooter}>
            {salaryFromBusiness.map((item) => {
              return (
                <FinancialType
                  type={'businessIncome'}
                  formik={formik}
                  key={item.value}
                  title={item.title}
                  value={item.value}
                />
              );
            })}
            <div className="flex justify-center">
              <AButton
                label={'Add More'}
                variant="small"
                action={() => setShowModal(true)}
                icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
            </div>
            {showModal && (
              <AModal
                saveText={'Add'}
                title={'Add More Expenses'}
                closeModal={() => setShowModal(false)}
              >
                <AInputField id={'expenseType'} label="Expense Type" />
              </AModal>
            )}
          </ASection>
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

export default Financials;
