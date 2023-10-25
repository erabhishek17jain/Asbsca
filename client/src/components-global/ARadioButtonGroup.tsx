import ARadiobox from './ARadiobox';

const ARadioButtonGroup = ({
  title,
  value,
  radioValues,
  handleChecked,
}: any) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="min-w-[25%]">{title}</div>
      <div className="flex">
        {radioValues?.map((item: any) => (
          <ARadiobox
            key={item.name}
            name={item.name}
            label={item.label}
            variant={'horizantal'}
            checked={value === item.name}
            handleChecked={() => handleChecked(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ARadioButtonGroup;
