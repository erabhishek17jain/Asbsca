import AInputField from '../../../components-global/AInputField';

const comitments = [
  { title: 'Proposed EMI' },
  { title: 'Existing EMI' },
  { title: 'BT EMI' },
  { title: 'Closure EMI' },
  { title: 'LIC/Med./SIP/TP/Other' },
  { title: 'House Rent' },
  { title: 'Total Commitments (Current)' },
  { title: 'Total Present EMI' },
  { title: 'Existing Commitments' },
];

const ComitmentsSummary = ({ title }: any) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-center">
      <p className="w-full mb-3">{title}</p>
      <AInputField type={'text'} name={'amountPA'} label={'Amount P.A.'} />
      <AInputField type={'text'} name={'amountPM'} label={'Amount P.M.'} />
    </div>
  );
};

const ComitmentsSummarySection = ({ children, footers }: any) => {
  return (
    <div className="border-2 rounded-lg mb-4">
      {children && <div className="pt-4 px-4">{children}</div>}
      <div className="flex items-center bg-grey py-5 px-4">
        {footers?.map((item: any) => {
          return (
            <p className="flex gap-4 w-full">
              <span>{item.title}: 60%</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

const ComitmentsSummaryFOIR = () => {
  return (
    <div className="flex flex-col w-full">
      <ComitmentsSummarySection
        footers={[
          { title: 'Total Expenses' },
          { title: 'Net Profit' },
          { title: 'Share of Profit' },
        ]}
      >
        {comitments.map((item) => (
          <ComitmentsSummary title={item.title} />
        ))}
      </ComitmentsSummarySection>
    </div>
  );
};

export default ComitmentsSummaryFOIR;
