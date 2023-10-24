import { FunnelIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import ASingleSelect from '../components-global/ASingleSelect';
import ADropdown from '../components-global/ADropdown';
import AInputField from '../components-global/AInputField';

export const FilterButtons = ({ showFilter, showHideFilters }: any) => {
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
      <div className="mb-5">
        <AButton
          label={'Filter'}
          variant={'primary'}
          action={() => showHideFilters(showFilter)}
          icon={<FunnelIcon className="h-5 w-5" />}
        />
      </div>
      <div className="mb-5">
        <ADropdown />
      </div>
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
        <ASingleSelect name={'bankName'} label={'Bank Name'} options={[]} />
        <ASingleSelect
          name={'appointmentStatus'}
          label={'Appointment Status'}
          options={[]}
        />
        <ASingleSelect name={'caseType'} label={'Case Type'} options={[]} />
        <ASingleSelect name={'assignedTo'} label={'Assigned To'} options={[]} />
      </span>
    </div>
  );
};
