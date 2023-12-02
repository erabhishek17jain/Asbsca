import { useEffect, useState } from 'react';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import AInputField from '../../../components-global/AInputField';
import { AddTagButton, AddTagFooter } from '../../../components-global/ATags';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { yesNoOptions } from '../constants';
import { calculatePeriod } from '../../../utils';

const clientsInfo = { clientName: '', contact: '' };

const initialValues = {
  clients: {
    isClientDetails: '',
    clientDetails: {
      noOfClientDaily: '',
      majorClient: [{ clientName: '', contact: '' }],
    },
  },
  debitors: {
    isDebitorDetails: '',
    debitorDetails: {
      moreThan6Month: {
        amount: 0,
        reason: '',
      },
      lessThan6Month: {
        amount: 0,
      },
      totalDebtors: 0,
      collectionPeriod: '',
      creditPeriodAllowed: '',
      whyIrRegular: '',
    },
  },
};

const ClientsDebtors = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [isClients, setIsClients] = useState('Yes');
  const [isDebtors, setIsDebtors] = useState('Yes');

  const handleClients = (title: string, val: string) => {
    console.log(title);
    setIsClients(val);
  };

  const handleDebtors = (title: string, val: string) => {
    console.log(title);
    setIsDebtors(val);
  };

  const validationSchema = Yup.object().shape({
    clients: Yup.object({
      clientDetails: Yup.object({
        noOfClientDaily: Yup.number().required('This field is required'),
        majorClient: Yup.array().of(
          Yup.object().shape({
            clientName: Yup.string().required('This field is required'),
            contact: Yup.string().required('This field is required'),
          }),
        ),
      }),
    }),
    debitors: Yup.object({
      debitorDetails: Yup.object().shape({
        moreThan6Month: Yup.object().shape({
          amount: Yup.number().required('This field is required'),
          reason: Yup.string().required('This field is required'),
        }),
        lessThan6Month: Yup.object().shape({
          amount: Yup.number().required('This field is required'),
        }),
        whyIrRegular: Yup.string().required('This field is required'),
      }),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, clientDebtors: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    const moreAmt =
      formik?.values?.debitors?.debitorDetails?.moreThan6Month?.amount;
    const lessAmt =
      formik?.values?.debitors?.debitorDetails?.lessThan6Month?.amount;
    formik.setFieldValue('debitors.totalDebtors', moreAmt + lessAmt);
    formik.setFieldValue(
      'debitors.collectionPeriod',
      calculatePeriod(
        formik?.values?.debitors?.debitorDetails?.totalDebtors,
        payloads?.financials?.finances[0]?.income?.turnoverGrossReciepts
          ?.amountPA,
      ),
    );
    formik.setFieldValue(
      'debitors?.debitorDetails?.moreThan6Month?.reason',
      moreAmt === 0 ? '-' : '',
    );
  }, [formik?.values?.debitors?.debitorDetails]);

  useEffect(() => {
    if (payloads.clientDebtors) {
      formik.setFieldValue('clients', payloads?.clientDebtors?.clients);
      formik.setFieldValue('debitors', payloads?.clientDebtors?.debitors);
    }
  }, [payloads]);

  const errors: any = formik?.errors?.clients?.clientDetails;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          <ARadioButtonGroup
            value={isClients}
            title={'Clients'}
            handleChange={handleClients}
            radioValues={yesNoOptions}
          />
          {isClients == 'Yes' && (
            <ASection>
              <AGroupFields col={2}>
                <AInputField
                  type={'number'}
                  id={'clients.clientDetails.noOfClientDaily'}
                  label={'No of Clients/Daily Foot Fall'}
                  value={
                    formik?.values?.clients?.clientDetails?.noOfClientDaily
                  }
                  error={
                    formik?.errors?.clients?.clientDetails?.noOfClientDaily
                  }
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
              {formik?.values?.clients?.clientDetails?.majorClient?.length >
                0 && <p className="w-full pb-3">Major Clients</p>}
              <FormikProvider value={formik}>
                <form>
                  <FieldArray
                    name="clients.clientDetails.majorClient"
                    render={(tag) => (
                      <div>
                        {formik?.values?.clients?.clientDetails?.majorClient
                          ?.length > 0 ? (
                          formik?.values?.clients?.clientDetails?.majorClient.map(
                            (item: any, index: any) => (
                              <div
                                key={item}
                                className="flex items-center w-full gap-3 mb-3"
                              >
                                <div className="w-full border-2 rounded-lg pt-3 px-3">
                                  <AGroupFields col={2}>
                                    <AInputField
                                      label={'Client Name*'}
                                      id={`clients.clientDetails.majorClient[${index}].clientName`}
                                      value={
                                        formik?.values?.clients?.clientDetails
                                          ?.majorClient[index]?.clientName
                                      }
                                      error={
                                        errors?.majorClient?.length > 0 &&
                                        errors?.majorClient[index]?.clientName
                                      }
                                      handleChange={formik.handleChange}
                                    />
                                    <AInputField
                                      label={'Contact No.*'}
                                      id={`clients.clientDetails.majorClient[${index}].contact`}
                                      value={
                                        formik?.values?.clients.clientDetails
                                          ?.majorClient[index]?.contact
                                      }
                                      error={
                                        errors?.majorClient?.length > 0 &&
                                        errors?.majorClient[index]?.contact
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
                            title={'Add Client'}
                            addTag={() => tag.push(clientsInfo)}
                          />
                        )}
                      </div>
                    )}
                  />
                </form>
              </FormikProvider>
            </ASection>
          )}
          <ARadioButtonGroup
            value={isDebtors}
            title={'Debtors'}
            handleChange={handleDebtors}
            radioValues={yesNoOptions}
          />
          {isDebtors == 'Yes' && (
            <ASection
              footers={[
                {
                  label: 'Total Debtors',
                  value: formik?.values?.debitors?.debitorDetails?.totalDebtors,
                },
                {
                  label: 'Collection Period',
                  value:
                    formik?.values?.debitors?.debitorDetails?.collectionPeriod,
                },
              ]}
            >
              <div className="flex flex-col w-full">
                <AGroupFields col={3}>
                  <AInputField
                    type={'number'}
                    label={'Debtors Amount'}
                    rightLabel={'more than 6 Months (Lakhs)'}
                    id={'debitors.debitorDetails.moreThan6Month.amount'}
                    value={
                      formik?.values?.debitors?.debitorDetails?.moreThan6Month
                        ?.amount
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails?.moreThan6Month
                        ?.amount
                    }
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    label={'Reason for Debtors'}
                    rightLabel={'more than 6 Months'}
                    id={'debitors.debitorDetails.moreThan6Month.reason'}
                    disabled={
                      formik?.values?.debitors?.debitorDetails?.moreThan6Month
                        ?.amount === 0
                    }
                    value={
                      formik?.values?.debitors?.debitorDetails?.moreThan6Month
                        ?.reason
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails?.moreThan6Month
                        ?.reason
                    }
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    type={'number'}
                    label={'Debtors Amount'}
                    rightLabel={'less than 6 Months (Lakhs)'}
                    id={'debitors.debitorDetails.lessThan6Month.amount'}
                    value={
                      formik?.values?.debitors?.debitorDetails?.lessThan6Month
                        ?.amount
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails?.lessThan6Month
                        ?.amount
                    }
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    disabled={true}
                    label={'Collection Period'}
                    id={'debitors.debitorDetails.collectionPeriod'}
                    value={
                      formik?.values?.debitors?.debitorDetails?.collectionPeriod
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails?.collectionPeriod
                    }
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    type={'number'}
                    rightLabel={'(In months)'}
                    label={'Cr. Period allowed to Clients'}
                    id={'debitors.debitorDetails.creditPeriodAllowed'}
                    value={
                      formik?.values?.debitors?.debitorDetails
                        ?.creditPeriodAllowed
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails
                        ?.creditPeriodAllowed
                    }
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    label={'Why Ir-Regular?'}
                    id={'debitors.debitorDetails.whyIrRegular'}
                    value={
                      formik?.values?.debitors?.debitorDetails?.whyIrRegular
                    }
                    error={
                      formik?.errors?.debitors?.debitorDetails?.whyIrRegular
                    }
                    handleChange={formik.handleChange}
                  />
                </AGroupFields>
              </div>
            </ASection>
          )}
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

export default ClientsDebtors;
