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
  { title: 'Turnover/Gross Receipts' },
  { title: 'Purchases' },
];

const expenses = [
  { title: 'Salary' },
  { title: 'Maintanance' },
  { title: 'Transport' },
  { title: 'Electricity' },
  { title: 'Travelling Expenses' },
  { title: 'Fuel' },
  { title: 'Office Rent' },
  { title: "Partner's Salary" },
  { title: "Partner's Remuneration" },
  { title: 'Other Expenses' },
  { title: 'Bifercation of Expense not provided, Total Expenses' },
];

const salaryFromBusiness = [
  { title: 'Salary from above business' },
  { title: 'Remuneration from above business' },
  { title: 'Rent' },
];

const FinancialType = ({ title }: any) => {
  return (
    <AGroupFields col={3} title={title}>
      <AInputField  name={'amountPA'} label={'Amount PA'} />
      <AInputField  name={'amountPM'} label={'Amount PM'} />
      <AInputField  name={'months'} label={'Months'} />
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
    incomeOfWhichApplicant: '',
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
              
              name={'entityName'}
              label={'Entity Name'}
            />
            <ASingleSelect
              name={'incomeOfWhichApplicant'}
              label={'Income of which applicant?'}
              options={[{ label: 'India', value: 'india' }]}
            />
          </AGroupFields>
          <ASection footers={turnoverFooter}>
            {financials.map((item) => (
              <FinancialType key={item.title} title={item.title} />
            ))}
          </ASection>
          <ASection>
            {expenses.map((item) => {
              return <FinancialType key={item.title} title={item.title} />;
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
                <AInputField
                  
                  name={'expenseType'}
                  label="Expense Type"
                />
              </AModal>
            )}
            <SectionFooter footers={totalExpensesFooter} />
            <SectionFooter footers={profitFooter} />
          </ASection>
          <ASection footers={totalEarningFooter}>
            {salaryFromBusiness.map((item) => {
              return <FinancialType key={item.title} title={item.title} />;
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
                <AInputField
                  
                  name={'expenseType'}
                  label="Expense Type"
                />
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
