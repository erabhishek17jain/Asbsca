const AInputField = ({
  type = '',
  id = '',
  label = '',
  icon = '',
  variant = 'vertical',
  formik = {},
}: any) => {
  return (
    <div
      className={`flex gap-3 w-full mb-5 ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-black text-sm ${
          variant === 'horizantal' ? 'min-w-[25%]' : ''
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative flex-1">
        <input
          id={id}
          type={type}
          {...formik}
          placeholder={`Enter ${label}`}
          className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        />
        {icon && (
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default AInputField;
