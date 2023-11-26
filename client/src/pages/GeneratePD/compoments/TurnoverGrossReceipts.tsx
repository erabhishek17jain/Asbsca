import { useState } from 'react';
import ATags from '../../../components-global/ATags';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { trendOfBusiness, futureProjection } from '../constants';

const aprilTurnoverInfo = {
  id: 'trun1',
  title: 'April Till Date',
  isOpen: true,
  data: [],
};

const lastyearTurnoverInfo = {
  id: 'trun2',
  title: 'March-2021 and March-2022 (As per F.S.)',
  isOpen: true,
  data: [],
};

const currentYearTurnoverInfo = {
  id: 'trun2',
  title: 'March-2023 (F.S. and Actuals Comparision)',
  isOpen: true,
  data: [],
};

const currentLastCompTurnoverInfo = {
  id: 'trun3',
  title: 'March-2023 and March-2022 Comparison (as per Financials)',
  isOpen: true,
  data: [],
};

const TurnoverGrossReceipts = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [aprilTurnoverDetails, setAprilTurnoverDetails] = useState([
    { ...aprilTurnoverInfo },
  ]);
  const [lastyearTurnoverDetails, setLastyearTurnoverDetails] = useState([
    { ...lastyearTurnoverInfo },
  ]);
  const [currentYearTurnoverDetails, setCurrentYearTurnoverDetails] = useState([
    { ...currentYearTurnoverInfo },
  ]);
  const [currentLastCompTurnoverDetails, setCurrentLastCompTurnoverDetails] =
    useState([{ ...currentLastCompTurnoverInfo }]);

  const initialValues = {
    apirilTillDate: {
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
        <div className="flex flex-col gap-3">
          <ATags
            disableAdd={true}
            tags={aprilTurnoverDetails}
            setTags={setAprilTurnoverDetails}
          >
            <p className="w-full pb-3">Ideal April till date Turnover</p>
            <AGroupFields col={2}>
              <AInputField name={'turnover'} label={'Turnover'} />
              <AInputField name={'netprofit'} label={'Net Profit'} />
            </AGroupFields>
            <p className="w-full pb-3">April till date Turnover</p>
            <AGroupFields col={2}>
              <AInputField name={'turnover'} label={'Turnover'} />
              <AInputField name={'netprofit'} label={'Net Profit'} />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField name={'reason'} label={'Reason if major diff'} />
            </AGroupFields>
          </ATags>
          <ATags
            disableAdd={true}
            tags={lastyearTurnoverDetails}
            setTags={setLastyearTurnoverDetails}
          >
            <AGroupFields>
              <AInputField
                name={'last2year'}
                label={'March-2021 (As per F.S.)'}
              />
              <AInputField
                name={'lastyear'}
                label={'March-2022 (As per F.S.)'}
              />
              <AInputField name={'changes'} label={'Changes'} />
              <AInputField name={'changes'} label={'Reason if major diff'} />
            </AGroupFields>
          </ATags>
          <ATags
            disableAdd={true}
            tags={currentYearTurnoverDetails}
            setTags={setCurrentYearTurnoverDetails}
          >
            <p className="w-full pb-3">Actuals</p>
            <AGroupFields col={3}>
              <AInputField name={'turnover'} label={'Turnover'} />
              <AInputField name={'netprofit'} label={'Net Profit'} />
              <AInputField name={'percent'} label={'%'} />
            </AGroupFields>
            <p className="w-full pb-3">As per Financial</p>
            <AGroupFields col={3}>
              <AInputField name={'turnover'} label={'Turnover'} />
              <AInputField name={'netprofit'} label={'Net Profit'} />
              <AInputField name={'percent'} label={'%'} />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                name={'fsActual'}
                label={'F.S./Acutals (Bank Ratio)'}
              />
            </AGroupFields>
          </ATags>
          <ATags
            disableAdd={true}
            tags={currentLastCompTurnoverDetails}
            setTags={setCurrentLastCompTurnoverDetails}
          >
            <p className="w-full pb-3">Turnover</p>
            <AGroupFields>
              <AInputField name={'marchlast2'} label={'March-2022'} />
              <AInputField name={'marchlast1'} label={'March-2023'} />
              <AInputField name={'changes'} label={'Changes'} />
              <AInputField name={'changes'} label={'Reason if major diff'} />
            </AGroupFields>
          </ATags>
          <AGroupFields col={2}>
            <ASingleSelect
              name={'comments'}
              label={'Comment on Trend of Business of past 2 years'}
              options={trendOfBusiness}
            />
            <ASingleSelect
              name={'changes'}
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
