import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags, { AddTagButton } from '../../../components-global/ATags';
import ADatePicker from '../../../components-global/ADatePicker';
import ASection from '../../../components-global/ASection';
import { UserIcon } from '@heroicons/react/24/solid';
import AGroupFields from '../../../components-global/AGroupFields';

const applicantInfo = {
  id: 'app1',
  title: 'Applicant',
  isOpen: true,
  data: [],
};

const familyDetailsInfo = {
  isOpen: true,
  data: [],
};

const PersonalDetails = ({ formik }: any) => {
  const [applicantList, setApplicantList] = useState([{ ...applicantInfo }]);
  const [familyDetails, setFamilyDetails] = useState<any>([]);

  const addFamilyDetails = (tags: any) => {
    tags.push({
      ...familyDetailsInfo,
      id: `fam${tags.length + 1}`,
    });
    setFamilyDetails([...tags]);
  };

  return (
    <>
      <p className="w-full text-md text-black font-bold">Applicants Details</p>
      <ATags
        tags={applicantList}
        setTags={setApplicantList}
        defaultTag={applicantInfo}
      >
        <AGroupFields>
          <AInputField
            type={'text'}
            name={'name'}
            label={'Name'}
            icon={<UserIcon className="h-4 w-4" />}
          />
          <ADatePicker
            type={'date'}
            name={'datePicker'}
            label={'Date of Birth/Incorporation'}
          />
          <ASingleSelect
            name={'select'}
            label={'Qualification'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <ASingleSelect
            name={'select'}
            label={'Nature of Business'}
            options={[{ label: 'India', value: 'india' }]}
          />
          <AInputField type={'text'} name={'birthYear'} label={'Birth Year'} />
          <AInputField
            type={'text'}
            name={'studyFinish'}
            label={'Study Finish '}
          />
          <AInputField
            type={'text'}
            name={'bussStartJoined'}
            label={'Business Start/Joined'}
          />
          <AInputField
            type={'text'}
            name={'expPast'}
            disabled={true}
            label={'Past Experience'}
          />
          <AInputField
            type={'text'}
            name={'expOverall'}
            disabled={true}
            label={'Overall Experience'}
          />
        </AGroupFields>
      </ATags>
      <p className="w-full text-md text-black font-bold">
        Residential & Ownership Details
      </p>
      <ASection>
        <div>
          <AGroupFields col={3}>
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
          </AGroupFields>
          <p className="w-full mb-3">Ownership Details</p>
          <AGroupFields>
            <AInputField
              type={'text'}
              name={'residingSince'}
              label={'Residing Since'}
            />
            <AInputField
              type={'text'}
              name={'purchaseYear'}
              label={'Purchase Year'}
            />
            <AInputField
              type={'text'}
              name={'buildupArea'}
              label={'Buildup Area'}
            />
            <AInputField
              type={'text'}
              name={'carpetArea'}
              label={'Carpet Area'}
            />
            <AInputField
              type={'text'}
              name={'agrmntValue'}
              label={'Agrmnt. Value'}
            />
            <AInputField
              type={'text'}
              name={'purchaseValue'}
              label={'Purchase Value'}
            />
            <AInputField
              type={'text'}
              name={'marketValue'}
              label={'Market Value'}
            />
          </AGroupFields>
          <p className="w-full mb-3">Family Details</p>
          {familyDetails.length > 0 ? (
            <ATags
              tags={familyDetails}
              addTag={addFamilyDetails}
              setTags={setFamilyDetails}
            >
              <AGroupFields col={3}>
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
              </AGroupFields>
            </ATags>
          ) : (
            <AddTagButton
              title={'Add Family Member'}
              addLoan={() => addFamilyDetails(familyDetails)}
            />
          )}
        </div>
      </ASection>
    </>
  );
};

export default PersonalDetails;
