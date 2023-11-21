import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  DocumentChartBarIcon,
  PencilSquareIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ReportData from './ReportData/ReportData';
import { Margin, usePDF } from 'react-to-pdf';
import ADropdown from '../../components-global/ADropdown';

const FinalReport = () => {
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({
    filename: 'usepdf-example.pdf',
    page: { margin: Margin.MEDIUM },
  });
  const dropdownOptions = [
    {
      title: 'PDF',
      action: toPDF,
      icon: <DocumentChartBarIcon className="h-5 w-5" />,
    },
    {
      title: 'Word',
      action: toPDF,
      icon: <DocumentChartBarIcon className="h-5 w-5" />,
    },
  ];
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
            options={dropdownOptions}
            header={
              <div className="flex justify-center items-center gap-1 rounded-lg p-2 font-medium px-4 border border-main text-main hover:bg-grey">
                <span className="text-right">
                  <span className="flex gap-1 text-sm font-medium text-black">
                    <ShareIcon className="h-4 w-4" />
                    <span>Export</span>
                  </span>
                </span>
              </div>
            }
          />
        </div>
        <div className="mt-3 border-2 border-main p-2">
          <div ref={targetRef}>
            <ReportData />
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <AButton
            label={'Edit'}
            variant={'secondary'}
            action={() => {}}
            icon={<PencilSquareIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
          <AButton
            label={'Submit'}
            variant={'secondary'}
            action={() => {}}
            icon={
              <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-main stroke-1" />
            }
          />
        </div>
      </div>
    </>
  );
};

export default FinalReport;
