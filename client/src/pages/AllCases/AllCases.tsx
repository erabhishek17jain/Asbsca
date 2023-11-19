import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import AllCasesBody from './AllCasesBody';
import AllCasesHeader from './AllCasesHeader';
import { AModal } from '../../components-global/AModal';
import { ALL_CASES_TABLE_HEAD } from '../../constants';
import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';
import { useNavigate } from 'react-router-dom';
import store from '../../store/store';
import { fetchCasesByFilter } from '../../services';
import { fetchAllCasesAsync } from '../../slices/casesSlice';

const AllCases = () => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.users);
  const { allCases } = useSelector((state: any) => state.cases);
  const [showModal, setShowModal] = useState(false);
  const [cases, setCases] = useState<any>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCasesByFilter(filters)
      .then((res: any) => {
        store.dispatch(fetchAllCasesAsync(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    if (allCases?.length) {
      setCases([...allCases]);
    }
  }, [allCases]);

  return (
    <>
      <ABreadcrumb pageName="All Cases" />
      <div className="flex flex-col">
        {userDetails?.role?.name === 'admin' && (
          <div className="flex justify-end gap-3 mx-4">
            <AButton
              variant={'secondary'}
              label={'Bulk Upload'}
              action={() => navigate('/bulkUpload')}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
            <AButton
              variant={'primary'}
              label={'Add Case'}
              action={() => {
                navigate('/addCase');
              }}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          </div>
        )}
        <ATable
          data={cases}
          tableHeader={ALL_CASES_TABLE_HEAD}
          header={<AllCasesHeader filters={filters} setFilters={setFilters} />}
          tableBody={
            <AllCasesBody allcases={cases} role={userDetails?.role?.name} />
          }
        />
      </div>
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default AllCases;
