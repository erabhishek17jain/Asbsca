import React from 'react';
import { Stepper, Step, Typography } from '@material-tailwind/react';
import AButton from './AButton';

export function AStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const steps = [
    {
      index: 0,
      label: 'Step 1',
      description: 'Details about yout account.',
    },
    {
      index: 1,
      label: 'Step 2',
      description: 'Details about yout account.',
    },
    {
      index: 2,
      label: 'Step 3',
      description: 'Details about yout account.',
    },
  ];

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        {steps.map((item) => {
          return (
            <Step onClick={() => setActiveStep(item.index)}>
              {item.index + 1}
              <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                  variant="h6"
                  color={activeStep === item.index ? 'blue-gray' : 'gray'}
                >
                  {item.label}
                </Typography>
                <Typography
                  color={activeStep === item.index ? 'blue-gray' : 'gray'}
                  className="font-normal"
                >
                  {item?.description}
                </Typography>
              </div>
            </Step>
          );
        })}
      </Stepper>
      <div className="mt-32 flex justify-between">
        <AButton
          label={'Previous'}
          variant={'secondary'}
          action={handlePrev}
          disabled={isFirstStep}
        />
        <AButton
          label={'Next'}
          variant={'secondary'}
          action={handleNext}
          disabled={isLastStep}
        />
      </div>
    </div>
  );
}
