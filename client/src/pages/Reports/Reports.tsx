import ABreadcrumb from '../../components-global/ABreadcrumb';
import CasesTable from '../../components-shared/CasesTable';

const Reports = () => {
  return (
    <>
      <ABreadcrumb pageName="Completed Cases" />
      <div className="flex flex-col gap-10">
        <CasesTable status={'completed'} />
      </div>
    </>
  );
};

export default Reports;
