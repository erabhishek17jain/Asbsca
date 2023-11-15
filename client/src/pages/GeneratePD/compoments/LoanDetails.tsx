import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import ASingleSelect from '../../../components-global/ASingleSelect';

const LoanDetails = () => {
  return (
    <div className="flex flex-col w-[70%] py-4">
      <ASingleSelect
        name={'bankName'}
        label={'Bank Name'}
        variant={'horizantal'}
        icon={<BuildingLibraryIcon className="h-4 w-4" />}
        options={[{ label: 'Axis Bank', value: 'axis' }]}
      />
      <ASingleSelect
        name={'loan'}
        label={'Loan'}
        variant={'horizantal'}
        options={[
          { label: 'Home Loan', value: 'homeloan' },
          { label: 'LAP', value: 'lap' },
          { label: 'LAP: Existing Property', value: 'lapexist' },
        ]}
      />
      <ASingleSelect
        name={'loanType'}
        label={'Loan Type'}
        variant={'horizantal'}
        options={[
          { label: 'Fresh', value: 'fresh' },
          { label: 'Balance Transfer', value: 'bt' },
          { label: 'Top-up', value: 'topup' },
          { label: 'BT + Top-up', value: 'bttopup' },
          { label: 'Overdraft', value: 'overdraft' },
          { label: 'Interest Subvention', value: 'subvention' },
          { label: 'Other', value: 'other' },
        ]}
      />
    </div>
  );
};

export default LoanDetails;
