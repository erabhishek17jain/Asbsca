import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags from '../../../components-global/ATags';
import ADatePicker from '../../../components-global/ADatePicker';

const applicantInfo = {
  id: 'app1',
  title: 'Applicant',
  isOpen: true,
  data: [],
};
const residentialInfo = {
  id: 'res1',
  title: 'Residential & Ownership Details',
  isOpen: true,
  data: [],
};
const familyDetailInfo = {
  id: 'fam1',
  title: 'Applicant',
  isOpen: true,
  data: [],
};

const PersonalDetails = () => {
  const [applicantList, setApplicantList] = useState([{ ...applicantInfo }]);
  const [familyDetails, setFamilyDetails] = useState([{ ...familyDetailInfo }]);
  const [residentialDetails, setResidentialDetails] = useState([
    { ...residentialInfo },
  ]);

  return (
    <>
      <p className="w-full text-lg text-black font-bold">Applicants Details</p>
      <ATags
        tags={applicantList}
        setTags={setApplicantList}
        defaultTag={applicantInfo }
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <AInputField type={'text'} name={'name'} label={'Name'} />
          <ASingleSelect
            name={'select'}
            label={'Qualification'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField type={'text'} name={'birthYear'} label={'Birth Year'} />
          <AInputField
            type={'text'}
            name={'studyFinish'}
            label={'Study Finish '}
          />
          <ADatePicker
            type={'date'}
            name={'datePicker'}
            label={'Date of Birth/Incorporation'}
          />
          <ASingleSelect
            name={'select'}
            label={'Nature of Business'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField
            type={'text'}
            name={'bussStartJoined'}
            label={'Business Start/Joined'}
          />
          <div className="flex gap-4">
            <AInputField
              type={'text'}
              name={'expPast'}
              label={'Past Experience'}
            />
            <AInputField
              type={'text'}
              name={'expOverall'}
              label={'Overall Experience'}
            />
          </div>
        </div>
      </ATags>
      <ATags
        disableAdd={true}
        tags={residentialDetails}
        defaultTag={residentialInfo}
        setTags={setResidentialDetails}
      >
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4">
            <AInputField
              type={'text'}
              name={'address'}
              label={'Residence Address'}
            />
            <ASingleSelect
              name={'select'}
              label={'Residence Status '}
              options={[{ label: 'India', value: 'india' }]}
            />
          </div>
          <p className="w-full mb-3">Ownership Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4">
            <AInputField
              type={'text'}
              name={'residingSince'}
              label={'Residing Since'}
            />
            <AInputField
              type={'text'}
              name={'buildupArea'}
              label={'Buildup Area'}
            />
            <AInputField
              type={'text'}
              name={'agrmntValue'}
              label={'Agrmnt. Value'}
            />
            <AInputField
              type={'text'}
              name={'marketValue'}
              label={'Market Value'}
            />
            <AInputField
              type={'text'}
              name={'purchaseYear'}
              label={'Purchase Year'}
            />
            <AInputField
              type={'text'}
              name={'carpetArea'}
              label={'Carpet Area'}
            />
            <AInputField
              type={'text'}
              name={'purchaseValue'}
              label={'Purchase Value'}
            />
          </div>
          <p className="w-full mb-3">Family Details</p>
          <ATags
            tags={familyDetails}
            defaultTag={familyDetailInfo}
            setTags={setFamilyDetails}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4">
              <AInputField type={'text'} name={'name'} label={'Name'} />
              <ASingleSelect
                name={'select'}
                label={'Reation'}
                options={[{ label: 'India', value: 'india' }]}
              />
              <ASingleSelect
                name={'select'}
                label={'Earning Status'}
                options={[{ label: 'India', value: 'india' }]}
              />
            </div>
          </ATags>
        </>
      </ATags>
    </>
  );
};

export default PersonalDetails;
