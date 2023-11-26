import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../../components-global/ATable';
import { TrashIcon } from '@heroicons/react/24/solid';

const AddBulkCaseBody = ({ data }: any) => {
  return data.map((item: any, index: number) => {
    const isLast = index === data.length - 1;
    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';
    return (
      <tr key={item?.bankName}>
        <TableColumn classes={classes} label={item?.srNo} />
        <TableColumn classes={classes} label={item?.name} />
        <TableColumn classes={classes} label={item?.mobile} />
        <TableColumn classes={classes} label={item?.loanAmount} />
        <TableColumn classes={classes} label={item?.referenceId} />
        <TableColumn classes={classes} label={item?.localOrOGL} />
        <TableColumn classes={classes} label={item?.address} />
        <TableColumn classes={classes} label={item?.city} />
        <TableColumn classes={classes} label={item?.type} />
        <TableColumn classes={classes} label={item?.bankName} />
        <TableColumn classes={classes} label={item?.branch} />
        <TableColumn classes={classes} label={item?.recievedDate} />
        <td className={classes}>
          <Tooltip content="Delete Case">
            <TrashIcon className="h-6 w-6" fill="#02385e" />
          </Tooltip>
        </td>
      </tr>
    );
  });
};

export default AddBulkCaseBody;
