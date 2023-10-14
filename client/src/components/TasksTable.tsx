import { useLocation } from 'react-router-dom';
import { TASK_TABLE_HEAD } from '../constants';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { tasksTableColumn } from '../constants/mocks';
import { AddTaskModal } from './AddTaskModal';
import { useState } from 'react';

const TasksTable = () => {
  const location = useLocation();
  const { pathname } = location;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none pt-1"
        >
          <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                {pathname.includes('dashboard')
                  ? 'In Progress Tasks'
                  : 'My Tasks'}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are the list of in progress tasks.
              </Typography>
            </div>
            {!pathname.includes('dashboard') && (
              <div className="flex shrink-0 gap-2 md:w-max">
                <Button
                  size="sm"
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-black py-4 px-6 text-center font-medium text-white hover:bg-opacity-90 flex items-center gap-3"
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Task
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TASK_TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasksTableColumn.map(
                (
                  {
                    bankIcon,
                    bankName,
                    taskName,
                    businessType,
                    assignee,
                    status,
                    reporter,
                    action,
                  },
                  index,
                ) => {
                  const isLast = index === tasksTableColumn.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={bankName}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={bankIcon}
                            alt={bankName}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {bankName}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {taskName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {businessType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={assignee}
                            color={
                              assignee === 'paid'
                                ? 'green'
                                : assignee === 'pending'
                                ? 'amber'
                                : 'red'
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                            <Avatar
                              src={
                                status === 'visa'
                                  ? 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png'
                                  : 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png'
                              }
                              size="sm"
                              alt={status}
                              variant="square"
                              className="h-full w-full object-contain p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {status.split('-').join(' ')} {reporter}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {action}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      {showModal && <AddTaskModal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default TasksTable;
