import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { trendOfBusiness, futureProjection } from '../constants';
import ASection from '../../../components-global/ASection';
import moment from 'moment';
import { useEffect } from 'react';
import { AddTagFooter, AddTagButton } from '../../../components-global/ATags';

const trendsInfo = {
  bussinessTrendLast2Year: '',
  otherbussinessTrendLast2Year: '',
  futureProjection: '',
  otherfutureProjection: '',
} as any;

const initialValues = {
  aprilTillDate: {
    idealAprilTillDate: {
      turnover: '',
      netProfit: '',
    },
    aprilTillDate: {
      turnover: '',
      netProfit: '',
    },
    reasonforDiff: '',
  },
  lastYears: {
    firstLastYear: '',
    secondLastYear: '',
    changes: '',
    reasonforDiff: '',
  },
  currentYearActual: {
    actuals: {
      turnover: '',
      netProfit: '',
      profitPercentage: '',
    },
    asPerFinancials: {
      turnover: '',
      netProfit: '',
      profitPercentage: '',
    },
    financialActualRatio: '',
  },
  currentLastYearComparision: {
    firstLastYear: '',
    secondLastYear: '',
    changes: '',
    reasonforDiff: '',
  },
  trends: [{ ...trendsInfo }],
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
        turnover: Yup.string().required('This field is required'),
        netProfit: Yup.string().required('This field is required'),
      }),
      aprilTillDate: Yup.object({
        turnover: Yup.string().required('This field is required'),
        netProfit: Yup.string().required('This field is required'),
      }),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    lastYears: Yup.object({
      firstLastYear: Yup.string().required('This field is required'),
      secondLastYear: Yup.string().required('This field is required'),
      changes: Yup.string().required('This field is required'),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    currentYearActual: Yup.object({
      actuals: Yup.object({
        turnover: Yup.string().required('This field is required'),
        netProfit: Yup.string().required('This field is required'),
        profitPercentage: Yup.string().required('This field is required'),
      }),
      asPerFinancials: Yup.object({
        turnover: Yup.string().required('This field is required'),
        netProfit: Yup.string().required('This field is required'),
        profitPercentage: Yup.string().required('This field is required'),
      }),
      financialActualRatio: Yup.string().required('This field is required'),
    }),
    currentLastYearComparision: Yup.object({
      firstLastYear: Yup.string().required('This field is required'),
      secondLastYear: Yup.string().required('This field is required'),
      changes: Yup.string().required('This field is required'),
      reasonforDiff: Yup.string().required('This field is required'),
    }),
    trends: Yup.array().of(
      Yup.object().shape({
        bussinessTrendLast2Year: Yup.string().required(
          'This field is required',
        ),
        futureProjection: Yup.string().required('This field is required'),
      }),
    ),
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
    const first = parseFloat(
      formik?.values?.currentLastYearComparision.firstLastYear,
    );
    const second = parseFloat(
      formik?.values?.currentLastYearComparision.secondLastYear,
    );
    if (first !== 0 && second !== 0) {
      const percent = ((second - first) * 100) / first;

      formik.setFieldValue(
        'currentLastYearComparision.changes',
        calculatePercentage(first, second),
      );
      formik.setFieldValue(
        'currentLastYearComparision.reasonforDiff',
        Math.abs(percent) > 25 ? '' : '-',
      );
    }
  };

  useEffect(() => {
    const idealTurn = parseFloat(
      formik?.values?.aprilTillDate?.idealAprilTillDate?.turnover,
    );
    const actualTurn = parseFloat(
      formik?.values?.aprilTillDate?.aprilTillDate?.turnover,
    );
    let actualPer = ((idealTurn - actualTurn) * 100) / actualTurn;
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
    const first = parseFloat(formik?.values?.lastYears.firstLastYear);
    const second = parseFloat(formik?.values?.lastYears.secondLastYear);

    let lastPer = ((second - first) * 100) / first;
    formik.setFieldValue(
      'lastYears.changes',
      calculatePercentage(first, second),
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
    const actTurn = parseFloat(
      formik?.values?.currentYearActual?.actuals?.turnover,
    );
    const finTurn = parseFloat(
      formik?.values?.currentYearActual?.asPerFinancials?.turnover,
    );
    const finNetProf = parseFloat(
      formik?.values?.currentYearActual?.asPerFinancials?.netProfit,
    );
    const percent = (finNetProf * 100) / finTurn;
    const ratio = (finTurn * 100) / actTurn;

    formik.setFieldValue(
      'currentYearActual.asPerFinancials.profitPercentage',
      Number.isNaN(percent) ? 0 : percent.toFixed(2),
    );
    formik.setFieldValue(
      'currentYearActual.financialActualRatio',
      Number.isNaN(ratio) ? 0 : Number.isFinite(ratio) ? 0 : ratio,
    );
    formik.setFieldValue(
      'currentLastYearComparision.secondLastYear',
      Number.isNaN(finTurn) ? 0 : finTurn,
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
      formik.setFieldValue('trends', payloads?.turnoverDetails?.trends);
    } else {
      const end = moment();
      const start = moment([2023, 3, 1]);
      const turnA = parseFloat(
        payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
          ?.amountPA,
      );
      const turnoverA: any = Number.isNaN(turnA)
        ? 0
        : (turnA * (end.diff(start, 'days') / 365)).toFixed(2);
      const netProfM = parseFloat(
        payloads?.financials?.finances[0]?.expenses?.netProfitPM,
      );
      const netProfA = parseFloat(
        payloads?.financials?.finances[0]?.expenses?.netProfitPA,
      );
      const netProfitA: any = (
        (turnoverA * (Number.isNaN(netProfM) ? 0 : netProfM)) /
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
        Number.isNaN(turnA) ? 0 : turnA,
      );
      formik.setFieldValue(
        'currentYearActual.actuals.netProfit',
        Number.isNaN(netProfA) ? 0 : netProfA,
      );
      formik.setFieldValue(
        'currentYearActual.actuals.profitPercentage',
        Number.isNaN(netProfM) ? 0 : netProfM,
      );
    }
  }, [payloads]);

  const errors: any = formik?.errors;
  const errorsTd: any = formik?.errors?.trends;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col gap-3">
          <ASection>
            <p className="w-full pb-3">Aprill Till Date:</p>
            <AGroupFields col={2} title={'Ideal April till date Turnover'}>
              <AInputField
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
                id={'aprilTillDate.aprilTillDate.turnover'}
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                value={formik?.values?.aprilTillDate.aprilTillDate.turnover}
                error={errors?.aprilTillDate?.aprilTillDate?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
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
                label={'Turnover'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.actuals.turnover'}
                value={formik?.values?.currentYearActual.actuals.turnover}
                error={errors?.currentYearActual?.actuals?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Net Profit'}
                rightLabel={'(In Lakhs)'}
                id={'currentYearActual.actuals.netProfit'}
                value={formik?.values?.currentYearActual.actuals.netProfit}
                error={errors?.currentYearActual?.actuals?.netProfit}
                handleChange={formik.handleChange}
              />
              <AInputField
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
                rightLabel={'(In Lakhs)'}
                id={'currentLastYearComparision.firstLastYear'}
                value={formik?.values?.currentLastYearComparision.firstLastYear}
                error={errors?.currentLastYearComparision?.firstLastYear}
                handleChange={formik.handleChange}
                label={`March-${moment().subtract(1, 'y').year()}`}
              />
              <AInputField
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
          <p className="w-full mb-3">Business Trends</p>
          <FormikProvider value={formik}>
            <form>
              <FieldArray
                name="trends"
                render={(tag) => (
                  <div>
                    {formik?.values?.trends?.length > 0 ? (
                      formik?.values?.trends?.map((item: any, index: any) => (
                        <div
                          key={item?.bussinessTrendLast2Year}
                          className="flex items-center w-full gap-3 mb-3"
                        >
                          <div className="w-full border-2 rounded-lg pt-3 px-3">
                            <AGroupFields col={2}>
                              <ASingleSelect
                                id={`trends[${index}].bussinessTrendLast2Year`}
                                value={
                                  formik?.values?.trends[index]
                                    .bussinessTrendLast2Year
                                }
                                error={
                                  errorsTd?.length > 0 &&
                                  errorsTd[index].bussinessTrendLast2Year
                                }
                                handleChange={formik.handleChange}
                                label={
                                  'Comment on Trend of Business of past 2 years'
                                }
                                options={trendOfBusiness}
                              />
                              {formik?.values?.trends[index]
                                .bussinessTrendLast2Year === 'Other' && (
                                <AInputField
                                  id={`trends[${index}].otherbussinessTrendLast2Year`}
                                  value={
                                    formik?.values?.trends[index]
                                      .otherbussinessTrendLast2Year
                                  }
                                  error={
                                    errorsTd?.length > 0 &&
                                    errorsTd[index].otherbussinessTrendLast2Year
                                  }
                                  handleChange={formik.handleChange}
                                  label={
                                    'Comment on Trend of Business of past 2 years'
                                  }
                                />
                              )}
                              <ASingleSelect
                                id={`trends[${index}].futureProjection`}
                                value={
                                  formik?.values?.trends[index].futureProjection
                                }
                                error={
                                  errorsTd?.length > 0 &&
                                  errorsTd[index].futureProjection
                                }
                                handleChange={formik.handleChange}
                                label={'Future Projection'}
                                options={futureProjection}
                              />
                              {formik?.values?.trends[index]
                                .futureProjection === 'Other' && (
                                <AInputField
                                  id={`trends[${index}].otherfutureProjection`}
                                  value={
                                    formik?.values?.trends[index]
                                      .otherfutureProjection
                                  }
                                  error={
                                    errorsTd?.length > 0 &&
                                    errorsTd[index].otherfutureProjection
                                  }
                                  handleChange={formik.handleChange}
                                  label={'Future Projection'}
                                />
                              )}
                            </AGroupFields>
                          </div>
                          <AddTagFooter
                            addTag={() => tag.push(trendsInfo)}
                            removeTag={() => tag.remove(index)}
                          />
                        </div>
                      ))
                    ) : (
                      <AddTagButton
                        title={'Add Business Trends'}
                        addTag={() => tag.push(trendsInfo)}
                      />
                    )}
                  </div>
                )}
              />
            </form>
          </FormikProvider>
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
