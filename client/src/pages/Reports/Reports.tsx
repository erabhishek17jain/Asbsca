import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { COMPLETED_CASES_TABLE_HEAD } from '../../constants';
import ReportsHeader from './ReportsHeader';
import ReportsBody from './ReportsBody';

const Reports = () => {
  
  return (
    <>
      <ABreadcrumb pageName="Completed Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<ReportsBody />}
          tableHeader={COMPLETED_CASES_TABLE_HEAD}
          header={<ReportsHeader />}
        />
      </div>
    </>
  );
};

export default Reports;
