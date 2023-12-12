import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';

const initialValues = {
  value: {
    appCurrent: '',
    engaged: '',
    joined: '',
    workThere: '',
    designation: '',
    department: '',
    expenses: '',
    offAddress: '',
    offTiming: '',
  },
};

const Salaried = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appCurrent: Yup.string().required('Required'),
      engaged: Yup.string().required('Required'),
      joined: Yup.string().required('Required'),
      workThere: Yup.string().required('Required'),
      designation: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      offAddress: Yup.string().required('Required'),
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
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              named.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              He/She is engaged in business of{' '}
              <input
                type={'text'}
                id={'value.engaged'}
                onChange={handleChange}
                value={formik?.values?.value?.engaged}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.engaged ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              department.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Expenses are{' '}
              <input
                type={'text'}
                id={'value.expenses'}
                onChange={handleChange}
                value={formik?.values?.value?.expenses}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.expenses ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Office is located at, its
              <input
                type={'text'}
                id={'value.offAddress'}
                onChange={handleChange}
                value={formik?.values?.value?.offAddress}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.offAddress ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
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
