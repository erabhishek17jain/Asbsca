import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import { AModal } from '../../../components-global/AModal';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';

const radioValues = [
  { value: 'Yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const documents = [
  {
    label: 'Documents were not handy during PD.',
    isDoc: 'Yes',
  },
  {
    label:
      'No documents provided & applicant said Documents are already given to bank.',
    isDoc: 'Yes',
  },
  { label: 'GST Returns', isDoc: 'Yes' },
  {
    label: 'GST Registration Certificate',
    isDoc: 'Yes',
  },
  {
    label: 'Financial Statements of March Current Year',
    isDoc: 'no',
  },
  {
    label: 'Financial Statements of March Last Year',
    isDoc: 'no',
  },
  {
    label: 'Financial Statements of March Second Last Year',
    isDoc: 'no',
  },
  { label: 'Sales Bills', isDoc: 'no' },
  { label: 'Purchase Bills', isDoc: 'no' },
  { label: 'ITR for March Current Year', isDoc: 'no' },
  { label: 'ITR for March Last Year', isDoc: 'no' },
  {
    label: 'ITR for March Second Last Year',
    isDoc: 'no',
  },
  { label: 'Udyam Aadhar', isDoc: 'no' },
  {
    label: 'Vehicle Registration (RC Book)',
    isDoc: 'no',
  },
  { label: 'Gumasta', isDoc: 'Yes' },
  { label: 'RC Book', isDoc: 'Yes' },
  { label: 'Salary Slip', isDoc: 'no' },
  {
    label: 'Provisional Financials for March Last Year',
    isDoc: 'no',
  },
  { label: 'Financials in Tally', isDoc: 'no' },
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
        isDoc: 'no',
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
    setPayloads({ ...payloads, documentsSeen: documents });
    handleNext();
  };

  useEffect(() => {
    if (payloads.documentsSeen) {
      setDocumentList([...payloads.documentsSeen]);
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
