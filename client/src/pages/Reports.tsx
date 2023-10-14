import Breadcrumb from '../components/Breadcrumb';
import { ReportsTable } from '../components/ReportsTable';

const Reports = () => {
  return (
    <>
      <Breadcrumb pageName="Reports" />
      <div className="flex flex-col gap-10">
        <ReportsTable />
      </div>
    </>
  );
};

export default Reports;
