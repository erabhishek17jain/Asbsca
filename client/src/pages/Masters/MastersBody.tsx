import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';
import { pages } from '../../constants';

const MastersBody = ({
  type,
  meta,
  data,
  openAddEditModal,
  openDeleteModal,
}: any) => {
  return data.map((item: any, index: number) => {
    const isLast = index === data.length - 1;
    const classes = `p-4 border-0 ${!isLast && 'border-b border-stroke'}`;
    return (
      <tr key={item?.name}>
        <TableColumn
          classes={classes}
          label={(meta?.page - 1) * 10 + index + 1}
        />
        <TableColumn
          classes={classes}
          label={item?.name}
          icon={type === 'client' ? item?.logo : ''}
        />
        {type === 'product' && (
          <TableColumn
            classes={classes}
            label={item?.client?.name}
            icon={item?.client?.logo}
          />
        )}
        {type === 'branch' && (
          <TableColumn classes={classes} label={item?.address} />
        )}
        {type === 'client' && (
          <>
            <TableColumn classes={classes} label={item?.branch?.name} />
            <TableColumn classes={classes} icon={item?.signature} />
          </>
        )}
        {type === 'role' && (
          <TableColumn
            classes={classes}
            label={
              item?.permissions.length === pages.length
                ? 'Full Access'
                : item?.permissions.join(', ')
            }
          />
        )}
        <TableColumn
          classes={classes}
          label={item?.status}
          color={item?.status === 'active' ? 'green' : 'red'}
        />
        <td className={classes}>
          <div
            className={`flex gap-3 ${
              item?.name === 'Admin' ? 'cursor-not-allowed opacity-70' : ''
            }`}
          >
            <Tooltip content={`Edit ${type}`}>
              <PencilSquareIcon
                className="h-6 w-6"
                fill="#02385e"
                onClick={() =>
                  item?.name !== 'Admin' ? openAddEditModal(item) : undefined
                }
              />
            </Tooltip>
            <Tooltip content={`Delete ${type}`}>
              <TrashIcon
                className="h-6 w-6"
                fill="#02385e"
                onClick={() =>
                  item?.name !== 'Admin' ? openDeleteModal(item) : undefined
                }
              />
            </Tooltip>
          </div>
        </td>
      </tr>
    );
  });
};

export default MastersBody;
