import { useLocation, useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import { reportSteps } from './constants';
import { useState } from 'react';
import { addReport } from '../../services';
import toast from 'react-hot-toast';
import { payload } from '../../mockData/mocks';

const GeneratePD = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const [payloads, setPayloads] = useState<any>({});

  const generateReport = async () => {
    let values = { caseId: state?.activeItem?._id, data: payloads };
    values = await Object.assign(values);
    const sample = await Object.assign(payload);
    let reportPromise = addReport(sample);
    reportPromise
      .then((res: any) => {
        if (res) {
          navigate('/finalReport', {
            state: { activeItem: state?.activeItem, reportData: res?.data },
          });
          toast.success(<b>Report created sucessfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
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
