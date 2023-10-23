import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { Tooltip } from '@material-tailwind/react';
import { TableColumn } from '../../components-global/ATable';
import { branchTableColumn, clientTableColumn, productTableColumn } from '../../mockData/mocks';

const MastersBody = ({ type, openModal }: any) => {
  return (
    <>
      {type === 'Client' &&
        clientTableColumn.map(({ clientName, logo, branch, status }, index) => {
          const isLast = index === clientTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';

          return (
            <tr key={clientName}>
              <TableColumn classes={classes} label={index + 1} />
              <TableColumn classes={classes} label={clientName} icon={logo} />
              <TableColumn classes={classes} label={branch} />
              <TableColumn
                classes={classes}
                label={status}
                color={status === 'Active' ? 'green' : 'red'}
              />
              <td className={classes}>
                <Tooltip content={`Edit ${type}`}>
                  <PencilSquareIcon
                    className="h-6 w-6"
                    fill="#02385e"
                    onClick={openModal}
                  />
                </Tooltip>
              </td>
            </tr>
          );
        })}
      {type === 'Product' &&
        productTableColumn.map(({ clientName, productName, status }, index) => {
          const isLast = index === productTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';

          return (
            <tr key={clientName}>
              <TableColumn classes={classes} label={index + 1} />
              <TableColumn classes={classes} label={productName} />
              <TableColumn classes={classes} label={clientName} />
              <TableColumn
                classes={classes}
                label={status}
                color={status === 'Active' ? 'green' : 'red'}
              />
              <td className={classes}>
                <Tooltip content={`Edit ${type}`}>
                  <PencilSquareIcon
                    className="h-6 w-6"
                    fill="#02385e"
                    onClick={openModal}
                  />
                </Tooltip>
              </td>
            </tr>
          );
        })}
      {type === 'Branch' &&
        branchTableColumn.map(({ branchName, status }, index) => {
          const isLast = index === branchTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-grey-50';

          return (
            <tr key={branchName}>
              <TableColumn classes={classes} label={index + 1} />
              <TableColumn classes={classes} label={branchName} />
              <TableColumn
                classes={classes}
                label={status}
                color={status === 'Active' ? 'green' : 'red'}
              />
              <td className={classes}>
                <Tooltip content={`Edit ${type}`}>
                  <PencilSquareIcon
                    className="h-6 w-6"
                    fill="#02385e"
                    onClick={openModal}
                  />
                </Tooltip>
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default MastersBody;
