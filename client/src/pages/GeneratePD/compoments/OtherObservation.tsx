import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';

const observations = [
  { title: 'Business Plate name seen' },
  { title: 'Activtity Seen' },
  { title: 'Customer Seen' },
  { title: 'Stock seen' },
  { title: 'Third Party Check' },
  { title: 'Screenshot of CCTV of premises other than Visited' },
];

const OtherObservation = ({ formik }: any) => {
  return (
    <div className="flex flex-col w-full">
      <ASection>
        {observations.map((item) => (
          <AGroupFields col={2} title={item.title}>
            <AInputField type={'text'} name={'select'} label={'Select'} />
            <AInputField
              type={'text'}
              name={'reason'}
              label={'Reason if No or NA'}
            />
          </AGroupFields>
        ))}
        <AGroupFields col={2}>
          <AInputField
            type={'text'}
            name={'behaviour'}
            label={'Behaviour of applicant'}
          />
        </AGroupFields>
        <p className="w-full mb-3">During Visit</p>
        <AGroupFields col={3}>
          <AInputField
            type={'text'}
            name={'applicantDoing'}
            label={'What applicant were doing?'}
          />
          <AInputField
            type={'text'}
            name={'employeesDoing'}
            label={'What employees were doing?'}
          />
          <AInputField
            type={'text'}
            name={'other'}
            label={'Other observation during visit?'}
          />
        </AGroupFields>
      </ASection>
    </div>
  );
};

export default OtherObservation;
