import { useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AModal } from '../../components-global/AModal';
import ATable from '../../components-global/ATable';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader';

const AssignedCases = () => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          tableBody={<AssignedCasesBody />}
          tableHeader={ASSIGNED_CASES_TABLE_HEAD}
          header={<AssignedCasesHeader role={userDetails?.role} />}
        />
      </div>
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default AssignedCases;
