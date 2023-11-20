import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';

const MastersBody = ({
  type,
  data,
  openAddEditModal,
  openDeleteModal,
}: any) => {
  return data.map((item: any, index: number) => {
    const isLast = index === data.length - 1;
    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
    return (
      <tr key={item?.name}>
        <TableColumn classes={classes} label={index + 1} />
        <TableColumn
          classes={classes}
          label={item?.name}
          icon={type === 'client' ? item?.logo : ''}
        />
        {type === 'product' && (
          <TableColumn
            classes={classes}
            label={item?.client}
            icon={item?.logo}
          />
        )}
        {type === 'branch' && (
          <TableColumn
            classes={classes}
            label={item?.address}
          />
        )}
        {type === 'client' && (
          <>
            <TableColumn classes={classes} label={item?.branch} />
            <TableColumn classes={classes} icon={item?.signature} />
          </>
        )}
        <TableColumn
          classes={classes}
          label={item?.status}
          color={item?.status === 'active' ? 'green' : 'red'}
        />
        <td className={classes}>
          <div className="flex gap-3">
            <Tooltip content={`Edit ${type}`}>
              <PencilSquareIcon
                className="h-6 w-6"
                fill="#02385e"
                onClick={() => openAddEditModal(item)}
              />
            </Tooltip>
            <Tooltip content={`Delete ${type}`}>
              <TrashIcon
                className="h-6 w-6"
                fill="#02385e"
                onClick={() => openDeleteModal(item)}
              />
            </Tooltip>
          </div>
        </td>
      </tr>
    );
  });
};

export default MastersBody;
