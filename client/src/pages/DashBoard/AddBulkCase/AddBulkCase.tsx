import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import ABreadcrumb from '../../../components-global/ABreadcrumb';
import AButton from '../../../components-global/AButton';
import AFileDragAndUpload from '../../../components-global/AFileDragAndUpload';
import ATable from '../../../components-global/ATable';
import { BULK_UPLOAD_TABLE_HEAD } from '../../../constants';
import { bulkUploadTableColumn } from '../../../mockData/mocks';
import AddBulkCaseBody from './AddBulkCaseBody';
import AddBulkCaseHeader from './AddBulkCaseHeader';
import { useNavigate } from 'react-router-dom';

const AddBulkCase = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <ABreadcrumb pageName="Bulk Upload" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <p className="flex justify-between items-center font-sans text-base leading-relaxed text-grey-700 mt-1 font-normal mb-5">
          <span className="">Upload file to add new cases.</span>
          <AButton
            label={'Back'}
            variant={'link'}
            action={() => navigate(-1)}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
        </p>
        <div className="w-[325px] sm:w-[450px] mx-auto mb-5">
          <AFileDragAndUpload
            type="file"
            name="bulk upload"
            fileTypeText="XLX or CSV"
            fileDesc="use sample file for reference"
          />
          <p className="text-center">
            If you dont have sample file?{' '}
            <button className="text-main">Download</button>
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {bulkUploadTableColumn.length > 0 && (
            <ATable
              header={<AddBulkCaseHeader />}
              tableBody={<AddBulkCaseBody />}
              tableHeader={BULK_UPLOAD_TABLE_HEAD}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AddBulkCase;
