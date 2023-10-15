const ADatePicker = ({ type, id, label, icon, formik }: any) => {
  return (
    <div className="w-full mb-5">
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={type}
          {...formik}
          className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default ADatePicker;
