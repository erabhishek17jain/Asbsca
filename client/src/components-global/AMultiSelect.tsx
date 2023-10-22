import { XMarkIcon } from "@heroicons/react/24/solid";

const AMultiSelect = ({ id, label, icon, formik, selected, options }: any) => {
  return (
    <div className="w-full mb-5">
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <div className="relative z-20 w-full rounded-lg border-[1.5px] border-stroke py-1 px-1.5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
        <div className="flex flex-wrap items-center">
          {selected.map((item: any) => (
            <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
              {item.label}
              <span className="cursor-pointer pl-2 hover:text-danger">
                <XMarkIcon className="h-3 w-3" />
              </span>
            </span>
          ))}
        </div>
        <select
          id={id}
          {...formik}
          className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
        >
          {options.map((item: any) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <span className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default AMultiSelect;
