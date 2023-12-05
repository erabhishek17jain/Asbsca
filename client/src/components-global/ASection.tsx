export const SectionFooter = ({ footers }: any) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center bg-grey p-4">
      {footers?.map((item: any) => (
        <p className="flex gap-3 w-full" key={Math.random()}>
          <span>{item?.label}</span>:<span>{item?.value}</span>
        </p>
      ))}
    </div>
  );
};

const ASection = ({ title, children, footers }: any) => {
  return (
    <div className="border-2 rounded-lg mb-2 border-stroke">
      {title && <p className="w-full pt-3 px-4">{title}</p>}
      {children && <div className="flex flex-col gap-3 py-3 px-4">{children}</div>}
      {footers && <SectionFooter footers={footers} />}
    </div>
  );
};

export default ASection;
