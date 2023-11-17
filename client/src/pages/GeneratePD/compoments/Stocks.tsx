import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { nilNoNpOptions } from '../constants';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';

const Stocks = ({ formik }: any) => {
  const [isStocks, setIsStocks] = useState('');

  const handleStocks = (val: string) => {
    setIsStocks(val);
  };

  return (
    <div className="flex flex-col w-full">
      <ARadioButtonGroup
        isReset={true}
        value={isStocks}
        title={'Stocks'}
        handleChecked={handleStocks}
        radioValues={nilNoNpOptions}
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
  );
};

export default Stocks;
