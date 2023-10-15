const AButton = ({ type, action, label, variant }: any) => {
  return (
    <button
      type={type}
      onClick={action}
      className={`flex justify-center mb-5 rounded-lg py-2 px-6 font-medium hover:shadow-1 dark:border-strokedark dark:text-white ${
        variant === 'primary'
          ? 'bg-[#02385e] text-gray'
          : variant === 'full'
          ? 'w-full bg-[#02385e] text-gray'
          : 'border border-[#02385e] text-[#02385e]'
      }`}
    >
      {label}
    </button>
  );
};

export default AButton;
