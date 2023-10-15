const AFileUpload = ({ type,  id, label, icon, formik }: any) => {
  return (
    <div className="w-full mb-5">
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={type}
          {...formik}
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-3 file:hover:bg-[#02385e] file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
        />
        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default AFileUpload;
