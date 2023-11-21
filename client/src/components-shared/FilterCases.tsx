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
import { appStatusList, caseStatusList } from '../constants';
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
      setDefaultFilters({ ...defaultFilters, search: values?.search });
    },
  });
  return (
    <>
      <div className="flex gap-1 w-full md:w-72">
        <AInputField
          type={'text'}
          id={'search'}
          variant={'horizantal'}
          error={formik.errors.search}
          formik={formik.getFieldProps('search')}
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
      {userDetails?.role?.name === 'admin' && (
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
  filters,
  setFilters,
  showFilter,
  showHideFilters,
}: any) => {
  const { allClients } = useSelector((state: any) => state.clients);
  const { allUsers } = useSelector((state: any) => state.users);
  const [clientOptions, setClientOptions] = useState<any>([]);
  const [assignOptions, setAssignOptions] = useState<any>([]);

  useEffect(() => {
    setClientOptions(getOptions(allClients, 'name', '_id'));
  }, [allClients]);

  useEffect(() => {
    setAssignOptions(getOptions(allUsers, 'fullName', '_id'));
  }, [allUsers]);

  useEffect(() => {
    store.dispatch(fetchAllUsersAsync(''));
    store.dispatch(fetchAllClientsAsync(''));
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
          name={'bankName'}
          label={'Bank Name'}
          options={clientOptions}
          value={filters?.filterValue}
          handleChange={(e: any) => {
            setFilters({
              filterBy: 'bankName',
              filterValue: e.target.value,
            });
          }}
          icon={<BuildingLibraryIcon className="h-4 w-4" />}
        />
        <ASingleSelect
          name={'assignTo'}
          label={'Assigned To'}
          icon={<UserIcon className="h-4 w-4" />}
          options={assignOptions}
          value={filters?.filterValue}
          handleChange={(e: any) => {
            setFilters({
              filterBy: 'assignTo',
              filterValue: e.target.value,
            });
          }}
        />
        <ASingleSelect
          name={'status'}
          label={'Case Type'}
          icon={<TagIcon className="h-4 w-4" />}
          options={caseStatusList}
          value={filters?.filterValue}
          handleChange={(e: any) => {
            setFilters({
              filterBy: 'status',
              filterValue: e.target.value,
            });
          }}
        />
        <ASingleSelect
          name={'appStatus'}
          label={'Appointment Status'}
          icon={<CheckIcon className="h-4 w-4" />}
          options={appStatusList}
          value={filters?.filterValue}
          handleChange={(e: any) => {
            setFilters({
              filterBy: 'appStatus',
              filterValue: e.target.value,
            });
          }}
        />
      </span>
    </div>
  );
};
