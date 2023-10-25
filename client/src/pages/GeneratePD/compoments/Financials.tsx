import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AModal } from '../../../components-global/AModal';

const FinancialType = ({ title }: any) => {
  return (
    <>
      <p className="w-full mb-3">{title}</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <AInputField type={'text'} name={'amountPA'} label={'Amount PA'} />
        <AInputField type={'text'} name={'amountPM'} label={'Amount PM'} />
        <AInputField type={'text'} name={'months'} label={'Months'} />
      </div>
    </>
  );
};

const FinancialTypeFooter = ({ title }: any) => {
  return (
    <>
      <p className="w-full my-3 px-4">{title}</p>

      <div className="flex items-center bg-grey py-5 px-4">
        <p className="flex gap-4 w-full">
          <span>Amount PA: 36</span>
        </p>
        <p className="flex gap-4 w-full">
          <span>Amount PM: 60%</span>
        </p>
      </div>
    </>
  );
};

const FinancialTypeSection = ({ children, footers }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4">
      {children && <div className="pt-4 px-4">{children}</div>}
      {footers?.map((item: any) => {
        return <FinancialTypeFooter key={item.title} title={item.title} />;
      })}
    </div>
  );
};

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

const Financials = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        <AInputField type={'text'} name={'entityName'} label={'Entity Name'} />
        <ASingleSelect
          name={'incomeOfWhichApplicant'}
          label={'Income of which applicant?'}
          options={[{ label: 'India', value: 'india' }]}
        />
        <AInputField
          type={'text'}
          name={'yearOfIncorporation'}
          label={'Year of Incorporation'}
        />
      </div>
      <FinancialTypeSection footers={[{ title: 'Gross Profit' }]}>
        <FinancialType title="Turnover/Gross Receipts" />
        <FinancialType title="Purchases" />
      </FinancialTypeSection>
      <FinancialTypeSection
        footers={[
          { title: 'Total Expenses' },
          { title: 'Net Profit' },
          { title: 'Share of Profit' },
        ]}
      >
        {expenses.map((item) => {
          return <FinancialType key={item.title} title={item.title} />;
        })}
        <div className="flex items-start gap-4">
          <AButton
            label={'Add More'}
            variant="secondary"
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
      </FinancialTypeSection>
      <FinancialTypeSection
        footers={[{ title: 'Total' }, { title: 'Total Earnings' }]}
      >
        {salaryFromBusiness.map((item) => {
          return <FinancialType key={item.title} title={item.title} />;
        })}
        <div className="flex items-start gap-4">
          <AButton
            label={'Add More'}
            variant="secondary"
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
      </FinancialTypeSection>
    </div>
  );
};

export default Financials;
