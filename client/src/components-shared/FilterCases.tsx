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

export const FilterButtons = ({ showFilter, showHideFilters }: any) => {
  const { userDetails } = useSelector((state: any) => state.users);
  const rows = [
    { Dessert: 'Cupcake', Calories: 305, Fat: 3.7, Carbs: 67, Protein: 4.3 },
    { Dessert: 'Donut', Calories: 452, Fat: 25.0, Carbs: 51, Protein: 4.9 },
    { Dessert: 'Eclair', Calories: 262, Fat: 16.0, Carbs: 24, Protein: 6.0 },
    {
      Dessert: 'Frozen Yoghurt',
      Calories: 159,
      Fat: 6.0,
      Carbs: 24,
      Protein: 4.0,
    },
    {
      Dessert: 'Gingerbread',
      Calories: 356,
      Fat: 16.0,
      Carbs: 49,
      Protein: 3.9,
    },
    { Dessert: 'Honeycomb', Calories: 408, Fat: 3.2, Carbs: 87, Protein: 6.5 },
    { Dessert: 'Ice Cream', Calories: 237, Fat: 9.0, Carbs: 37, Protein: 4.3 },
  ];
  return (
    <>
      <div className="w-full md:w-72">
        <AInputField
          type={'text'}
          name={'search'}
          variant={'horizantal'}
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
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

export const FilterCases = ({ showFilter, showHideFilters }: any) => {
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
          icon={<BuildingLibraryIcon className="h-4 w-4" />}
          options={[]}
        />
        <ASingleSelect
          name={'appointmentStatus'}
          label={'Appointment Status'}
          icon={<CheckIcon className="h-4 w-4" />}
          options={[]}
        />
        <ASingleSelect
          name={'caseType'}
          label={'Case Type'}
          icon={<TagIcon className="h-4 w-4" />}
          options={[]}
        />
        <ASingleSelect
          name={'assignedTo'}
          label={'Assigned To'}
          icon={<UserIcon className="h-4 w-4" />}
          options={[]}
        />
      </span>
    </div>
  );
};
