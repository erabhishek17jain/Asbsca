import { XMarkIcon } from '@heroicons/react/24/solid';
import AButton from './AButton';

export const AModal = ({ closeModal, title, children }: any) => {
  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="flex overflow-x-hidden z-50 overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-10000 justify-center items-center"
      >
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          <div className="bg-white py-3 px-5 rounded-lg shadow relative">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium text-graydark">{title}</h3>
              <AButton
                label={<XMarkIcon className="h-5 w-5" />}
                action={() => closeModal()}
              />
            </div>
            <div>{children}</div>
            <div className="flex justify-end gap-4">
              <AButton
                label={'Cancel'}
                variant={'secondary'}
                action={() => closeModal()}
              />
              <AButton
                label={'Save'}
                type={'submit'}
                variant={'primary'}
                action={() => {}}
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
