import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags from '../../../components-global/ATags';

const BusinessDetails = () => {
  return (
    <div className="flex flex-col py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
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
        <AInputField type={'text'} name={'mobileNo'} label={'Mobile No.'} />
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
          name={'noOfVisit'}
          label={'No. of Visit'}
          options={[{ label: 'India', value: 'india' }]}
        />
        <ASingleSelect
          name={'fixedEmployees'}
          label={'Do they have fixed employees?'}
          options={[{ label: 'India', value: 'india' }]}
        />
      </div>
      <p className="w-full mb-3">Shareholding of the business</p>
      <ATags>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 mt-3">
          <AInputField
            type={'text'}
            name={'nameOfOwner'}
            label={'Name of Owner'}
          />
          <AInputField type={'text'} name={'holding'} label={'% of Holding'} />
        </div>
      </ATags>
    </div>
  );
};

export default BusinessDetails;
