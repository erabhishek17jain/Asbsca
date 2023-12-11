import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';
import toast from 'react-hot-toast';

toast.success(<b>Business details saved.</b>);

const initialValues = {
  value: {
    appStart: '',
    location: '',
    provideSer: '',
    consultancy: '',
    followup: '',
    equipment: '',
    equipmentCost: '',
    doctors: '',
    staff: '',
    rainy: '',
    monsoon: '',
    tieUp: '',
    open: '',
    perOfTrans: '',
    purCycle: '',
    expenses: '',
    afterExp: '',
    covidObserv: '',
  },
};

const HospitalClinic = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      provideSer: Yup.string().required('Required'),
      consultancy: Yup.string().required('Required'),
      followup: Yup.string().required('Required'),
      equipment: Yup.string().required('Required'),
      equipmentCost: Yup.string().required('Required'),
      doctors: Yup.string().required('Required'),
      staff: Yup.string().required('Required'),
      rainy: Yup.string().required('Required'),
      monsoon: Yup.string().required('Required'),
      tieUp: Yup.string().required('Required'),
      open: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      covidObserv: Yup.string().required('Required'),
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
    if (payloads.details) {
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
              Applicant started a{' '}
              <input
                type={'text'}
                id={'value.appStart'}
                onChange={handleChange}
                value={formik?.values?.value?.appStart}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.appStart ? 'meta1' : 'stroke'
                }`}
              />
              named in year.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              They have a resturant located at , its{' '}
              <input
                type={'text'}
                id={'value.location'}
                onChange={handleChange}
                value={formik?.values?.value?.location}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.location ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              They provides services of{' '}
              <input
                type={'text'}
                id={'value.provideSer'}
                onChange={handleChange}
                value={formik?.values?.value?.provideSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.provideSer ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Charges Range for single consultancy is{' '}
              <input
                type={'text'}
                id={'value.consultancy'}
                onChange={handleChange}
                value={formik?.values?.value?.consultancy}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.consultancy ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Charges Range for follow-up is{' '}
              <input
                type={'text'}
                id={'value.followup'}
                onChange={handleChange}
                value={formik?.values?.value?.followup}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.followup ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              He has{' '}
              <input
                type={'text'}
                id={'value.equipment'}
                onChange={handleChange}
                value={formik?.values?.value?.equipment}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.equipment ? 'meta1' : 'stroke'
                }`}
              />{' '}
              hospital equipments.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Total equipments worth is{' '}
              <input
                type={'text'}
                id={'value.equipmentCost'}
                onChange={handleChange}
                value={formik?.values?.value?.equipmentCost}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.equipmentCost ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              It has staff of{' '}
              <input
                type={'text'}
                id={'value.doctors'}
                onChange={handleChange}
                value={formik?.values?.value?.doctors}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.doctors ? 'meta1' : 'stroke'
                }`}
              />{' '}
              doctors.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              It has staff of{' '}
              <input
                type={'text'}
                id={'value.staff'}
                onChange={handleChange}
                value={formik?.values?.value?.staff}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.staff ? 'meta1' : 'stroke'
                }`}
              />{' '}
              employees including assistants, nurses etc.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Bed are{' '}
              <input
                type={'text'}
                id={'value.rainy'}
                onChange={handleChange}
                value={formik?.values?.value?.rainy}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.rainy ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % occupied generally in rainy season.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Bed are{' '}
              <input
                type={'text'}
                id={'value.monsoon'}
                onChange={handleChange}
                value={formik?.values?.value?.monsoon}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.monsoon ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % occupied generally in monsoon season.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              It has tie-up with most of insurance company like{' '}
              <input
                type={'text'}
                id={'value.tieUp'}
                onChange={handleChange}
                value={formik?.values?.value?.tieUp}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.tieUp ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Is hospital open for 24 hours & employee work in 3 shifts?
              <input
                type={'text'}
                id={'value.open'}
                onChange={handleChange}
                value={formik?.values?.value?.open}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.open ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              At{' '}
              <input
                type={'text'}
                id={'value.perOfTrans'}
                onChange={handleChange}
                value={formik?.values?.value?.perOfTrans}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.perOfTrans ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % of transaction are done via banking channel.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Purchase cycle details (weekly/monthly){' '}
              <input
                type={'text'}
                id={'value.purCycle'}
                onChange={handleChange}
                value={formik?.values?.value?.purCycle}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.purCycle ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              After expenses they get net profit margin between
              <input
                type={'text'}
                id={'value.afterExp'}
                onChange={handleChange}
                value={formik?.values?.value?.afterExp}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.afterExp ? 'meta1' : 'stroke'
                }`}
              />{' '}
              %.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Any COVID Observation?
              <input
                type={'text'}
                id={'value.covidObserv'}
                onChange={handleChange}
                value={formik?.values?.value?.covidObserv}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.covidObserv ? 'meta1' : 'stroke'
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

export default HospitalClinic;
