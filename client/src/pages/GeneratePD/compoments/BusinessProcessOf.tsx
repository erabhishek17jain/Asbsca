import ASingleSelect from "../../../components-global/ASingleSelect";

const BusinessProcessOf = ({ formik }: any) => {
  return (
    <div className="flex flex-col w-[60%] py-4">
      <ASingleSelect
        name={'bussinessProcess'}
        label={'Business Process of'}
        variant={'horizantal'}
        options={[{ label: 'Trading (B2B)', value: 'trading' }]}
      />
    </div>
  );
};

export default BusinessProcessOf;
