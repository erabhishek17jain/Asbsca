import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { COMPLETED_CASES_TABLE_HEAD } from '../../constants';
import ReportsHeader from './ReportsHeader';
import ReportsBody from './ReportsBody';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCasesByFilter } from '../../services';
import { fetchCompletedAsync } from '../../slices/casesSlice';
import store from '../../store/store';

const Reports = () => {
  const { completedCases } = useSelector((state: any) => state.cases);
  const [cases, setCases] = useState<any>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCasesByFilter(filters)
      .then((res: any) => {
        store.dispatch(fetchCompletedAsync(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    if (completedCases?.length) {
      setCases([...completedCases]);
    }
  }, [completedCases]);
  
  return (
    <>
      <ABreadcrumb pageName="Completed Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          data={cases}
          tableBody={<ReportsBody sentToBank={cases} />}
          tableHeader={COMPLETED_CASES_TABLE_HEAD}
          header={<ReportsHeader filters={filters} setFilters={setFilters} />}
        />
      </div>
    </>
  );
};

export default Reports;
