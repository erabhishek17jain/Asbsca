import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const CasesBody = ({ role, allcases, status }: any) => {
  const navigate = useNavigate();

  return (
    allcases &&
    allcases?.map((item: any, index: number) => {
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
          <TableColumn
            classes={classes}
            label={moment(item?.receivedDate).format('lll')}
          />
          <TableColumn classes={classes} label={item?.name} />
          <TableColumn classes={classes} label={item?.mobile} />
          <TableColumn classes={classes} label={item?.address} />
          <TableColumn classes={classes} label={item?.city} />
          {(status === 'cases' || status === 'reports') && (
            <TableColumn classes={classes} label={item?.branch} />
          )}
          {status !== 'reports' && (
            <TableColumn classes={classes} label={item?.loanAmount} />
          )}
          <TableColumn classes={classes} label={item?.localOrOGL} />
          {(status === 'cases' || status === 'reports') && (
            <TableColumn classes={classes} label={item?.type} />
          )}
          {status !== 'reports' && (
            <TableColumn
              classes={classes}
              label={item?.status}
              color={
                item?.status === 'Assigned' || item?.status === 'Query'
                  ? 'amber'
                  : item?.status === 'Completed' ||
                    item?.status === 'Sent to Bank'
                  ? 'green'
                  : item?.status === 'Reviewing'
                  ? 'blue'
                  : 'gray'
              }
            />
          )}
          {(status === 'cases' || status === 'assigned') && (
            <>
              <TableColumn
                classes={classes}
                label={item?.appStatus}
                color={
                  item?.appStatus === 'Not Responding'
                    ? 'red'
                    : item?.appStatus === 'Scheduled'
                    ? 'amber'
                    : item?.appStatus === 'Visited'
                    ? 'green'
                    : 'gray'
                }
              />
              <TableColumn classes={classes} label={item?.remark} />
            </>
          )}
          {status !== 'assigned' && (
            <TableColumn classes={classes} label={item?.assignTo} />
          )}
          <TableColumn classes={classes} label={item?.reviewer} />
          {status === 'reports' && (
            <>
              <TableColumn
                classes={classes}
                label={moment(item?.createdAt).format('lll')}
              />
              <TableColumn
                classes={classes}
                label={moment(item?.updatedAt).format('lll')}
              />
            </>
          )}
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
    })
  );
};

export default CasesBody;
