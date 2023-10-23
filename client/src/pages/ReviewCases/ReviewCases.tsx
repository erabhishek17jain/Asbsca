import { useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AModal } from '../../components-global/AModal';
import ATable from '../../components-global/ATable';
import { REVIEW_CASES_TABLE_HEAD } from '../../constants';
import ReviewCasesBody from '../ReviewCases/ReviewCasesBody';
import ReviewCasesHeader from '../ReviewCases/ReviewCasesHeader';

const ReviewCases = () => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ABreadcrumb pageName="Review Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<ReviewCasesBody />}
          tableHeader={REVIEW_CASES_TABLE_HEAD}
          header={<ReviewCasesHeader role={userDetails?.role} />}
        />
      </div>
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default ReviewCases;
