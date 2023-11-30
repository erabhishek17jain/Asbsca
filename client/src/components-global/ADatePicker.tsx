const ADatePicker = ({
  id,
  label,
  value,
  error = '',
  handleChange,
  variant = 'vertical',
}: any) => {
  return (
    <div
      className={`flex gap-2 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-main text-sm ${
          variant === 'horizantal' ? 'min-w-[30%]' : ''
        }`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          value={value}
          onChange={handleChange}
          type={'date'}
          className="w-full text-sm rounded-lg border-[1.5px] border-stroke bg-transparent py-2.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        />
        {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
      </div>
    </div>
  );
};

export default ADatePicker;
