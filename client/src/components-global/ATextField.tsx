const ATextField = ({  id, label, icon, formik }: any) => {
  return (
    <div className="mb-5">
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="Username"
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          rows={6}
          {...formik}
          placeholder={`Enter ${label}`}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        ></textarea>
        <span className="absolute top-3 right-3">{icon}</span>
      </div>
    </div>
  );
};

export default ATextField;
