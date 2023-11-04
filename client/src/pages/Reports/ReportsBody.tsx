import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { casesTableColumn } from '../../mockData/mocks';
import { Tooltip } from '@material-tailwind/react';

const ReportsBody = () => {
  return casesTableColumn.map(
    (
      {
        bankIcon,
        bankName,
        referenceId,
        appicantName,
        mobileNo,
        city,
        branch,
        locType,
        caseStatus,
        assignedTo,
        reviewer,
        recievedDate,
        startedDate,
        completedDate,
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
          <TableColumn classes={classes} label={city} />
          <TableColumn classes={classes} label={branch} />
          <TableColumn classes={classes} label={locType} />
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
          <TableColumn classes={classes} label={assignedTo} />
          <TableColumn classes={classes} label={reviewer} />
          <TableColumn classes={classes} label={startedDate} />
          <TableColumn classes={classes} label={completedDate} />
          <td className={classes}>
            <div className="flex gap-3">
              <Tooltip content="Preview">
                <EyeIcon
                  className="h-6 w-6 pointer"
                  fill="#02385e"
                  onClick={() => {}}
                />
              </Tooltip>
              <Tooltip content="Download">
                <ArrowDownTrayIcon
                  className="h-6 w-6 pointer"
                  fill="#02385e"
                  onClick={() => {}}
                />
              </Tooltip>
            </div>
          </td>
        </tr>
      );
    },
  );
};

export default ReportsBody;
