import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { trendOfBusiness, futureProjection } from '../constants';
import ASection from '../../../components-global/ASection';
import moment from 'moment';
import { useEffect } from 'react';

const initialValues = {
  aprilTillDate: {
    idealAprilTillDate: {
      turnover: 0,
      netProfit: 0,
    },
    aprilTillDate: {
      turnover: 0,
      netProfit: 0,
    },
    reasonforDiff: '',
  },
  lastYears: {
    firstLastYear: 0,
    secondLastYear: 0,
    changes: '',
    reasonforDiff: '',
  },
  currentYearActual: {
    actuals: {
      turnover: 0,
      netProfit: 0,
      profitPercentage: 0,
    },
    asPerFinancials: {
      turnover: 0,
      netProfit: 0,
      profitPercentage: 0,
    },
    financialActualRatio: '',
  },
  currentLastYearComparision: {
    firstLastYear: 0,
    secondLastYear: 0,
    changes: '',
    reasonforDiff: '',
  },
  bussinessTrendLast2Year: '',
  otherbussinessTrendLast2Year: '',
  futureProjection: '',
  otherfutureProjection: '',
};

const TurnoverGrossReceipts = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const validationSchema = Yup.object().shape({
    aprilTillDate: Yup.object({
      idealAprilTillDate: Yup.object({
        turnover: Yup.number().required('This field is required'),
        netProfit: Yup.number().required('This field is required'),
      }),
      aprilTillDate: Yup.object({
        turnover: Yup.number().required('This field is required'),
        netProfit: Yup.number().required('This field is required'),
      }),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    lastYears: Yup.object({
      firstLastYear: Yup.number().required('This field is required'),
      secondLastYear: Yup.number().required('This field is required'),
      changes: Yup.string().required('This field is required'),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    currentYearActual: Yup.object({
      actuals: Yup.object({
        turnover: Yup.number().required('This field is required'),
        netProfit: Yup.number().required('This field is required'),
        profitPercentage: Yup.number().required('This field is required'),
      }),
      asPerFinancials: Yup.object({
        turnover: Yup.number().required('This field is required'),
        netProfit: Yup.number().required('This field is required'),
        profitPercentage: Yup.number().required('This field is required'),
      }),
      financialActualRatio: Yup.string().required('This field is required'),
    }),
    currentLastYearComparision: Yup.object({
      firstLastYear: Yup.number().required('This field is required'),
      secondLastYear: Yup.number().required('This field is required'),
      changes: Yup.string().required('This field is required'),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    bussinessTrendLast2Year: Yup.string().required('This field is required'),
    futureProjection: Yup.string().required('This field is required'),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, turnoverDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const calculatePercentage = (first: number, second: number) => {
    var change = '';
    const diff = second - first;
    let lastPer = Math.abs((diff * 100) / first).toFixed(2);
    if (diff > 0) {
      change = `Increased by ${diff} Lakhs | ${lastPer}%`;
    } else if (diff < 0) {
      change = `Decreased by ${Math.abs(diff)} Lakhs | ${lastPer}%`;
    } else {
      change = 'No Changes | 0%';
    }
    return change;
  };

  const setCurrLast = () => {
    if (
      formik?.values?.currentLastYearComparision.firstLastYear !== 0 &&
      formik?.values?.currentLastYearComparision.secondLastYear !== 0
    ) {
      const percent =
        ((formik?.values?.currentLastYearComparision.secondLastYear -
          formik?.values?.currentLastYearComparision.firstLastYear) *
          100) /
        formik?.values?.currentLastYearComparision.firstLastYear;

      formik.setFieldValue(
        'currentLastYearComparision.changes',
        calculatePercentage(
          formik?.values?.currentLastYearComparision.firstLastYear,
          formik?.values?.currentLastYearComparision.secondLastYear,
        ),
      );
      formik.setFieldValue(
        'currentLastYearComparision.reasonforDiff',
        Math.abs(percent) > 25 ? '' : '-',
      );
    }
  };

  useEffect(() => {
    let actualPer =
      ((formik?.values?.aprilTillDate?.idealAprilTillDate?.turnover -
        formik?.values?.aprilTillDate?.aprilTillDate?.turnover) *
        100) /
      formik?.values?.aprilTillDate?.aprilTillDate?.turnover;
    if (
      formik?.values?.aprilTillDate?.reasonforDiff === '' ||
      formik?.values?.aprilTillDate?.reasonforDiff === '-'
    ) {
      formik.setFieldValue(
        'aprilTillDate.reasonforDiff',
        Math.abs(actualPer) > 25 ? '' : '-',
      );
    }
    setCurrLast();
  }, [formik?.values?.aprilTillDate]);

  useEffect(() => {
    let lastPer =
      ((formik?.values?.lastYears?.secondLastYear -
        formik?.values?.lastYears?.firstLastYear) *
        100) /
      formik?.values?.lastYears?.firstLastYear;
    formik.setFieldValue(
      'lastYears.changes',
      calculatePercentage(
        formik?.values?.lastYears?.firstLastYear,
        formik?.values?.lastYears?.secondLastYear,
      ),
    );
    if (
      formik?.values?.lastYears?.reasonforDiff === '' ||
      formik?.values?.lastYears?.reasonforDiff === '-'
    ) {
      formik.setFieldValue(
        'lastYears.reasonforDiff',
        Math.abs(lastPer) > 25 ? '' : '-',
      );
    }
    formik.setFieldValue(
      'currentLastYearComparision.firstLastYear',
      formik?.values?.lastYears?.secondLastYear,
    );
    setCurrLast();
  }, [formik?.values?.lastYears]);

  useEffect(() => {
    const percent =
      (formik?.values?.currentYearActual?.asPerFinancials?.netProfit * 100) /
      formik?.values?.currentYearActual?.asPerFinancials?.turnover;
    const ratio =
      (formik?.values?.currentYearActual?.asPerFinancials?.turnover * 100) /
      formik?.values?.currentYearActual?.actuals?.turnover;
    formik.setFieldValue(
      'currentYearActual.asPerFinancials.profitPercentage',
      percent.toFixed(2),
    );
    formik.setFieldValue('currentYearActual.financialActualRatio', ratio);
    formik.setFieldValue(
      'currentLastYearComparision.secondLastYear',
      formik?.values?.currentYearActual?.asPerFinancials?.turnover,
    );
    setCurrLast();
  }, [formik?.values?.currentYearActual]);

  useEffect(() => {
    setCurrLast();
  }, [formik?.values?.currentLastYearComparision]);

  useEffect(() => {
    if (payloads.turnoverDetails) {
      formik.setFieldValue(
        'aprilTillDate',
        payloads.turnoverDetails?.aprilTillDate,
      );
      formik.setFieldValue('lastYears', payloads.turnoverDetails?.lastYears);
      formik.setFieldValue(
        'currentYearActual',
        payloads?.turnoverDetails?.currentYearActual,
      );
      formik.setFieldValue(
        'currentLastYearComparision',
        payloads?.turnoverDetails?.currentLastYearComparision,
      );
      formik.setFieldValue(
        'bussinessTrendLast2Year',
        payloads?.turnoverDetails?.bussinessTrendLast2Year,
      );
      formik.setFieldValue(
        'otherbussinessTrendLast2Year',
        payloads?.turnoverDetails?.otherbussinessTrendLast2Year,
      );
      formik.setFieldValue(
        'futureProjection',
        payloads?.turnoverDetails?.futureProjection,
      );
      formik.setFieldValue(
        'otherfutureProjection',
        payloads?.turnoverDetails?.otherfutureProjection,
      );
    } else {
      const end = moment();
      const start = moment([2023, 3, 1]);
      const turnoverA: any = (
        payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
          ?.amountPA *
        (end.diff(start, 'days') / 365)
      ).toFixed(2);
      const netProfitA: any = (
        (turnoverA * payloads?.financials?.finances[0]?.expenses?.netProfitPM) /
        100
      ).toFixed(2);
      formik.setFieldValue(
        'aprilTillDate.idealAprilTillDate.turnover',
        turnoverA,
      );
      formik.setFieldValue(
        'aprilTillDate.idealAprilTillDate.netProfit',
        netProfitA,
      );
      formik.setFieldValue(
        'currentYearActual.actuals.turnover',
        payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
          ?.amountPA,
      );
      formik.setFieldValue(
        'currentYearActual.actuals.netProfit',
        payloads?.financials?.finances[0]?.expenses?.netProfitPA,
      );
      formik.setFieldValue(
        'currentYearActual.actuals.profitPercentage',
        payloads?.financials?.finances[0]?.expenses?.netProfitPM,
      );
    }
  }, [payloads]);

  const errors: any = formik?.errors;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col gap-3">
          <ASection>
            <p className="w-full pb-3">Aprill Till Date:</p>
            <AGroupFields col={2} title={'Ideal April till date Turnover'}>
              <AInputField
                type={'number'}
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                id={'aprilTillDate.idealAprilTillDate.turnover'}
                value={
                  formik?.values?.aprilTillDate.idealAprilTillDate.turnover
                }
                error={errors?.aprilTillDate?.idealAprilTillDate?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                rightLabel={'(%)'}
                id={'aprilTillDate.idealAprilTillDate.netProfit'}
                label={'Net Profit'}
                value={
                  formik?.values?.aprilTillDate.idealAprilTillDate.netProfit
                }
                error={errors?.aprilTillDate?.idealAprilTillDate?.netProfit}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2} title={'April till date Turnover'}>
              <AInputField
                type={'number'}
                id={'aprilTillDate.aprilTillDate.turnover'}
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                value={formik?.values?.aprilTillDate.aprilTillDate.turnover}
                error={errors?.aprilTillDate?.aprilTillDate?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                id={'aprilTillDate.aprilTillDate.netProfit'}
                label={'Net Profit'}
                rightLabel={'(%)'}
                value={formik?.values?.aprilTillDate.aprilTillDate.netProfit}
                error={errors?.aprilTillDate?.aprilTillDate?.netProfit}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                id={'aprilTillDate.reasonforDiff'}
                label={'Reason if major diff'}
                value={formik?.values?.aprilTillDate?.reasonforDiff}
                error={errors?.aprilTillDate?.reasonforDiff}
                handleChange={formik.handleChange}
                disabled={formik?.values?.aprilTillDate.reasonforDiff === '-'}
              />
            </AGroupFields>
          </ASection>
          <ASection>
            <p className="w-full pb-3">
              March-{moment().subtract(2, 'y').year()} and March-
              {moment().subtract(1, 'y').year()} (As per F.S.)
            </p>
            <AGroupFields>
              <AInputField
                type={'number'}
                label={`March-${moment()
                  .subtract(2, 'y')
                  .year()} (As per F.S.)`}
                rightLabel={'(In Lakhs)'}
                id={'lastYears.firstLastYear'}
                value={formik?.values?.lastYears.firstLastYear}
                error={errors?.lastYears?.firstLastYear}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={`March-${moment()
                  .subtract(1, 'y')
                  .year()} (As per F.S.)`}
                rightLabel={'(In Lakhs)'}
                id={'lastYears.secondLastYear'}
                value={formik?.values?.lastYears.secondLastYear}
                error={errors?.lastYears?.secondLastYear}
                handleChange={formik.handleChange}
              />
              <AInputField
                disabled={true}
                label={'Changes'}
                id={'lastYears.changes'}
                value={formik?.values?.lastYears.changes}
                error={errors?.lastYears?.changes}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Reason if major diff'}
                id={'lastYears.reasonforDiff'}
                value={formik?.values?.lastYears?.reasonforDiff}
                error={errors?.lastYears?.reasonforDiff}
                handleChange={formik.handleChange}
                disabled={formik?.values?.lastYears.reasonforDiff === '-'}
              />
            </AGroupFields>
          </ASection>
          <ASection>
            <p className="w-full pb-3">
              March-{moment().year()} (F.S. and Actuals Comparision)
            </p>
            <AGroupFields col={3} title={'Actuals'}>
              <AInputField
                type={'number'}
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.actuals.turnover'}
                value={formik?.values?.currentYearActual.actuals.turnover}
                error={errors?.currentYearActual?.actuals?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={'Net Profit'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.actuals.netProfit'}
                value={formik?.values?.currentYearActual.actuals.netProfit}
                error={errors?.currentYearActual?.actuals?.netProfit}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                disabled={true}
                label={'Percentage'}
                rightLabel={'(%)'}
                id={'currentYearActual.actuals.profitPercentage'}
                value={
                  formik?.values?.currentYearActual.actuals.profitPercentage
                }
                error={errors?.currentYearActual?.actuals?.profitPercentage}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={3} title={'As per Financial'}>
              <AInputField
                type={'number'}
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.asPerFinancials.turnover'}
                value={
                  formik?.values?.currentYearActual?.asPerFinancials?.turnover
                }
                error={errors?.currentYearActual?.asPerFinancials?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={'Net Profit'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.asPerFinancials.netProfit'}
                value={
                  formik?.values?.currentYearActual?.asPerFinancials?.netProfit
                }
                error={errors?.currentYearActual?.asPerFinancials?.netProfit}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={'Percentage'}
                disabled={true}
                rightLabel={'(%)'}
                id={'currentYearActual.asPerFinancials.profitPercentage'}
                value={
                  formik?.values?.currentYearActual?.asPerFinancials
                    ?.profitPercentage
                }
                error={
                  errors?.currentYearActual?.asPerFinancials?.profitPercentage
                }
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                disabled={true}
                label={'F.S./Acutals (Bank Ratio)'}
                id={'currentYearActual.financialActualRatio'}
                value={formik?.values?.currentYearActual.financialActualRatio}
                error={errors?.currentYearActual?.financialActualRatio}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
          </ASection>
          <ASection>
            <p className="w-full pb-3">
              March-{moment().year()} and March-
              {moment().subtract(1, 'y').year()} Comparison (as per
              turnoverDetails):
            </p>
            <AGroupFields>
              <AInputField
                type={'number'}
                rightLabel={'(In Lakhs)'}
                id={'currentLastYearComparision.firstLastYear'}
                value={formik?.values?.currentLastYearComparision.firstLastYear}
                error={errors?.currentLastYearComparision?.firstLastYear}
                handleChange={formik.handleChange}
                label={`March-${moment().subtract(1, 'y').year()}`}
              />
              <AInputField
                type={'number'}
                rightLabel={'(In Lakhs)'}
                id={'currentLastYearComparision.secondLastYear'}
                value={
                  formik?.values?.currentLastYearComparision.secondLastYear
                }
                error={errors?.currentLastYearComparision?.secondLastYear}
                handleChange={formik.handleChange}
                label={`March-${moment().year()}`}
              />
              <AInputField
                disabled={true}
                label={'Changes'}
                id={'currentLastYearComparision.changes'}
                value={formik?.values?.currentLastYearComparision.changes}
                error={errors?.currentLastYearComparision?.changes}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'currentLastYearComparision.reasonforDiff'}
                disabled={
                  formik?.values?.currentLastYearComparision?.reasonforDiff ===
                  '-'
                }
                value={formik?.values?.currentLastYearComparision.reasonforDiff}
                error={errors?.currentLastYearComparision?.reasonforDiff}
                handleChange={formik.handleChange}
                label={'Reason if major diff'}
              />
            </AGroupFields>
          </ASection>
          <AGroupFields col={4}>
            <ASingleSelect
              id={'bussinessTrendLast2Year'}
              value={formik?.values?.bussinessTrendLast2Year}
              error={errors?.bussinessTrendLast2Year}
              handleChange={formik.handleChange}
              label={'Comment on Trend of Business of past 2 years'}
              options={trendOfBusiness}
            />
            {formik?.values?.bussinessTrendLast2Year === 'Other' && (
              <AInputField
                id={'otherbussinessTrendLast2Year'}
                value={formik?.values?.otherbussinessTrendLast2Year}
                error={errors?.otherbussinessTrendLast2Year}
                handleChange={formik.handleChange}
                label={'Comment on Trend of Business of past 2 years'}
              />
            )}
            <ASingleSelect
              id={'futureProjection'}
              value={formik?.values?.futureProjection}
              error={errors?.futureProjection}
              handleChange={formik.handleChange}
              label={'Future Projection'}
              options={futureProjection}
            />
            {formik?.values?.futureProjection === 'Other' && (
              <AInputField
                id={'otherfutureProjection'}
                value={formik?.values?.otherfutureProjection}
                error={errors?.otherfutureProjection}
                handleChange={formik.handleChange}
                label={'Future Projection'}
              />
            )}
          </AGroupFields>
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

export default TurnoverGrossReceipts;
