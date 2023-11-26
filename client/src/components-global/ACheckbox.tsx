import { CheckIcon } from '@heroicons/react/24/solid';

const ACheckbox = ({
  id,
  title = '',
  label = '',
  formik = {},
  checked = false,
  handleChecked,
}: any) => {
  return (
    <div className="flex gap-3 items-center">
      {title && (
        <label className="block text-main text-sm min-w-[25%]">{title}</label>
      )}
      <div className="w-full mr-3">
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
              onChange={handleChecked}
            />
            <div
              className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                checked && 'border-primary bg-grey'
              }`}
            >
              <span className={`opacity-0 ${checked && '!opacity-100'}`}>
                <CheckIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
          {label}
        </label>
      </div>
    </div>
  );
};

export default ACheckbox;
