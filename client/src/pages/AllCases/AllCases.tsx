import ABreadcrumb from '../../components-global/ABreadcrumb';
import CasesTable from '../../components-shared/CasesTable';

const AllCases = () => {
  return (
    <>
      <ABreadcrumb pageName="Cases" />
      <div className="flex flex-col gap-10">
        <CasesTable status={'all'} />
      </div>
    </>
  );
};

export default AllCases;
