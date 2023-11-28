import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { trendOfBusiness, futureProjection } from '../constants';
import ASection from '../../../components-global/ASection';
import moment from 'moment';

const TurnoverGrossReceipts = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
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
    bussinessTrendLast2Year: '',
    futureProjection: '',
  };

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

  const errors: any = formik.errors;

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
                rightLabel={'(Lakhs)'}
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
                rightLabel={'(Lakhs)'}
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
                value={formik?.values?.aprilTillDate.reasonforDiff}
                error={errors?.aprilTillDate?.reasonforDiff}
                handleChange={formik.handleChange}
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
                rightLabel={'(Lakhs)'}
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
                rightLabel={'(Lakhs)'}
                id={'lastYears.secondLastYear'}
                value={formik?.values?.lastYears.secondLastYear}
                error={errors?.lastYears?.secondLastYear}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Changes'}
                id={'lastYears.changes'}
                value={formik?.values?.lastYears.changes}
                error={errors?.lastYears?.changes}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'Reason if major diff'}
                id={'lastYears.reasonforDiff'}
                value={formik?.values?.lastYears.reasonforDiff}
                error={errors?.lastYears?.reasonforDiff}
                handleChange={formik.handleChange}
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
                rightLabel={'(Lakhs)'}
                id={'currentYearActual.actuals.turnover'}
                value={formik?.values?.currentYearActual.actuals.turnover}
                error={errors?.currentYearActual?.actuals?.turnover}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={'Net Profit'}
                rightLabel={'(Lakhs)'}
                id={'currentYearActual.actuals.netProfit'}
                value={formik?.values?.currentYearActual.actuals.netProfit}
                error={errors?.currentYearActual?.actuals?.netProfit}
                handleChange={formik.handleChange}
              />
              <AInputField
                label={'%'}
                type={'number'}
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
                rightLabel={'(Lakhs)'}
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
                rightLabel={'(Lakhs)'}
                id={'currentYearActual.asPerFinancials.netProfit'}
                value={
                  formik?.values?.currentYearActual.asPerFinancials.netProfit
                }
                error={errors?.currentYearActual?.asPerFinancials?.netProfit}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                label={'%'}
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
              {moment().subtract(1, 'y').year()} Comparison (as per Financials):
            </p>
            <AGroupFields>
              <AInputField
                type={'number'}
                rightLabel={'(Lakhs)'}
                id={'currentLastYearComparision.firstLastYear'}
                value={formik?.values?.currentLastYearComparision.firstLastYear}
                error={errors?.currentLastYearComparision?.firstLastYear}
                handleChange={formik.handleChange}
                label={`March-${moment().subtract(1, 'y').year()}`}
              />
              <AInputField
                type={'number'}
                rightLabel={'(Lakhs)'}
                id={'currentLastYearComparision.secondLastYear'}
                value={
                  formik?.values?.currentLastYearComparision.secondLastYear
                }
                error={errors?.currentLastYearComparision?.secondLastYear}
                handleChange={formik.handleChange}
                label={`March-${moment().year()}`}
              />
              <AInputField
                label={'Changes'}
                id={'currentLastYearComparision.changes'}
                value={formik?.values?.currentLastYearComparision.changes}
                error={errors?.currentLastYearComparision?.changes}
                handleChange={formik.handleChange}
              />
              <AInputField
                id={'currentLastYearComparision.reasonforDiff'}
                value={formik?.values?.currentLastYearComparision.reasonforDiff}
                error={errors?.currentLastYearComparision?.reasonforDiff}
                handleChange={formik.handleChange}
                label={'Reason if major diff'}
              />
            </AGroupFields>
          </ASection>
          <AGroupFields col={2}>
            <ASingleSelect
              id={'bussinessTrendLast2Year'}
              value={formik?.values?.bussinessTrendLast2Year}
              error={errors?.bussinessTrendLast2Year}
              handleChange={formik.handleChange}
              label={'Comment on Trend of Business of past 2 years'}
              options={trendOfBusiness}
            />
            <ASingleSelect
              id={'futureProjection'}
              value={formik?.values?.futureProjection}
              error={errors?.futureProjection}
              handleChange={formik.handleChange}
              label={'Future Projection:'}
              options={futureProjection}
            />
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
