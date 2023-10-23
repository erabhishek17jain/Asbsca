import { useSelector } from 'react-redux';
import { useState } from 'react';
import ReportStatusPie from '../../components-shared/ReportStatusPieChart.tsx';
import TopPerformers from '../../components-shared/TopPerformers.tsx';
import StatsCard from '../../components-shared/StatsCard.tsx';
import ASingleSelect from "../../components-global/ASingleSelect.tsx"
import { AModal } from '../../components-global/AModal.tsx';
import AButton from '../../components-global/AButton.tsx';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid';
import ATable from '../../components-global/ATable.tsx';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants/index.tsx';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody.tsx';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader.tsx';

const Dashboard = () => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);

  const calander = [{ label: "Last one week", value: "last_week" }, { label: "Last one Month", value: "last_month" }, { label: "Last one Year", value: "last_year" }, { label: "Custom", value: "custom" }]
  
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <ASingleSelect label="Calender" options={calander} />
        </div>
        <div className="flex items-end gap-3 mb-5">
          <div>
            <AButton
              variant={'secondary'}
              label={'Bulk Upload'}
              action={() => navigate('/bulkUpload')}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            />
          </div>
          <div>
            <AButton
              variant={'primary'}
              label={'Add Case'}
              action={() => {
                navigate('/addCase');
              }}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 sm:flex-row flex-col">
        <div className="w-full sm:1/2 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <StatsCard role={userDetails?.role} />
        </div>
        <div className="w-full sm:1/2 ">
          <ReportStatusPie />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div
          className={
            userDetails?.role === 'admin'
              ? 'col-span-12 xl:col-span-8'
              : 'col-span-12 xl:col-span-12'
          }
        >
          <ATable
            tableBody={<AssignedCasesBody />}
            tableHeader={ASSIGNED_CASES_TABLE_HEAD}
            header={<AssignedCasesHeader />}
          />
        </div>

        {userDetails?.role === 'admin' && <TopPerformers />}
      </div>
      ,
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}>
          <ASingleSelect
            name={'select'}
            label={'Country'}
            options={[
              { label: 'India', value: 'india' },
              { label: 'USA', value: 'usa' },
            ]}
            icon={
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z"
                  fill="#10B981"
                />
              </svg>
            }
          />
        </AModal>
      )}
    </>
  );
};

export default Dashboard;
