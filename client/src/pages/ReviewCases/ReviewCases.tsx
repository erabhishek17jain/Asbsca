import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { REVIEW_CASES_TABLE_HEAD } from '../../constants';
import ReviewCasesBody from '../ReviewCases/ReviewCasesBody';
import ReviewCasesHeader from '../ReviewCases/ReviewCasesHeader';

const ReviewCases = () => {
  
  return (
    <>
      <ABreadcrumb pageName="Review Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<ReviewCasesBody />}
          tableHeader={REVIEW_CASES_TABLE_HEAD}
          header={<ReviewCasesHeader />}
        />
      </div>
    </>
  );
};

export default ReviewCases;
