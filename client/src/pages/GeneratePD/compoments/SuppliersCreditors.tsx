import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ATags from '../../../components-global/ATags';
import AGroupFields from '../../../components-global/AGroupFields';
import { nilNoNpOptions } from '../constants';

const Section = ({ title, children }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4">
      <p className="w-full pt-3 px-4">{title}</p>
      {children && <div className="pt-3 px-4">{children}</div>}
    </div>
  );
};

const clientsInfo = {
  id: 'supp1',
  isOpen: true,
  data: [],
};

const suppliers = [{ title: 'Creditors' }];

const SuppliersCreditors = ({ formik }: any) => {
  const [isSuppliers, setIsSuppliers] = useState('');
  const [suppliersDetails, setSuppliersDetails] = useState([
    { ...clientsInfo },
  ]);

  const handleSuppliers = (val: string) => {
    setIsSuppliers(val);
  };

  return (
    <div className="flex flex-col w-full">
      <ARadioButtonGroup
        isReset={true}
        value={isSuppliers}
        title={'Suppliers'}
        handleChecked={handleSuppliers}
        radioValues={nilNoNpOptions}
      />
      <Section>
        {isSuppliers == '' && (
          <>
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
                name={'noOfClients'}
                label={'No of Clients/Daily Foot Fall'}
              />
            </AGroupFields>
            <p className="w-full pb-3">Major Clients</p>
            <ATags
              tags={suppliersDetails}
              defaultTag={clientsInfo}
              setTags={setSuppliersDetails}
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
          </>
        )}
        {suppliers.map((item) => (
          <AGroupFields col={2} title={item.title}>
            <AInputField
              type={'text'}
              name={'amountPA'}
              label={'Amount P.A.'}
            />
            <AInputField
              type={'text'}
              name={'amountPM'}
              label={'Amount P.M.'}
            />
          </AGroupFields>
        ))}
        <AGroupFields col={2}>
          <AInputField
            type={'text'}
            name={'periodAllowedToClient'}
            label={'Cr. Period allowed to Clients'}
          />
          <AInputField
            type={'text'}
            name={'whyCreditorsHigher'}
            label={'Why Creditors are high than credit period allowed'}
          />
        </AGroupFields>
      </Section>
    </div>
  );
};

export default SuppliersCreditors;
