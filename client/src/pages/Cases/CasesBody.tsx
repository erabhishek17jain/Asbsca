import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import moment from 'moment';
import ADropdown from '../../components-global/ADropdown';
import { appoinmentStatusList, caseStatusList } from '../../constants';

const CasesBody = ({
  role,
  status,
  allcases,
  activeItem,
  menuOptions,
  selectCase,
}: any) => {
  return allcases?.map((item: any, index: number) => {
    const isLast = index === allcases.length - 1;
    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
    const caseStatus: any = caseStatusList.find(
      (el: any) => el.value === item?.status,
    );
    const appoinmentStatus: any = appoinmentStatusList.find(
      (el: any) => el.value === item?.appoinmentStatus,
    );
    return (
      <tr key={index}>
        <TableColumn classes={classes} label={index + 1} />
        <TableColumn
          classes={classes}
          label={item?.bankName}
          icon={item?.bankIcon}
        />
        <TableColumn classes={classes} label={item?.referenceId} />
        <TableColumn
          classes={classes}
          label={moment(item?.receivedDate).format('lll')}
        />
        <TableColumn classes={classes} label={item?.name} />
        <TableColumn classes={classes} label={item?.mobile} />
        <TableColumn classes={classes} label={item?.address} />
        <TableColumn classes={classes} label={item?.city} />
        {(status === 'cases' ||
          status === 'completed' ||
          status === 'sentToBank') && (
          <TableColumn classes={classes} label={item?.branch} />
        )}
        {status !== 'completed' && status !== 'sentToBank' && (
          <TableColumn classes={classes} label={item?.loanAmount} />
        )}
        <TableColumn classes={classes} label={item?.localOrOGL} />
        {(status === 'cases' ||
          status === 'completed' ||
          status === 'sentToBank') && (
          <TableColumn classes={classes} label={item?.type} />
        )}
        {status === 'cases' && (
          <TableColumn
            classes={classes}
            label={caseStatus?.label}
            color={
              caseStatus?.value === 'assigned' || caseStatus?.value === 'query'
                ? 'amber'
                : caseStatus?.value === 'completed' ||
                  caseStatus?.value === 'sentToBank'
                ? 'green'
                : caseStatus?.value === 'review'
                ? 'blue'
                : 'gray'
            }
          />
        )}
        {(status === 'cases' || status === 'assigned') && (
          <>
            <TableColumn
              classes={classes}
              label={appoinmentStatus?.label}
              color={
                appoinmentStatus?.value === 'notResponding'
                  ? 'red'
                  : appoinmentStatus?.value === 'scheduled'
                  ? 'amber'
                  : appoinmentStatus?.value === 'visited'
                  ? 'green'
                  : 'gray'
              }
            />
            <TableColumn classes={classes} label={item?.remark} />
          </>
        )}
        {status !== 'assigned' && (
          <TableColumn classes={classes} label={item?.assignTo?.fullName} />
        )}
        <TableColumn classes={classes} label={item?.reviewer?.fullName} />
        {(status === 'completed' || status === 'sentToBank') && (
          <>
            <TableColumn
              classes={classes}
              label={moment(item?.createdAt).format('lll')}
            />
            <TableColumn
              classes={classes}
              label={moment(item?.updatedAt).format('lll')}
            />
          </>
        )}
        <td className={classes}>
          {role === 'admin' && (
            <div className="flex gap-3">
              <ADropdown
                item={item}
                position='left'
                activeItem={activeItem}
                options={menuOptions}
                selectCase={selectCase}
                header={<EllipsisVerticalIcon className="h-5 w-5" />}
              />
            </div>
          )}
        </td>
      </tr>
    );
  });
};

export default CasesBody;
