import {
  ArrowTopRightOnSquareIcon,
  EllipsisVerticalIcon,
  EyeIcon,
} from '@heroicons/react/24/solid';
import { TableColumn } from '../../components-global/ATable';
import moment from 'moment';
import ADropdown from '../../components-global/ADropdown';
import {
  appoinmentStatusList,
  caseStatusList,
  caseTypeList,
  localOrOGLList,
} from '../../constants';
import AButton from '../../components-global/AButton';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@material-tailwind/react';

const CasesBody = ({
  meta,
  status,
  allcases,
  activeItem,
  menuOptions,
  selectCase,
}: any) => {
  const navigate = useNavigate();
  return allcases?.map((item: any, index: number) => {
    const isLast = index === allcases.length - 1;
    const classes = isLast ? 'p-4 border-0' : 'p-4 border-b border-stroke';
    const caseStatus: any = caseStatusList.find(
      (el: any) => el.value === item?.status,
    );
    const appoinmentStatus: any = appoinmentStatusList.find(
      (el: any) => el.value === item?.appoinmentStatus,
    );
    const caseType: any = caseTypeList.find(
      (el: any) => el.value === item?.type,
    );
    const localOrOGL: any = localOrOGLList.find(
      (el: any) => el.value === item?.localOrOGL,
    );

    return (
      <tr key={index}>
        <TableColumn
          classes={classes}
          label={meta?.page ? (meta?.page - 1) * 10 + index + 1 : index + 1}
        />
        <TableColumn
          classes={classes}
          label={item?.bankName?.name}
          icon={item?.bankName?.logo}
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
          <TableColumn classes={classes} label={item?.branch?.name} />
        )}
        {status !== 'completed' && status !== 'sentToBank' && (
          <TableColumn classes={classes} label={item?.loanAmount} />
        )}
        <TableColumn classes={classes} label={localOrOGL.label} />
        {(status === 'cases' ||
          status === 'completed' ||
          status === 'sentToBank') && (
          <TableColumn classes={classes} label={caseType.label} />
        )}
        {(status === 'cases' ||
          status === 'assigned' ||
          status === 'dashboard') && (
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
        {(status === 'cases' ||
          status === 'assigned' ||
          status === 'dashboard') && (
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
        {status !== 'assigned' && status !== 'dashboard' && (
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
          <div className="flex gap-3">
            {status === 'dashboard' && (
              <AButton
                variant="small"
                label={'Start PD'}
                action={() =>
                  navigate('/generatePD', {
                    state: { activeItem: item },
                  })
                }
                icon={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
              />
            )}
            {(status === 'review' ||
              status === 'completed' ||
              status === 'sentToBank') && (
              <Tooltip content="Preview Report">
                <AButton
                  variant="link"
                  action={() =>
                    navigate('/finalReport', {
                      state: { activeItem: item },
                    })
                  }
                  icon={<EyeIcon className="h-5 w-5" />}
                />
              </Tooltip>
            )}
            {(status === 'cases' || status === 'assigned') && (
              <ADropdown
                item={item}
                position="left"
                options={menuOptions}
                selectCase={selectCase}
                activeItem={activeItem}
                header={<EllipsisVerticalIcon className="h-5 w-5" />}
              />
            )}
          </div>
        </td>
      </tr>
    );
  });
};

export default CasesBody;
