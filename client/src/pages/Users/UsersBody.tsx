import { Tooltip } from '@material-tailwind/react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { useSelector } from 'react-redux';

const UsersBody = ({
  meta,
  openUserDeleteModal,
  openUserAddEditModal,
}: any) => {
  const { allUsers } = useSelector((state: any) => state.users);

  return allUsers?.users?.map((item: any, index: number) => {
    const isLast = index === allUsers?.users.length - 1;
    const classes = `p-4 border-0 ${!isLast && 'border-b border-stroke'}`;
    return (
      <tr key={item?.email}>
        <TableColumn
          classes={classes}
          label={(meta?.page - 1) * 10 + index + 1}
        />
        <TableColumn
          classes={classes}
          label={item?.fullName}
          icon={item?.profile}
        />
        <TableColumn classes={classes} label={item?.username} />
        <TableColumn classes={classes} label={item?.email} />
        <TableColumn classes={classes} label={item?.mobile} />
        <TableColumn classes={classes} label={item?.address} />
        <TableColumn classes={classes} label={item?.role?.name} />
        <TableColumn
          classes={classes}
          label={item?.status}
          color={item?.status === 'active' ? 'green' : 'red'}
        />
        <TableColumn
          classes={classes}
          label={item?.isVerified ? 'Verified' : 'Request Sent'}
          color={item?.isVerified ? 'green' : 'red'}
        />
        <td className={`${classes}`}>
          <div className="flex gap-3">
            <Tooltip content="Edit User">
              <PencilSquareIcon
                className="h-6 w-6 pointer"
                fill="#02385e"
                onClick={() => openUserAddEditModal(item)}
              />
            </Tooltip>
            <Tooltip content="Delete User">
              <TrashIcon
                className="h-6 w-6 pointer"
                fill="#02385e"
                onClick={() => openUserDeleteModal(item)}
              />
            </Tooltip>
          </div>
        </td>
      </tr>
    );
  });
};

export default UsersBody;
