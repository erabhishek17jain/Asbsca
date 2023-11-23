import { useLocation } from 'react-router-dom';
import {
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import APagination from './APagination';
import ALoader from './ALoader';

export const TableHeader = ({ label }: any) => {
  return (
    <th
      key={label}
      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
    >
      {label !== '' && (
        <div className="block antialiased font-sans text-sm leading-none opacity-70 text-main font-normal">
          {label}
        </div>
      )}
    </th>
  );
};

export const TableColumn = ({
  classes,
  label = '',
  color = '',
  icon = '',
}: any) => {
  return (
    <td className={classes}>
      {color !== '' ? (
        <div className="w-max">
          <Chip size="sm" variant="ghost" value={label} color={color} />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {icon !== '' && <img src={icon} className="h-8 w-8 rounded-full" />}
          {label !== '' && (
            <div className="block antialiased font-sans text-sm leading-normal text-main font-normal">
              {label}
            </div>
          )}
        </div>
      )}
    </td>
  );
};

const ATable = ({
  meta,
  data,
  header,
  loading,
  tableBody,
  tableHeader,
  defaultFilters,
  setDefaultFilters,
}: any) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Card className="h-full w-full shadow-lg">
      {header && (
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none pt-1"
        >
          {header}
        </CardHeader>
      )}
      <CardBody className="overflow-scroll py-4 px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHeader?.map((head: any) => (
                <TableHeader key={head} label={head} />
              ))}
            </tr>
          </thead>
          {!loading && data?.length > 0 && <tbody>{tableBody}</tbody>}
        </table>
      </CardBody>
      {!loading && data && data?.length === 0 && (
        <div className="w-full h-20 pb-6 flex items-center justify-center">
          No Record found.
        </div>
      )}
      {loading && (
        <div className="w-full h-20 pb-6 flex items-center justify-center">
          <ALoader height={80} />
        </div>
      )}
      {!pathname.includes('dashboard') && meta?.count > 9 && (
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <APagination
            meta={meta}
            defaultFilters={defaultFilters}
            setDefaultFilters={setDefaultFilters}
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default ATable;
