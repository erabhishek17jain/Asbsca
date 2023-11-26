import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import AButton from '../../../components-global/AButton';
import AInputField from '../../../components-global/AInputField';
import { AModal } from '../../../components-global/AModal';
import ARadioButtonGroup from '../../../components-global/ARadioButtonGroup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';

const radioValues = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const documents = [
  {
    title: 'Documents were not handy during PD.',
    value: 'documentHandyDuringPD',
    isDoc: 'no',
  },
  {
    title:
      'No documents provided & applicant said Documents are already given to bank.',
    value: 'documentProvidedToBank',
    isDoc: 'no',
  },
  { title: 'GST Returns', value: 'gstReturns', isDoc: 'no' },
  {
    title: 'GST Registration Certificate',
    value: 'gstRegistrationCertificate',
    isDoc: 'no',
  },
  {
    title: 'Financial Statements of March Current Year',
    value: 'currentYearFinancialStatement',
    isDoc: 'no',
  },
  {
    title: 'Financial Statements of March Last Year',
    value: 'lastYearFinancialStatement',
    isDoc: 'no',
  },
  {
    title: 'Financial Statements of March Second Last Year',
    value: 'secondLastYearFinancialStatement',
    isDoc: 'no',
  },
  { title: 'Sales Bills', value: 'salesBills', isDoc: 'no' },
  { title: 'Purchase Bills', value: 'purchaseBils', isDoc: 'no' },
  { title: 'ITR for March Current Year', value: 'currentYearITR', isDoc: 'no' },
  { title: 'ITR for March Last Year', value: 'lastYearITR', isDoc: 'no' },
  {
    title: 'ITR for March Second Last Year',
    value: 'secondLastYearITR',
    isDoc: 'no',
  },
  { title: 'Udyam Aadhar', value: 'udhyamAadhar', isDoc: 'no' },
  {
    title: 'Vehicle Registration (RC Book)',
    value: 'vechicleRegistration',
    isDoc: 'no',
  },
  { title: 'Gumasta', value: 'gumasta', isDoc: 'no' },
  { title: 'RC Book', value: 'rcBook', isDoc: 'no' },
  { title: 'Salary Slip', value: 'salarySlip', isDoc: 'no' },
  {
    title: 'Provisional Financials for March Last Year',
    value: 'provisionalFinancialLastYear',
    isDoc: 'no',
  },
  { title: 'Financials in Tally', value: 'financialsInTally', isDoc: 'no' },
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
        title: values.name,
        value: values.name.replaceAll(' ', ''),
        isDoc: 'no',
      });
      setDocumentList([...documentList]);
    },
  });

  const selectDocuments = (title: string, val: string) => {
    const index = documentList.findIndex((item: any) => item.title === title);
    documentList[index].isDoc = val;
    setDocumentList([...documentList]);
  };

  const submitDocuments = () => {
    const documents = documentList.reduce(
      (obj:any, cur:any) => ({ ...obj, [cur.value]: cur.isDoc }),
      {},
    );
    setPayloads({ ...payloads, documentsSeen: documents });
    handleNext();
  };

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-full">
          {documentList.map((item: any) => (
            <ARadioButtonGroup
              width={'w-1/2'}
              key={item.value}
              title={item.title}
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
              title={'Add More Expenses'}
              onSave={formik.handleSubmit}
              closeModal={() => setShowModal(false)}
            >
              <AInputField
                id={'name'}
                label="Document Name"
                value={formik.values.name}
                error={formik.errors.name}
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
