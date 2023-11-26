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

  const handleStocks = (title: string, val: string) => {
    setIsStocks(val);
  };

  const initialValues = {
    isStockDetails: '',
    stockDetails: {
      rawMaterialAmount: '',
      wipAmount: '',
      finishGoods: '',
      totalStocks: '',
      stockHoldingPeriod: '',
      whyStocklowHigh: '',
    },
  };

  const validationSchema = Yup.object().shape({});

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
            handleChange={handleStocks}
            radioValues={[]}
          />
          {isStocks == '' && (
            <ASection>
              <AGroupFields>
                <AInputField
                  
                  name={'rawMaterial'}
                  label={'Raw Material Amt.'}
                />
                <AInputField  name={'wip'} label={'WIP Amt.'} />
                <AInputField
                  
                  name={'finishGoods'}
                  label={'Finish Goods'}
                />
                <AInputField
                  
                  name={'totalStock'}
                  label={'Total Stock'}
                />
                <AInputField
                  
                  name={'stockHoldingPeriod'}
                  label={'Stock Holding Period'}
                />
                <AInputField
                  
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
        handleNext={() => formik.handleSubmit()}
      />
    </>
  );
};

export default Stocks;
