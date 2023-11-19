const AButton = ({ type, action, label, variant, icon = '' }: any) => {
  return (
    <button
      type={type}
      onClick={action}
      className={`flex justify-center items-center gap-1 rounded-lg font-medium capitalize
          ${
            variant === 'small' &&
            'py-1 px-2 border border-main text-main hover:bg-grey'
          }
          ${variant === 'primary' && 'py-2 px-4 bg-main text-grey'}
          ${variant === 'link' && 'text-main py-2 px-4 text-grey'}
          ${variant === 'full' && 'py-2 px-4 w-full bg-main text-grey'}
          ${
            variant === 'secondary' &&
            'py-2 px-4 border border-main text-main hover:bg-grey'
          }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AButton;
