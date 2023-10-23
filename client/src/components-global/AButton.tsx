const AButton = ({ type, action, label, variant, icon = '' }: any) => {
  return (
    <button
      type={type}
      onClick={action}
      className={`flex justify-center items-center gap-1 rounded-lg p-2 font-medium  
          ${variant === 'primary' && 'px-4 bg-main text-grey'}
          ${variant === 'link' && 'text-main px-4 text-grey'}
          ${variant === 'full' && 'px-4 bg-main text-grey'}
          ${
            variant === 'secondary' &&
            'px-4 border border-main text-main hover:bg-grey'
          }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AButton;
