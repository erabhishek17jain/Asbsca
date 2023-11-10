import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { casesData } from '../../mockData/mocks';
import { Tooltip } from '@material-tailwind/react';

const ReportsBody = ({ sentToBank }: any) => {
  return (
    sentToBank &&
    sentToBank.map((item: any, index: number) => {
      const isLast = index === casesData.length - 1;
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
          <TableColumn classes={classes} label={item?.branch} />
          <TableColumn classes={classes} label={item?.locType} />
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
          <TableColumn classes={classes} label={item?.assignedTo} />
          <TableColumn classes={classes} label={item?.reviewer} />
          <TableColumn classes={classes} label={item?.startedDate} />
          <TableColumn classes={classes} label={item?.completedDate} />
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
    })
  );
};

export default ReportsBody;
