import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader';

const AssignedCases = () => {
  
  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<AssignedCasesBody />}
          tableHeader={ASSIGNED_CASES_TABLE_HEAD}
          header={<AssignedCasesHeader />}
        />
      </div>
    </>
  );
};

export default AssignedCases;
