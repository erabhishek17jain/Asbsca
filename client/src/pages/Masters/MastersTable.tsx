import { PencilSquareIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Typography, Tooltip } from '@material-tailwind/react';
import {
  branchTableColumn,
  clientTableColumn,
  productTableColumn,
} from '../../mockData/mocks';
import {
  BRAND_TABLE_HEAD,
  CLIENT_TABLE_HEAD,
  PRODUCT_TABLE_HEAD,
} from '../../constants';
import AButton from '../../components-global/AButton';
import ATable, { TableColumn } from '../../components-global/ATable';
import { useState, useEffect } from 'react';
import { AModal } from '../../components-global/AModal';

const Header = ({ type, openModal }: any) => {
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-gray">
          {type}s
        </Typography>
      </div>
      <div className="flex shrink-0 gap-2 md:w-max">
        <AButton
          type={'submit'}
          variant={'primary'}
          label={`New ${type}`}
          action={openModal}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
      </div>
    </div>
  );
};

const Body = ({ type }: any) => {
  return (
    <>
      {type === 'Client' &&
        clientTableColumn.map(({ clientName, logo, branch, status }, index) => {
          const isLast = index === clientTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

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
                <Tooltip content="Edit User">
                  <PencilSquareIcon className="h-6 w-6" fill="#02385e" />
                </Tooltip>
              </td>
            </tr>
          );
        })}
      {type === 'Product' &&
        productTableColumn.map(({ clientName, productName, status }, index) => {
          const isLast = index === productTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

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
                <Tooltip content="Edit User">
                  <PencilSquareIcon className="h-6 w-6" fill="#02385e" />
                </Tooltip>
              </td>
            </tr>
          );
        })}
      {type === 'Branch' &&
        branchTableColumn.map(({ branchName, status }, index) => {
          const isLast = index === branchTableColumn.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

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
                <Tooltip content="Edit User">
                  <PencilSquareIcon className="h-6 w-6" fill="#02385e" />
                </Tooltip>
              </td>
            </tr>
          );
        })}
    </>
  );
};

export function MastersTable({ type }: any) {
  const [headers, setHeaders] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (type === 'Client') {
      setHeaders(CLIENT_TABLE_HEAD);
    } else if (type === 'Branch') {
      setHeaders(BRAND_TABLE_HEAD);
    } else if (type === 'Product') {
      setHeaders(PRODUCT_TABLE_HEAD);
    }
  }, []);

  return (
    <>
      <ATable
        tableHeader={headers}
        tableBody={<Body type={type} />}
        header={<Header type={type} openModal={() => setShowModal(true)} />}
      />
      {showModal && (
        <AModal title={'Clients'} closeModal={() => setShowModal(false)}></AModal>
      )}
    </>
  );
}
