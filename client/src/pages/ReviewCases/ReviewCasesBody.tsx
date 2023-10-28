import { ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { casesTableColumn } from '../../mockData/mocks';
import { Tooltip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ReviewCasesBody = () => {
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
        caseType,
        caseStatus,
        assignedTo,
        reviewer,
        recievedDate,
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
          <TableColumn classes={classes} label={address} />
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
          <TableColumn classes={classes} label={assignedTo} />
          <TableColumn classes={classes} label={reviewer} />
          <td className={classes}>
            <div className="flex items-center gap-1">
              <Link
                to="/generatePD"
                className="w-24 flex gap-1 text-base text-main"
              >
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                <span>Review</span>
              </Link>
              <Tooltip content="Preview">
                <div className="w-20 flex gap-1 text-base text-main">
                  <EyeIcon className="h-6 w-6" />
                  <span>Word</span>
                </div>
              </Tooltip>
              <Tooltip content="Preview">
                <div className="w-20 flex gap-1 text-base text-main">
                  <EyeIcon className="h-6 w-6" />
                  <span>PDF</span>
                </div>
              </Tooltip>
            </div>
          </td>
        </tr>
      );
    },
  );
};

export default ReviewCasesBody;
