import ABreadcrumb from '../../components-global/ABreadcrumb';
import CasesTable from '../../components-shared/CasesTable';

const AssignedCases = () => {
  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <CasesTable status={'assigned'} />
      </div>
    </>
  );
};

export default AssignedCases;
