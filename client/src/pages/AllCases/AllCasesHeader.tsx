import { FunnelIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import AButton from '../../components-global/AButton';
import { useNavigate } from 'react-router-dom';
import SearchFilters from '../../components-shared/FilterCases';
import AInputField from '../../components-global/AInputField';
import ADropdown from '../../components-global/ADropdown';
import { useState } from 'react';

const AllCasesHeader = ({ role }: any) => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between items-end gap-2">
        <div>
          <Typography variant="h5" color="blue-gray">
            Total Cases
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            These are the list of all cases.
          </Typography>
        </div>
        <div className="flex justify-between items-center gap-3">
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
              type={'submit'}
              variant={'primary'}
              label={'Filter'}
              action={() => setShowFilter(!showFilter)}
              icon={<FunnelIcon className="h-5 w-5" />}
            />
          </div>
          {role === 'admin' && (
            <div className="mb-5">
              <AButton
                type={'submit'}
                variant={'primary'}
                label={'Add Case'}
                action={() => navigate('/addCase')}
                icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
              />
            </div>
          )}
          <div className="mb-5">
            <ADropdown />
          </div>
        </div>
      </div>
      {showFilter && <SearchFilters closeFilter={() => setShowFilter(false)} />}
    </div>
  );
};

export default AllCasesHeader;
