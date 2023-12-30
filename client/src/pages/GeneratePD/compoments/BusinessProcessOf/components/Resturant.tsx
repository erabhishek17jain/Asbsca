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
    foodType: '',
    menu: '',
    price: '',
    capacity: '',
    tables: '',
    timings: '',
    peakTime: '',
    peakDays: '',
    perOfTrans: '',
    purCycle: '',
    custWalk: '',
    collection: '',
    margin: '',
    payment: '',
    expenses: '',
    afterExp: '',
    covidObserv: '',
    otherDetails: '',
  },
};

const Resturant = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      foodType: Yup.string().required('Required'),
      menu: Yup.string().required('Required'),
      price: Yup.string().required('Required'),
      capacity: Yup.string().required('Required'),
      tables: Yup.string().required('Required'),
      timings: Yup.string().required('Required'),
      peakTime: Yup.string().required('Required'),
      peakDays: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      custWalk: Yup.string().required('Required'),
      collection: Yup.string().required('Required'),
      margin: Yup.string().required('Required'),
      payment: Yup.string().required('Required'),
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
              formik?.values?.value?.foodType === '-' ? 'hidden' : ''
            }`}
            id={'foodType'}
          >
            <div className="flex gap-2 w-full">
              This is Resturant & Bar offers which type of food?{' '}
              <input
                type={'text'}
                id={'value.foodType'}
                onChange={handleChange}
                value={formik?.values?.value?.foodType}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.foodType ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('foodType');
                  document
                    .getElementById('foodType')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.menu === '-' ? 'hidden' : ''
            }`}
            id={'menu'}
          >
            <div className="flex gap-2 w-full">
              His menu consists of{' '}
              <input
                type={'text'}
                id={'value.menu'}
                onChange={handleChange}
                value={formik?.values?.value?.menu}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.menu ? 'meta1' : 'stroke'
                }`}
              />{' '}
              items from breakfast to main courses & beverages.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('menu');
                  document.getElementById('menu')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.price === '-' ? 'hidden' : ''
            }`}
            id={'price'}
          >
            <div className="flex gap-2 w-full">
              Price range of food item is between Rs.{' '}
              <input
                type={'text'}
                id={'value.price'}
                onChange={handleChange}
                value={formik?.values?.value?.price}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.price ? 'meta1' : 'stroke'
                }`}
              />{' '}
              item.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('price');
                  document.getElementById('price')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.capacity === '-' ? 'hidden' : ''
            }`}
            id={'capacity'}
          >
            <div className="flex gap-2 w-full">
              Resturant and Bar has sitting capacity of{' '}
              <input
                type={'text'}
                id={'value.capacity'}
                onChange={handleChange}
                value={formik?.values?.value?.capacity}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.capacity ? 'meta1' : 'stroke'
                }`}
              />{' '}
              customers.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('capacity');
                  document
                    .getElementById('capacity')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.tables === '-' ? 'hidden' : ''
            }`}
            id={'tables'}
          >
            <div className="flex gap-2 w-full">
              It has{' '}
              <input
                type={'text'}
                id={'value.tables'}
                onChange={handleChange}
                value={formik?.values?.value?.tables}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.tables ? 'meta1' : 'stroke'
                }`}
              />
              tables.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('tables');
                  document.getElementById('tables')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.timings === '-' ? 'hidden' : ''
            }`}
            id={'timings'}
          >
            <div className="flex gap-2 w-full">
              Resturant Timings between{' '}
              <input
                type={'text'}
                id={'value.timings'}
                onChange={handleChange}
                value={formik?.values?.value?.timings}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.timings ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('timings');
                  document
                    .getElementById('timings')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.peakTime === '-' ? 'hidden' : ''
            }`}
            id={'peakTime'}
          >
            <div className="flex gap-2 w-full">
              Peak time of Resturant & Bar and Bar between{' '}
              <input
                type={'text'}
                id={'value.peakTime'}
                onChange={handleChange}
                value={formik?.values?.value?.peakTime}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.peakTime ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('peakTime');
                  document
                    .getElementById('peakTime')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.peakDays === '-' ? 'hidden' : ''
            }`}
            id={'peakDays'}
          >
            <div className="flex gap-2 w-full">
              Peak days are{' '}
              <input
                type={'text'}
                id={'value.peakDays'}
                onChange={handleChange}
                value={formik?.values?.value?.peakDays}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.peakDays ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('peakDays');
                  document
                    .getElementById('peakDays')
                    ?.classList.toggle('hidden');
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
              formik?.values?.value?.custWalk === '-' ? 'hidden' : ''
            }`}
            id={'custWalk'}
          >
            <div className="flex gap-2 w-full">
              They are{' '}
              <input
                type={'text'}
                id={'value.custWalk'}
                onChange={handleChange}
                value={formik?.values?.value?.custWalk}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.custWalk ? 'meta1' : 'stroke'
                }`}
              />{' '}
              no. of wholesale clients.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('custWalk');
                  document
                    .getElementById('custWalk')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.collection === '-' ? 'hidden' : ''
            }`}
            id={'collection'}
          >
            <div className="flex gap-2 w-full">
              Daily Collection between{' '}
              <input
                type={'text'}
                id={'value.collection'}
                onChange={handleChange}
                value={formik?.values?.value?.collection}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.collection ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('collection');
                  document
                    .getElementById('collection')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.margin === '-' ? 'hidden' : ''
            }`}
            id={'margin'}
          >
            <div className="flex gap-2 w-full">
              Margin sale are between{' '}
              <input
                type={'text'}
                id={'value.margin'}
                onChange={handleChange}
                value={formik?.values?.value?.margin}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.margin ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('margin');
                  document.getElementById('margin')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.payment === '-' ? 'hidden' : ''
            }`}
            id={'payment'}
          >
            <div className="flex gap-2 w-full">
              Is accepts Credit Card, UPI payment, Debit Card payment and cash?{' '}
              <input
                type={'text'}
                id={'value.payment'}
                onChange={handleChange}
                value={formik?.values?.value?.payment}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.payment ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('payment');
                  document
                    .getElementById('payment')
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

export default Resturant;
