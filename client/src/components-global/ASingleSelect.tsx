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
      <label className="block text-sm text-black">
        Select {label}
      </label>
      <div className="relative z-20 bg-white">
        <select
          id={id}
          {...formik}
          className="relative text-sm z-20 w-full appearance-none rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary"
        >
          <option value="">Select {label}</option>;
          {options.map((item: any) => (
            <option value={item?.value}>{item?.label}</option>
          ))}
        </select>
        <span
          className={`absolute top-1/2 z-10 -translate-y-1/2 right-${
            icon ? '10' : '3'
          }`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </span>
        {icon && (
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default ASingleSelect;
