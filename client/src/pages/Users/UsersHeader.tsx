import { PlusIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import AButton from "../../components-global/AButton";

const UsersHeader = ({ openUserModal }:any) => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between items-end gap-2">
        <div>
          <Typography variant="h5" color="blue-gray">
            Users
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            These are the list of all users worked on reports.
          </Typography>
        </div>
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-end items-center gap-3">
            {/* <AButton
              variant={'secondary'}
              label={'Add Role'}
              action={openRoleModal}
              icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
            /> */}
            <AButton
              variant={'primary'}
              label={'Add User'}
              action={openUserModal}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersHeader;
