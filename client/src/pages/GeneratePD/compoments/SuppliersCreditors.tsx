import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import ATags from '../../../components-global/ATags';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Section = ({ title, children }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4 border-stroke">
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

const SuppliersCreditors = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isSuppliers, setIsSuppliers] = useState('');
  const [suppliersDetails, setSuppliersDetails] = useState([
    { ...clientsInfo },
  ]);

  const handleSuppliers = (title: string, val: string) => {
    setIsSuppliers(val);
  };

  const initialValues = {
    isSuppliersDetails: '',
    suppliersDetails: {
      noOfSuppliers: '',
      majorSuppliers: [{ clientName: '', contact: '' }],
    },
    creditors: {
      amount: '',
      collectionPeriod: '',
    },
    creitPeriodAllowed: '',
    whyCreditorHighThanCredit: '',
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
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            isReset={true}
            value={isSuppliers}
            title={'Suppliers'}
            handleChange={handleSuppliers}
            radioValues={[]}
          />
          <Section>
            {isSuppliers == '' && (
              <>
                <AGroupFields col={2}>
                  <AInputField
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
                      name={'clientName'}
                      label={'Name of the client'}
                    />
                    <AInputField name={'contactNo'} label={'Contact No'} />
                  </AGroupFields>
                </ATags>
              </>
            )}
            {suppliers.map((item) => (
              <AGroupFields col={2} title={item.title}>
                <AInputField name={'amountPA'} label={'Amount P.A.'} />
                <AInputField name={'amountPM'} label={'Amount P.M.'} />
              </AGroupFields>
            ))}
            <AGroupFields col={2}>
              <AInputField
                name={'periodAllowedToClient'}
                label={'Cr. Period allowed to Clients'}
              />
              <AInputField
                name={'whyCreditorsHigher'}
                label={'Why Creditors are high than credit period allowed'}
              />
            </AGroupFields>
          </Section>
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

export default SuppliersCreditors;
