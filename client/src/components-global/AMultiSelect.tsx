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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
