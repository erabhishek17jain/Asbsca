import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

const AMultiSelect = ({
  id,
  label,
  icon,
  error = '',
  variant = 'vertical',
  formik,
  selected,
  options,
}: any) => {
  return (
    <div
      className={`flex gap-2 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-main text-sm ${
          variant === 'horizantal' ? 'min-w-[25%]' : ''
        }`}
      >
        {label}
      </label>
      <div className="flex relative w-full z-20 w-full rounded-lg border-[1.5px] border-stroke h-11 py-1.5 px-2.5 font-medium outline-none transition focus:border-primary active:border-primary">
        <div className="flex flex-wrap items-center">
          {selected.length > 0 ? (
            selected?.map((item: any) => (
              <span className="flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1 px-2 text-sm font-medium">
                {item.label}
                <span className="cursor-pointer pl-2 hover:text-danger">
                  <XMarkIcon className="h-3 w-3" />
                </span>
              </span>
            ))
          ) : (
            <span className="text-sm">Select {label}</span>
          )}
        </div>
        <select
          multiple
          id={id}
          {...formik}
          className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
        >
          {options?.map((item: any) => (
            <option key={item?.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <span
          className={`absolute top-1/2 -translate-y-1/2 ${
            icon ? 'right-10' : 'right-3'
          }`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </span>
        {icon && (
          <span className="absolute top-1/2 right-3 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
      {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
    </div>
  );
};

export default AMultiSelect;
