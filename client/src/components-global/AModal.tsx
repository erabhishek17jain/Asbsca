import { XMarkIcon } from '@heroicons/react/24/solid';
import AButton from './AButton';

export const AModal = ({ closeModal, onSave, title, children }: any) => {
  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="flex overflow-x-hidden z-50 fixed h-modal top-8 bottom-8 left-0 right-0 z-10000 justify-center items-center"
      >
        <div className="relative w-full max-w-lg px-4">
          <div className="bg-white p-5 rounded-lg shadow relative">
            <div className="flex justify-between items-center border-b-2 border-grey pb-2">
              <h3 className="text-xl font-medium text-graydark">{title}</h3>
              <AButton
                label={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
                action={closeModal}
                variant="secondary"
              />
            </div>
            <div className="my-3 overflow-y-auto h-full max-h-[520px]">
              {children}
            </div>
            <div className="flex justify-end gap-4 border-t-2 border-grey pt-3">
              <AButton
                label={'Cancel'}
                variant={'secondary'}
                action={closeModal}
              />
              <AButton
                label={'Save'}
                type={'submit'}
                variant={'primary'}
                action={onSave}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        modal-backdrop=""
        className="bg-graydark bg-opacity-50 fixed inset-0 z-40"
      ></div>
    </>
  );
};
