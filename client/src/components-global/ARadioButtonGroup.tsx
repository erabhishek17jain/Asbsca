import AButton from './AButton';
import ARadiobox from './ARadiobox';

const ARadioButtonGroup = ({
  title,
  value,
  radioValues,
  handleChange,
  isReset = false,
  width = 'w-1/4',
}: any) => {
  return (
    <div className="flex flex-col sm:flex-row xsm:items-center gap-3 py-4">
      <div className={`min-w-[25%] w-full sm:${width}`}>{title}</div>
      <div className="flex w-full sm:w-1/2">
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
          <AButton label={'Reset'} variant="small" action={isReset} />
        )}
      </div>
    </div>
  );
};

export default ARadioButtonGroup;
