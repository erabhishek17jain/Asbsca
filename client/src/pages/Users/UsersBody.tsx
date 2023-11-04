import { Tooltip } from '@material-tailwind/react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { usersTableColumn } from '../../mockData/mocks';
import { TableColumn } from '../../components-global/ATable';
import { useSelector } from 'react-redux';

const UsersBody = ({ openUserDeleteModal, openUserAddEditModal }: any) => {
  const { allUsers } = useSelector((state: any) => state.users);

  return allUsers.map(
    (
      {
        _id,
        profile,
        fullName,
        empId,
        email,
        mobile,
        address,
        role,
        status,
      }: any,
      index: number,
    ) => {
      const isLast = index === usersTableColumn.length - 1;
      const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

      return (
        <tr key={_id}>
          <TableColumn classes={classes} label={index + 1} />
          <TableColumn classes={classes} label={fullName} icon={profile} />
          <TableColumn classes={classes} label={empId} />
          <TableColumn classes={classes} label={email} />
          <TableColumn classes={classes} label={mobile} />
          <TableColumn classes={classes} label={address} />
          <TableColumn classes={classes} label={role} />
          <TableColumn
            classes={classes}
            label={status}
            color={status === 'Active' ? 'green' : 'red'}
          />
          <td className={`${classes}`}>
            <div className='flex gap-3'>
              <Tooltip content="Edit User">
                <PencilSquareIcon
                  className="h-6 w-6 pointer"
                  fill="#02385e"
                  onClick={() => openUserAddEditModal(_id)}
                />
              </Tooltip>
              <Tooltip content="Delete User">
                <TrashIcon
                  className="h-6 w-6 pointer"
                  fill="#02385e"
                  onClick={() => openUserDeleteModal(_id)}
                />
              </Tooltip>
            </div>
          </td>
        </tr>
      );
    },
  );
};

export default UsersBody;
