import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';
import { casesTableColumn } from '../../mockData/mocks';
import { useNavigate } from 'react-router-dom';

const AllCasesBody = ({ role }: any) => {
  const navigate = useNavigate();
  
  return casesTableColumn.map(
    (
      {
        bankIcon,
        bankName,
        referenceId,
        appicantName,
        mobileNo,
        city,
        loanAmt,
        caseType,
        caseStatus,
        appointmentStatus,
        assignedTo,
        reviewer,
        recievedDate,
        remark,
      },
      index,
    ) => {
      const isLast = index === casesTableColumn.length - 1;
      const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';

      return (
        <tr key={index}>
          <TableColumn classes={classes} label={index + 1} />
          <TableColumn classes={classes} label={bankName} icon={bankIcon} />
          <TableColumn classes={classes} label={referenceId} />
          <TableColumn classes={classes} label={recievedDate} />
          <TableColumn classes={classes} label={appicantName} />
          <TableColumn classes={classes} label={mobileNo} />
          <TableColumn classes={classes} label={city} />
          <TableColumn classes={classes} label={loanAmt} />
          <TableColumn classes={classes} label={caseType} />
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
          <TableColumn classes={classes} label={remark} />
          <TableColumn classes={classes} label={assignedTo} />
          <TableColumn classes={classes} label={reviewer} />
          <td className={classes}>
            {role === 'admin' && (
              <Tooltip content="Edit Case">
                <PencilSquareIcon
                  className="h-6 w-6"
                  fill="#02385e"
                  onClick={() => navigate('/addCase')}
                />
              </Tooltip>
            )}
          </td>
        </tr>
      );
    },
  );
};

export default AllCasesBody;
