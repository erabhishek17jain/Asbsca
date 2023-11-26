import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';

const UsersHeader = ({ openUserModal }: any) => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex w-full justify-between items-end gap-2">
        <div>
          <h5 className="block antialiased font-semibold text-2xl leading-normal text-main font-normal">
            Users
          </h5>
          <div className="block antialiased font-sans text-lg leading-normal text-main font-normal mt-1">
            These are the list of all users worked on reports.
          </div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-end items-center gap-3">
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
