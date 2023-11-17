import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ASingleSelect = ({
  id,
  label,
  icon,
  error = '',
  variant = 'vertical',
  formik,
  options,
}: any) => {
  return (
    <div
      className={`flex gap-2 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-black text-sm ${
          variant === 'horizantal' ? 'min-w-[25%]' : ''
        }`}
      >
        {label}
      </label>
      <div className="relative w-full z-20 bg-white">
        <select
          id={id}
          {...formik}
          className="relative text-sm z-20 w-full appearance-none rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 outline-none transition focus:border-primary active:border-primary"
        >
          <option value="" key={id}>Select {label}</option>
          {options?.map((item: any) => (
            <option key={item?.value} value={item?.value}>
              {item?.label}
            </option>
          ))}
        </select>
        <span
          className={`absolute top-1/2 -translate-y-1/2 ${
            icon ? 'right-10' : 'right-3'
          }`}
        >
          <ChevronDownIcon className="h-4 w-4 stroke-main stroke-1" />
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

export default ASingleSelect;
