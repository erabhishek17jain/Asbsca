import { useLocation } from 'react-router-dom';
import {
  Typography,
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import APagination from './APagination';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';

export const TableHeader = ({ label }: any) => {
  return (
    <th
      key={label}
      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
    >
      <Typography
        variant="small"
        color="blue-gray"
        className="font-normal leading-none opacity-70"
      >
        {label}
      </Typography>
    </th>
  );
};

export const TableColumn = ({ classes, label, color = '', icon = '' }: any) => {
  return (
    <td className={classes}>
      {color !== '' ? (
        <div className="w-max">
          <Chip size="sm" variant="ghost" value={label} color={color} />
        </div>
      ) : (
        <div className="flex items-center gap-1">
          {icon !== '' && (
            <BuildingLibraryIcon className="w-10 h-10 mr-1" />
          )}
          {/* {icon !== '' && (
            <img src={icon} alt="" className="w-10 h-10 border rounded-full" />
          )} */}
          <Typography variant="small" color="blue-gray" className="font-normal">
            {label}
          </Typography>
        </div>
      )}
    </td>
  );
};

const ATable = ({ header, tableHeader, tableBody }: any) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Card className="h-full w-full shadow-lg">
      <CardHeader floated={false} shadow={false} className="rounded-none pt-1">
        {header}
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHeader.map((head: any) => (
                <TableHeader key={head} label={head} />
              ))}
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </CardBody>
      {!pathname.includes('dashboard') && (
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <APagination />
        </CardFooter>
      )}
    </Card>
  );
};

export default ATable;
