import { Tooltip } from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { usersTableColumn } from '../../mockData/mocks';
import { TableColumn } from '../../components-global/ATable';

const UsersBody = () => {
  return usersTableColumn.map(
    ({ profile, name, empId, email, mobileNo, role, status }, index) => {
      const isLast = index === usersTableColumn.length - 1;
      const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

      return (
        <tr key={name}>
          <TableColumn classes={classes} label={index + 1} />
          <TableColumn classes={classes} label={name} icon={profile} />
          <TableColumn classes={classes} label={empId} />
          <TableColumn classes={classes} label={email} />
          <TableColumn classes={classes} label={mobileNo} />
          <TableColumn classes={classes} label={role} />
          <TableColumn
            classes={classes}
            label={status}
            color={status === 'Active' ? 'green' : 'red'}
          />
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

export default UsersBody;
