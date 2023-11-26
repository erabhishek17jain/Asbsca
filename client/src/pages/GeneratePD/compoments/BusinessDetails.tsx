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
  familyRealtion,
} from '../constants';

const shareHolderFooters = [
  {
    label: 'Total Holdings',
    value: '0',
  },
];

const shareInfo = {
  ownerName: '',
  shareHolding: '',
};

const BusinessDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const initialValues = {
    bussinessName: '',
    typeOfEntity: '',
    yearOfIncorporation: '',
    generation: '',
    gstNumber: '',
    regOfficeAddress: '',
    visitedAddress: '',
    vicinity: '',
    ownershipOfAddressVisited: '',
    pdConductWith: '',
    designation: '',
    mobile: 0,
    familyBusiness: '',
    mainUseproducts: '',
    howTurnoverVerified: '',
    citiesOfReppresentation: '',
    competitorsOfBusiness: '',
    noOfVisit: '',
    doYouHavefixedEmployee: false,
    shareHoldings: [
      {
        ownerName: '',
        shareHolding: '',
      },
    ],
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
        <div className="flex flex-col py-4">
          <ASection>
            <AGroupFields>
              <AInputField
                name={'bussinessName'}
                label={'Business Name'}
                value={formik.values.bussinessName}
                error={formik.errors.bussinessName}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'typeOfEntity'}
                label={'Type of Entity'}
                options={typesOfEntity}
                value={formik.values.typeOfEntity}
                error={formik.errors.typeOfEntity}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'yearOfIncorporation'}
                label={'Year of Incorporation'}
                value={formik.values.yearOfIncorporation}
                error={formik.errors.yearOfIncorporation}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'generation'}
                label={'Generation'}
                options={generation}
                value={formik.values.generation}
                error={formik.errors.generation}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'gstNumber'}
                label={'GST Number'}
                value={formik.values.gstNumber}
                error={formik.errors.gstNumber}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'regOfficeAddress'}
                label={'Registered Office Address'}
                value={formik.values.regOfficeAddress}
                error={formik.errors.regOfficeAddress}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'visitedAddress'}
                label={'Visited Address'}
                value={formik.values.visitedAddress}
                error={formik.errors.visitedAddress}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'vicinity'}
                label={'Vicinity'}
                options={vicinity}
                value={formik.values.vicinity}
                error={formik.errors.vicinity}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'ownershipOfAddressVisited'}
                label={'Ownership of address Visited'}
                options={residenceStatus}
                value={formik.values.ownershipOfAddressVisited}
                error={formik.errors.ownershipOfAddressVisited}
                handleChange={formik.handleChange}
              />
              {/* show applicants list */}
              <ASingleSelect
                name={'pdConductWith'}
                label={'PD Conducted With'}
                options={[]}
                value={formik.values.pdConductWith}
                error={formik.errors.pdConductWith}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'designation'}
                label={'Designation'}
                options={[]}
                value={formik.values.designation}
                error={formik.errors.designation}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                name={'mobile'}
                label={'Mobile No.'}
                value={formik.values.mobile}
                error={formik.errors.mobile}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'familyBusiness'}
                label={'Family Members in Business'}
                value={formik.values.familyBusiness}
                error={formik.errors.familyBusiness}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'mainUseproducts'}
                label={'Main use of products/services'}
                value={formik.values.mainUseproducts}
                error={formik.errors.mainUseproducts}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'howTurnoverVerified'}
                label={'How was turnover verified?'}
                options={turnoverVerified}
                value={formik.values.howTurnoverVerified}
                error={formik.errors.howTurnoverVerified}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'citiesOfReppresentation'}
                label={'Cities of Representation'}
                options={citiesOfRepresentation}
                value={formik.values.citiesOfReppresentation}
                error={formik.errors.citiesOfReppresentation}
                handleChange={formik.handleChange}
              />
              <AInputField
                name={'competitorsOfBusiness'}
                label={'Key Competitors to Business'}
                value={formik.values.competitorsOfBusiness}
                error={formik.errors.competitorsOfBusiness}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                name={'noOfVisit'}
                label={'No. of Visit'}
                value={formik.values.noOfVisit}
                error={formik.errors.noOfVisit}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                name={'doYouHavefixedEmployee'}
                label={'Do they have fixed employees?'}
                options={fixedEmployee}
                value={formik.values.doYouHavefixedEmployee}
                error={formik.errors.doYouHavefixedEmployee}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
          </ASection>
          <ASection
            title={'Shareholding of the business'}
            footers={shareHolderFooters}
          >
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="shareHoldings"
                  render={(tag) => (
                    <div>
                      {formik.values.shareHoldings.length > 0 ? (
                        formik.values.shareHoldings.map(
                          (item: any, index: any) => (
                            <div
                              key={item?.name}
                              className="flex items-center w-full gap-3 mb-3"
                            >
                              <div className="w-full border-2 rounded-lg pt-3 px-3">
                                <AGroupFields col={2}>
                                  <ASingleSelect
                                    label={'Name of Owner'}
                                    options={familyRealtion}
                                    id={`shareHoldings[${index}].ownerName`}
                                    value={
                                      formik?.values?.shareHoldings[index]
                                        .ownerName
                                    }
                                    error={
                                      formik?.values?.shareHoldings[index]
                                        .ownerName
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                  <AInputField
                                    label={'% of Holding'}
                                    id={`shareHoldings[${index}].shareHolding`}
                                    value={
                                      formik?.values?.shareHoldings[index]
                                        .shareHolding
                                    }
                                    error={
                                      formik?.values?.shareHoldings[index]
                                        .shareHolding
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
        handleNext={handleNext}
      />
    </>
  );
};

export default BusinessDetails;
