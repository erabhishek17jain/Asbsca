import { useEffect, useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { AddTagButton, AddTagFooter } from '../../../components-global/ATags';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import ASection from '../../../components-global/ASection';
import { yesNoOptions } from '../constants';

const Section = ({ title, children }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4 border-stroke">
      <p className="w-full pt-3 px-4">{title}</p>
      {children && <div className="pt-3 px-4">{children}</div>}
    </div>
  );
};

const clientsInfo = { clientName: '', contact: '' };

const SuppliersCreditors = ({
  steps, action,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isSuppliers, setIsSuppliers] = useState('yes');
  const handleSuppliers = (title: string, val: string) => {
    console.log(title);
    setIsSuppliers(val);
  };

  const initialValues = {
    isSuppliersDetails: 'yes',
    suppliersDetails: {
      noOfSuppliers: '',
      majorSuppliers: [] as any,
    },
    creditors: {
      amount: '',
      collectionPeriod: '',
    },
    creitPeriodAllowed: '',
    whyCreditorHighThanCredit: '',
  };

  const validationSchema = Yup.object().shape({
    suppliersDetails: Yup.object({
      noOfSuppliers: Yup.number().required('This field is required'),
      majorSuppliers: Yup.array().of(
        Yup.object().shape({
          clientName: Yup.string().required('This field is required'),
          contact: Yup.string().required('This field is required'),
        }),
      ),
    }),
    creditors: Yup.object({
      amount: Yup.number().required('This field is required'),
    }),
    creitPeriodAllowed: Yup.number().required('This field is required'),
    whyCreditorHighThanCredit: Yup.string().required('This field is required'),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, suppliers: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const getCollectionPeriod = (value: any) => {
    const purchase = 50;
    if (value === 0 || value === '') {
      return 0;
    } else if ((value * 12) / purchase > 11.99) {
      return ((value * 12) / purchase / 12).toFixed(1) + ' Years';
    } else if ((value * 12) / purchase > 1) {
      return ((value * 12) / purchase).toFixed(1) + ' Months';
    } else {
      return ((value * 365) / purchase).toFixed(1) + ' Days';
    }
  };

  const handleAmount = (e: any) => {
    const { value } = e.target;
    formik.setFieldValue(
      'creditors.collectionPeriod',
      getCollectionPeriod(value),
    );
    formik.handleChange(e);
  };

  useEffect(() => {
    if (action === 'edit') {
      formik.setFieldValue(
        'isSuppliersDetails',
        payloads?.suppliers?.isSuppliersDetails,
      );
      formik.setFieldValue(
        'suppliersDetails',
        payloads?.suppliers?.suppliersDetails,
      );
      formik.setFieldValue('creditors', payloads?.suppliers?.creditors);
      formik.setFieldValue(
        'creitPeriodAllowed',
        payloads?.suppliers?.creitPeriodAllowed,
      );
      formik.setFieldValue(
        'whyCreditorHighThanCredit',
        payloads?.suppliers?.whyCreditorHighThanCredit,
      );
    }
  }, [payloads]);

  const errorsRe: any = formik?.errors?.suppliersDetails;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            value={isSuppliers}
            title={'Suppliers'}
            radioValues={yesNoOptions}
            handleChange={handleSuppliers}
          />
          <Section>
            {isSuppliers == 'yes' && (
              <div className="mb-4">
                <AGroupFields col={2}>
                  <AInputField
                    type={'number'}
                    label={'No of Suppliers'}
                    id={`suppliersDetails.noOfSuppliers`}
                    value={formik?.values?.suppliersDetails.noOfSuppliers}
                    error={formik?.errors?.suppliersDetails?.noOfSuppliers}
                    handleChange={formik.handleChange}
                  />
                </AGroupFields>
                {formik?.values?.suppliersDetails.majorSuppliers.length > 0 && (
                  <p className="w-full pb-3">Major Suppliers</p>
                )}
                <FormikProvider value={formik}>
                  <form>
                    <FieldArray
                      name="suppliersDetails.majorSuppliers"
                      render={(tag) => (
                        <div>
                          {formik?.values?.suppliersDetails.majorSuppliers
                            .length > 0 ? (
                            formik?.values?.suppliersDetails.majorSuppliers.map(
                              (item: any, index: any) => (
                                <div
                                  key={item}
                                  className="flex items-center w-full gap-3 mb-3"
                                >
                                  <div className="w-full border-2 rounded-lg pt-3 px-3">
                                    <AGroupFields col={2}>
                                      <AInputField
                                        label={'Client Name*'}
                                        id={`suppliersDetails.majorSuppliers[${index}].clientName`}
                                        value={
                                          formik?.values?.suppliersDetails
                                            .majorSuppliers[index].clientName
                                        }
                                        error={
                                          errorsRe?.majorSuppliers?.length >
                                            0 &&
                                          errorsRe?.majorSuppliers[index]
                                            .clientName
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                      <AInputField
                                        label={'Contact No.*'}
                                        id={`suppliersDetails.majorSuppliers[${index}].contact`}
                                        value={
                                          formik?.values?.suppliersDetails
                                            .majorSuppliers[index].contact
                                        }
                                        error={
                                          errorsRe?.majorSuppliers?.length >
                                            0 &&
                                          errorsRe?.majorSuppliers[index]
                                            .contact
                                        }
                                        handleChange={formik.handleChange}
                                      />
                                    </AGroupFields>
                                  </div>
                                  <AddTagFooter
                                    addTag={() => tag.push(clientsInfo)}
                                    removeTag={() => tag.remove(index)}
                                  />
                                </div>
                              ),
                            )
                          ) : (
                            <AddTagButton
                              title={'Add Supplier'}
                              addTag={() => tag.push(clientsInfo)}
                            />
                          )}
                        </div>
                      )}
                    />
                  </form>
                </FormikProvider>
              </div>
            )}
            <ASection
              footers={[
                {
                  label: 'Collection Period',
                  value: formik?.values?.creditors.collectionPeriod,
                },
              ]}
            >
              <AGroupFields col={3}>
                <AInputField
                  type={'number'}
                  label={'Creditors Amount'}
                  rightLabel={'(Lakhs)'}
                  id={`creditors.amount`}
                  value={formik?.values?.creditors.amount}
                  error={formik?.errors?.creditors?.amount}
                  handleChange={handleAmount}
                />
                <AInputField
                  type={'number'}
                  id={`creitPeriodAllowed`}
                  rightLabel={'(In months)'}
                  label={'Cr. Period allowed to Clients'}
                  value={formik?.values?.creitPeriodAllowed}
                  error={formik?.errors?.creitPeriodAllowed}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  id={`whyCreditorHighThanCredit`}
                  label={'Why Creditors are high than credit period allowed'}
                  value={formik?.values?.whyCreditorHighThanCredit}
                  error={formik?.errors?.whyCreditorHighThanCredit}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            </ASection>
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
