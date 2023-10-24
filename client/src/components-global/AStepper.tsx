import React from 'react';
import { Stepper, Step, Typography } from '@material-tailwind/react';
import AButton from './AButton';
import LoanDetails from '../pages/GeneratePD/LoanDetails';
import PersonalDetails from '../pages/GeneratePD/PersonalDetails';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export function AStepper({ steps }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full px-12 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        {steps.map((item: any) => {
          return (
            <Step onClick={() => setActiveStep(item.index)}>
              {item.index + 1}
              <div className="absolute -bottom-[2.5rem] w-max text-center">
                <Typography
                  variant="h6"
                  color={activeStep === item.index ? 'blue-gray' : 'gray'}
                >
                  {item.label}
                </Typography>
              </div>
            </Step>
          );
        })}
      </Stepper>
      <div className="relative top-16 mb-4 overflow-x-scroll h-[484px]">
        {activeStep === 0 && <LoanDetails />}
        {activeStep === 1 && <PersonalDetails noOfAppicants={3} />}
        {activeStep === 2 && (
          <p className="flex justify-between items-center font-sans text-base leading-relaxed text-grey-700 mt-1 font-normal mb-5">
            <span className="">
              Lets get started with started with setting up the format.
            </span>
          </p>
        )}
      </div>
      <div className="relative top-16 flex justify-between">
        <AButton
          label={'Previous'}
          variant={'secondary'}
          action={handlePrev}
          disabled={isFirstStep}
          icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
        />
        <AButton
          label={'Next'}
          variant={'secondary'}
          action={handleNext}
          disabled={isLastStep}
          icon={<ArrowRightIcon className="h-5 w-5 stroke-main stroke-1" />}
        />
      </div>
    </div>
  );
}
