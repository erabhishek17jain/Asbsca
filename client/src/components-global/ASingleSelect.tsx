import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ASingleSelect = ({
  id,
  label,
  icon,
  variant = 'vertical',
  formik,
  options,
}: any) => {
  return (
    <div
      className={`flex gap-3 w-full mb-5 ${
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
          <option value="">Select {label}</option>
          {options.map((item: any) => (
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
          <ChevronDownIcon className="h-5 w-5" />
        </span>
        {icon && (
          <span className="absolute top-1/2 right-3 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default ASingleSelect;
