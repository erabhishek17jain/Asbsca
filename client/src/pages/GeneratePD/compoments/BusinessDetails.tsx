import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';


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

const BusinessDetails = ({ formik }: any) => {
  const [bussShare, setBussShare] = useState<any>([]);

  const addBussShare = (tags: any) => {
    tags.push({
      ...bussShareInfo,
      id: `buss${tags.length + 1}`,
    });
    setBussShare([...tags]);
  };
  return (
    <div className="flex flex-col py-4">
      <ASection>
        <AGroupFields>
          <AInputField
            type={'text'}
            name={'businessName'}
            label={'Business Name'}
          />
          <ASingleSelect
            name={'typeOfEntity'}
            label={'Type of Entity'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField
            type={'text'}
            name={'yearOfIncorporation'}
            label={'Year of Incorporation'}
          />
          <ASingleSelect
            name={'generation'}
            label={'Generation'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField type={'text'} name={'gstNumber'} label={'GST Number'} />
          <AInputField
            type={'text'}
            name={'regOfficerAddress'}
            label={'Registered Office Address'}
          />
          <AInputField
            type={'text'}
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
          <AInputField type={'number'} name={'mobileNo'} label={'Mobile No.'} />
          <AInputField
            type={'text'}
            name={'familyMembersInBusiness'}
            label={'Family Members in Business'}
          />
          <AInputField
            type={'text'}
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
            type={'text'}
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
          <ATags tags={bussShare} addTag={addBussShare} setTags={setBussShare}>
            <AGroupFields col={2}>
              <AInputField
                type={'text'}
                name={'nameOfOwner'}
                label={'Name of Owner'}
              />
              <AInputField
                type={'text'}
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
  );
};

export default BusinessDetails;
