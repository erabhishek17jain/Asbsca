const AButton = ({
  type,
  action,
  label,
  variant,
  icon = '',
  disabled = false,
}: any) => {
  return (
    <button
      type={type}
      onClick={action}
      disabled={disabled}
      className={`flex justify-center items-center gap-1 rounded-lg font-medium capitalize
          ${
            variant === 'small' &&
            `py-1 px-2 border ${
              disabled
                ? 'bg-grey border-lightgrey text-lightgrey cursor-not-allowed'
                : 'border-main text-main cursor-pointer'
            }`
          }
          ${
            variant === 'primary' &&
            `py-2 pl-3 pr-4 border ${
              disabled
                ? 'bg-grey border-lightgrey text-lightgrey cursor-not-allowed'
                : 'bg-main border-main text-white cursor-pointer'
            }`
          }
          ${variant === 'link' && 'text-main py-2 px-4 text-grey'}
          ${
            variant === 'full' &&
            'py-2 pl-3 pr-4 border border-main w-full bg-main text-grey'
          }
          ${
            variant === 'secondary' &&
            `py-2 pl-3 pr-4 border ${
              disabled
                ? 'bg-grey border-lightgrey text-lightgrey cursor-not-allowed'
                : 'border-main text-main cursor-pointer'
            }`
          }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AButton;
