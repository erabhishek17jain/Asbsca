import AInputField from '../../../components-global/AInputField';

const observations = [
  { title: 'Business Plate name seen' },
  { title: 'Activtity Seen' },
  { title: 'Customer Seen' },
  { title: 'Stock seen' },
  { title: 'Third Party Check' },
  { title: 'Screenshot of CCTV of premises other than Visited' },
];

const Observations = ({ title }: any) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
      <p className="w-full mb-3">{title}</p>
      <AInputField type={'text'} name={'select'} label={'Select'} />
      <AInputField type={'text'} name={'reason'} label={'Reason if No or NA'} />
    </div>
  );
};

const ObservationsSection = ({ children, footers }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4">
      {children && <div className="pt-4 px-4">{children}</div>}
      {footers?.length > 0 && (
        <div className="flex items-center bg-grey py-5 px-4">
          {footers?.map((item: any) => {
            return (
              <p className="flex gap-4 w-full">
                <span>{item.title}: 60%</span>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

const OtherObservation = () => {
  return (
    <div className="flex flex-col w-full">
      <ObservationsSection>
        {observations.map((item) => (
          <Observations title={item.title} />
        ))}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
          <AInputField
            type={'text'}
            name={'behaviour'}
            label={'Behaviour of applicant'}
          />
        </div>
        <p className="w-full mb-3">During Visit</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
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
        </div>
      </ObservationsSection>
    </div>
  );
};

export default OtherObservation;
