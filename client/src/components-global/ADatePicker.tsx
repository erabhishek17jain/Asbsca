const ADatePicker = ({
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
          variant === 'horizantal' ? 'min-w-[25%]' : ''
        }`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          {...formik}
          className="custom-input-date text-sm custom-input-date-1 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary"
        />
        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default ADatePicker;
