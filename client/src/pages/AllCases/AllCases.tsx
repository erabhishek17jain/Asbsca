import { useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import AllCasesBody from './AllCasesBody';
import AllCasesHeader from './AllCasesHeader';
import { AModal } from '../../components-global/AModal';
import { ALL_CASES_TABLE_HEAD } from '../../constants';

const AllCases = () => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <ABreadcrumb pageName="Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          header={<AllCasesHeader role={userDetails?.role} />}
          tableBody={<AllCasesBody role={userDetails?.role} />}
          tableHeader={ALL_CASES_TABLE_HEAD}
        />
      </div>
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default AllCases;
