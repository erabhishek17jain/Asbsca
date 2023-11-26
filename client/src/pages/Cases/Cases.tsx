import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import CasesBody from './CasesBody';
import CasesHeader from './CasesHeader';
import {
  appoinmentStatusList,
  caseStatusList,
  casesTypes,
} from '../../constants';
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../store/store';
import { fetchCasesAsync } from '../../slices/casesSlice';
import { AModal } from '../../components-global/AModal';
import { assignCase, deleteCaseById, statusUpdateCase } from '../../services';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ASingleSelect from '../../components-global/ASingleSelect';
import { getOptions } from '../../utils';
import { fetchAllUsersAsync } from '../../slices/usersSlice';

const Cases = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { userDetails, allUsers } = useSelector((state: any) => state.users);
  const { allCases, loading } = useSelector((state: any) => state.cases);
  const [tableRaw, setTableRaw] = useState<any>({});
  const [showAssignCase, setShowAssignCase] = useState(false);
  const [showStatusCase, setShowStatusCase] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [usersOptions, setUsersOptions] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [filters, setFilters] = useState<any>();
  const [defaultFilters, setDefaultFilters] = useState<any>({
    q: '',
    page: 1,
    limit: 10,
    order: 'ascend',
    sort: 'receivedDate',
  });

  const selectCase = (item: any) => {
    setActiveItem({ ...item });
  };

  const updateAssigneeReviewer = (values: any) => {
    let assignCasePromise = assignCase(values);
    assignCasePromise
      .then(() => {
        formikAssigned.resetForm();
        closeAssignCaseModal();
        store.dispatch(fetchCasesAsync({ ...defaultFilters }));
        toast.success(<b>Case assigned sucessfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const updateCaseStatus = (id: string, values: any) => {
    let updateStatusPromise = statusUpdateCase(id, values);
    updateStatusPromise
      .then(() => {
        formikStatus.resetForm();
        closeUpdateStatusModal();
        store.dispatch(fetchCasesAsync(''));
        toast.success(<b>Case status sucessfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const initialValuesAssigned = {
    caseId: '',
    status: '',
    assigneeId: '',
    reviewerId: '',
  };

  const validationSchemaAssigned = Yup.object().shape({
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
    updateCaseStatus(activeItem?._id, values);
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

  const assignReviewCase = () => {
    setShowAssignCase(true);
    formikAssigned.setFieldValue('caseId', activeItem?._id);
    formikAssigned.setFieldValue('status', 'assigned');
  };

  const updateStatusCase = () => {
    setShowStatusCase(true);
  };

  const startPD = () => {
    const values = { appoinmentStatus: 'visited' };
    updateCaseStatus(activeItem?._id, values);
    navigate('/generatePD', { state: { activeItem: activeItem } });
  };

  const sentToReviewCase = () => {
    const values = {
      status: 'review',
      caseId: activeItem?._id,
      assigneeId: activeItem?.assignTo?._id,
      reviewerId: activeItem?.reviewer?._id,
    };
    updateAssigneeReviewer(values);
  };

  const revertToAssignee = () => {
    const values = {
      status: 'assigned',
      caseId: activeItem?._id,
      assigneeId: activeItem?.assignTo?._id,
      reviewerId: activeItem?.reviewer?._id,
    };
    updateAssigneeReviewer(values);
  };

  const caseCompleted = () => {
    const values = { status: 'completed', appoinmentStatus: 'visited' };
    updateCaseStatus(activeItem?._id, values);
  };

  const caseSentToBank = () => {
    const values = { status: 'sentToBank', appoinmentStatus: 'visited' };
    updateCaseStatus(activeItem?._id, values);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const deleteCase = (id: string) => {
    const deleteBranchPromise = deleteCaseById(id);
    deleteBranchPromise
      .then((res: any) => {
        if (res) {
          closeDeleteModal();
          store.dispatch(
            fetchCasesAsync({ ...defaultFilters, ...{ filter: filters } }),
          );
          toast.success(<b>Case deleted successfully.</b>);
        }
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  useEffect(() => {
    if (activeItem) {
      formikAssigned.setFieldValue('assigneeId', activeItem?.assignTo?._id);
      formikAssigned.setFieldValue('reviewerId', activeItem?.reviewer?._id);
      formikStatus.setFieldValue('status', activeItem?.status);
      formikStatus.setFieldValue(
        'appoinmentStatus',
        activeItem?.appoinmentStatus,
      );
    }
  }, [activeItem]);

  useEffect(() => {
    if (userDetails?.role?.name === 'Admin')
      store.dispatch(fetchAllUsersAsync({ page: 1, limit: 200 }));
    store.dispatch(
      fetchCasesAsync({ ...defaultFilters, ...{ filter: filters } }),
    );
  }, [filters, defaultFilters]);

  useEffect(() => {
    const status = pathname?.slice(1);
    const raw = casesTypes.find((item: any) => item.id === status);
    setTableRaw({ ...raw });
    if (status === 'cases') {
      setFilters({});
    } else {
      setFilters({ ...filters, ...{ status: status } });
    }
  }, [pathname]);

  useEffect(() => {
    if (allUsers?.users?.length > 0) {
      setUsersOptions(getOptions(allUsers?.users, 'fullName', '_id'));
    }
  }, [allUsers.users]);

  const menuOptions: any = {
    cases: [
      {
        title: 'Edit Case',
        action: () =>
          navigate('/addCase', { state: { activeItem: activeItem } }),
        icon: <PencilSquareIcon className="h-5 w-5" />,
      },
      {
        title: 'Assign Case',
        action: assignReviewCase,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Update Status',
        action: updateStatusCase,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Delete Case',
        action: openDeleteModal,
        icon: <TrashIcon className="h-5 w-5" />,
      },
    ],
    assigned: [
      {
        title: 'Start Report',
        action: startPD,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Update Status',
        action: updateStatusCase,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
      {
        title: 'Send To Review',
        action: sentToReviewCase,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
    ],
    review: [
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
        title: 'Send To Bank',
        action: caseSentToBank,
        icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
      },
    ],
    completed: [
      {
        title: 'Download Report',
        action: () => {},
        icon: <ArrowDownTrayIcon className="h-5 w-5 stroke-2" />,
      },
    ],
    sentToBank: [
      {
        title: 'Download Report',
        action: () => {},
        icon: <ArrowDownTrayIcon className="h-5 w-5 stroke-2" />,
      },
    ],
  };

  return (
    <>
      <ABreadcrumb pageName={tableRaw?.title} />
      <div className="flex flex-col">
        {userDetails?.role?.name === 'Admin' && pathname.includes('cases') && (
          <div className="flex justify-end gap-3 mx-4">
            <AButton
              variant={'secondary'}
              label={'Bulk Upload'}
              action={() => navigate('/bulkUpload')}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
            <AButton
              variant={'primary'}
              label={'Add Case'}
              action={() => {
                navigate('/addCase');
              }}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          </div>
        )}
        <ATable
          loading={loading}
          meta={allCases?.meta}
          data={allCases?.cases}
          tableHeader={tableRaw?.header}
          defaultFilters={defaultFilters}
          setDefaultFilters={setDefaultFilters}
          header={
            <CasesHeader
              filters={filters}
              setFilters={setFilters}
              title={tableRaw?.title}
              status={pathname?.slice(1)}
              defaultFilters={defaultFilters}
              setDefaultFilters={setDefaultFilters}
              description={tableRaw?.description}
            />
          }
          tableBody={
            <CasesBody
              selectCase={selectCase}
              activeItem={activeItem}
              allcases={allCases?.cases}
              status={pathname?.slice(1)}
              menuOptions={menuOptions[pathname?.slice(1)]}
            />
          }
        />
      </div>
      {showAssignCase && (
        <AModal
          saveText={'Update'}
          title={'Assign Reporter or Reviewer'}
          onSave={formikAssigned.handleSubmit}
          closeModal={closeAssignCaseModal}
        >
          <div className="flex flex-col ">
            <ASingleSelect
              id="assigneeId"
              label={'Assign Reporter*'}
              value={formikAssigned.values.assigneeId}
              error={formikAssigned.errors.assigneeId}
              handleChange={formikAssigned.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
              options={usersOptions}
            />
            <ASingleSelect
              id="reviewerId"
              label={'Assign Reviewer*'}
              value={formikAssigned.values.reviewerId}
              error={formikAssigned.errors.reviewerId}
              handleChange={formikAssigned.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
              options={usersOptions}
            />
          </div>
        </AModal>
      )}
      {showStatusCase && (
        <AModal
          saveText={'Update'}
          title={'Update Status'}
          onSave={formikStatus.handleSubmit}
          closeModal={closeUpdateStatusModal}
        >
          <div className="flex flex-col ">
            {userDetails?.role?.name === 'Admin' && (
              <ASingleSelect
                id="status"
                label={'Status*'}
                value={formikStatus.values.status}
                error={formikStatus.errors.status}
                handleChange={formikStatus.handleChange}
                icon={<UserIcon className="h-4 w-4" />}
                options={caseStatusList}
              />
            )}
            <ASingleSelect
              id="appoinmentStatus"
              label={'Appoinment Status*'}
              value={formikStatus.values.appoinmentStatus}
              error={formikStatus.errors.appoinmentStatus}
              handleChange={formikStatus.handleChange}
              icon={<UserIcon className="h-4 w-4" />}
              options={appoinmentStatusList}
            />
          </div>
        </AModal>
      )}
      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete Case`}
          onSave={() => deleteCase(activeItem?._id)}
          closeModal={() => closeDeleteModal()}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
};

export default Cases;
