import { useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';

const steps = [
  {
    index: 0,
    label: 'Loan Heading',
  },
  {
    index: 1,
    label: 'Basic Personal Details & Experience',
  },
  {
    index: 2,
    label: 'Existing Loan & Credit Facility',
  },
  {
    index: 3,
    label: 'Details of Property to be Mortgage',
  },
  {
    index: 4,
    label: 'Business Details',
  },
  {
    index: 5,
    label: 'Financials',
  },
  {
    index: 6,
    label: 'Comitments Summary & FOIR Ratio',
  },
  {
    index: 7,
    label: 'Turnover/Gross Receipts (April till now)',
  },
  {
    index: 8,
    label: 'Clients & Debtors',
  },
  {
    index: 9,
    label: 'Stocks',
  },
  {
    index: 10,
    label: 'Suppliers & Creditors',
  },
  {
    index: 11,
    label: 'Assets, Investment & Bank Details',
  },
  {
    index: 12,
    label: 'Other Observation',
  },
  {
    index: 13,
    label: 'Documents seen',
  },
  {
    index: 14,
    label: 'Business Process of',
  },
];

const GeneratePD = () => {
  const navigate = useNavigate();

  const generateReport = () => {
    navigate('/finalReport');
  };

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[80vh] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper steps={steps} generateReport={generateReport} />
      </div>
    </>
  );
};

export default GeneratePD;
