import AButton from './AButton';
import ARadiobox from './ARadiobox';

const ARadioButtonGroup = ({
  title,
  value,
  width,
  radioValues,
  handleChecked,
  isReset = false,
}: any) => {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className={`min-w-[25%] ${width}`}>{title}</div>
      <div className="flex">
        {radioValues?.map((item: any) => (
          <ARadiobox
            id={item.name + title}
            key={item.name}
            label={item.label}
            variant={'horizantal'}
            checked={value === item.name}
            handleChecked={() => handleChecked(item.name)}
          />
        ))}
        {isReset && value !== '' && (
          <AButton
            label={'Reset'}
            variant="small"
            action={() => handleChecked('')}
          />
        )}
      </div>
    </div>
  );
};

export default ARadioButtonGroup;
