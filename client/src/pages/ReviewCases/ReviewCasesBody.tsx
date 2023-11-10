import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { casesData } from '../../mockData/mocks';
import { Tooltip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ReviewCasesBody = ({ reviewed }:any) => {
  return reviewed && reviewed.map((item: any, index: number) => {
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
          <TableColumn classes={classes} label={item?.address} />
          <TableColumn classes={classes} label={item?.city} />
          <TableColumn classes={classes} label={item?.loanAmt} />
          <TableColumn classes={classes} label={item?.caseType} />
          <TableColumn
            classes={classes}
            label={item?.caseStatus}
            color={
              item?.caseStatus === 'Assigned' ||
              item?.item?.caseStatus === 'Query'
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
          <td className={classes}>
            <div className="flex items-center gap-3">
              <Link to="/generatePD" className="flex gap-1 text-base text-main">
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                <span>Review</span>
              </Link>
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

export default ReviewCasesBody;
