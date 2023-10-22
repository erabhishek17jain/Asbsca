import { PlusIcon } from '@heroicons/react/24/solid';
import AButton from '../components-global/AButton';
import ACheckbox from '../components-global/ACheckbox';
import ADatePicker from '../components-global/ADatePicker';
import AFileDragAndUpload from '../components-global/AFileDragAndUpload';
import AFileUpload from '../components-global/AFileUpload';
import AInputField from '../components-global/AInputField';
import AMultiSelect from '../components-global/AMultiSelect';
import ASingleSelect from '../components-global/ASingleSelect';
import ASwitcher from '../components-global/ASwitcher';
import ATextField from '../components-global/ATextField';
import ABreadcrumb from '../components-global/ABreadcrumb';

const Fields = () => {
  return (
    <>
      <ABreadcrumb pageName="Components" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5">
        <div className="flex items-center">
          <ACheckbox name={'checkbox'} label={'CheckBox Text'} />
          <ASwitcher name={'switch'} label={'Switch Text'} />
        </div>
        <AInputField
          type={'text'}
          name={'inputName'}
          variant={'horizantal'}
          label={'Input Text'}
        />
        <ASingleSelect
          name={'select'}
          label={'Country'}
          variant={'horizantal'}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
          ]}
        />
        <AMultiSelect
          name={'select'}
          label={'Country'}
          variant={'horizantal'}
          selected={[{ label: 'India', value: 'india' }]}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'UK', value: 'uk' },
          ]}
        />
        <AFileUpload
          type={'file'}
          name={'fileUpload'}
          variant={'horizantal'}
          label={'File Text'}
        />
        <ADatePicker
          type={'date'}
          name={'datePicker'}
          variant={'horizantal'}
          label={'Date Text'}
        />
        <ATextField
          name={'textarea'}
          variant={'horizantal'}
          label={'Text area Text'}
        />

        <AInputField
          type={'text'}
          name={'inputName'}
          variant={'vertical'}
          label={'Input Text'}
        />
        <ASingleSelect
          name={'select'}
          label={'Country'}
          variant={'vertical'}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
          ]}
        />
        <AMultiSelect
          name={'select'}
          label={'Country'}
          variant={'vertical'}
          selected={[{ label: 'India', value: 'india' }]}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'UK', value: 'uk' },
          ]}
        />
        <AFileUpload
          type={'file'}
          name={'fileUpload'}
          variant={'vertical'}
          label={'File Text'}
        />
        <ADatePicker
          type={'date'}
          name={'datePicker'}
          variant={'vertical'}
          label={'Date Text'}
        />

        <ATextField
          name={'textarea'}
          variant={'vertical'}
          label={'Text area Text'}
        />

        <AFileDragAndUpload
          type={'file'}
          name={'bulk upload'}
          label={'Bulk Upload'}
        />
        <div className="flex items-center">
          <AButton
            label={'Save'}
            type={'submit'}
            variant={'primary'}
            icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
          />
          <AButton
            label={'Save'}
            type={'submit'}
            variant={'secondary'}
            icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
          />
        </div>
        <AButton
          label={'Save'}
          type={'submit'}
          variant={'full'}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
      </div>
    </>
  );
};

export default Fields;
