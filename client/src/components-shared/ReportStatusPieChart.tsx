import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B', '#8FD0EF'],
  labels: ['Open', 'In-Progress', 'Done', 'Re-Generate', 'Completed'],
  legend: {
    show: true,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ReportStatusPieChart: React.FC = () => {
  const [state, ] = useState<ChartThreeState>({
    series: [13, 19, 12, 28, 40],
  });

  return (
    <div className="col-span-12 bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5 sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black">
            Report Status
          </h5>
        </div>
        <div>
          <div className="relative inline-block">
            <select
              name=""
              id=""
              className="relative inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="monthly">Last 30 Days</option>
              <option value="monthly">Last 90 Days</option>
            </select>
            <span className="absolute top-1/2 right-3 -translate-y-1/2">
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportStatusPieChart;