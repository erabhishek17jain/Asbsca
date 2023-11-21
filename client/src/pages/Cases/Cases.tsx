import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import CasesBody from './CasesBody';
import CasesHeader from './CasesHeader';
import { casesTypes } from '../../constants';
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
import { fetchCasesAsync } from '../../slices/casesSlice';
import ALoader from '../../components-global/ALoader';
import { AModal } from '../../components-global/AModal';
import { assignCase } from '../../services';
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
  const [usersOptions, setUsersOptions] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [filters, setFilters] = useState<any>({});
  const [defaultFilters, setDefaultFilters] = useState<any>({
    skip: 0,
    limit: 10,
    search: '',
    order: 'ascend',
    sort: 'receivedDate',
  });

  const initialValues = {
    caseId: '',
    assigneeId: '',
    reviewerId: '',
  };

  const validationSchema = Yup.object().shape({
    assigneeId: Yup.string().required('This field is required'),
    reviewerId: Yup.string().required('This field is required'),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    let addUserPromise = assignCase(values);
    addUserPromise
      .then(() => {
        formik.resetForm();
        store.dispatch(fetchCasesAsync(''));
        toast.success(<b>Case assigned sucessfully.</b>);
      })
      .catch((e) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const selectCase = (item: any) => {
    setActiveItem({ ...item });
  };

  const closeAssignCaseModal = () => {
    setShowAssignCase(false);
  };

  useEffect(() => {
    store.dispatch(fetchAllUsersAsync(''));
    store.dispatch(fetchCasesAsync({ ...defaultFilters, ...filters }));
  }, [filters, defaultFilters]);

  useEffect(() => {
    const status = pathname?.slice(1);
    const raw = casesTypes.find((item: any) => item.id === status);
    setTableRaw({ ...raw });
    if (status === 'cases') {
      setFilters({});
    } else if (status === 'assigned') {
      setFilters({ filterBy: 'assignTo', filterValue: userDetails?._id });
    } else if (status === 'review') {
      setFilters({
        filterBy: 'reviewer',
        filterValue: userDetails?._id,
      });
    } else if (status === 'reports') {
      setFilters({
        filterBy: 'status',
        filterValue: 'Report Sent',
      });
    }
  }, [pathname]);

  const assignReviewCase = () => {
    setShowAssignCase(true);
    formik.setFieldValue('caseId', activeItem?._id);
  };

  useEffect(() => {
    setUsersOptions(getOptions(allUsers, 'fullName', '_id'));
  }, [allUsers]);

  const menuOptions = [
    {
      title: 'Edit Case',
      action: () => navigate('/addCase', { state: { activeItem: activeItem } }),
      icon: <PencilSquareIcon className="h-5 w-5" />,
    },
    {
      title: 'Assign Case',
      action: assignReviewCase,
      icon: <ArrowTopRightOnSquareIcon className="h-5 w-5 stroke-2" />,
    },
    {
      title: 'Delete Case',
      action: {},
      icon: <TrashIcon className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <ABreadcrumb pageName={tableRaw?.title} />
      <div className="flex flex-col">
        {userDetails?.role?.name === 'admin' && pathname.includes('cases') && (
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
        {!loading ? (
          <ATable
            data={allCases?.cases}
            tableHeader={tableRaw?.header}
            header={
              <CasesHeader
                filters={filters}
                setFilters={setFilters}
                title={tableRaw?.title}
                defaultFilters={defaultFilters}
                setDefaultFilters={setDefaultFilters}
                description={tableRaw?.description}
              />
            }
            tableBody={
              <CasesBody
                allcases={allCases?.cases}
                status={pathname?.slice(1)}
                role={userDetails?.role?.name}
                selectCase={selectCase}
                menuOptions={menuOptions}
              />
            }
          />
        ) : (
          <ALoader />
        )}
      </div>
      {showAssignCase && (
        <AModal
          saveText={'Save'}
          title={'AssignUser'}
          onSave={formik.handleSubmit}
          closeModal={closeAssignCaseModal}
        >
          <div className="flex flex-col ">
            <ASingleSelect
              id="assigneeId"
              label={'Assign Reporter*'}
              error={formik.errors.assigneeId}
              formik={formik.getFieldProps('assigneeId')}
              icon={<UserIcon className="h-4 w-4" />}
              options={usersOptions}
            />
            <ASingleSelect
              id="reviewerId"
              label={'Assign Reviewer*'}
              error={formik.errors.reviewerId}
              formik={formik.getFieldProps('reviewerId')}
              icon={<UserIcon className="h-4 w-4" />}
              options={usersOptions}
            />
          </div>
        </AModal>
      )}
    </>
  );
};

export default Cases;
