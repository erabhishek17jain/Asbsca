const AFileUpload = ({
  type,
  id,
  label,
  variant = 'vertical',
  icon,
  formik,
}: any) => {
  return (
    <div
      className={`flex gap-3 w-full mb-5 ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-black text-sm ${
          variant === 'horizantal' ? 'min-w-[200px]' : ''
        }`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          {...formik}
          className="w-full text-sm cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2.5 file:px-3 file:hover:bg-main file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        />
        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default AFileUpload;
