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

const Fields = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default p-5">
        <AButton
          label={'Save'}
          type={'submit'}
          variant={'primary'}
          icon={<PlusIcon className="h-5 w-5 stroke-white stroke-1" />}
        />
        <ACheckbox name={'checkbox'} label={'CheckBox Text'} />
        <ASwitcher name={'switch'} label={'Switch Text'} />
        <AInputField type={'text'} name={'inputName'} label={'Input Text'} />
        <ASingleSelect
          name={'select'}
          label={'Country'}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
          ]}
        />
        <AMultiSelect
          name={'select'}
          label={'Country'}
          selected={[{ label: 'India', value: 'india' }]}
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'UK', value: 'uk' },
          ]}
        />
        <AFileUpload type={'file'} name={'fileUpload'} label={'File Text'} />
        <ADatePicker type={'date'} name={'datePicker'} label={'Date Text'} />
        <ATextField name={'textarea'} label={'Text area Text'} />
        <AFileDragAndUpload
          type={'file'}
          name={'bulk upload'}
          label={'Bulk Upload'}
        />
      </div>
    </>
  );
};

export default Fields;
