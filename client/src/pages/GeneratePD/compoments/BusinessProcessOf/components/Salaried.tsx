import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';
import toast from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/24/solid';

const initialValues = {
  value: {
    appCurrent: '',
    named: '',
    engaged: '',
    joined: '',
    workThere: '',
    designation: '',
    department: '',
    expenses: '',
    offAddress: '',
    offAddressAt: '',
    offTiming: '',
    otherDetails: '',
  },
};

const Salaried = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appCurrent: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
      engaged: Yup.string().required('Required'),
      joined: Yup.string().required('Required'),
      workThere: Yup.string().required('Required'),
      designation: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      offAddress: Yup.string().required('Required'),
      offAddressAt: Yup.string().required('Required'),
      offTiming: Yup.string().required('Required'),
    }),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    const label: any = {};
    for (const prop in labels) {
      label[prop] = labels[prop].replace('\n', ` ${values?.value[prop]} `);
    }
    setBussDetails({ label: label, value: values?.value });
    toast.success(<b>Business Details saved sucessfully.</b>);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const handleChange = (e: any) => {
    const { id, parentElement } = e.target;
    const html = parentElement?.innerText;
    labels[id.split('.')[1]] = html.toString();
    setLabels({ ...labels });
    formik.handleChange(e);
  };

  const removeItem = (key: string) => {
    if (key.includes('-')) {
      const keys = key.split('-');
      formik.setFieldValue(`value.${[keys[0]]}`, '-');
      formik.setFieldValue(`value.${[keys[1]]}`, '-');
    } else {
      formik.setFieldValue(`value.${[key]}`, '-');
    }
  };

  useEffect(() => {
    if (payloads?.details) {
      formik.setFieldValue('value', payloads?.details?.value);
      setLabels({ ...payloads?.details?.label });
    }
  }, [payloads]);

  return (
    <>
      <ASection>
        <ol type="1" style={{ listStyle: 'auto' }} className="pl-4">
          <li
            className={`mb-2 ${
              formik?.values?.value?.appCurrent === '-' ? 'hidden' : ''
            }`}
            id={'appCurrent-named'}
          >
            <div className="flex gap-2 w-full">
              Applicant is currently employed at a{' '}
              <input
                type={'text'}
                id={'value.appCurrent'}
                onChange={handleChange}
                value={formik?.values?.value?.appCurrent}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.appCurrent ? 'meta1' : 'stroke'
                }`}
              />
              named{' '}
              <input
                type={'text'}
                id={'value.named'}
                onChange={handleChange}
                value={formik?.values?.value?.named}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.named ? 'meta1' : 'stroke'
                }`}
              />
              in year.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('appCurrent-named');
                  document
                    .getElementById('appCurrent-named')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.engaged === '-' ? 'hidden' : ''
            }`}
            id={'engaged'}
          >
            <div className="flex gap-2 w-full">
              They are engaged in business of manufacturing{' '}
              <input
                type={'text'}
                id={'value.engaged'}
                onChange={handleChange}
                value={formik?.values?.value?.engaged}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.engaged ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('engaged');
                  document
                    .getElementById('engaged')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.joined === '-' ? 'hidden' : ''
            }`}
            id={'joined'}
          >
            <div className="flex gap-2 w-full">
              He/She joined in year{' '}
              <input
                type={'text'}
                id={'value.joined'}
                onChange={handleChange}
                value={formik?.values?.value?.joined}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.joined ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('joined');
                  document.getElementById('joined')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.workThere === '-' ? 'hidden' : ''
            }`}
            id={'workThere'}
          >
            <div className="flex gap-2 w-full">
              His/her work there is to{' '}
              <input
                type={'text'}
                id={'value.workThere'}
                onChange={handleChange}
                value={formik?.values?.value?.workThere}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.workThere ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('workThere');
                  document
                    .getElementById('workThere')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.designation === '-' ? 'hidden' : ''
            }`}
            id={'designation'}
          >
            <div className="flex gap-2 w-full">
              His/Her Designation is{' '}
              <input
                type={'text'}
                id={'value.designation'}
                onChange={handleChange}
                value={formik?.values?.value?.designation}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.designation ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('designation');
                  document
                    .getElementById('designation')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.department === '-' ? 'hidden' : ''
            }`}
            id={'department'}
          >
            <div className="flex gap-2 w-full">
              He/she is working in{' '}
              <input
                type={'text'}
                id={'value.department'}
                onChange={handleChange}
                value={formik?.values?.value?.department}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.department ? 'meta1' : 'stroke'
                }`}
              />
              department.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('department');
                  document
                    .getElementById('department')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.expenses === '-' ? 'hidden' : ''
            }`}
            id={'expenses'}
          >
            <div className="flex gap-2 w-full">
              Expenses in the business are{' '}
              <input
                type={'text'}
                id={'value.expenses'}
                onChange={handleChange}
                value={formik?.values?.value?.expenses}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.expenses ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('expenses');
                  document
                    .getElementById('expenses')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.offAddress === '-' ? 'hidden' : ''
            }`}
            id={'offAddress-offAddressAt'}
          >
            <div className="flex gap-2 w-full">
              Office is located at,{' '}
              <input
                type={'text'}
                id={'value.offAddressAt'}
                onChange={handleChange}
                value={formik?.values?.value?.offAddressAt}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.offAddressAt ? 'meta1' : 'stroke'
                }`}
              />
              its{' '}
              <input
                type={'text'}
                id={'value.offAddress'}
                onChange={handleChange}
                value={formik?.values?.value?.offAddress}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.offAddress ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('offAddress-offAddressAt');
                  document
                    .getElementById('offAddress-offAddressAt')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.offTiming === '-' ? 'hidden' : ''
            }`}
            id={'offTiming'}
          >
            <div className="flex gap-2 w-full">
              Office timings between
              <input
                type={'text'}
                id={'value.offTiming'}
                onChange={handleChange}
                value={formik?.values?.value?.offTiming}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.offTiming ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('offTiming');
                  document
                    .getElementById('offTiming')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.otherDetails === '-' ? 'hidden' : ''
            }`}
            id={'otherDetails'}
          >
            <div className="flex gap-2 w-full">
              Other Details?
              <textarea
                id={'value.otherDetails'}
                onChange={handleChange}
                value={formik?.values?.value?.otherDetails}
                className={`w-48 h-20 text-sm border-[1.5px] py-2 px-3 border-${
                  formik?.errors?.value?.otherDetails ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('otherDetails');
                  document
                    .getElementById('otherDetails')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
        </ol>
        <div className="flex justify-end">
          <AButton
            label={'Save Details'}
            variant="small"
            action={formik.handleSubmit}
          />
        </div>
      </ASection>
    </>
  );
};

export default Salaried;
