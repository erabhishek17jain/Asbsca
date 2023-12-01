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
    <div className="absolute bottom-5 w-full flex justify-between mt-3">
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
        label={activeStep === steps?.length - 1 ? 'Generate Report' : 'Next'}
        icon={
          activeStep === steps?.length - 1 ? (
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
  activeItem,
  setPayloads,
  generateReport,
}: any) {
  const [activeStep, setActiveStep] = React.useState(6);

  const handleNext = () =>
    activeStep !== steps?.length - 1 && setActiveStep((cur) => cur + 1);
  const handlePrev = () => activeStep !== 0 && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full p-0">
      <Stepper activeStep={activeStep}>
        {steps?.map((item: any) => {
          return item.index === 0 ||
            item.index === activeStep ||
            item.index === steps?.length - 1 ? (
            <Step key={item.index} onClick={() => setActiveStep(item.index)}>
              {item.index + 1}
            </Step>
          ) : (
            <div className="w-3 sm:w-10" key={item.index}></div>
          );
        })}
      </Stepper>
      <div className="absolute w-[calc(100%-40px)] h-[calc(100%-60px)] mb-4 overflow-x-scroll flex flex-col justify-between">
        <div className="flex flex-col gap-3 mt-3">
          {activeStep === steps[activeStep].index && (
            <div className="w-max text-lg font-bold text-main text-center">
              {steps[activeStep].label}
            </div>
          )}
          {activeStep === 0 && ( // done
            <LoanDetails
              steps={steps}
              payloads={payloads}
              activeItem={activeItem}
              activeStep={activeStep}
              handlePrev={handlePrev}
              handleNext={handleNext}
              setPayloads={setPayloads}
            />
          )}
          {activeStep === 1 && (
            <PersonalDetails
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              handleNext={handleNext}
              setPayloads={setPayloads}
            />
          )}
          {activeStep === 2 && (
            <ExistingLoanCredit
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 3 && (
            <DetailsOfProperty
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 4 && (
            <BusinessDetails
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 5 && (
            <Financials
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 6 && (
            <ComitmentsSummaryFOIR
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 7 && (
            <TurnoverGrossReceipts
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 8 && (
            <ClientsDebtors
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 9 && (
            <Stocks
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 10 && (
            <SuppliersCreditors
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 11 && (
            <AssetsInvestmentBank
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 12 && (
            <OtherObservation
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 13 && ( // done
            <DocumentsSeen
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={handleNext}
            />
          )}
          {activeStep === 14 && ( // done
            <BusinessProcessOf
              steps={steps}
              payloads={payloads}
              activeStep={activeStep}
              handlePrev={handlePrev}
              setPayloads={setPayloads}
              handleNext={generateReport}
            />
          )}
        </div>
      </div>
    </div>
  );
}
