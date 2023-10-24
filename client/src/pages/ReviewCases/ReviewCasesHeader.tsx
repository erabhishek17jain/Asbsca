import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FilterButtons, FilterCases } from "../../components-shared/FilterCases";

const ReviewCasesHeader = () => {
  const [showFilter, setShowFilter] = useState(false);

  const showHideFilters = (showFilter: boolean) => {
    setShowFilter(!showFilter);
  };


  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between items-end gap-2">
        <div>
          <Typography variant="h5" color="blue-gray">
            Review Cases
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            These are the list of cases to review.
          </Typography>
        </div>
        <div className="flex justify-between items-center gap-3">
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

export default ReviewCasesHeader;