import { useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AModal } from '../../components-global/AModal';
import ATable from '../../components-global/ATable';
import { COMPLETED_CASES_TABLE_HEAD } from '../../constants';
import ReportsHeader from './ReportsHeader';
import ReportsBody from './ReportsBody';

const Reports = () => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <ABreadcrumb pageName="Completed Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<ReportsBody />}
          tableHeader={COMPLETED_CASES_TABLE_HEAD}
          header={<ReportsHeader role={userDetails?.role} />}
        />
      </div>
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default Reports;
