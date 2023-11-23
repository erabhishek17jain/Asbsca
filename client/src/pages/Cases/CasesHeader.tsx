import { useState } from 'react';
import {
  FilterCases,
  FilterButtons,
} from '../../components-shared/FilterCases';

const CasesHeader = ({
  title,
  description,
  filters,
  setFilters,
  defaultFilters,
  setDefaultFilters,
}: any) => {
  const [showFilter, setShowFilter] = useState(false);

  const showHideFilters = (showFilter: boolean) => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between gap-2">
        <div>
          <h5 className="block antialiased font-sans text-sm leading-normal text-main font-normal">
            {title}
          </h5>
          <div className="block antialiased font-sans text-sm leading-normal text-main font-normal mt-1">
            {description}
          </div>
        </div>
        <div className="flex justify-between items-start gap-3">
          <FilterButtons
            showFilter={showFilter}
            defaultFilters={defaultFilters}
            showHideFilters={showHideFilters}
            setDefaultFilters={setDefaultFilters}
          />
        </div>
      </div>
      {showFilter && (
        <FilterCases
          filters={filters}
          setFilters={setFilters}
          showFilter={showFilter}
          showHideFilters={showHideFilters}
        />
      )}
    </div>
  );
};

export default CasesHeader;
