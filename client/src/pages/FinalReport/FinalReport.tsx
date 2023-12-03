import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ReportData from './ReportData/ReportData';
import ADropdown from '../../components-global/ADropdown';
import { useEffect, useState } from 'react';
import { fetchCaseReportDataAsync } from '../../slices/casesSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import ALoader from '../../components-global/ALoader';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { AModal } from '../../components-global/AModal';
import ATextField from '../../components-global/ATextField';
import { assignCase, statusUpdateCase } from '../../services';
import * as Yup from 'yup';
import React from 'react';
import { generatePdf } from '../../utils';

const modalTitle: any = {
  assigned: 'Assign Reporter or Reviewer ',
  query: 'Revert to Assignee',
  review: 'Sent to Reviewer',
  completed: 'Approve Case',
  sentToBank: 'Sent To Bank',
  status: 'Update Status',
};

const successMessages: any = {
  assigned: 'Case sent to assignee & reviewe sucessfully.',
  query: 'Case sent back to assignee to re-check.',
  review: 'Case sent to reviewer sucessfully.',
  completed: 'Case is approved sucessfully.',
  sentToBank: 'Case is sucessfully sent to bank.',
};

const FinalReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const { loading } = useSelector((state: any) => state.cases);
  const [showAssignCase, setShowAssignCase] = useState(false);
  const [showStatusCase, setShowStatusCase] = useState(false);
  const [actionType, setActionType] = useState('');

  const bodyRef: any = React.createRef();
  const createPdf = () => generatePdf(bodyRef.current);

  const updateAssigneeReviewer = (values: any) => {
    if (values?.status === 'assigned') {
      values.remark = '';
    }
    let assignCasePromise = assignCase(values);
    assignCasePromise
      .then(() => {
        closeAssignCaseModal();
        formikAssigned.resetForm();
        toast.success(<b>{successMessages[values?.status]}</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const updateCaseStatus = (id: string, values: any) => {
    let updateStatusPromise = statusUpdateCase(id, values);
    updateStatusPromise
      .then(() => {
        closeUpdateStatusModal();
        formikStatus.resetForm();
        if (successMessages[values?.status])
          toast.success(<b>{successMessages[values?.status]}</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const initialValuesAssigned = {
    caseId: '',
    status: '',
    remark: '',
    assigneeId: '',
    reviewerId: '',
  };

  const validationSchemaAssigned = Yup.object().shape({
    remark: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
    assigneeId: Yup.string().required('This field is required'),
    reviewerId: Yup.string().required('This field is required'),
  });

  const onSubmitAssigned = async (values: any) => {
    values = await Object.assign(values);
    updateAssigneeReviewer(values);
  };

  const formikAssigned = useFormik({
    initialValues: initialValuesAssigned,
    validationSchema: validationSchemaAssigned,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmitAssigned,
  });

  const initialValuesStatus = {
    remark: '',
    status: '',
    appoinmentStatus: '',
  };

  const validationSchemaStatus = Yup.object().shape({
    remark: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
    appoinmentStatus: Yup.string().required('This field is required'),
  });

  const onSubmitStatus = async (values: any) => {
    values = await Object.assign(values);
    updateCaseStatus(state?.activeItem?._id, values);
  };

  const formikStatus = useFormik({
    initialValues: initialValuesStatus,
    validationSchema: validationSchemaStatus,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmitStatus,
  });

  const closeAssignCaseModal = () => {
    setShowAssignCase(false);
  };

  const closeUpdateStatusModal = () => {
    setShowStatusCase(false);
  };

  const sentToReviewCase = () => {
    setShowAssignCase(true);
    setActionType('review');
    formikAssigned.setFieldValue('status', 'review');
    formikAssigned.setFieldValue('caseId', state?.activeItem?._id);
    formikAssigned.setFieldValue(
      'assigneeId',
      state?.activeItem?.assignTo?._id,
    );
    formikAssigned.setFieldValue(
      'reviewerId',
      state?.activeItem?.reviewer?._id,
    );
  };

  const revertToAssignee = () => {
    setShowAssignCase(true);
    setActionType('query');
    formikAssigned.setFieldValue('status', 'query');
    formikAssigned.setFieldValue('caseId', state?.activeItem?._id);
    formikAssigned.setFieldValue(
      'assigneeId',
      state?.activeItem?.assignTo?._id,
    );
    formikAssigned.setFieldValue(
      'reviewerId',
      state?.activeItem?.reviewer?._id,
    );
  };

  const caseCompleted = () => {
    setActionType('completed');
    setShowStatusCase(true);
    formikStatus.setFieldValue('status', 'completed');
    formikStatus.setFieldValue('appoinmentStatus', 'visited');
  };

  const caseSentToBank = () => {
    setActionType('sentToBank');
    setShowStatusCase(true);
    formikStatus.setFieldValue('status', 'sentToBank');
    formikStatus.setFieldValue('appoinmentStatus', 'visited');
  };

  useEffect(() => {
    store.dispatch(fetchCaseReportDataAsync(state?.activeItem?._id));
  }, []);

  const dropdownOptions = {
    assigned: [
      {
        title: 'Edit Report',
        action: () =>
          navigate('/generatePD', {
            state: { activeItem: state?.activeItem },
          }),
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Send to Review',
        action: sentToReviewCase,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Download PDF',
        action: createPdf,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    review: [
      {
        title: 'Edit Report',
        action: () =>
          navigate('/generatePD', {
            state: { activeItem: state?.activeItem },
          }),
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
      {
        title: 'Revert to Assignee',
        action: revertToAssignee,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Approve Case',
        action: caseCompleted,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Download PDF',
        action: createPdf,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    completed: [
      {
        title: 'Send To Bank',
        action: caseSentToBank,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Download PDF',
        action: createPdf,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
    sentToBank: [
      {
        title: 'Download PDF',
        action: createPdf,
        icon: <DocumentChartBarIcon className="h-5 w-5" />,
      },
    ],
  } as any;

  return (
    <>
      <ABreadcrumb pageName="Preview Report" />
      <div className="overflow-x-scroll relative h-[80vh] bg-clip-border rounded-xl bg-white shadow-lg px-5 py-5">
        <div className="flex justify-between items-center mb-3">
          <AButton
            variant={'link'}
            label={'Back'}
            action={() => navigate(-1)}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
          <AButton variant={'link'} label={'Download'} action={createPdf} />
          <div>Preview Report</div>
          <ADropdown
            options={dropdownOptions[state?.activeItem?.status]}
            header={
              <span className="text-right">
                <span className="flex gap-1 text-sm font-medium text-main">
                  <span>Actions</span>
                </span>
              </span>
            }
          />
        </div>
        {!loading ? (
          <div className="-my-4 -mx-6">
            <section className="pdf-body" ref={bodyRef}>
              <ReportData />
            </section>
          </div>
        ) : (
          <div className="w-full h-96 pb-6 flex items-center justify-center">
            <ALoader />
          </div>
        )}
      </div>
      {showAssignCase && (
        <AModal
          saveText={actionType === 'query' ? 'Re-Assign' : 'Send to Review'}
          title={modalTitle[actionType]}
          onSave={formikAssigned.handleSubmit}
          closeModal={closeAssignCaseModal}
        >
          <div className="flex flex-col ">
            <ATextField
              id={'remark'}
              label={'Remark'}
              value={formikAssigned.values.remark}
              error={formikAssigned.errors.remark}
              handleChange={formikAssigned.handleChange}
              icon={<></>}
            />
          </div>
        </AModal>
      )}
      {showStatusCase && (
        <AModal
          saveText={actionType === 'completed' ? 'Approve' : 'Send to Bank'}
          title={modalTitle[actionType]}
          onSave={formikStatus.handleSubmit}
          closeModal={closeUpdateStatusModal}
        >
          <div className="flex flex-col ">
            <ATextField
              id={'remark'}
              label={'Remark'}
              value={formikStatus.values.remark}
              error={formikStatus.errors.remark}
              handleChange={formikStatus.handleChange}
              icon={<></>}
            />
          </div>
        </AModal>
      )}
    </>
  );
};

export default FinalReport;
