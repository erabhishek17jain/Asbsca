import AGroupFields from '../../../components-global/AGroupFields';
import AInputField from '../../../components-global/AInputField';
import ASection from '../../../components-global/ASection';

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

const ComitmentsSummaryFOIR = ({ formik }: any) => {
  return (
    <div className="flex flex-col w-full">
      <ASection>
        {comitments.map((item) => (
          <AGroupFields col={2} title={item.title}>
            <AInputField
              type={'text'}
              name={'amountPA'}
              label={'Amount P.A.'}
            />
            <AInputField
              type={'text'}
              name={'amountPM'}
              label={'Amount P.M.'}
            />
          </AGroupFields>
        ))}
        <AGroupFields col={3}>
          <AInputField
            type={'text'}
            name={'emiRatio'}
            label={'Only EMI Ratio'}
          />
          <AInputField
            type={'text'}
            name={'emiRatio'}
            label={'FOIR Ratio (EMI + Other Con.)'}
          />
          <AInputField
            type={'text'}
            name={'emiRatio'}
            label={'Total Commitments Ratio'}
          />
        </AGroupFields>
      </ASection>
    </div>
  );
};

export default ComitmentsSummaryFOIR;
