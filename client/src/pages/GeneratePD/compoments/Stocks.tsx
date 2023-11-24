import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Stocks = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isStocks, setIsStocks] = useState('');

  const handleStocks = (val: string) => {
    setIsStocks(val);
  };

  
  const initialValues = {
    loan: '',
    loanType: '',
    bankName: '',
  };

  const validationSchema = Yup.object().shape({
    loan: Yup.string().required('This field is required'),
    loanType: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
  });

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
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            isReset={true}
            value={isStocks}
            title={'Stocks'}
            handleChecked={handleStocks}
            radioValues={[]}
          />
          {isStocks == '' && (
            <ASection>
              <AGroupFields>
                <AInputField
                  type={'text'}
                  name={'rawMaterial'}
                  label={'Raw Material Amt.'}
                />
                <AInputField type={'text'} name={'wip'} label={'WIP Amt.'} />
                <AInputField
                  type={'text'}
                  name={'finishGoods'}
                  label={'Finish Goods'}
                />
                <AInputField
                  type={'text'}
                  name={'totalStock'}
                  label={'Total Stock'}
                />
                <AInputField
                  type={'text'}
                  name={'stockHoldingPeriod'}
                  label={'Stock Holding Period'}
                />
                <AInputField
                  type={'text'}
                  name={'whyLowHigh'}
                  label={'Why Stock is low/high?'}
                />
              </AGroupFields>
            </ASection>
          )}
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

export default Stocks;
