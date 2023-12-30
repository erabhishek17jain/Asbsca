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
    oyo: '',
    facilities: '',
    charges: '',
    menu: '',
    price: '',
    perOfTrans: '',
    purCycle: '',
    occupacy: '',
    paymentTerm: '',
    collection: '',
    margin: '',
    payment: '',
    expenses: '',
    afterExp: '',
    repArea: '',
    timings: '',
    covidObserv: '',
    otherDetails: '',
  },
};

const Hotel = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      oyo: Yup.string().required('Required'),
      facilities: Yup.string().required('Required'),
      charges: Yup.string().required('Required'),
      menu: Yup.string().required('Required'),
      price: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      occupacy: Yup.string().required('Required'),
      paymentTerm: Yup.string().required('Required'),
      collection: Yup.string().required('Required'),
      margin: Yup.string().required('Required'),
      payment: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      repArea: Yup.string().required('Required'),
      timings: Yup.string().required('Required'),
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
    toast.success(<b>Business details saved.</b>);
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
              formik?.values?.value?.oyo === '-' ? 'hidden' : ''
            }`}
            id={'oyo'}
          >
            <div className="flex gap-2 w-full">
              Are they listed on OYO or any other online service proivders?{' '}
              <input
                type={'text'}
                id={'value.oyo'}
                onChange={handleChange}
                value={formik?.values?.value?.oyo}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.oyo ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('oyo');
                  document.getElementById('oyo')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.facilities === '-' ? 'hidden' : ''
            }`}
            id={'facilities'}
          >
            <div className="flex gap-2 w-full">
              This is Hotel offers which type of facilities?{' '}
              <input
                type={'text'}
                id={'value.facilities'}
                onChange={handleChange}
                value={formik?.values?.value?.facilities}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.facilities ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('facilities');
                  document
                    .getElementById('facilities')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.charges === '-' ? 'hidden' : ''
            }`}
            id={'charges'}
          >
            <div className="flex gap-2 w-full">
              His charges from room are{' '}
              <input
                type={'text'}
                id={'value.charges'}
                onChange={handleChange}
                value={formik?.values?.value?.charges}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.charges ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('charges');
                  document
                    .getElementById('charges')
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
              formik?.values?.value?.occupacy === '-' ? 'hidden' : ''
            }`}
            id={'occupacy'}
          >
            <div className="flex gap-2 w-full">
              Normal room occupacy is{' '}
              <input
                type={'text'}
                id={'value.occupacy'}
                onChange={handleChange}
                value={formik?.values?.value?.occupacy}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.occupacy ? 'meta1' : 'stroke'
                }`}
              />{' '}
              %.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('occupacy');
                  document
                    .getElementById('occupacy')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.paymentTerm === '-' ? 'hidden' : ''
            }`}
            id={'paymentTerm'}
          >
            <div className="flex gap-2 w-full">
              Payment Terms with customers?{' '}
              <input
                type={'text'}
                id={'value.paymentTerm'}
                onChange={handleChange}
                value={formik?.values?.value?.paymentTerm}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.paymentTerm ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('paymentTerm');
                  document
                    .getElementById('paymentTerm')
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
              Daily Collection are between{' '}
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
              Monthly gross reciepts from them are between{' '}
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
              formik?.values?.value?.repArea === '-' ? 'hidden' : ''
            }`}
            id={'repArea'}
          >
            <div className="flex gap-2 w-full">
              Area of representation is
              <input
                type={'text'}
                id={'value.repArea'}
                onChange={handleChange}
                value={formik?.values?.value?.repArea}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.repArea ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('repArea');
                  document
                    .getElementById('repArea')
                    ?.classList.toggle('hidden');
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
              Hotel Timings between{' '}
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

export default Hotel;
