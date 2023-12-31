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
  othertypeOfEntity: '',
  yearOfIncorporation: '',
  generation: '',
  othergeneration: '',
  gstNumber: '',
  regOfficeAddress: '',
  visitedAddress: '',
  vicinity: '',
  othervicinity: '',
  ownership: '',
  otherownership: '',
  pdConductWith: '',
  designation: '',
  otherdesignation: '',
  mobile: '',
  familyBusiness: '',
  mainUseproducts: '',
  howTurnoverVerified: '',
  otherhowTurnoverVerified: '',
  citiesOfReppresentation: '',
  othercitiesOfReppresentation: '',
  competitorsOfBusiness: '',
  noOfVisit: 1,
  doYouHavefixedEmployee: '',
  empSpecified: 0,
  empSeen: 0,
  empReason: '',
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
    yearOfIncorporation: Yup.string().required('This field is required'),
    generation: Yup.string().required('This field is required'),
    gstNumber: Yup.string().required('This field is required'),
    regOfficeAddress: Yup.string().required('This field is required'),
    visitedAddress: Yup.string().required('This field is required'),
    vicinity: Yup.string().required('This field is required'),
    ownership: Yup.string().required('This field is required'),
    pdConductWith: Yup.string().required('This field is required'),
    designation: Yup.string().required('This field is required'),
    mobile: Yup.string()
      .required('This field is required')
      .test('len', 'Contact number should be of 10 digits', (val: any) =>
        val !== 'NP' ? val.length === 10 : true,
      ),
    familyBusiness: Yup.string().required('This field is required'),
    mainUseproducts: Yup.string().required('This field is required'),
    howTurnoverVerified: Yup.string().required('This field is required'),
    citiesOfReppresentation: Yup.string().required('This field is required'),
    competitorsOfBusiness: Yup.string().required('This field is required'),
    noOfVisit: Yup.string().required('This field is required'),
    doYouHavefixedEmployee: Yup.string().required('This field is required'),
    empSpecified: Yup.string().required('This field is required'),
    empSeen: Yup.string().required('This field is required'),
    empReason: Yup.string().required('This field is required'),
    shareHoldings: Yup.array().of(
      Yup.object().shape({
        ownerName: Yup.string().required('This field is required'),
        shareHolding: Yup.string().required('This field is required'),
      }),
    ),
  });

  const validation = async (values: any) => {
    const errors: any = {};
    if (values?.totalHolding > 100) {
      errors.totalHolding = '% of share holding should be maximum upto 100%';
    }
    if (parseInt(values?.empSpecified) < parseInt(values?.empSeen)) {
      errors.empSeen =
        'Employee seen should be less than or equal to employee specified';
    }
    if (
      !(
        values?.gstNumber === '' ||
        values?.gstNumber === 'NA' ||
        values?.gstNumber === 'NP'
      )
    ) {
      const pattern =
        /^[0-9]{2}[A-Za-z]{3}[CPHFATBLJGcphfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{1}(Z|z)[0-9A-Za-z]{1}/;
      if (!pattern.test(values?.gstNumber)) {
        errors.gstNumber =
          'GST Number should be in correct format. EX: 22AAAAA0000A1Z5';
      }
    }
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, businessDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validate: validation,
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
    if (
      !(
        formik?.values?.doYouHavefixedEmployee === 'No' ||
        formik?.values?.doYouHavefixedEmployee === ''
      )
    ) {
      formik.setFieldValue('empSeen', 0);
      formik.setFieldValue('empSpecified', 0);
    } else {
      formik.setFieldValue('empSeen', payloads?.businessDetails?.empSeen);
      formik.setFieldValue(
        'empSpecified',
        payloads?.businessDetails?.empSpecified,
      );
    }
  }, [formik?.values?.doYouHavefixedEmployee]);

  useEffect(() => {
    if (formik?.values?.empSpecified > formik?.values?.empSeen) {
      formik.setFieldValue('empReason', payloads?.businessDetails?.empReason);
    } else {
      formik.setFieldValue('empReason', '-');
    }
  }, [formik?.values?.empSeen]);

  useEffect(() => {
    let total = 0;
    formik?.values?.shareHoldings?.forEach((item: any) => {
      if (item.shareHolding !== '') {
        total = Number.isNaN(parseFloat(item.shareHolding))
          ? 0
          : parseFloat(item.shareHolding) + total;
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
        'othertypeOfEntity',
        payloads?.businessDetails?.othertypeOfEntity,
      );
      formik.setFieldValue(
        'yearOfIncorporation',
        payloads.businessDetails?.yearOfIncorporation,
      );
      formik.setFieldValue('generation', payloads?.businessDetails?.generation);
      formik.setFieldValue(
        'othergeneration',
        payloads?.businessDetails?.othergeneration,
      );
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
      formik.setFieldValue(
        'othervicinity',
        payloads?.businessDetails?.othervicinity,
      );
      formik.setFieldValue('ownership', payloads?.businessDetails?.ownership);
      formik.setFieldValue(
        'otherownership',
        payloads?.businessDetails?.otherownership,
      );
      formik.setFieldValue(
        'pdConductWith',
        payloads.businessDetails?.pdConductWith,
      );
      formik.setFieldValue(
        'designation',
        payloads?.businessDetails?.designation,
      );
      formik.setFieldValue(
        'otherdesignation',
        payloads?.businessDetails?.otherdesignation,
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
        'otherhowTurnoverVerified',
        payloads?.businessDetails?.otherhowTurnoverVerified,
      );
      formik.setFieldValue(
        'citiesOfReppresentation',
        payloads?.businessDetails?.citiesOfReppresentation,
      );
      formik.setFieldValue(
        'othercitiesOfReppresentation',
        payloads?.businessDetails?.othercitiesOfReppresentation,
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
      formik.setFieldValue('empReason', payloads?.businessDetails?.empReason);
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
                isSelectOption={false}
                value={formik?.values?.typeOfEntity}
                error={formik?.errors?.typeOfEntity}
                handleChange={handleTypeOfEntity}
              />
              {formik?.values?.typeOfEntity === 'Other' && (
                <AInputField
                  id={'othertypeOfEntity'}
                  label={'Type of Entity'}
                  value={formik?.values?.othertypeOfEntity}
                  error={formik?.errors?.othertypeOfEntity}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
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
              {formik?.values?.generation === 'Other' && (
                <AInputField
                  id={'othergeneration'}
                  label={'Generation'}
                  value={formik?.values?.othergeneration}
                  error={formik?.errors?.othergeneration}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
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
              {formik?.values?.vicinity === 'Other' && (
                <AInputField
                  id={'othervicinity'}
                  label={'Vicinity'}
                  value={formik?.values?.othervicinity}
                  error={formik?.errors?.othervicinity}
                  handleChange={formik?.handleChange}
                />
              )}
              <ASingleSelect
                id={'ownership'}
                label={'Ownership of address Visited'}
                options={residenceStatus}
                value={formik?.values?.ownership}
                error={formik?.errors?.ownership}
                handleChange={formik?.handleChange}
              />
              {formik?.values?.ownership === 'Other' && (
                <AInputField
                  id={'otherownership'}
                  label={'Ownership of address Visited'}
                  value={formik?.values?.otherownership}
                  error={formik?.errors?.otherownership}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
                id={'pdConductWith'}
                label={'PD Conducted With'}
                value={formik?.values?.pdConductWith}
                error={formik?.errors?.pdConductWith}
                handleChange={formik?.handleChange}
              />
              {formik?.values?.typeOfEntity === 'Other' ? (
                <AInputField
                  id={'otherdesignation'}
                  label={'Designation'}
                  value={formik?.values?.otherdesignation}
                  error={formik?.errors?.otherdesignation}
                  handleChange={formik?.handleChange}
                />
              ) : (
                <ASingleSelect
                  disabled={true}
                  id={'designation'}
                  label={'Designation'}
                  options={designations}
                  value={formik?.values?.designation}
                  error={formik?.errors?.designation}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
                id={'mobile'}
                label={'Mobile No.'}
                value={formik?.values?.mobile}
                error={formik?.errors?.mobile}
                handleChange={formik?.handleChange}
              />
              <AInputField
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
              {formik?.values?.howTurnoverVerified == 'Other' && (
                <AInputField
                  id={'otherhowTurnoverVerified'}
                  label={'How was turnover verified?'}
                  value={formik?.values?.otherhowTurnoverVerified}
                  error={formik?.errors?.otherhowTurnoverVerified}
                  handleChange={formik?.handleChange}
                />
              )}
              <ASingleSelect
                id={'citiesOfReppresentation'}
                label={'Cities of Representation'}
                options={citiesOfRepresentation}
                value={formik?.values?.citiesOfReppresentation}
                error={formik?.errors?.citiesOfReppresentation}
                handleChange={formik?.handleChange}
              />
              {formik?.values?.citiesOfReppresentation === 'Other' && (
                <AInputField
                  id={'othercitiesOfReppresentation'}
                  label={'Cities of Representation'}
                  options={citiesOfRepresentation}
                  value={formik?.values?.othercitiesOfReppresentation}
                  error={formik?.errors?.othercitiesOfReppresentation}
                  handleChange={formik?.handleChange}
                />
              )}
              <AInputField
                id={'competitorsOfBusiness'}
                label={'Key Competitors to Business'}
                value={formik?.values?.competitorsOfBusiness}
                error={formik?.errors?.competitorsOfBusiness}
                handleChange={formik?.handleChange}
              />
              <AInputField
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
              {!(
                formik?.values?.doYouHavefixedEmployee === 'No' ||
                formik?.values?.doYouHavefixedEmployee === ''
              ) && (
                <>
                  <AInputField
                    id={'empSpecified'}
                    label={'Emp. Specified'}
                    value={formik?.values?.empSpecified}
                    error={formik?.errors?.empSpecified}
                    handleChange={formik?.handleChange}
                  />
                  <AInputField
                    id={'empSeen'}
                    label={'Emp. Seen'}
                    value={formik?.values?.empSeen}
                    error={formik?.errors?.empSeen}
                    handleChange={formik?.handleChange}
                  />
                </>
              )}
              {formik?.values?.empSeen < formik?.values?.empSpecified && (
                <AInputField
                  id={'empReason'}
                  label={'Reason why emp seen less than specified?'}
                  value={formik?.values?.empReason}
                  error={formik?.errors?.empReason}
                  handleChange={formik?.handleChange}
                />
              )}
            </AGroupFields>
          </ASection>
          <ASection
            title={'Shareholding of the business'}
            footers={[
              {
                label: 'Total Holdings',
                value: `${formik?.values?.totalHolding}%`,
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
                                    options={payloads?.personalDetails?.applicants?.map(
                                      (item: any) => {
                                        return {
                                          label: item?.name,
                                          value: item?.name,
                                        };
                                      },
                                    )}
                                  />
                                  <AInputField
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
                              {(formik?.values?.typeOfEntity ===
                                'Partnership' ||
                                formik?.values?.typeOfEntity ===
                                  'Partnership(LLP)' ||
                                formik?.values?.typeOfEntity ===
                                  'Private Limited Company' ||
                                formik?.values?.typeOfEntity ===
                                  'Public Limited Company') && (
                                <AddTagFooter
                                  addTag={() => tag.push(shareInfo)}
                                  removeTag={() => tag.remove(index)}
                                />
                              )}
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
            <span className="flex justify-end ml-1 text-xs text-meta1">
              {formik?.errors?.totalHolding}
            </span>
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
