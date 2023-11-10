import { ArrowSmallDownIcon, ArrowSmallUpIcon } from "@heroicons/react/24/solid";

const ADataStats = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
              $4,350
            </h4>
            <p className="text-sm font-medium">Unique Visitors</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowSmallUpIcon className="h-5 w-5" />
            <span className="text-meta3">18%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
              55.9K
            </h4>
            <p className="text-sm font-medium">Total Pageviews</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowSmallDownIcon className="h-5 w-5" />
            <span className="text-meta3">25%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 sm:border-b-0 sm:pb-0 xl:border-r">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
              54%
            </h4>
            <p className="text-sm font-medium">Bounce Rate</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowSmallUpIcon className="h-5 w-5" />
            <span className="text-meta5">7%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black md:text-title-lg">
              2m 56s
            </h4>
            <p className="text-sm font-medium">Visit Duration</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowSmallDownIcon className="h-5 w-5" />
            <span className="text-meta3">12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADataStats;
