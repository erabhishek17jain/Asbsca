import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ASingleSelect = ({
  id,
  icon,
  value,
  label = '',
  error = '',
  options = [],
  handleChange,
  disabled = false,
  variant = 'vertical',
}: any) => {
  return (
    <div
      className={`flex gap-2 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-main text-sm font-medium ${
          variant === 'horizantal' ? `min-w-[30%] ${error && 'mb-6'}` : ''
        }`}
      >
        {label}
      </label>
      <div className="relative w-full z-20 bg-white">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className="def relative  font-medium text-sm z-20 w-full appearance-none rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 outline-none transition focus:border-primary active:border-primary  disabled:cursor-not-allowed disabled:bg-whiter"
        >
          <option value="" key={id}>
            Select {label}
          </option>
          {options.map((item: any) => (
            <option key={id + item?.value} value={item?.value}>
              {item?.label}
            </option>
          ))}
        </select>
        <span
          className={`absolute top-6 -translate-y-1/2 ${
            icon ? 'right-10' : 'right-3'
          }`}
        >
          <ChevronDownIcon className="h-4 w-4 stroke-main stroke-1" />
        </span>
        {icon && (
          <span className="absolute top-6 right-3 -translate-y-1/2">
            {icon}
          </span>
        )}
        {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
      </div>
    </div>
  );
};

export default ASingleSelect;
