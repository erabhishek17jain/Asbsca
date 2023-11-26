import { ArrowLeftIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import ABreadcrumb from '../../../components-global/ABreadcrumb';
import AButton from '../../../components-global/AButton';
import AFileDragAndUpload from '../../../components-global/AFileDragAndUpload';
import ATable from '../../../components-global/ATable';
import {
  BULK_UPLOAD_TABLE_HEAD,
  addBulkCsvColumns,
  addBulkCsvData,
} from '../../../constants';
import AddBulkCaseBody from './AddBulkCaseBody';
import AddBulkCaseHeader from './AddBulkCaseHeader';
import { useNavigate } from 'react-router-dom';
import CsvDownloader from 'react-csv-downloader';
import { useEffect, useState } from 'react';
import { addCase } from '../../../services';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { fetchAllBranchsAsync } from '../../../slices/branchsSlice';
import { fetchAllClientsAsync } from '../../../slices/clientsSlice';
import store from '../../../store/store';

const AddBulkCase = () => {
  const navigate = useNavigate();
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allClients } = useSelector((state: any) => state.clients);
  const [isAdd, setIsAdd] = useState<any>(false);
  const [payload, setPayload] = useState<any>([]);
  const [addCaseData, setAddCaseData] = useState<any>([]);

  const addBulkUpload = async (values: any) => {
    values = await Object.assign(values);
    let addCasePromise = addCase(values);
    addCasePromise
      .then((res: any) => {
        if (res) {
          navigate(-1);
          toast.success(<b>All Cases added sucessfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    const data = { status: 'unassigned', appoinmentStatus: 'notScheduled' };
    let uploadData: any = [];
    if (addCaseData.length > 0) {
      uploadData = addCaseData.map((item: any) => {
        delete item?.srNo;
        const branch = allBranchs?.branches.find(
          (el: any) => el?.name?.includes(item.branch),
        );
        const bankName = allClients?.data.find(
          (el: any) => el?.name?.includes(item.bankName),
        );
        if (!bankName) {
          setIsAdd(true)
          toast.error(`Service is not avaliable for ${item.bankName} Bank.`);
        }
        return {
          ...item,
          ...data,
          ...{
            branch: branch?._id,
            bankName: bankName ? bankName?._id : '655cc8399a598b90846974a8',
          },
        };
      });
      setPayload([...uploadData]);
    }
  }, [addCaseData]);

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync(''));
    store.dispatch(fetchAllBranchsAsync(''));
  }, []);

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
            id="bulkUpload"
            setData={setAddCaseData}
            fileTypeText="Select CSV"
            fileDesc="use sample file for reference"
          />
          <p className=" text-center">
            <span className="mr-2">If you dont have sample file?</span>
            <CsvDownloader
              text="Download"
              datas={addBulkCsvData}
              className={'text-main'}
              columns={addBulkCsvColumns}
              filename={'SampleAddBulkCase.csv'}
            />
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {addCaseData.length > 0 && (
            <>
              <ATable
                data={addCaseData}
                header={<AddBulkCaseHeader />}
                tableHeader={BULK_UPLOAD_TABLE_HEAD}
                tableBody={<AddBulkCaseBody data={addCaseData} />}
              />
              <AButton
                disabled={isAdd}
                variant="primary"
                label={'Add Cases'}
                action={() => addBulkUpload(payload)}
                icon={<CloudArrowUpIcon className="h-5 w-5" />}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddBulkCase;
