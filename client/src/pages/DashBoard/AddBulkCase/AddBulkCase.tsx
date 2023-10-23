import ABreadcrumb from '../../../components-global/ABreadcrumb';
import AFileDragAndUpload from '../../../components-global/AFileDragAndUpload';
import ATable from '../../../components-global/ATable';
import { BULK_UPLOAD_TABLE_HEAD } from '../../../constants';
import { bulkUploadTableColumn } from '../../../mockData/mocks';
import AddBulkCaseBody from './AddBulkCaseBody';
import AddBulkCaseHeader from './AddBulkCaseHeader';

const AddBulkCase = () => {
  return (
    <>
      <ABreadcrumb pageName="Bulk Upload" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5">
        <div className="w-[325px] sm:w-[450px] mx-auto mb-5">
          <h4 className="block antialiased tracking-normal font-sans text-2xl text-center font-semibold leading-snug text-blue-gray-900">
            Upload File
          </h4>
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
