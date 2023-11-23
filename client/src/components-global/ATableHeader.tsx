import { useState } from 'react';
import { FilterButtons, FilterCases } from '../components-shared/FilterCases';

const ATableHeader = ({ title, description }: any) => {
  const [showFilter, setShowFilter] = useState(false);

  const showHideFilters = (showFilter: boolean) => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between gap-2">
        <div>
          <h5 className="block antialiased font-semibold text-2xl leading-normal text-main font-normal">
            {title}
          </h5>
          <div className="block antialiased font-sans text-lg leading-normal text-main font-normal mt-1">
            {description}
          </div>
        </div>
        <div className="flex justify-between items-start gap-3">
          <FilterButtons
            showFilter={showFilter}
            showHideFilters={showHideFilters}
          />
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

export default ATableHeader;
