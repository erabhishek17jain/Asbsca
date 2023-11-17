import { useEffect, useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader';
import { useSelector } from 'react-redux';
import { fetchAssignedAsync } from '../../slices/casesSlice';
import { fetchCasesByFilter } from '../../services';
import store from '../../store/store';

const AssignedCases = () => {
  const { assignedCases } = useSelector((state: any) => state.cases);
  const [cases, setCases] = useState<any>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCasesByFilter(filters)
      .then((res: any) => {
        store.dispatch(fetchAssignedAsync(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    if (assignedCases?.length) {
      setCases([...assignedCases]);
    }
  }, [assignedCases]);

  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          data={cases}
          tableHeader={ASSIGNED_CASES_TABLE_HEAD}
          header={
            <AssignedCasesHeader filters={filters} setFilters={setFilters} />
          }
          tableBody={<AssignedCasesBody assigned={cases} />}
        />
      </div>
    </>
  );
};

export default AssignedCases;
