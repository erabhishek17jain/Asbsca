import {
  ArrowDownTrayIcon,
  BuildingLibraryIcon,
  CheckIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  TagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import ASingleSelect from '../components-global/ASingleSelect';
import AInputField from '../components-global/AInputField';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { Tooltip } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { getOptions } from '../utils';
import { appoinmentStatusList, caseStatusList } from '../constants';
import store from '../store/store';
import { fetchAllClientsAsync } from '../slices/clientsSlice';
import { fetchAllUsersAsync } from '../slices/usersSlice';

export const FilterButtons = ({
  showFilter,
  showHideFilters,
  defaultFilters,
  setDefaultFilters,
}: any) => {
  const { userDetails } = useSelector((state: any) => state.users);
  const rows: any = [];

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      setDefaultFilters({ ...defaultFilters, q: values?.search });
    },
  });
  return (
    <>
      <div className="flex gap-1 w-full md:w-72">
        <AInputField
          id={'search'}
          variant={'horizantal'}
          value={formik.values.search}
          error={formik.errors.search}
          handleChange={formik.handleChange}
        />
        <div className="flex mb-8">
          <AButton
            label={''}
            variant={'secondary'}
            action={() => formik.handleSubmit()}
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
      {userDetails?.role?.name === 'Admin' && (
        <Tooltip content="Edit Case">
          <CSVLink data={rows} filename={'Reports'}>
            <div
              className={`flex justify-center items-center gap-1 rounded-lg p-2 font-medium px-4 border border-main text-main hover:bg-grey`}
            >
              <ArrowDownTrayIcon className="h-5 w-5 stroke-main" />
              Download
            </div>
          </CSVLink>
        </Tooltip>
      )}
      <AButton
        label={'Filter'}
        variant={'primary'}
        action={() => showHideFilters(showFilter)}
        icon={<FunnelIcon className="h-5 w-5" />}
      />
    </>
  );
};

export const FilterCases = ({
  status,
  filters,
  setFilters,
  showFilter,
  showHideFilters,
}: any) => {
  const { allUsers, userDetails } = useSelector((state: any) => state.users);
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);
  const [assignOptions, setAssignOptions] = useState<any>([]);

  useEffect(() => {
    if (allClients?.data?.length > 0) {
    setClientOptions(getOptions(allClients?.data, 'name', '_id'));
  }  }, [allClients]);

  useEffect(() => {
    setAssignOptions(getOptions(allUsers?.users, 'fullName', '_id'));
  }, [allUsers]);

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync({ page: 1, limit: 200 }));
    if (userDetails?.role?.name === 'Admin')
      store.dispatch(fetchAllUsersAsync({ page: 1, limit: 200 }));
  }, []);

  return (
    <div className="flex flex-col w-full justify-end gap-2 p-4 border rounded-lg">
      <span className="flex justify-between">
        <span>Filter By:</span>
        <span className="-mt-2 -mr-2">
          <AButton
            label={''}
            variant="link"
            action={() => showHideFilters(showFilter)}
            icon={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
        </span>
      </span>
      <span className="flex gap-3">
        <ASingleSelect
          id={'bankName'}
          label={'Bank Name'}
          options={clientOptions}
          value={filters['bankName']}
          handleChange={(e: any) => {
            setFilters({ ...filters, ...{ bankName: e.target.value } });
          }}
          icon={<BuildingLibraryIcon className="h-4 w-4" />}
        />
        {userDetails?.role?.name === 'Admin' && (
          <ASingleSelect
            id={'assignTo'}
            label={'Assigned To'}
            icon={<UserIcon className="h-4 w-4" />}
            options={assignOptions}
            value={filters['assignTo']}
            handleChange={(e: any) => {
              setFilters({ ...filters, ...{ assignTo: e.target.value } });
            }}
          />
        )}
        {status === 'cases' && (
          <ASingleSelect
            id={'status'}
            label={'Case Type'}
            icon={<TagIcon className="h-4 w-4" />}
            options={caseStatusList}
            value={filters['status']}
            handleChange={(e: any) => {
              setFilters({ ...filters, ...{ status: e.target.value } });
            }}
          />
        )}
        <ASingleSelect
          id={'appoinmentStatus'}
          label={'Appointment Status'}
          icon={<CheckIcon className="h-4 w-4" />}
          options={appoinmentStatusList}
          value={filters['appoinmentStatus']}
          handleChange={(e: any) => {
            setFilters({ ...filters, ...{ appoinmentStatus: e.target.value } });
          }}
        />
      </span>
    </div>
  );
};
