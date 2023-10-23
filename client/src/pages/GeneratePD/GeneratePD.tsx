import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';

const GeneratePD = () => {
  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper />
      </div>
    </>
  );
};

export default GeneratePD;
