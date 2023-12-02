import { useEffect, useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { yesNoOptions } from '../constants';
import { calculatePeriod } from '../../../utils';

const initialValues = {
  isStockDetails: 'Yes',
  stockDetails: {
    rawMaterialAmount: 0,
    wipAmount: 0,
    finishGoods: 0,
    whyStocklowHigh: 0,
    totalStocks: 0,
    stockHoldingPeriod: '',
  },
};

const Stocks = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isStocks, setIsStocks] = useState('Yes');

  const handleStocks = (title: string, val: string) => {
    console.log(title);
    setIsStocks(val);
  };

  const validationSchema = Yup.object().shape({
    stockDetails: Yup.object().shape({
      rawMaterialAmount: Yup.number().required('This field is required'),
      wipAmount: Yup.number().required('This field is required'),
      finishGoods: Yup.number().required('This field is required'),
      whyStocklowHigh: Yup.string().required('This field is required'),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, stocks: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    const total =
      formik?.values?.stockDetails?.rawMaterialAmount +
      formik?.values?.stockDetails?.wipAmount +
      formik?.values?.stockDetails?.finishGoods +
      formik?.values?.stockDetails?.rawMaterialAmount;
    formik.setFieldValue('stockDetails.totalStocks', total);
    formik.setFieldValue(
      'stockDetails.collectionPeriod',
      calculatePeriod(
        total,
        payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
          ?.amountPA,
      ),
    );
  }, [formik?.values?.stockDetails]);

  useEffect(() => {
    if (payloads.stocks) {
      formik.setFieldValue('isStockDetails', payloads?.stocks?.isStockDetails);
      formik.setFieldValue('stockDetails', payloads?.stocks?.stockDetails);
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            value={isStocks}
            title={'Stocks'}
            handleChange={handleStocks}
            radioValues={yesNoOptions}
          />
          {isStocks === 'Yes' && (
            <ASection
              footers={[
                {
                  label: 'Total Stocks',
                  value: formik?.values?.stockDetails.totalStocks,
                },
                {
                  label: 'Stock Holding Period',
                  value: formik?.values?.stockDetails.stockHoldingPeriod,
                },
              ]}
            >
              <AGroupFields>
                <AInputField
                  type={'number'}
                  label={'Raw Material Amt.'}
                  rightLabel={'(Lakhs)'}
                  id={'stockDetails.rawMaterialAmount'}
                  value={formik?.values?.stockDetails.rawMaterialAmount}
                  error={formik?.errors?.stockDetails?.rawMaterialAmount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  type={'number'}
                  label={'WIP Amt.'}
                  rightLabel={'(Lakhs)'}
                  id={'stockDetails.wipAmount'}
                  value={formik?.values?.stockDetails.wipAmount}
                  error={formik?.errors?.stockDetails?.wipAmount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  type={'number'}
                  label={'Finish Goods'}
                  rightLabel={'(Lakhs)'}
                  id={'stockDetails.finishGoods'}
                  value={formik?.values?.stockDetails.finishGoods}
                  error={formik?.errors?.stockDetails?.finishGoods}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'Why Stock is low/high?'}
                  id={'stockDetails.whyStocklowHigh'}
                  value={formik?.values?.stockDetails.whyStocklowHigh}
                  error={formik?.errors?.stockDetails?.whyStocklowHigh}
                  handleChange={formik.handleChange}
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
