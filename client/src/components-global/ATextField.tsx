const ATextField = ({ id, label, variant = 'vertical', icon, formik }: any) => {
  return (
    <div
      className={`flex gap-3 w-full mb-5 ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-main text-sm ${
          variant === 'horizantal' ? 'min-w-[200px]' : ''
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative w-full">
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
