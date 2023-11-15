import ASingleSelect from "../../../components-global/ASingleSelect";

const BusinessProcessOf = () => {
  return (
    <div className="flex flex-col w-[70%] py-4">
      <ASingleSelect
        name={'Business Process of'}
        label={'bussinessProcess'}
        variant={'horizantal'}
        options={[{ label: 'Trading (B2B)', value: 'trading' }]}
      />
    </div>
  );
};

export default BusinessProcessOf;
