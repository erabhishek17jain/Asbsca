import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import { AddTagButton, AddTagFooter } from '../../../components-global/ATags';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import {
  turnoverVerified,
  residenceStatus,
  typesOfEntity,
  vicinity,
  fixedEmployee,
  citiesOfRepresentation,
  generation,
  designations,
  designation,
} from '../constants';
import { useEffect } from 'react';

const shareInfo = {
  ownerName: '',
  shareHolding: '',
};

const initialValues = {
  bussinessName: '',
  typeOfEntity: '',
  yearOfIncorporation: '',
  generation: '',
  gstNumber: '',
  regOfficeAddress: '',
  visitedAddress: '',
  vicinity: '',
  ownership: '',
  pdConductWith: '',
  designation: '',
  mobile: '',
  familyBusiness: '',
  mainUseproducts: '',
  howTurnoverVerified: '',
  citiesOfReppresentation: '',
  competitorsOfBusiness: '',
  noOfVisit: 1,
  doYouHavefixedEmployee: '',
  empSpecified: 0,
  empSeen: 0,
  shareHoldings: [
    {
      ownerName: '',
      shareHolding: 0,
    },
  ],
  totalHolding: 0,
};

const BusinessDetails = ({
  steps,

  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const validationSchema = Yup.object().shape({
    bussinessName: Yup.string().required('This field is required'),
    typeOfEntity: Yup.string().required('This field is required'),
    yearOfIncorporation: Yup.number().required('This field is required'),
    generation: Yup.string().required('This field is required'),
    regOfficeAddress: Yup.string().required('This field is required'),
    visitedAddress: Yup.string().required('This field is required'),
    vicinity: Yup.string().required('This field is required'),
    ownership: Yup.string().required('This field is required'),
    pdConductWith: Yup.string().required('This field is required'),
    designation: Yup.string().required('This field is required'),
    mobile: Yup.number().required('This field is required'),
    familyBusiness: Yup.number().required('This field is required'),
    mainUseproducts: Yup.string().required('This field is required'),
    howTurnoverVerified: Yup.string().required('This field is required'),
    citiesOfReppresentation: Yup.string().required('This field is required'),
    competitorsOfBusiness: Yup.string().required('This field is required'),
    noOfVisit: Yup.number().required('This field is required'),
    doYouHavefixedEmployee: Yup.string().required('This field is required'),
    empSpecified: Yup.number().required('This field is required'),
    empSeen: Yup.number().required('This field is required'),
    shareHoldings: Yup.array().of(
      Yup.object().shape({
        ownerName: Yup.string().required('This field is required'),
        shareHolding: Yup.string().required('This field is required'),
      }),
    ),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, businessDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const handleTypeOfEntity = (e: any) => {
    const { value } = e.target;
    const design = designation.find((item: any) => item.value === value);
    formik.setFieldValue('designation', design?.label);
    formik.handleChange(e);
  };

  useEffect(() => {
    let total = 0;
    formik?.values?.shareHoldings?.forEach((item: any) => {
      if (item.shareHolding !== '') {
        total = total + item.shareHolding;
      }
    });
    formik.setFieldValue('totalHolding', total);
  }, [formik?.values?.shareHoldings]);

  useEffect(() => {
    if (payloads.businessDetails) {
      formik.setFieldValue(
        'bussinessName',
        payloads.businessDetails?.bussinessName,
      );
      formik.setFieldValue(
        'typeOfEntity',
        payloads?.businessDetails?.typeOfEntity,
      );
      formik.setFieldValue(
        'yearOfIncorporation',
        payloads.businessDetails?.yearOfIncorporation,
      );
      formik.setFieldValue('generation', payloads?.businessDetails?.generation);
      formik.setFieldValue('gstNumber', payloads.businessDetails?.gstNumber);
      formik.setFieldValue(
        'regOfficeAddress',
        payloads?.businessDetails?.regOfficeAddress,
      );
      formik.setFieldValue(
        'visitedAddress',
        payloads?.businessDetails?.visitedAddress,
      );
      formik.setFieldValue('vicinity', payloads.businessDetails?.vicinity);
      formik.setFieldValue('ownership', payloads?.businessDetails?.ownership);
      formik.setFieldValue(
        'pdConductWith',
        payloads.businessDetails?.pdConductWith,
      );
      formik.setFieldValue(
        'designation',
        payloads?.businessDetails?.designation,
      );
      formik.setFieldValue('mobile', payloads.businessDetails?.mobile);
      formik.setFieldValue(
        'familyBusiness',
        payloads?.businessDetails?.familyBusiness,
      );
      formik.setFieldValue(
        'mainUseproducts',
        payloads?.businessDetails?.mainUseproducts,
      );
      formik.setFieldValue(
        'howTurnoverVerified',
        payloads.businessDetails?.howTurnoverVerified,
      );
      formik.setFieldValue(
        'citiesOfReppresentation',
        payloads?.businessDetails?.citiesOfReppresentation,
      );
      formik.setFieldValue(
        'competitorsOfBusiness',
        payloads.businessDetails?.competitorsOfBusiness,
      );
      formik.setFieldValue('noOfVisit', payloads?.businessDetails?.noOfVisit);
      formik.setFieldValue(
        'doYouHavefixedEmployee',
        payloads.businessDetails?.doYouHavefixedEmployee,
      );
      formik.setFieldValue(
        'empSpecified',
        payloads?.businessDetails?.empSpecified,
      );
      formik.setFieldValue('empSeen', payloads?.businessDetails?.empSeen);
      formik.setFieldValue(
        'shareHoldings',
        payloads?.businessDetails?.shareHoldings,
      );
      formik.setFieldValue(
        'totalHolding',
        payloads?.businessDetails?.totalHolding,
      );
    }
  }, [payloads]);

  const errors: any = formik?.errors?.shareHoldings;

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col py-4">
          <ASection>
            <AGroupFields>
              <AInputField
                id={'bussinessName'}
                label={'Business Name'}
                value={formik?.values?.bussinessName}
                error={formik?.errors?.bussinessName}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'typeOfEntity'}
                label={'Type of Entity'}
                options={typesOfEntity}
                value={formik?.values?.typeOfEntity}
                error={formik?.errors?.typeOfEntity}
                handleChange={handleTypeOfEntity}
              />
              <AInputField
                type={'number'}
                id={'yearOfIncorporation'}
                label={'Year of Incorporation'}
                value={formik?.values?.yearOfIncorporation}
                error={formik?.errors?.yearOfIncorporation}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'generation'}
                label={'Generation'}
                options={generation}
                value={formik?.values?.generation}
                error={formik?.errors?.generation}
                handleChange={formik?.handleChange}
              />
              <AInputField //todo validation
                id={'gstNumber'}
                label={'GST Number'}
                value={formik?.values?.gstNumber}
                error={formik?.errors?.gstNumber}
                handleChange={formik?.handleChange}
              />
              <AInputField
                id={'regOfficeAddress'}
                label={'Registered Office Address'}
                value={formik?.values?.regOfficeAddress}
                error={formik?.errors?.regOfficeAddress}
                handleChange={formik?.handleChange}
              />
              <AInputField
                id={'visitedAddress'}
                label={'Visited Address'}
                value={formik?.values?.visitedAddress}
                error={formik?.errors?.visitedAddress}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'vicinity'}
                label={'Vicinity'}
                options={vicinity}
                value={formik?.values?.vicinity}
                error={formik?.errors?.vicinity}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'ownership'}
                label={'Ownership of address Visited'}
                options={residenceStatus}
                value={formik?.values?.ownership}
                error={formik?.errors?.ownership}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'pdConductWith'}
                label={'PD Conducted With'}
                value={formik?.values?.pdConductWith}
                error={formik?.errors?.pdConductWith}
                handleChange={formik?.handleChange}
                options={[{ label: 'Palash Jain', value: 'Palash Jain' }]}
              />
              <ASingleSelect
                disabled={true}
                id={'designation'}
                label={'Designation'}
                options={designations}
                value={formik?.values?.designation}
                error={formik?.errors?.designation}
                handleChange={formik?.handleChange}
              />
              <AInputField
                id={'mobile'}
                type={'number'}
                label={'Mobile No.'}
                value={formik?.values?.mobile}
                error={formik?.errors?.mobile}
                handleChange={formik?.handleChange}
              />
              <AInputField
                type={'number'}
                id={'familyBusiness'}
                label={'Family Members in Business'}
                value={formik?.values?.familyBusiness}
                error={formik?.errors?.familyBusiness}
                handleChange={formik?.handleChange}
              />
              <AInputField
                id={'mainUseproducts'}
                label={'Main use of products/services'}
                value={formik?.values?.mainUseproducts}
                error={formik?.errors?.mainUseproducts}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'howTurnoverVerified'}
                label={'How was turnover verified?'}
                options={turnoverVerified}
                value={formik?.values?.howTurnoverVerified}
                error={formik?.errors?.howTurnoverVerified}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'citiesOfReppresentation'}
                label={'Cities of Representation'}
                options={citiesOfRepresentation}
                value={formik?.values?.citiesOfReppresentation}
                error={formik?.errors?.citiesOfReppresentation}
                handleChange={formik?.handleChange}
              />
              <AInputField
                id={'competitorsOfBusiness'}
                label={'Key Competitors to Business'}
                value={formik?.values?.competitorsOfBusiness}
                error={formik?.errors?.competitorsOfBusiness}
                handleChange={formik?.handleChange}
              />
              <AInputField
                type={'number'}
                id={'noOfVisit'}
                label={'No. of Visit'}
                value={formik?.values?.noOfVisit}
                error={formik?.errors?.noOfVisit}
                handleChange={formik?.handleChange}
              />
              <ASingleSelect
                id={'doYouHavefixedEmployee'}
                label={'Do they have fixed employees?'}
                options={fixedEmployee}
                value={formik?.values?.doYouHavefixedEmployee}
                error={formik?.errors?.doYouHavefixedEmployee}
                handleChange={formik?.handleChange}
              />
              <div className="flex gap-3">
                <AInputField
                  type={'number'}
                  id={'empSpecified'}
                  label={'Emp. Specified'}
                  value={formik?.values?.empSpecified}
                  error={formik?.errors?.empSpecified}
                  handleChange={formik?.handleChange}
                />
                <AInputField
                  type={'number'}
                  id={'empSeen'}
                  label={'Emp. Seen'}
                  value={formik?.values?.empSeen}
                  error={formik?.errors?.empSeen}
                  handleChange={formik?.handleChange}
                />
              </div>
            </AGroupFields>
          </ASection>
          <ASection
            title={'Shareholding of the business'}
            footers={[
              {
                label: 'Total Holdings',
                value: formik?.values?.totalHolding,
              },
            ]}
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="shareHoldings"
                  render={(tag) => (
                    <div>
                      {formik?.values?.shareHoldings?.length > 0 ? (
                        formik?.values?.shareHoldings?.map(
                          (item: any, index: any) => (
                            <div
                              key={item?.name}
                              className="flex items-center w-full gap-3 mb-3"
                            >
                              <div className="w-full border-2 rounded-lg pt-3 px-3">
                                <AGroupFields col={2}>
                                  <ASingleSelect
                                    label={'Name of Owner'}
                                    id={`shareHoldings[${index}].ownerName`}
                                    value={
                                      formik?.values?.shareHoldings[index]
                                        .ownerName
                                    }
                                    error={
                                      errors?.length > 0 &&
                                      errors[index]?.ownerName
                                    }
                                    handleChange={formik?.handleChange}
                                    options={[
                                      {
                                        label: 'Palash Jain',
                                        value: 'Palash Jain',
                                      },
                                      {
                                        label: 'Aadarsh Jain',
                                        value: 'Aadarsh Jain',
                                      },
                                    ]}
                                  />
                                  <AInputField
                                    type={'number'}
                                    label={'% of Holding'}
                                    id={`shareHoldings[${index}].shareHolding`}
                                    value={
                                      formik?.values?.shareHoldings[index]
                                        .shareHolding
                                    }
                                    error={
                                      errors?.length > 0 &&
                                      errors[index]?.shareHolding
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                </AGroupFields>
                              </div>
                              <AddTagFooter
                                addTag={() => tag.push(shareInfo)}
                                removeTag={() => tag.remove(index)}
                              />
                            </div>
                          ),
                        )
                      ) : (
                        <AddTagButton
                          title={'Add Share Holder'}
                          addTag={() => tag.push(shareInfo)}
                        />
                      )}
                    </div>
                  )}
                />
              </form>
            </FormikProvider>
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

export default BusinessDetails;
