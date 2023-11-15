import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import AInputField from '../../../components-global/AInputField';
import ATags from '../../../components-global/ATags';

const clientRadioValues = [
  { name: 'na', label: 'NA' },
  { name: 'np', label: 'NP' },
];

const debitorRadioValues = [
  { name: 'nil', label: 'Nil' },
  { name: 'na', label: 'NA' },
  { name: 'np', label: 'NP' },
];

const clientsInfo = {
  id: 'trun1',
  title: '',
  isOpen: true,
  data: [],
};

const ClientsDebtors = () => {
  const [clientsDetails, setClientsDetails] = useState([{ ...clientsInfo }]);
  const handleCredits = () => {};
  return (
    <div className="flex flex-col w-full">
      <ARadioButtonGroup
        title={'Credits'}
        handleChecked={handleCredits}
        radioValues={clientRadioValues}
      />
      <AInputField
        type={'text'}
        name={'noOfClients'}
        label={'No of Clients/Daily Foot Fall'}
      />
      <p className="w-full pb-3">Major Clients</p>
      <ATags
        tags={clientsDetails}
        defaultTag={clientsDetails}
        setTags={setClientsDetails}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 items-center">
          <AInputField
            type={'text'}
            name={'clientName'}
            label={'Name of the client'}
          />
          <AInputField type={'text'} name={'contactNo'} label={'Contact No'} />
        </div>
      </ATags>
      <ARadioButtonGroup
        title={'Debtors'}
        handleChecked={handleCredits}
        radioValues={debitorRadioValues}
      />
    </div>
  );
};

export default ClientsDebtors;
