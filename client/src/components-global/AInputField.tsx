const AInputField = ({
  id,
  icon = '',
  value,
  label = '',
  error = '',
  handleChange,
  type = 'text',
  disabled = false,
  variant = 'vertical',
}: any) => {
  return (
    <div
      className={`flex gap-2 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      {label && (
        <label
          className={`block text-main text-sm ${
            variant === 'horizantal' ? `min-w-[25%] ${error && 'mb-6'}` : ''
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative flex-1">
        <input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          placeholder={`Enter ${label}`}
          className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        />
        {icon && (
          <span className="absolute top-6 right-3 -translate-y-1/2">
            {icon}
          </span>
        )}
        {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
      </div>
    </div>
  );
};

export default AInputField;
