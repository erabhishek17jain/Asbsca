import { useLocation, useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useEffect, useState } from 'react';
import { addReport, updateReport } from '../../services';
import toast from 'react-hot-toast';
import { payload } from '../../mockData/mocks';
import { fetchCaseReportDataAsync } from '../../slices/casesSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';

const GeneratePD = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const [payloads, setPayloads] = useState<any>({});
  const { reportData } = useSelector((state: any) => state.cases);

  const generateReport = async () => {
    let values = { caseId: state?.activeItem?._id, data: payload.data };
    values = await Object.assign(values);
    let reportPromise =
      state?.action === 'edit' ? updateReport(values) : addReport(values);
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
    if (Object.keys(reportData).length > 0) {
      setPayloads({ ...reportData?.data });
    }
  }, [reportData]);

  useEffect(() => {
    if (Object.keys(reportData).length === 0 && state?.action === 'edit') {
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
          generateReport={generateReport}
          activeItem={state?.activeItem}
        />
      </div>
    </>
  );
};

export default GeneratePD;
