const ATextField = ({  id, label, icon, formik }: any) => {
  return (
    <div className="mb-5">
      <label className="mb-3 block text-sm  text-black" htmlFor="Username">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          rows={6}
          {...formik}
          placeholder={`Enter ${label}`}
          className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        ></textarea>
        <span className="absolute top-3 right-3">{icon}</span>
      </div>
    </div>
  );
};

export default ATextField;
