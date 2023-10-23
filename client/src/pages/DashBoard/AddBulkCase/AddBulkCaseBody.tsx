import { Tooltip } from '@material-tailwind/react';
import { bulkUploadTableColumn } from '../../../mockData/mocks';
import { TableColumn } from '../../../components-global/ATable';
import { TrashIcon } from '@heroicons/react/24/solid';

const AddBulkCaseBody = () => {
  return bulkUploadTableColumn.map(
    (
      {
        bankIcon,
        bankName,
        referenceId,
        recievedDate,
        appicantName,
        mobileNo,
        address,
        city,
        loanAmt,
        branch,
        locType,
        caseType,
      },
      index,
    ) => {
      const isLast = index === bulkUploadTableColumn.length - 1;
      const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';

      return (
        <tr key={bankName}>
          <TableColumn classes={classes} label={index + 1} />
          <TableColumn classes={classes} label={bankName} icon={bankIcon} />
          <TableColumn classes={classes} label={referenceId} />
          <TableColumn classes={classes} label={recievedDate} />
          <TableColumn classes={classes} label={appicantName} />
          <TableColumn classes={classes} label={mobileNo} />
          <TableColumn classes={classes} label={address} />
          <TableColumn classes={classes} label={city} />
          <TableColumn classes={classes} label={loanAmt} />
          <TableColumn classes={classes} label={branch} />
          <TableColumn classes={classes} label={locType} />
          <TableColumn classes={classes} label={caseType} />
          <td className={classes}>
            <Tooltip content="Delete Case">
              <TrashIcon className="h-6 w-6" fill="#02385e" />
            </Tooltip>
          </td>
        </tr>
      );
    },
  );
};

export default AddBulkCaseBody;
