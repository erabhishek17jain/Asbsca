import React from 'react';
import { Stepper, Step } from '@material-tailwind/react';
import AButton from './AButton';
import LoanDetails from '../pages/GeneratePD/compoments/LoanDetails';
import PersonalDetails from '../pages/GeneratePD/compoments/PersonalDetails';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/solid';
import ExistingLoanCredit from '../pages/GeneratePD/compoments/ExistingLoanCredit';
import DetailsOfProperty from '../pages/GeneratePD/compoments/DetailsOfProperty';
import BusinessDetails from '../pages/GeneratePD/compoments/BusinessDetails';
import Financials from '../pages/GeneratePD/compoments/Financials';
import ComitmentsSummaryFOIR from '../pages/GeneratePD/compoments/ComitmentsSummaryFOIR';
import TurnoverGrossReceipts from '../pages/GeneratePD/compoments/TurnoverGrossReceipts';
import ClientsDebtors from '../pages/GeneratePD/compoments/ClientsDebtors';
import Stocks from '../pages/GeneratePD/compoments/Stocks';
import SuppliersCreditors from '../pages/GeneratePD/compoments/SuppliersCreditors';
import AssetsInvestmentBank from '../pages/GeneratePD/compoments/AssetsInvestmentBank';
import OtherObservation from '../pages/GeneratePD/compoments/OtherObservation';
import DocumentsSeen from '../pages/GeneratePD/compoments/DocumentsSeen';
import BusinessProcessOf from '../pages/GeneratePD/compoments/BusinessProcessOf';

export const AStepperPagination = ({
  steps,
  activeStep,
  handlePrev,
  handleNext,
}: any) => {
  return (
    <div className="flex justify-between mt-4">
      <AButton
        label={'Previous'}
        variant={'secondary'}
        action={handlePrev}
        disabled={activeStep === 0}
        icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
      />
      <AButton
        action={handleNext}
        variant={'secondary'}
        disabled={activeStep === steps.length - 1}
        label={activeStep === steps.length - 1 ? 'Generate Report' : 'Next'}
        icon={
          activeStep === steps.length - 1 ? (
            <DocumentChartBarIcon className="h-5 w-5" />
          ) : (
            <ArrowRightIcon className="h-5 w-5 stroke-main stroke-1" />
          )
        }
      />
    </div>
  );
};

export function AStepper({
  steps,
  payloads,
  setPayloads,
  generateReport,
}: any) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () =>
    activeStep !== steps.length - 1 && setActiveStep((cur) => cur + 1);
  const handlePrev = () => activeStep !== 0 && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full p-0">
      <Stepper activeStep={activeStep}>
        {steps?.map((item: any) => {
          return item.index === 0 ||
            item.index === activeStep ||
            item.index === steps.length - 1 ? (
            <Step key={item.index} onClick={() => setActiveStep(item.index)}>
              {item.index + 1}
            </Step>
          ) : (
            <div className="w-3 sm:w-10" key={item.index}></div>
          );
        })}
      </Stepper>
      <div className="absolute top-16 bottom-0 w-[calc(100%-40px)] mb-4 overflow-x-scroll flex flex-col justify-between">
        <div className="flex flex-col gap-3 mt-2">
          {activeStep === steps[activeStep].index && (
            <div className="w-max text-lg font-bold text-main text-center">
              {steps[activeStep].label}
            </div>
          )}
          {activeStep === 0 && (
            <LoanDetails
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={
                activeStep === steps.length - 1 ? generateReport : handleNext
              }
            />
          )}
          {activeStep === 1 && <PersonalDetails />}
          {activeStep === 2 && <ExistingLoanCredit />}
          {activeStep === 3 && <DetailsOfProperty />}
          {activeStep === 4 && <BusinessDetails />}
          {activeStep === 5 && <Financials />}
          {activeStep === 6 && <ComitmentsSummaryFOIR />}
          {activeStep === 7 && <TurnoverGrossReceipts />}
          {activeStep === 8 && <ClientsDebtors />}
          {activeStep === 9 && <Stocks />}
          {activeStep === 10 && <SuppliersCreditors />}
          {activeStep === 11 && <AssetsInvestmentBank />}
          {activeStep === 12 && <OtherObservation />}
          {activeStep === 13 && <DocumentsSeen />}
          {activeStep === 14 && <BusinessProcessOf />}
        </div>
      </div>
    </div>
  );
}
