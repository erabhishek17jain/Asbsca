import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { REVIEW_CASES_TABLE_HEAD } from '../../constants';
import ReviewCasesBody from '../ReviewCases/ReviewCasesBody';
import ReviewCasesHeader from '../ReviewCases/ReviewCasesHeader';
import { fetchReviewedAsync } from '../../slices/casesSlice';
import { useState, useEffect } from 'react';
import { fetchCasesByFilter } from '../../services';
import store from '../../store/store';

const ReviewCases = () => {
  const { reviewedCases } = useSelector((state: any) => state.cases);
  const [cases, setCases] = useState<any>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCasesByFilter(filters)
      .then((res: any) => {
        store.dispatch(fetchReviewedAsync(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    if (reviewedCases.length) {
      setCases([...reviewedCases]);
    }
  }, [reviewedCases]);
  return (
    <>
      <ABreadcrumb pageName="Review Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          data={cases}
          tableBody={<ReviewCasesBody reviewed={cases} />}
          tableHeader={REVIEW_CASES_TABLE_HEAD}
          header={
            <ReviewCasesHeader filters={filters} setFilters={setFilters} />
          }
        />
      </div>
    </>
  );
};

export default ReviewCases;
