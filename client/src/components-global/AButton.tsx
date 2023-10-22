const AButton = ({ type, action, label, variant }: any) => {
  return (
    <button
      type={type}
      onClick={action}
      className={`flex justify-center items-center mb-5 rounded-lg py-2 font-medium hover:shadow-1 dark:border-strokedark dark:text-white 
          ${variant === 'primary' && 'px-6 bg-[#02385e] text-gray'}
          ${variant === 'full' && 'w-full px-6 bg-[#02385e] text-gray'}
          ${
            variant === 'secondary' &&
            'px-6 border border-[#02385e] text-[#02385e]'
          }`}
    >
      {label}
    </button>
  );
};

export default AButton;
