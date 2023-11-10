import { ArrowTopRightOnSquareIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import AButton from './AButton';

export const AModal = ({
  closeModal,
  onSave,
  title,
  children,
  saveText = 'Save',
}: any) => {
  return (
    <>
      <div
        id="modal"
        aria-hidden="true"
        className="flex overflow-x-hidden z-40 fixed h-modal top-8 bottom-8 left-0 right-0 justify-center items-center"
      >
        <div className="w-full max-w-lg">
          <div className="bg-white px-5 rounded-lg shadow relative h-full">
            <div className="flex justify-between items-center border-b-2 border-grey py-3">
              <h3 className="text-xl font-medium text-graydark">{title}</h3>
              <AButton
                label={''}
                action={closeModal}
                variant="link"
                icon={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
            </div>
            <div className="my-3 overflow-y-auto h-full max-h-[480px]">
              {children}
            </div>
            <div className="flex justify-end gap-4 border-t-2 border-grey py-3">
              <AButton
                label={'Cancel'}
                variant={'secondary'}
                action={closeModal}
                icon={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
              />
              <AButton
                label={saveText}
                type={'submit'}
                variant={'primary'}
                action={onSave}
                icon={saveText === 'Add' ? <PlusIcon className="h-5 w-5 stroke-white stroke-1" /> : <ArrowTopRightOnSquareIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        modal-backdrop=""
        className="bg-graydark bg-opacity-50 fixed inset-0 z-30"
      ></div>
    </>
  );
};
