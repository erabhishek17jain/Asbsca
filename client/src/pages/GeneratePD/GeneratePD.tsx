import { useLocation, useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useEffect, useState } from 'react';
import { addReport, updateReport } from '../../services';
import toast from 'react-hot-toast';
import { fetchCaseReportDataAsync } from '../../slices/casesSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';

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
          navigate('/finalReport', {
            state: { activeItem: state?.activeItem },
          }),
            toast.success(<b>Report created sucessfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (stepFinished) generateReport();
  }, [payloads]);

  useEffect(() => {
    if (Object.keys(reportData).length > 0) {
      setAction('edit');
      setPayloads({ ...reportData?.data });
    }
  }, [reportData]);

  useEffect(() => {
    if (Object.keys(reportData).length === 0) {
      store.dispatch(fetchCaseReportDataAsync(state?.activeItem?._id));
    }
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white shadow-lg px-5 py-5">
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
