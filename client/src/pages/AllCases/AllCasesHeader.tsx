import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import AButton from '../../components-global/AButton';
import { useNavigate } from 'react-router-dom';
import {
  FilterCases,
  FilterButtons,
} from '../../components-shared/FilterCases';

const AllCasesHeader = ({ role }: any) => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  const showHideFilters = (showFilter: boolean) => {
    setShowFilter(!showFilter);
  };

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
          <FilterButtons
            showFilter={showFilter}
            showHideFilters={showHideFilters}
          />
          {role === 'admin' && (
            <div className="mb-5">
              <AButton
                variant={'primary'}
                label={'Add Case'}
                action={() => navigate('/addCase')}
                icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
              />
            </div>
          )}
        </div>
      </div>
      {showFilter && (
        <FilterCases
          showFilter={showFilter}
          showHideFilters={showHideFilters}
        />
      )}
    </div>
  );
};

export default AllCasesHeader;
