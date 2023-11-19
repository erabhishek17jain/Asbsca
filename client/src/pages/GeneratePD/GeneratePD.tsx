import { useNavigate } from 'react-router-dom';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import { AStepper } from '../../components-global/AStepper';
import toast from 'react-hot-toast';
import { generatePDReport } from '../../services';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { reportSteps } from './constants';

const GeneratePD = () => {
  const navigate = useNavigate();

  const initialValues = {
    loanDetails: {},
    personalDetails: {},
    existingLoan: {},
    propertyDetails: {},
    bussinessDetails: {},
    financialDetails: {},
    comitmentsDetails: {},
    turnoverReceipts: {},
    clientsAndDebtors: {},
    StocksDetails: {},
    suppliersAndCreditors: {},
    assetsInvestmentBank: {},
    observationDetails: {},
    documentsSeen: {},
    bussinessProcessOf: {},
  };

  const validationSchema = Yup.object().shape({});

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let generatePDPromise = generatePDReport(values);
    generatePDPromise
      .then((res: any) => {
        if (res) {
          toast.success(<b>Report generated sucessfully.</b>);
        }
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikReport = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const generateReport = () => {
    navigate('/finalReport');
  };

  return (
    <>
      <ABreadcrumb pageName="Generate PD" />
      <div className="overflow-hidden relative h-[calc(100vh-170px)] bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <AStepper
          steps={reportSteps}
          formikReport={formikReport}
          generateReport={generateReport}
        />
      </div>
    </>
  );
};

export default GeneratePD;
