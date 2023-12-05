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
      className={`flex justify-center items-center border-main text-main cursor-pointer gap-1 rounded-lg font-medium capitalize disabled:cursor-not-allowed disabled:text-lightgrey disabled:bg-whiter
          ${variant === 'small' && `py-1 px-2 border`}
          ${variant === 'link' && 'text-main py-2 px-4 text-grey'}
          ${
            variant === 'primary' &&
            `py-2 pl-3 pr-4 border bg-main border-main text-white cursor-pointer`
          }
          ${
            variant === 'secondary' &&
            `py-2 pl-3 pr-4 border border-main text-main cursor-pointer`
          }
          ${
            variant === 'full' &&
            'py-2 pl-3 pr-4 border border-main w-full bg-main text-grey'
          }
          `}
    >
      {icon}
      {label}
    </button>
  );
};

export default AButton;
