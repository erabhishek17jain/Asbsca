const AInputField = ({ type = "", id="", label="", icon="", formik={}, AddclassName="", AddclassNameLabel="", AddclassNameInput="" }: any) => {
  return (
    <div className={`w-full mb-5 ${AddclassName}`} >
      <label className={`${AddclassNameLabel == "" ? "mb-3" : "" } block text-black dark:text-white ${AddclassNameLabel}`} htmlFor={id}>
        {label}
      </label>
      <div className={`relative ${AddclassNameInput}`}>
        <input
          id={id}
          type={type}
          {...formik}
          placeholder={`Enter ${label}`}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        {icon && <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">{icon}</span>}  
      </div>
    </div>
  );
};

export default AInputField;
