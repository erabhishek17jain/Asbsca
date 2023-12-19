import { useEffect } from 'react';
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
    rawMaterialAmount: '',
    wipAmount: '',
    finishGoods: '',
    totalStocks: '',
    whyStocklowHigh: '',
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
  const handleStocks = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isStockDetails', val);
    if (val === 'Yes') {
      formik.setFieldValue('stockDetails.whyStocklowHigh', '');
    } else {
      formik.setFieldValue('stockDetails.whyStocklowHigh', 'NA');
    }
  };

  const validationSchema = Yup.object().shape({
    stockDetails: Yup.object().shape({
      rawMaterialAmount: Yup.string().required('This field is required'),
      wipAmount: Yup.string().required('This field is required'),
      finishGoods: Yup.string().required('This field is required'),
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
    const income = parseFloat(
      payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
        ?.amountPA,
    );
    const rawMaterial = parseFloat(
      formik?.values?.stockDetails?.rawMaterialAmount,
    );
    const wip = parseFloat(formik?.values?.stockDetails?.wipAmount);
    const finish = parseFloat(formik?.values?.stockDetails?.finishGoods);
    const total =
      (Number.isNaN(rawMaterial) ? 0 : rawMaterial) +
      (Number.isNaN(wip) ? 0 : wip) +
      (Number.isNaN(finish) ? 0 : finish);
    const lowHigh = (total * 12) / (Number.isNaN(income) ? 0 : income);
    formik.setFieldValue('stockDetails.totalStocks', total);
    if (
      formik?.values?.stockDetails.whyStocklowHigh === '' ||
      formik?.values?.stockDetails.whyStocklowHigh === '-'
    ) {
      formik.setFieldValue(
        'stockDetails.whyStocklowHigh',
        lowHigh > 0.3 && lowHigh < 4 ? '-' : '',
      );
    }
    formik.setFieldValue(
      'stockDetails.stockHoldingPeriod',
      calculatePeriod(total, Number.isNaN(income) ? 0 : income),
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
            value={formik?.values?.isStockDetails}
            title={'Stocks'}
            handleChange={handleStocks}
            radioValues={yesNoOptions}
          />
          {formik?.values?.isStockDetails === 'Yes' && (
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
                  label={'Raw Material Amt.'}
                  rightLabel={'(In Lakhs)'}
                  id={'stockDetails.rawMaterialAmount'}
                  value={formik?.values?.stockDetails.rawMaterialAmount}
                  error={formik?.errors?.stockDetails?.rawMaterialAmount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'WIP Amt.'}
                  rightLabel={'(In Lakhs)'}
                  id={'stockDetails.wipAmount'}
                  value={formik?.values?.stockDetails.wipAmount}
                  error={formik?.errors?.stockDetails?.wipAmount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  label={'Finish Goods'}
                  rightLabel={'(In Lakhs)'}
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
                  disabled={
                    formik?.values?.stockDetails.whyStocklowHigh === '-'
                  }
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
