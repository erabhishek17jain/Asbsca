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
import { tasksTableColumn } from '../mockData/mocks';
import { AddTaskModal } from './AddTaskModal';
import { useState } from 'react';

const TasksTable = () => {
  const location = useLocation();
  const { pathname } = location;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="h-full w-full shadow-lg">
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
                <button
                  onClick={() => setShowModal(true)}
                  className="flex justify-center rounded-lg bg-[#02385e] py-3 px-6 font-medium text-gray hover:shadow-1 gap-2"
                >
                  <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Add Task
                </button>
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
                    createdAt,
                  },
                  index,
                ) => {
                  const isLast = index === tasksTableColumn.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={index}>
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
                            value={status}
                            color={
                              status === 'completed'
                                ? 'green'
                                : status === 'inProgress'
                                ? 'amber'
                                : 'red'
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {assignee}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {reporter}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {createdAt}
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
        {!pathname.includes('dashboard') && (
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
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
        )}
      </Card>
      {showModal && <AddTaskModal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default TasksTable;
