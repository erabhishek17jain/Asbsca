import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import { casesData } from '../../mockData/mocks';
import AButton from '../../components-global/AButton';
import { useNavigate } from 'react-router-dom';

const AssignedCasesBody = ({ assigned }: any) => {
  const navigate = useNavigate();
  return (
    assigned &&
    assigned?.map((item: any, index: number) => {
      const isLast = index === casesData.length - 1;
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
          <TableColumn classes={classes} label={item?.recievedDate} />
          <TableColumn classes={classes} label={item?.appicantName} />
          <TableColumn classes={classes} label={item?.mobileNo} />
          <TableColumn classes={classes} label={item?.address} />
          <TableColumn classes={classes} label={item?.city} />
          <TableColumn classes={classes} label={item?.loanAmt} />
          <TableColumn classes={classes} label={item?.caseType} />
          <TableColumn
            classes={classes}
            label={item?.caseStatus}
            color={
              item?.caseStatus === 'Assigned' || item?.caseStatus === 'Query'
                ? 'amber'
                : item?.caseStatus === 'Completed' ||
                  item?.caseStatus === 'Sent to Bank'
                ? 'green'
                : item?.caseStatus === 'Reviewing'
                ? 'blue'
                : 'gray'
            }
          />
          <TableColumn
            classes={classes}
            label={item?.appointmentStatus}
            color={
              item?.appointmentStatus === 'Not Responding'
                ? 'red'
                : item?.appointmentStatus === 'Scheduled'
                ? 'amber'
                : item?.appointmentStatus === 'Visited'
                ? 'green'
                : 'gray'
            }
          />
          <TableColumn classes={classes} label={item?.remark} />
          <TableColumn classes={classes} label={item?.reviewer} />
          <td className={classes}>
            <AButton
              variant={'link'}
              label={'Start PD'}
              action={() => navigate('/generatePD')}
              icon={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
            />
          </td>
        </tr>
      );
    })
  );
};

export default AssignedCasesBody;
