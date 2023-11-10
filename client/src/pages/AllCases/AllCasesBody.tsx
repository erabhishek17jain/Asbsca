import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';
import { useNavigate } from 'react-router-dom';

const AllCasesBody = ({ role, allcases }: any) => {
  const navigate = useNavigate();
  
  return allcases && allcases?.map((item: any, index: number) => {
    const isLast = index === allcases.length - 1;
    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

    return (
      <tr key={index}>
        <TableColumn classes={classes} label={index + 1} />
        <TableColumn
          classes={classes}
          label={item?.bankName}
          icon={item?.bankIcon}
        />
        <TableColumn classes={classes} label={item?.referenceId} />
        <TableColumn classes={classes} label={item?.recievedDate} />
        <TableColumn classes={classes} label={item?.appicantName} />
        <TableColumn classes={classes} label={item?.mobileNo} />
        <TableColumn classes={classes} label={item?.city} />
        <TableColumn classes={classes} label={item?.loanAmt} />
        <TableColumn classes={classes} label={item?.caseType} />
        <TableColumn
          classes={classes}
          label={item?.caseStatus}
          color={
            item?.caseStatus === 'Assigned' || item?.caseStatus === 'Query'
              ? 'amber'
              : item?.caseStatus === 'Completed' ||
                item?.caseStatus === 'Sent to Bank'
              ? 'green'
              : item?.caseStatus === 'Reviewing'
              ? 'blue'
              : 'gray'
          }
        />
        <TableColumn
          classes={classes}
          label={item?.appointmentStatus}
          color={
            item?.appointmentStatus === 'Not Responding'
              ? 'red'
              : item?.appointmentStatus === 'Scheduled'
              ? 'amber'
              : item?.appointmentStatus === 'Visited'
              ? 'green'
              : 'gray'
          }
        />
        <TableColumn classes={classes} label={item?.remark} />
        <TableColumn classes={classes} label={item?.assignedTo} />
        <TableColumn classes={classes} label={item?.reviewer} />
        <td className={classes}>
          {role === 'admin' && (
            <div className="flex gap-3">
              <Tooltip content="Edit Case">
                <PencilSquareIcon
                  className="h-6 w-6"
                  fill="#02385e"
                  onClick={() => navigate('/addCase')}
                />
              </Tooltip>
              <Tooltip content="Delete User">
                <TrashIcon
                  className="h-6 w-6 pointer"
                  fill="#02385e"
                  onClick={() => {}}
                />
              </Tooltip>
            </div>
          )}
        </td>
      </tr>
    );
  });
};

export default AllCasesBody;
