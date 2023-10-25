import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ADropdown from '../../components-global/ADropdown';
import ReportData from './ReportData/ReportData';
import { Margin, usePDF } from 'react-to-pdf';

const FinalReport = () => {
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({
    filename: 'usepdf-example.pdf',
    page: { margin: Margin.MEDIUM },
  });
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
          <ADropdown dropdownWord={toPDF} dropdownPDF={toPDF} />
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
