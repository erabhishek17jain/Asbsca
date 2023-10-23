import { PlusIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import AButton from "../../components-global/AButton";

const ReportsHeader = ({ role }: any) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-gray">
          {pathname.includes('dashboard') ? 'In Progress Cases' : 'Total Cases'}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          These are the list of in progress cases.
        </Typography>
      </div>
      {!pathname.includes('dashboard') && (
        <div className="flex shrink-0 gap-2 md:w-max">
          {role === 'admin' && (
            <AButton
              type={'submit'}
              variant={'primary'}
              label={'Add Case'}
              action={() => {}}
              icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ReportsHeader;