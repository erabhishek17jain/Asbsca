import { useState } from 'react';
import ATags from '../../../components-global/ATags';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
        <div className="flex flex-col gap-3">
          <ATags
            disableAdd={true}
            tags={aprilTurnoverDetails}
            setTags={setAprilTurnoverDetails}
          >
            <p className="w-full pb-3">Ideal April till date Turnover</p>
            <AGroupFields col={2}>
              <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
              <AInputField
                type={'text'}
                name={'netprofit'}
                label={'Net Profit'}
              />
            </AGroupFields>
            <p className="w-full pb-3">April till date Turnover</p>
            <AGroupFields col={2}>
              <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
              <AInputField
                type={'text'}
                name={'netprofit'}
                label={'Net Profit'}
              />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
                name={'reason'}
                label={'Reason if major diff'}
              />
            </AGroupFields>
          </ATags>
          <ATags
            disableAdd={true}
            tags={lastyearTurnoverDetails}
            setTags={setLastyearTurnoverDetails}
          >
            <AGroupFields>
              <AInputField
                type={'text'}
                name={'last2year'}
                label={'March-2021 (As per F.S.)'}
              />
              <AInputField
                type={'text'}
                name={'lastyear'}
                label={'March-2022 (As per F.S.)'}
              />
              <AInputField type={'text'} name={'changes'} label={'Changes'} />
              <AInputField
                type={'text'}
                name={'changes'}
                label={'Reason if major diff'}
              />
            </AGroupFields>
          </ATags>
          <ATags
            disableAdd={true}
            tags={currentYearTurnoverDetails}
            setTags={setCurrentYearTurnoverDetails}
          >
            <p className="w-full pb-3">Actuals</p>
            <AGroupFields col={3}>
              <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
              <AInputField
                type={'text'}
                name={'netprofit'}
                label={'Net Profit'}
              />
              <AInputField type={'text'} name={'percent'} label={'%'} />
            </AGroupFields>
            <p className="w-full pb-3">As per Financial</p>
            <AGroupFields col={3}>
              <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
              <AInputField
                type={'text'}
                name={'netprofit'}
                label={'Net Profit'}
              />
              <AInputField type={'text'} name={'percent'} label={'%'} />
            </AGroupFields>
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
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
              <AInputField
                type={'text'}
                name={'marchlast2'}
                label={'March-2022'}
              />
              <AInputField
                type={'text'}
                name={'marchlast1'}
                label={'March-2023'}
              />
              <AInputField type={'text'} name={'changes'} label={'Changes'} />
              <AInputField
                type={'text'}
                name={'changes'}
                label={'Reason if major diff'}
              />
            </AGroupFields>
          </ATags>
          <AGroupFields col={2}>
            <ASingleSelect
              name={'comments'}
              label={'Comment on Trend of Business of past 2 years'}
              options={[]}
            />
            <ASingleSelect
              name={'changes'}
              label={'Future Projection:'}
              options={[]}
            />
          </AGroupFields>
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

export default TurnoverGrossReceipts;
