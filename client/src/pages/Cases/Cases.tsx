import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import CasesBody from './CasesBody';
import CasesHeader from './CasesHeader';
import { casesTypes } from '../../constants';
import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../store/store';
import { fetchCasesAsync } from '../../slices/casesSlice';

const Cases = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { userDetails } = useSelector((state: any) => state.users);
  const { allCases } = useSelector((state: any) => state.cases);
  const [tableRaw, setTableRaw] = useState<any>({});
  const [filters, setFilters] = useState<any>({});
  const [defaultFilters, setDefaultFilters] = useState<any>({
    skip: 0,
    limit: 10,
    search: '',
    order: 'ascend',
    sort: 'receivedDate',
  });

  useEffect(() => {
    store.dispatch(fetchCasesAsync({ ...defaultFilters, ...filters }));
  }, [filters, defaultFilters]);

  useEffect(() => {
    const status = pathname?.slice(1);
    const raw = casesTypes.find((item: any) => item.id === status);
    setTableRaw({ ...raw });
    // if (status === 'cases') {
    //   setFilters({});
    // } else if (status === 'assigned') {
    //   setFilters({ filterBy: 'assignTo', filterValue: userDetails?._id });
    // } else if (status === 'review') {
    //   setFilters({
    //     filterBy: 'reviewer',
    //     filterValue: userDetails?._id,
    //   });
    // } else if (status === 'reports') {
    //   setFilters({
    //     filterBy: 'status',
    //     filterValue: 'Report Sent',
    //   });
    // }
  }, [pathname]);

  return (
    <>
      <ABreadcrumb pageName={tableRaw?.title} />
      <div className="flex flex-col">
        {userDetails?.role?.name === 'admin' && pathname.includes('cases') && (
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
          data={allCases?.cases}
          tableHeader={tableRaw?.header}
          header={
            <CasesHeader
              filters={filters}
              setFilters={setFilters}
              title={tableRaw?.title}
              defaultFilters={defaultFilters}
              setDefaultFilters={setDefaultFilters}
              description={tableRaw?.description}
            />
          }
          tableBody={
            <CasesBody
              allcases={allCases?.cases}
              status={pathname?.slice(1)}
              role={userDetails?.role?.name}
            />
          }
        />
      </div>
    </>
  );
};

export default Cases;
