const AButton = ({ type, action, label, variant, icon = '' }: any) => {
  return (
    <button
      type={type}
      onClick={action}
      className={`flex justify-center items-center gap-1 mb-5 rounded-lg py-2 font-medium hover:shadow-1  
          ${variant === 'primary' && 'pl-4 pr-5 bg-main text-gray'}
          ${variant === 'full' && 'w-full pl-4 pr-5 bg-main text-gray'}
          ${
            variant === 'secondary' && 'pl-4 pr-5 border border-main text-main'
          }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AButton;
