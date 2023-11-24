import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import { AModal } from '../../../components-global/AModal';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';

const radioValues = [
  { name: 'yes', label: 'Yes' },
  { name: 'no', label: 'No' },
];

const documents = [
  { title: 'Documents were not handy during PD.' },
  {
    title:
      'No documents provided & applicant said Documents are already given to bank.',
  },
  { title: 'GST Returns' },
  { title: 'GST Registration Certificate' },
  { title: 'Financial Statements of March 2023' },
  { title: 'Financial Statements of March 2022' },
  { title: 'Financial Statements of March 2021' },
  { title: 'Sales Bills' },
  { title: 'Purchase Bills' },
  { title: 'ITR for March 2023' },
  { title: 'ITR for March 2022' },
  { title: 'ITR for March 2021' },
  { title: 'Udyam Aadhar' },
  { title: 'Vehicle Registration (RC Book)' },
  { title: 'Gumasta' },
  { title: 'RC Book' },
  { title: 'Salary Slip' },
  { title: 'Provisional Financials for March 2022' },
  { title: 'Financials in Tally' },
];

const DocumentsSeen = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  const [documentList, setDocumentList] = useState<any>([...documents]);

  const formikAddDocument = useFormik({
    initialValues: {
      docName: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      setShowModal(false);
      documentList.push({ title: values.docName });
      setDocumentList([...documentList]);
    },
  });

  
  const initialValues = {
    loan: '',
    loanType: '',
    bankName: '',
  };

  const validationSchema = Yup.object().shape({
    loan: Yup.string().required('This field is required'),
    loanType: Yup.string().required('This field is required'),
    bankName: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });
  
  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          {documentList.map((item: any) => (
            <ARadioButtonGroup
              width={'w-1/2'}
              key={item.title}
              title={item.title}
              radioValues={radioValues}
              handleChecked={() => {}}
            />
          ))}
          <div className="flex items-start my-4">
            <AButton
              label={'Add More'}
              variant="small"
              action={() => setShowModal(true)}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
          </div>
          {showModal && (
            <AModal
              saveText={'Add'}
              title={'Add More Expenses'}
              onSave={formikAddDocument.handleSubmit}
              closeModal={() => setShowModal(false)}
            >
              <AInputField
                type={'text'}
                name={'docName'}
                label="Document Name"
                formik={formikAddDocument.getFieldProps('docName')}
              />
            </AModal>
          )}
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};

export default DocumentsSeen;
