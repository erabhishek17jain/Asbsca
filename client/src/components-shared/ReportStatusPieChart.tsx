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
  colors: ['#10B981', '#375E83', '#FFA70B', '#8FD0EF'],
  labels: ['Recieved', 'Assigned', 'Reviewing', 'Sent to Bank'],
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
    series: [13, 19, 12, 28],
  });

  return (
    <div className="col-span-12 bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5 sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-3 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black">Report Status</h5>
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