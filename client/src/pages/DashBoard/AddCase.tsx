import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ADatePicker from '../../components-global/ADatePicker';
import AInputField from '../../components-global/AInputField';
import ASingleSelect from '../../components-global/ASingleSelect';

const AddCase = () => {
  return (
    <>
      <ABreadcrumb pageName="Add Case" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5">
        <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mt-1 font-normal mb-5">
          Fill below details to add new case.
        </p>
        <div className="flex flex-col w-[70%]">
          <AInputField
            type="text"
            label="Applicant's Name"
            variant="horizantal"
          />
          <AInputField type="text" label="Address" variant="horizantal" />
          <AInputField type="text" label="Mobile" variant="horizantal" />
          <AInputField
            type="text"
            label="Loan Amt (Lacs)"
            variant="horizantal"
          />
          <AInputField type="text" label="Reference ID" variant="horizantal" />
          <ASingleSelect
            name={'select'}
            label={'Local/OGL'}
            variant={'horizantal'}
            options={[
              { label: 'Local', value: 'local' },
              { label: 'OGL', value: 'ogl' },
            ]}
          />
          <AInputField type="text" label="Address" variant="horizantal" />
          <AInputField type="text" label="City" variant="horizantal" />
          <ASingleSelect
            name={'branch'}
            label={'Branch'}
            variant={'horizantal'}
            options={[]}
          />
          <ASingleSelect
            name={'select'}
            label={'Case Type'}
            variant={'horizantal'}
            options={[
              { label: 'PD', value: 'pd' },
              { label: 'LIP', value: 'lip' },
            ]}
          />
          <ASingleSelect
            name={'local'}
            label={'Bank Name'}
            variant={'horizantal'}
            options={[{ label: 'Axis Bank', value: 'axis' }]}
          />
          <ADatePicker
            type={'date'}
            name={'recievedDate'}
            variant={'horizantal'}
            label={'Received Date'}
          />
          <div className="flex gap-2 justify-end">
            <AButton variant="secondary" label="Cancel" />
            <AButton variant="primary" label="Save" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCase;
