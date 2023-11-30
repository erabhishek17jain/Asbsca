import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ReportData from './ReportData/ReportData';
import { Margin, usePDF } from 'react-to-pdf';
import ADropdown from '../../components-global/ADropdown';
import { useEffect } from 'react';
import { fetchCaseReportDataAsync } from '../../slices/casesSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import ALoader from '../../components-global/ALoader';

const FinalReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const { reportData, loading } = useSelector((state: any) => state.cases);

  const { toPDF, targetRef } = usePDF({
    filename: 'usepdf-example.pdf',
    page: { margin: Margin.MEDIUM },
  });

  const sentToReviewCase = () => {};
  const revertToAssignee = () => {};
  const caseCompleted = () => {};
  const caseSentToBank = () => {};

  useEffect(() => {
    if (Object.keys(reportData).length === 0) {
      store.dispatch(fetchCaseReportDataAsync(state?.activeItem?._id));
    }
  }, []);

  const dropdownOptions = {
    assigned: [
      {
        title: 'Edit Report',
        action: () =>
          navigate('/generatePD', {
            state: { activeItem: state?.activeItem, action: 'edit' },
          }),
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Send to Review',
        action: sentToReviewCase,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Download PDF',
        action: toPDF,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    review: [
      {
        title: 'Edit Report',
        action: () =>
          navigate('/generatePD', {
            state: { activeItem: state?.activeItem, action: 'edit' },
          }),
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Revert to Assignee',
        action: revertToAssignee,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Approve Case',
        action: caseCompleted,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Download PDF',
        action: toPDF,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    completed: [
      {
        title: 'Send To Bank',
        action: caseSentToBank,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Download PDF',
        action: toPDF,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    sentToBank: [
      {
        title: 'Download PDF',
        action: toPDF,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
  } as any;

  return (
    <>
      <ABreadcrumb pageName="Preview Report" />
      <div className="overflow-x-scroll relative h-[80vh] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <div className="flex justify-between items-center">
          <AButton
            variant={'link'}
            label={'Back'}
            action={() => navigate(-1)}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
          <div>Preview Report</div>
          <ADropdown
            options={dropdownOptions[state?.activeItem?.status]}
            header={
              <span className="text-right">
                <span className="flex gap-1 text-sm font-medium text-main">
                  <span>Actions</span>
                </span>
              </span>
            }
          />
        </div>
        {!loading ? (
          <div className="mt-3 border-2 border-main p-2">
            <div ref={targetRef}>
              <ReportData activeItem={state?.activeItem} />
            </div>
          </div>
        ) : (
          <div className="w-full h-96 pb-6 flex items-center justify-center">
            <ALoader />
          </div>
        )}
      </div>
    </>
  );
};

export default FinalReport;
