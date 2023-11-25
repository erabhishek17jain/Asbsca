import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const shareHolderFooters = [
  {
    label: 'Total Holdings',
    value: '0',
  },
];

const bussShareInfo = {
  isOpen: true,
  data: [],
};

const BusinessDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [bussShare, setBussShare] = useState<any>([]);

  const addBussShare = (tags: any) => {
    tags.push({
      ...bussShareInfo,
      id: `buss${tags.length + 1}`,
    });
    setBussShare([...tags]);
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
                
                name={'businessName'}
                label={'Business Name'}
              />
              <ASingleSelect
                name={'typeOfEntity'}
                label={'Type of Entity'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                
                name={'yearOfIncorporation'}
                label={'Year of Incorporation'}
              />
              <ASingleSelect
                name={'generation'}
                label={'Generation'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                
                name={'gstNumber'}
                label={'GST Number'}
              />
              <AInputField
                
                name={'regOfficerAddress'}
                label={'Registered Office Address'}
              />
              <AInputField
                
                name={'visitedAddress'}
                label={'Visited Address'}
              />
              <ASingleSelect
                name={'vicinity'}
                label={'Vicinity'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'ownershipOfAddressVisited'}
                label={'Ownership of address Visited'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'pdConductedWith'}
                label={'PD Conducted With'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'designation'}
                label={'Designation'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                type={'number'}
                name={'mobileNo'}
                label={'Mobile No.'}
              />
              <AInputField
                
                name={'familyMembersInBusiness'}
                label={'Family Members in Business'}
              />
              <AInputField
                
                name={'mainUseOfProductsServices'}
                label={'Main use of products/services'}
              />
              <ASingleSelect
                name={'turnoverVerified'}
                label={'How was turnover verified?'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'citiesOfRepresentation'}
                label={'Cities of Representation'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <AInputField
                
                name={'keyCompetitorsToBusiness'}
                label={'Key Competitors to Business'}
              />
              <AInputField
                type={'number'}
                name={'noOfVisit'}
                label={'No. of Visit'}
              />
              <ASingleSelect
                name={'fixedEmployees'}
                label={'Do they have fixed employees?'}
                options={[{ label: 'India', value: 'india' }]}
              />
            </AGroupFields>
          </ASection>
          <ASection
            title={'Shareholding of the business'}
            footers={shareHolderFooters}
          >
            {bussShare.length > 0 ? (
              <ATags
                tags={bussShare}
                addTag={addBussShare}
                setTags={setBussShare}
              >
                <AGroupFields col={2}>
                  <AInputField
                    
                    name={'nameOfOwner'}
                    label={'Name of Owner'}
                  />
                  <AInputField
                    
                    name={'holding'}
                    label={'% of Holding'}
                  />
                </AGroupFields>
              </ATags>
            ) : (
              <AddTagButton
                title={'Add Share Holders'}
                addLoan={() => addBussShare(bussShare)}
              />
            )}
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
