import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import ADatePicker from '../../components-global/ADatePicker';
import AInputField from '../../components-global/AInputField';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useNavigate } from 'react-router-dom';

const AddCase = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <ABreadcrumb pageName="Add Case" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <p className="flex justify-between items-center font-sans text-base leading-relaxed text-grey-700 mt-1 font-normal mb-5">
          <span className="">Fill below details to add new case.</span>
          <AButton
            label={'Back'}
            variant={'link'}
            action={() => navigate(-1)}
            icon={<ArrowLeftIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
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
            label={'Type'}
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
