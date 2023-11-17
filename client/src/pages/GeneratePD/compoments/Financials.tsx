import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AModal } from '../../../components-global/AModal';
import ASection, { SectionFooter } from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';

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
      <AInputField type={'text'} name={'amountPA'} label={'Amount PA'} />
      <AInputField type={'text'} name={'amountPM'} label={'Amount PM'} />
      <AInputField type={'text'} name={'months'} label={'Months'} />
    </AGroupFields>
  );
};

const Financials = ({ formik }: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col py-4">
      <AGroupFields col={2}>
        <AInputField type={'text'} name={'entityName'} label={'Entity Name'} />
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
              type={'text'}
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
              type={'text'}
              name={'expenseType'}
              label="Expense Type"
            />
          </AModal>
        )}
      </ASection>
    </div>
  );
};

export default Financials;
