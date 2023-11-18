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

export function AStepper({ steps, formikReport, generateReport }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full p-0">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
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
            <div className="w-max text-lg font-bold text-black text-center">
              {steps[activeStep].label}
            </div>
          )}
          {activeStep === 0 && <LoanDetails formik={formikReport} />}
          {activeStep === 1 && <PersonalDetails formik={formikReport} />}
          {activeStep === 2 && <ExistingLoanCredit formik={formikReport} />}
          {activeStep === 3 && <DetailsOfProperty formik={formikReport} />}
          {activeStep === 4 && <BusinessDetails formik={formikReport} />}
          {activeStep === 5 && <Financials formik={formikReport} />}
          {activeStep === 6 && <ComitmentsSummaryFOIR formik={formikReport} />}
          {activeStep === 7 && <TurnoverGrossReceipts formik={formikReport} />}
          {activeStep === 8 && <ClientsDebtors formik={formikReport} />}
          {activeStep === 9 && <Stocks formik={formikReport} />}
          {activeStep === 10 && <SuppliersCreditors formik={formikReport} />}
          {activeStep === 11 && <AssetsInvestmentBank formik={formikReport} />}
          {activeStep === 12 && <OtherObservation formik={formikReport} />}
          {activeStep === 13 && <DocumentsSeen formik={formikReport} />}
          {activeStep === 14 && <BusinessProcessOf formik={formikReport} />}
        </div>
        <div className="flex justify-between mt-4">
          <AButton
            label={'Previous'}
            variant={'secondary'}
            action={handlePrev}
            disabled={isFirstStep}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
          <AButton
            label={activeStep === steps.length - 1 ? 'Generate Report' : 'Next'}
            variant={'secondary'}
            action={
              activeStep === steps.length - 1 ? generateReport : handleNext
            }
            disabled={isLastStep}
            icon={
              activeStep === steps.length - 1 ? (
                <DocumentChartBarIcon className="h-5 w-5" />
              ) : (
                <ArrowRightIcon className="h-5 w-5 stroke-main stroke-1" />
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
