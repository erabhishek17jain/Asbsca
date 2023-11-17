import { useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import AInputField from '../../../components-global/AInputField';
import ATags from '../../../components-global/ATags';
import { nilNoNpOptions } from '../constants';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';

const clientsInfo = {
  id: 'trun1',
  isOpen: true,
  data: [],
};

const debators = [
  { title: 'Debtors more than 6 Months' },
  { title: 'Debtors less than 6 Months' },
];

const ClientsDebtors = ({ formik }: any) => {
  const [isClients, setIsClients] = useState('');
  const [isDebtors, setIsDebtors] = useState('');
  const [clientsDetails, setClientsDetails] = useState([{ ...clientsInfo }]);

  const handleClients = (val: string) => {
    setIsClients(val);
  };
  const handleDebtors = (val: string) => {
    setIsDebtors(val);
  };

  return (
    <div className="flex flex-col w-full">
      <ARadioButtonGroup
        isReset={true}
        value={isClients}
        title={'Clients'}
        handleChecked={handleClients}
        radioValues={nilNoNpOptions}
      />
      {isClients == '' && (
        <ASection>
          <AGroupFields col={2}>
            <AInputField
              type={'text'}
              name={'noOfClients'}
              label={'No of Clients/Daily Foot Fall'}
            />
          </AGroupFields>
          <p className="w-full pb-3">Major Clients</p>
          <ATags
            tags={clientsDetails}
            defaultTag={clientsDetails}
            setTags={setClientsDetails}
          >
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
                name={'clientName'}
                label={'Name of the client'}
              />
              <AInputField
                type={'text'}
                name={'contactNo'}
                label={'Contact No'}
              />
            </AGroupFields>
          </ATags>
        </ASection>
      )}
      <ARadioButtonGroup
        isReset={true}
        value={isDebtors}
        title={'Debtors'}
        handleChecked={handleDebtors}
        radioValues={nilNoNpOptions}
      />
      <ASection>
        <div className="flex flex-col w-full">
          {isDebtors == '' &&
            debators.map((item) => (
              <AGroupFields col={2} title={item.title}>
                <AInputField type={'text'} name={'amount'} label={'Amount'} />
                <AInputField
                  type={'text'}
                  name={'reason'}
                  label={'Reason for Debtors more than 6 Months'}
                />
              </AGroupFields>
            ))}
          <AGroupFields col={3}>
            {isDebtors == '' && (
              <>
                <AInputField
                  type={'text'}
                  name={'totalDebtors'}
                  label={'Total Debtors'}
                />
                <AInputField
                  type={'text'}
                  name={'periodAllowedToClient'}
                  label={'Cr. Period allowed to Clients'}
                />
              </>
            )}
            <AInputField
              type={'text'}
              name={'whyIrregular'}
              label={'Why Ir-Regular?'}
            />
          </AGroupFields>
        </div>
      </ASection>
    </div>
  );
};

export default ClientsDebtors;
