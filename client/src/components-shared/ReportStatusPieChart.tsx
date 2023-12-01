import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#FFA70B', '#8FD0EF'],
  labels: ['Assigned', 'Reviewing', 'Completed', 'Sent to Bank'],
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
  const { analytics } = useSelector((state: any) => state.cases);
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    if (analytics) {
      setSeries([
        analytics?.assignedCases ? analytics?.assignedCases : 0,
        analytics?.reviewedCases ? analytics?.reviewedCases : 0,
        analytics?.completedCases ? analytics?.completedCases : 0,
        analytics?.sentToBank ? analytics?.sentToBank : 0,
      ]);
    }
  }, [analytics]);

  return (
    <div className="col-span-12 bg-clip-border rounded-xl bg-white shadow-lg px-5 py-5 sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-3 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-main">Report Status</h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default ReportStatusPieChart;
