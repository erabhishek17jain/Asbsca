import { PlusIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import AButton from '../../components-global/AButton';

const MastersHeader = ({ type, openModal }: any) => {
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-grey">
          {type}s
        </Typography>
      </div>
      <div className="flex shrink-0 gap-2 md:w-max">
        <AButton
          type={'submit'}
          variant={'primary'}
          label={`New ${type}`}
          action={openModal}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
      </div>
    </div>
  );
};

export default MastersHeader;
