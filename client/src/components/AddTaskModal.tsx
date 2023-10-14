import { useState } from 'react';
import dataJSON from '../../public/data.json';

export const AddTaskModal = ({ closeModal, onSubmit, defaultValue }: any) => {
  const [formState, setFormState] = useState<any>(
    defaultValue || {
      id: '',
    },
  );
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="flex overflow-x-hidden z-50 overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-10000 justify-center items-center"
      >
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <h3 className="text-xl py-4 px-6 font-medium text-graydark dark:text-white">
                Sign in to our platform
              </h3>
              <button
                type="button"
                onClick={() => closeModal()}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-end p-2"></div>
            <div className="flex justify-end p-2"></div>
          </div>
        </div>
      </div>
      <div
        modal-backdrop=""
        className="bg-graydark bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
      ></div>
    </>
  );
};
