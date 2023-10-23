import { CheckIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ACheckbox = ({ id, label, formik }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="w-full sm:w-1/2 mb-5">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none text-sm items-center"
      >
        <div className="relative">
          <input
            id={id}
            {...formik}
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-grey'
            }`}
          >
            <span className={`opacity-0 ${isChecked && '!opacity-100'}`}>
              <CheckIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default ACheckbox;
