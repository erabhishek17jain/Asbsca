import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ASwitcher = ({  id, label,  formik }: any) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full mb-5">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative mr-4">
          <input
            id={id}
            {...formik}
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              enabled &&
              '!right-1 !translate-x-full !bg-[#02385e] dark:!bg-white'
            }`}
          >
            <span className={`hidden ${enabled && '!block'}`}>
              <CheckIcon className="h-4 w-4" color='#fff' />
            </span>
            <span className={`${enabled && 'hidden'}`}>
              <XMarkIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default ASwitcher;
