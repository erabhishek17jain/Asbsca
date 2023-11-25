import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../../components-global/AButton';

const MastersHeader = ({ type, openModal }: any) => {
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <h5 className="block antialiased font-semibold text-2xl leading-normal text-main font-normal capitalize">
          {`${type}s`}
        </h5>
      </div>
      <div className="flex shrink-0 gap-2 md:w-max">
        <AButton
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
