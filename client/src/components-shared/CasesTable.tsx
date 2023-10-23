import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ALL_CASES_TABLE_HEAD,
  ASSIGNED_CASES_TABLE_HEAD,
  COMPLETED_CASES_TABLE_HEAD,
  REVIEWING_CASES_TABLE_HEAD,
} from '../constants';
import { casesTableColumn } from '../mockData/mocks';
import { AModal } from '../components-global/AModal';
import ATable, { TableColumn } from '../components-global/ATable';
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  PencilSquareIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import { Tooltip, Typography } from '@material-tailwind/react';
import AButton from '../components-global/AButton';
import { useSelector } from 'react-redux';

const Header = ({role}:any) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-gray">
          {pathname.includes('dashboard') ? 'In Progress Cases' : 'Total Cases'}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          These are the list of in progress cases.
        </Typography>
      </div>
      {!pathname.includes('dashboard') && (
        <div className="flex shrink-0 gap-2 md:w-max">
          {role === 'admin' && (
            <AButton
              type={'submit'}
              variant={'primary'}
              label={'New Case'}
              action={() => {}}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

const Body = ({ status, role }: any) => {
  return casesTableColumn.map(
    (
      {
        bankIcon,
        bankName,
        referenceId,
        appicantName,
        mobileNo,
        address,
        city,
        loanAmt,
        branch,
        locType,
        caseType,
        caseStatus,
        appointmentStatus,
        assignedTo,
        reviewer,
        recievedDate,
        startedDate,
        completedDate,
        remark,
      },
      index,
    ) => {
      const isLast = index === casesTableColumn.length - 1;
      const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

      return (
        <tr key={index}>
          <TableColumn classes={classes} label={index + 1} />
          <TableColumn classes={classes} label={bankName} icon={bankIcon} />
          <TableColumn classes={classes} label={referenceId} />
          <TableColumn classes={classes} label={recievedDate} />
          <TableColumn classes={classes} label={appicantName} />
          <TableColumn classes={classes} label={mobileNo} />
          {(status === 'assigned' || status === 'reviewing') && (
            <TableColumn classes={classes} label={address} />
          )}
          <TableColumn classes={classes} label={city} />
          {status !== 'completed' && (
            <>
              <TableColumn classes={classes} label={loanAmt} />
              <TableColumn classes={classes} label={caseType} />
            </>
          )}
          {status === 'completed' && (
            <>
              <TableColumn classes={classes} label={branch} />
              <TableColumn classes={classes} label={locType} />
            </>
          )}
          <TableColumn
            classes={classes}
            label={caseStatus}
            color={
              caseStatus === 'Assigned' || caseStatus === 'Query'
                ? 'amber'
                : caseStatus === 'Completed' || caseStatus === 'Sent to Bank'
                ? 'green'
                : caseStatus === 'Reviewing'
                ? 'blue'
                : 'gray'
            }
          />
          {(status === 'all' || status === 'assigned') && (
            <TableColumn
              classes={classes}
              label={appointmentStatus}
              color={
                appointmentStatus === 'Not Responding'
                  ? 'red'
                  : appointmentStatus === 'Scheduled'
                  ? 'amber'
                  : appointmentStatus === 'Visited'
                  ? 'green'
                  : 'gray'
              }
            />
          )}
          {(status === 'all' || status === 'assigned') && (
            <TableColumn classes={classes} label={remark} />
          )}
          {status !== 'assigned' && (
            <TableColumn classes={classes} label={assignedTo} />
          )}
          <TableColumn classes={classes} label={reviewer} />
          {status === 'completed' && (
            <>
              <TableColumn classes={classes} label={startedDate} />
              <TableColumn classes={classes} label={completedDate} />
            </>
          )}
          <td className={classes}>
            {status === 'all' && role === 'admin' && (
              <Tooltip content="Edit User">
                <PencilSquareIcon className="h-6 w-6" fill="#02385e" />
              </Tooltip>
            )}
            {status === 'assigned' && (
              <Link
                to="/auth/signup"
                className="w-24 flex gap-1 text-base text-main"
              >
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                <span>Start PD</span>
              </Link>
            )}
            {status === 'reviewing' && (
              <Link
                to="/auth/signup"
                className="w-24 flex gap-1 text-base text-main"
              >
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                <span>Review</span>
              </Link>
            )}
            {status === 'completed' && (
              <div className="flex gap-1">
                <div className="w-20 flex gap-1 text-base text-main">
                  <EyeIcon className="h-6 w-6" />
                  <span>Word</span>
                </div>
                <div className="w-20 flex gap-1 text-base text-main">
                  <EyeIcon className="h-6 w-6" />
                  <span>PDF</span>
                </div>
              </div>
            )}
          </td>
        </tr>
      );
    },
  );
};

const CasesTable = ({ status }: any) => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [headers, setHeaders] = useState<any>([]);

  useEffect(() => {
    if (status === 'assigned') {
      setHeaders(ASSIGNED_CASES_TABLE_HEAD);
    } else if (status === 'reviewing') {
      setHeaders(REVIEWING_CASES_TABLE_HEAD);
    } else if (status === 'completed') {
      setHeaders(COMPLETED_CASES_TABLE_HEAD);
    } else {
      setHeaders(ALL_CASES_TABLE_HEAD);
    }
  }, []);

  return (
    <>
      <ATable
        header={<Header role={userDetails?.role} />}
        tableBody={<Body status={status} role={userDetails?.role} />}
        tableHeader={headers}
      />
      {showModal && (
        <AModal title={'Task'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
};

export default CasesTable;
