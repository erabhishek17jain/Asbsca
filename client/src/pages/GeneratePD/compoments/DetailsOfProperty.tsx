import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ATags from '../../../components-global/ATags';

const radioValues = [
  { name: 'loanDetailsNotProvided', label: 'Loan Details Not Provided' },
  {
    name: 'propertyValueNotProvided',
    label: 'Property Vaue Not Provided',
  },
  { name: 'bothNotProvided', label: 'Both Not Provided' },
];
const propertyInfo = {
  id: 'prop1',
  title: 'Property Details',
  isOpen: true,
  data: [],
};
const propertyLoanInfo = {
  id: 'propLoan1',
  title: 'Loan to Property and Proposed EMI calculations',
  isOpen: true,
  data: [],
};

const DetailsOfProperty = () => {
  const [loanPropertyEMI, setLoanPropertyEMI] = useState<string>('');
  const [propertyDetails, setPropertyDetails] = useState([{ ...propertyInfo }]);
  const [propertyLoanDetails, setPropertyLoanDetails] = useState([
    { ...propertyLoanInfo },
  ]);

  const handleLoanPropertyEMI = (val: string) => {
    setLoanPropertyEMI(val);
  };

  return (
    <div className="flex flex-col">
      <ATags
        disableAdd={true}
        tags={propertyDetails}
        defaultTag={propertyInfo}
        setTags={setPropertyDetails}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4">
          <ASingleSelect
            name={'purchaseYear'}
            label={'Purchase Year'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField
            type={'text'}
            name={'buildupArea'}
            label={'Loan Property Build-up Area (Sq. Ft.)'}
          />
          <AInputField
            type={'text'}
            name={'carpetArea'}
            label={'Loan Property Carpet Area (Sq. Ft.)'}
          />
          <ASingleSelect
            name={'occupiedBy'}
            label={'Occupied By'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField
            type={'text'}
            name={'loanPropertyAddress'}
            label={'Loan Property Address'}
          />
          <AInputField
            type={'text'}
            name={'builderName'}
            label={'Builder Name'}
          />
        </div>
      </ATags>
      <ATags
        disableAdd={true}
        tags={propertyLoanDetails}
        defaultTag={propertyLoanInfo}
        setTags={setPropertyLoanDetails}
      >
        <ARadioButtonGroup
          value={loanPropertyEMI}
          title={'Other Commitments'}
          radioValues={radioValues}
          handleChecked={handleLoanPropertyEMI}
        />
        {loanPropertyEMI === 'propertyValueNotProvided' && (
          <>
            <p className="w-full mb-3">Loan Applied</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              <AInputField type={'text'} name={'amount'} label={'Amount'} />
              <AInputField type={'text'} name={'emi'} label={'EMI'} />
              <AInputField type={'text'} name={'roi'} label={'ROI'} />
              <AInputField type={'text'} name={'year'} label={'Year'} />
            </div>
          </>
        )}
        {loanPropertyEMI === 'loanDetailsNotProvided' && (
          <>
            <p className="w-full mb-3">Property Value</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              <AInputField
                type={'text'}
                name={'agreementValue'}
                label={'Agreement Value'}
              />
              <AInputField
                type={'text'}
                name={'purchaseValue'}
                label={'Purchase Value'}
              />
              <AInputField
                type={'text'}
                name={'marketValue'}
                label={'Market Value'}
              />
              <ASingleSelect
                name={'putPB'}
                label={'Put P/B'}
                options={[
                  { label: 'P', value: 'P' },
                  { label: 'B', value: 'B' },
                  { label: 'p', value: 'p' },
                  { label: 'b', value: 'b' },
                ]}
              />
              <AInputField
                type={'text'}
                name={'amtRequired'}
                label={'Amt. Required'}
              />
            </div>
          </>
        )}
        <p className="w-full mb-3">Loan Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          <AInputField
            type={'text'}
            name={'loanApplication'}
            label={'Loan as per application Form'}
          />
          <ASingleSelect
            name={'purposeOfLAP'}
            label={'Purpose of LAP'}
            options={[{ label: 'India', value: 'india' }]}
          />
        </div>
      </ATags>
    </div>
  );
};

export default DetailsOfProperty;
