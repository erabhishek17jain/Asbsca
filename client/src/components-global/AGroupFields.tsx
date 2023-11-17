const AGroupFields = ({ col = 4, title, children }: any) => {
  return (
    <div className="flex items-center">
      {title && <p className="w-1/4 mb-3">{title}</p>}
      {col === 2 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 items-center">
          {children}
        </div>
      )}
      {col === 3 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 items-center">
          {children}
        </div>
      )}
      {col === 4 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default AGroupFields;
