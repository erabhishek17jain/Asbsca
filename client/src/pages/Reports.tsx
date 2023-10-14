import ABreadcrumb from '../components-global/ABreadcrumb';
import { ReportsTable } from '../components-shared/ReportsTable';

const Reports = () => {
  return (
    <>
      <ABreadcrumb pageName="Reports" />
      <div className="flex flex-col gap-10">
        <ReportsTable />
      </div>
    </>
  );
};

export default Reports;
