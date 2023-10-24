import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { useState } from 'react';
import ADatePicker from '../../../components-global/ADatePicker';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import ATags from '../../../components-global/ATags';

const PersonalDetails = ({ noOfAppicants }: any) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {new Array(noOfAppicants).fill('').map((item, index) => {
        return (
          <Accordion open={open === index + 1}>
            <AccordionHeader onClick={() => handleOpen(index + 1)}>
              {index === 0 ? 'Applicant' : `Co-Appicant ${index}`}
            </AccordionHeader>
            <AccordionBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                <AInputField type={'text'} name={'name'} label={'Name'} />
                <ASingleSelect
                  name={'select'}
                  label={'Qualification'}
                  options={[
                    { label: 'India', value: 'india' },
                    { label: 'USA', value: 'usa' },
                  ]}
                />
                <AInputField
                  type={'text'}
                  name={'birthYear'}
                  label={'Birth Year'}
                />
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
                  options={[
                    { label: 'India', value: 'india' },
                    { label: 'USA', value: 'usa' },
                  ]}
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
            </AccordionBody>
          </Accordion>
        );
      })}
      <Accordion open={open === noOfAppicants + 1}>
        <AccordionHeader onClick={() => handleOpen(noOfAppicants + 1)}>
          Residential & Ownership Details
        </AccordionHeader>
        <AccordionBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <AInputField
              type={'text'}
              name={'address'}
              label={'Residence Address'}
            />
            <ASingleSelect
              name={'select'}
              label={'Residence Status '}
              options={[
                { label: 'India', value: 'india' },
                { label: 'USA', value: 'usa' },
              ]}
            />
          </div>
          <p className="w-full mb-3">Ownership Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
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
          <ATags>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 mt-3">
              <AInputField type={'text'} name={'name'} label={'Name'} />
              <ASingleSelect
                name={'select'}
                label={'Reation'}
                options={[
                  { label: 'India', value: 'india' },
                  { label: 'USA', value: 'usa' },
                ]}
              />
              <ASingleSelect
                name={'select'}
                label={'Earning Status'}
                options={[
                  { label: 'India', value: 'india' },
                  { label: 'USA', value: 'usa' },
                ]}
              />
            </div>
          </ATags>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default PersonalDetails;
