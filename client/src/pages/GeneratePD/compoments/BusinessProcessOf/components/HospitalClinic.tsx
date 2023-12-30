import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';
import toast from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/24/solid';

const initialValues = {
  value: {
    appStart: '',
    named: '',
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
    otherDetails: '',
  },
};

const HospitalClinic = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
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
              formik?.values?.value?.appStart === '-' ? 'hidden' : ''
            }`}
            id={'appStart-named'}
          >
            <div className="flex gap-2 w-full">
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
                  removeItem('appStart-named');
                  document
                    .getElementById('appStart-named')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.location === '-' ? 'hidden' : ''
            }`}
            id={'location'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('location');
                  document
                    .getElementById('location')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.provideSer === '-' ? 'hidden' : ''
            }`}
            id={'provideSer'}
          >
            <div className="flex gap-2 w-full">
              They provide service of{' '}
              <input
                type={'text'}
                id={'value.provideSer'}
                onChange={handleChange}
                value={formik?.values?.value?.provideSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.provideSer ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('provideSer');
                  document
                    .getElementById('provideSer')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.consultancy === '-' ? 'hidden' : ''
            }`}
            id={'consultancy'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('consultancy');
                  document
                    .getElementById('consultancy')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.followup === '-' ? 'hidden' : ''
            }`}
            id={'followup'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('followup');
                  document
                    .getElementById('followup')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.equipment === '-' ? 'hidden' : ''
            }`}
            id={'equipment'}
          >
            <div className="flex gap-2 w-full">
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
              hospital equipments.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('equipment');
                  document
                    .getElementById('equipment')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.equipmentCost === '-' ? 'hidden' : ''
            }`}
            id={'equipmentCost'}
          >
            <div className="flex gap-2 w-full">
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
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('equipmentCost');
                  document
                    .getElementById('equipmentCost')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.doctors === '-' ? 'hidden' : ''
            }`}
            id={'doctors'}
          >
            <div className="flex gap-2 w-full">
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
              doctors.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('doctors');
                  document
                    .getElementById('doctors')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.staff === '-' ? 'hidden' : ''
            }`}
            id={'staff'}
          >
            <div className="flex gap-2 w-full">
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
              employees including assistants, nurses etc.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('staff');
                  document.getElementById('staff')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.rainy === '-' ? 'hidden' : ''
            }`}
            id={'rainy'}
          >
            <div className="flex gap-2 w-full">
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
              % occupied generally in rainy season.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('rainy');
                  document.getElementById('rainy')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.monsoon === '-' ? 'hidden' : ''
            }`}
            id={'monsoon'}
          >
            <div className="flex gap-2 w-full">
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
              % occupied generally in monsoon season.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('monsoon');
                  document
                    .getElementById('monsoon')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.tieUp === '-' ? 'hidden' : ''
            }`}
            id={'tieUp'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('tieUp');
                  document.getElementById('tieUp')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.open === '-' ? 'hidden' : ''
            }`}
            id={'open'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('open');
                  document.getElementById('open')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.perOfTrans === '-' ? 'hidden' : ''
            }`}
            id={'perOfTrans'}
          >
            <div className="flex gap-2 w-full">
              {' '}
              <input
                type={'text'}
                id={'value.perOfTrans'}
                onChange={handleChange}
                value={formik?.values?.value?.perOfTrans}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.perOfTrans ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % of transaction are done via banking channel.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('perOfTrans');
                  document
                    .getElementById('perOfTrans')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.purCycle === '-' ? 'hidden' : ''
            }`}
            id={'purCycle'}
          >
            <div className="flex gap-2 w-full">
              Purchase cycle details (weekly/monthly)
              <input
                type={'text'}
                id={'value.purCycle'}
                onChange={handleChange}
                value={formik?.values?.value?.purCycle}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.purCycle ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('purCycle');
                  document
                    .getElementById('purCycle')
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
              formik?.values?.value?.afterExp === '-' ? 'hidden' : ''
            }`}
            id={'afterExp'}
          >
            <div className="flex gap-2 w-full">
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
              %.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('afterExp');
                  document
                    .getElementById('afterExp')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.covidObserv === '-' ? 'hidden' : ''
            }`}
            id={'covidObserv'}
          >
            <div className="flex gap-2 w-full">
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
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('covidObserv');
                  document
                    .getElementById('covidObserv')
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

export default HospitalClinic;
