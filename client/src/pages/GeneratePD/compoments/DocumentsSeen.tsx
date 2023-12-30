import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import { AModal } from '../../../components-global/AModal';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';
import moment from 'moment';
import ATextField from '../../../components-global/ATextField';

const radioValues = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const documents = [
  {
    label: 'Documents were not handy during PD.',
    isDoc: 'No',
  },
  {
    label:
      'No documents provided & applicant said Documents are already given to bank.',
    isDoc: 'No',
  },
  { label: 'GST Returns', isDoc: 'No' },
  {
    label: 'GST Registration Certificate',
    isDoc: 'No',
  },
  {
    label: `Financial Statements of March ${moment().year()}`,
    isDoc: 'No',
  },
  {
    label: `Financial Statements of March ${moment().subtract(1, 'y').year()}`,
    isDoc: 'No',
  },
  {
    label: `Financial Statements of March ${moment().subtract(2, 'y').year()}`,
    isDoc: 'No',
  },
  { label: 'Sales Bills', isDoc: 'No' },
  { label: 'Purchase Bills', isDoc: 'No' },
  {
    label: `ITR for March ${moment().year()}`,
    isDoc: 'No',
  },
  {
    label: `ITR for March ${moment().subtract(1, 'y').year()}`,
    isDoc: 'No',
  },
  {
    label: `ITR for March ${moment().subtract(2, 'y').year()}`,
    isDoc: 'No',
  },
  { label: 'Udyam Aadhar', isDoc: 'No' },
  {
    label: 'Vehicle Registration (RC Book)',
    isDoc: 'No',
  },
  { label: 'Gumasta', isDoc: 'No' },
  { label: 'RC Book', isDoc: 'No' },
  { label: 'Salary Slip', isDoc: 'No' },
  {
    label: 'Provisional Financials for March Last Year',
    isDoc: 'No',
  },
  { label: 'Financials in Tally', isDoc: 'No' },
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
  const [note, setNote] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      setShowModal(false);
      documentList.push({
        label: values.name,
        isDoc: 'No',
      });
      setDocumentList([...documentList]);
    },
  });

  const selectDocuments = (label: string, val: string) => {
    const index = documentList.findIndex((item: any) => item.label === label);
    documentList[index].isDoc = val;
    setDocumentList([...documentList]);
  };

  const submitDocuments = () => {
    setPayloads({
      ...payloads,
      documentsSeen: { note: note, documents: documents },
    });
    handleNext();
  };

  useEffect(() => {
    if (payloads.documentsSeen) {
      setNote(payloads.documentsSeen?.note);
      setDocumentList([...payloads.documentsSeen?.documents]);
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          {documentList.map((item: any) => (
            <ARadioButtonGroup
              width={'w-1/2'}
              title={item.label}
              value={item.isDoc}
              radioValues={radioValues}
              handleChange={selectDocuments}
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
          <div className={`min-w-[25%] w-full sm:w-1/2`}>Note:</div>
          <div className={`min-w-[25%] w-1/2 sm:w-1/2`}>
            <ATextField
              id={'note'}
              value={note}
              handleChange={(e: any) => setNote(e.target.value)}
            />
          </div>

          {showModal && (
            <AModal
              saveText={'Add'}
              title={'Add Document'}
              onSave={formik.handleSubmit}
              closeModal={() => setShowModal(false)}
            >
              <AInputField
                id={'name'}
                label="Document Name"
                value={formik?.values?.name}
                error={formik?.errors?.name}
                handleChange={formik.handleChange}
              />
            </AModal>
          )}
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={submitDocuments}
      />
    </>
  );
};

export default DocumentsSeen;
