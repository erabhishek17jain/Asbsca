import { useLocation, useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useEffect, useLayoutEffect, useState } from 'react';
import { addReport, updateReport } from '../../services';
import toast from 'react-hot-toast';
import { fetchCaseReportDataAsync } from '../../slices/casesSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import AButton from '../../components-global/AButton';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const GeneratePD = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const { reportData } = useSelector((state: any) => state.cases);
  const [action, setAction] = useState<any>('start');
  const [payloads, setPayloads] = useState<any>({});
  const [stepFinished, setStepFinished] = useState(false);

  const generateReport = async () => {
    let values = { caseId: state?.activeItem?._id, data: payloads };
    values = await Object.assign(values);
    let reportPromise =
      action === 'edit' ? updateReport(values) : addReport(values);
    reportPromise
      .then((res: any) => {
        if (res) {
          setAction('edit');
          if (stepFinished) {
            navigate('/finalReport', {
              state: { activeItem: state?.activeItem },
            });
            toast.success(
              <b>
                Report {action === 'edit' ? 'updated' : 'created'} sucessfully.
              </b>,
            );
          }
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (Object.keys(payloads).length > 0) generateReport();
  }, [payloads]);

  useEffect(() => {
    if (reportData?.data && Object.keys(reportData?.data).length > 0) {
      setAction('edit');
      setPayloads({ ...reportData?.data });
    }
  }, [reportData]);

  useLayoutEffect(() => {
    store.dispatch(fetchCaseReportDataAsync(state?.activeItem?._id));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      {reportData && Object.keys(reportData).length > 15 && (
        <div className="flex gap-2 w-full flex-col">
          <div className="flex justify-center sm:justify-end gap-3">
            <AButton
              variant={'secondary'}
              label={'View Report'}
              action={() =>
                navigate('/finalReport', {
                  state: { activeItem: state?.activeItem },
                })
              }
              icon={
                <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-main stroke" />
              }
            />
          </div>
        </div>
      )}
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white shadow-lg p-4 sm:p-5">
        <AStepper
          steps={reportSteps}
          payloads={payloads}
          setPayloads={setPayloads}
          activeItem={state?.activeItem}
          setStepFinished={setStepFinished}
        />
      </div>
    </>
  );
};

export default GeneratePD;
