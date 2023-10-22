import ABreadcrumb from '../../components-global/ABreadcrumb';
import CasesTable from '../../components-shared/CasesTable';

const ReviewingCases = () => {
  return (
    <>
      <ABreadcrumb pageName="Review Cases" />
      <div className="flex flex-col gap-10">
        <CasesTable status={'reviewing'} />
      </div>
    </>
  );
};

export default ReviewingCases;
