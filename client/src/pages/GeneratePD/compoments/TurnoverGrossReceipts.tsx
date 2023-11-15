import { useState } from 'react';
import ATags from '../../../components-global/ATags';
import AInputField from '../../../components-global/AInputField';

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

const TurnoverGrossReceipts = () => {
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

  return (
    <div className="flex flex-col">
      <ATags
        disableAdd={true}
        tags={aprilTurnoverDetails}
        setTags={setAprilTurnoverDetails}
      >
        <p className="w-full pb-3">Ideal April till date Turnover</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 items-center">
          <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
          <AInputField type={'text'} name={'netprofit'} label={'Net Profit'} />
        </div>
        <p className="w-full pb-3">April till date Turnover</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 items-center">
          <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
          <AInputField type={'text'} name={'netprofit'} label={'Net Profit'} />
        </div>
        <AInputField
          type={'text'}
          name={'reason'}
          label={'Reason if major diff'}
        />
      </ATags>
      <ATags
        disableAdd={true}
        tags={lastyearTurnoverDetails}
        setTags={setLastyearTurnoverDetails}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
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
        </div>
      </ATags>
      <ATags
        disableAdd={true}
        tags={currentYearTurnoverDetails}
        setTags={setCurrentLastCompTurnoverDetails}
      >
        <p className="w-full pb-3">Actuals</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
          <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
          <AInputField type={'text'} name={'netprofit'} label={'Net Profit'} />
          <AInputField type={'text'} name={'percent'} label={'%'} />
        </div>
        <p className="w-full pb-3">As per Financial</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
          <AInputField type={'text'} name={'turnover'} label={'Turnover'} />
          <AInputField type={'text'} name={'netprofit'} label={'Net Profit'} />
          <AInputField type={'text'} name={'percent'} label={'%'} />
        </div>
        <AInputField
          type={'text'}
          name={'fsActual'}
          label={'F.S./Acutals (Bank Ratio)'}
        />
      </ATags>
      <ATags
        disableAdd={true}
        tags={currentLastCompTurnoverDetails}
        setTags={setCurrentLastCompTurnoverDetails}
      >
        <p className="w-full pb-3">Turnover</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 items-center">
          <AInputField type={'text'} name={'marchlast2'} label={'March-2022'} />
          <AInputField type={'text'} name={'marchlast1'} label={'March-2023'} />
          <AInputField type={'text'} name={'changes'} label={'Changes'} />
          <AInputField
            type={'text'}
            name={'changes'}
            label={'Reason if major diff'}
          />
        </div>
      </ATags>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 items-center mt-4">
        <AInputField
          type={'text'}
          name={'comments'}
          label={'Comment on Trend of Business of past 2 years'}
        />
        <AInputField
          type={'text'}
          name={'changes'}
          label={'Future Projection:'}
        />
      </div>
    </div>
  );
};

export default TurnoverGrossReceipts;
