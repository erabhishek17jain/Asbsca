import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import AButton from "../../components-global/AButton";
import { useState } from "react";
import ADropdown from "../../components-global/ADropdown";
import AInputField from "../../components-global/AInputField";
import SearchFilters from '../../components-shared/FilterCases';

const ReviewCasesHeader = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between items-end gap-2">
        <div>
          <Typography variant="h5" color="blue-grey">
            Review Cases
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            These are the list of cases to review.
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
          <div className="mb-5">
            <ADropdown />
          </div>
        </div>
      </div>
      {showFilter && <SearchFilters closeFilter={() => setShowFilter(false)} />}
    </div>
  );
};

export default ReviewCasesHeader;