import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';

const steps = [
  {
    index: 0,
    label: 'Loan Heading',
  },
  {
    index: 1,
    label: 'Personal Data',
  },
  {
    index: 2,
    label: 'Existing Loan',
  },
];

const GeneratePD = () => {
  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[80vh] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper steps={steps} />
      </div>
    </>
  );
};

export default GeneratePD;
