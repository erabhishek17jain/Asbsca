import AButton from './AButton';
import ARadiobox from './ARadiobox';

const ARadioButtonGroup = ({
  title,
  value,
  width,
  radioValues,
  handleChange,
  isReset = false,
}: any) => {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className={`min-w-[25%] ${width}`}>{title}</div>
      <div className="flex">
        {radioValues?.map((item: any) => (
          <ARadiobox
            id={item.value + title}
            key={item.value + title}
            label={item.label}
            variant={'horizantal'}
            checked={value === item.value}
            handleChange={() => handleChange(title, item.value)}
          />
        ))}
        {isReset && value !== '' && (
          <AButton
            label={'Reset'}
            variant="small"
            action={isReset}
          />
        )}
      </div>
    </div>
  );
};

export default ARadioButtonGroup;
