import {
  XMarkIcon,
} from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import ASingleSelect from '../components-global/ASingleSelect';

const FilterCases = ({ closeFilter }: any) => {
  return (
    <div className="flex flex-col w-full justify-end gap-2 p-4 border rounded-lg">
      <span className="flex justify-between">
        <span>Filter By:</span>
        <span className="-mt-2 -mr-2">
          <AButton
            label={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
            action={closeFilter}
            variant="secondary"
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

export default FilterCases;
