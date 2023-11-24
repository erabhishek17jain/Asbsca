import { useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useState } from 'react';

const GeneratePD = () => {
  const navigate = useNavigate();
  const [payloads, setPayloads] = useState({
    loanDetails: {},
    personalDetails: {},
    existingLoan: {},
    propertyDetails: {},
    bussinessDetails: {},
    financialDetails: {},
    comitmentsDetails: {},
    turnoverReceipts: {},
    clientsAndDebtors: {},
    StocksDetails: {},
    suppliersAndCreditors: {},
    assetsInvestmentBank: {},
    observationDetails: {},
    documentsSeen: {},
    bussinessProcessOf: {},
  });

  const generateReport = () => {
    navigate('/finalReport');
  };

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper
          steps={reportSteps}
          payloads={payloads}
          setPayloads={setPayloads}
          generateReport={generateReport}
        />
      </div>
    </>
  );
};

export default GeneratePD;
