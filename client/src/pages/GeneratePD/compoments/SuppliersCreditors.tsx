import { useEffect } from 'react';
import AInputField from '../../../components-global/AInputField';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { AddTagButton, AddTagFooter } from '../../../components-global/ATags';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import ASection from '../../../components-global/ASection';
import { yesNoOptions } from '../constants';
import { calculatePeriod } from '../../../utils';

const clientsInfo = { clientName: '', contact: '' };

const initialValues = {
  isSuppliersDetails: 'Yes',
  suppliersDetails: {
    noOfSuppliers: '',
    majorSuppliers: [{ clientName: '', contact: '' }] as any,
  },
  creditors: {
    amount: '',
  },
  collectionPeriod: '',
  creitPeriodAllowed: '',
  whyCreditorHighThanCredit: '',
};

const SuppliersCreditors = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const handleSuppliers = (title: string, val: string) => {
    console.log(title);
    formik.setFieldValue('isSuppliersDetails', val);
    if (val === 'Yes') {
      formik.setFieldValue('suppliersDetails', initialValues?.suppliersDetails);
    } else {
      formik.setFieldValue('suppliersDetails', {
        noOfSuppliers: 0,
        majorSuppliers: [],
      });
    }
  };

  const validationSchema = Yup.object().shape({
    suppliersDetails: Yup.object({
      noOfSuppliers: Yup.string().required('This field is required'),
      majorSuppliers: Yup.array().of(
        Yup.object().shape({
          clientName: Yup.string().required('This field is required'),
          contact: Yup.string()
            .required('This field is required')
            .test(
              'len',
              'Contact number should be of 10 digits',
              (val: any) => val.length === 10,
            ),
        }),
      ),
    }),
    creditors: Yup.object({
      amount: Yup.string().required('This field is required'),
    }),
    creitPeriodAllowed: Yup.string().required('This field is required'),
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

  useEffect(() => {
    const purchase = parseFloat(
      payloads?.financials?.finances[0]?.income?.purchases?.amountPA,
    );
    const amount = parseFloat(formik?.values?.creditors?.amount);
    const cpAllow =
      ((Number.isNaN(amount) ? 0 : amount) * 12) /
      (Number.isNaN(purchase) ? 0 : purchase);
    formik.setFieldValue(
      'collectionPeriod',
      calculatePeriod(
        Number.isNaN(amount) ? 0 : amount,
        Number.isNaN(purchase) ? 0 : purchase,
      ),
    );
    if (
      formik?.values?.whyCreditorHighThanCredit === '' ||
      formik?.values?.whyCreditorHighThanCredit === '-'
    ) {
      const allowed = parseFloat(formik?.values?.creitPeriodAllowed);
      formik.setFieldValue(
        'whyCreditorHighThanCredit',
        (Number.isNaN(allowed) ? 0 : allowed) <= cpAllow ? '-' : '',
      );
    }
  }, [formik?.values]);

  useEffect(() => {
    if (payloads.suppliers) {
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
            value={formik?.values?.isSuppliersDetails}
            title={'Suppliers'}
            radioValues={yesNoOptions}
            handleChange={handleSuppliers}
          />
          <ASection>
            {formik?.values?.isSuppliersDetails == 'Yes' && (
              <div className="mb-4">
                <AGroupFields col={2}>
                  <AInputField
                    label={'No of Suppliers'}
                    id={`suppliersDetails.noOfSuppliers`}
                    value={formik?.values?.suppliersDetails.noOfSuppliers}
                    error={formik?.errors?.suppliersDetails?.noOfSuppliers}
                    handleChange={formik.handleChange}
                  />
                </AGroupFields>
                {formik?.values?.suppliersDetails.majorSuppliers?.length >
                  0 && <p className="w-full pb-3">Major Suppliers</p>}
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
                                        label={"Supplier's Name"}
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
                                        label={'Contact No.'}
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
                  label: 'Payment Period',
                  value: formik?.values?.collectionPeriod,
                },
              ]}
            >
              <AGroupFields col={3}>
                <AInputField
                  label={'Creditors Amount'}
                  rightLabel={'(In Lakhs)'}
                  id={`creditors.amount`}
                  value={formik?.values?.creditors.amount}
                  error={formik?.errors?.creditors?.amount}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  disabled={true}
                  id={`collectionPeriod`}
                  label={'Payment Period'}
                  value={formik?.values?.collectionPeriod}
                  error={formik?.errors?.collectionPeriod}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  id={`creitPeriodAllowed`}
                  rightLabel={'(In months)'}
                  label={'Credit period given to suppliers'}
                  value={formik?.values?.creitPeriodAllowed}
                  error={formik?.errors?.creitPeriodAllowed}
                  handleChange={formik.handleChange}
                />
                <AInputField
                  id={`whyCreditorHighThanCredit`}
                  disabled={formik?.values?.whyCreditorHighThanCredit === '-'}
                  label={'Why Creditors are high than credit period allowed'}
                  value={formik?.values?.whyCreditorHighThanCredit}
                  error={formik?.errors?.whyCreditorHighThanCredit}
                  handleChange={formik.handleChange}
                />
              </AGroupFields>
            </ASection>
          </ASection>
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
