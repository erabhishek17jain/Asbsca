const ARadiobox = ({
  id,
  title = '',
  label = '',
  formik = {},
  checked = false,
  handleChecked,
}: any) => {
  return (
    <div className="flex gap-3 items-center">
      {title && (
        <label className="block text-main text-sm min-w-[25%]">{title}</label>
      )}
      <div className="w-full mr-3">
        <label
          htmlFor={id}
          className="flex cursor-pointer select-none text-sm items-center"
        >
          <div className="relative">
            <input
              id={id}
              {...formik}
              type="checkbox"
              checked={checked}
              className="sr-only"
              onChange={handleChecked}
            />
            <div
              className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${
                checked && '!border-4'
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
            </div>
          </div>
          {label}
        </label>
      </div>
    </div>
  );
};

export default ARadiobox;
