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
  ArrowTopRightOnSquareIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../store/store';
import { fetchCasesAsync, fetchExporCasesAsync } from '../../slices/casesSlice';
import { AModal } from '../../components-global/AModal';
import { assignCase, deleteCaseById, statusUpdateCase } from '../../services';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ASingleSelect from '../../components-global/ASingleSelect';
import { getOptions } from '../../utils';
import { fetchAllUsersAsync } from '../../slices/usersSlice';
import ATextField from '../../components-global/ATextField';

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

const Cases = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { userDetails, allUsers } = useSelector((state: any) => state.users);
  const { allCases, loading } = useSelector((state: any) => state.cases);
  const [tableRaw, setTableRaw] = useState<any>({});
  const [showAssignCase, setShowAssignCase] = useState(false);
  const [showStatusCase, setShowStatusCase] = useState(false);
  const [actionType, setActionType] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [usersOptions, setUsersOptions] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [filters, setFilters] = useState<any>();
  const [defaultFilters, setDefaultFilters] = useState<any>({
    q: '',
    page: 1,
    limit: 10,
    order: 'descend',
    sort: 'updatedAt',
  });

  const selectCase = (item: any) => {
    setActiveItem({ ...item });
  };

  const updateAssigneeReviewer = (values: any) => {
    let assignCasePromise = assignCase(values);
    assignCasePromise
      .then(() => {
        setActiveItem(null);
        closeAssignCaseModal();
        formikAssigned.resetForm();
        setDefaultFilters({ ...defaultFilters });
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
        setActiveItem(null);
        closeUpdateStatusModal();
        formikStatus.resetForm();
        setDefaultFilters({ ...defaultFilters });
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
    setActionType('assigned');
    formikAssigned.setFieldValue('caseId', activeItem?._id);
    formikAssigned.setFieldValue('status', 'assigned');
    formikAssigned.setFieldValue('remark', 'Assigned');
  };

  const updateStatusCase = () => {
    setActionType('status');
    setShowStatusCase(true);
  };

  const startPD = () => {
    if (activeItem?.status === 'assigned') {
      const values = { appoinmentStatus: 'visited' };
      updateCaseStatus(activeItem?._id, values);
      navigate('/generatePD', {
        state: { activeItem: activeItem },
      });
    } else {
      navigate('/generatePD', {
        state: { activeItem: activeItem },
      });
    }
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
      formikAssigned.setFieldValue('remark', activeItem?.remark);
      formikAssigned.setFieldValue('assigneeId', activeItem?.assignTo?._id);
      formikAssigned.setFieldValue('reviewerId', activeItem?.reviewer?._id);
      formikStatus.setFieldValue('remark', activeItem?.remark);
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
    store.dispatch(
      fetchExporCasesAsync({
        ...defaultFilters,
        ...{ filter: filters },
        limit: 200,
      }),
    );
  }, [filters, defaultFilters]);

  useEffect(() => {
    const status = pathname?.slice(1);
    const raw = casesTypes.find((item: any) => item.id === status);
    setTableRaw({ ...raw });
    if (status === 'cases') {
      setFilters({});
    } else if (status === 'assigned') {
      setFilters({ ...filters, ...{ status: 'assigned_query' } }); // assigned_query
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
              meta={allCases?.meta}
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
          saveText={actionType === 'assigned' ? 'Assign' : 'Send to Review'}
          title={modalTitle[actionType]}
          onSave={formikAssigned.handleSubmit}
          closeModal={closeAssignCaseModal}
        >
          <div className="flex flex-col ">
            {actionType === 'assigned' && (
              <>
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
              </>
            )}
            {actionType !== 'assigned' && (
              <ATextField
                id={'remark'}
                label={'Remark'}
                value={formikAssigned.values.remark}
                error={formikAssigned.errors.remark}
                handleChange={formikAssigned.handleChange}
                icon={<></>}
              />
            )}
          </div>
        </AModal>
      )}
      {showStatusCase && (
        <AModal
          saveText={'Update'}
          title={modalTitle[actionType]}
          onSave={formikStatus.handleSubmit}
          closeModal={closeUpdateStatusModal}
        >
          <div className="flex flex-col ">
            {actionType === 'status' && (
              <>
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
              </>
            )}
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
