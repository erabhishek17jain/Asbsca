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
    engaged: '',
    products: '',
    details: '',
    price: '',
    rawmaterial: '',
    perOfTrans: '',
    transCost: '',
    purCycle: '',
    machines: '',
    machineWorth: '',
    workers: '',
    repArea: '',
    requirement: '',
    process: '',
    capacity: '',
    perCap: '',
    monSales: '',
    marketSer: '',
    expenses: '',
    afterExp: '',
    covidObserv: '',
    offAddress: '',
    offAddressAt: '',
    offTiming: '',
    otherDetails: '',
  },
};

const Manufacture = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
      engaged: Yup.string().required('Required'),
      products: Yup.string().required('Required'),
      details: Yup.string().required('Required'),
      price: Yup.string().required('Required'),
      rawmaterial: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      transCost: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      machines: Yup.string().required('Required'),
      machineWorth: Yup.string().required('Required'),
      workers: Yup.string().required('Required'),
      repArea: Yup.string().required('Required'),
      requirement: Yup.string().required('Required'),
      process: Yup.string().required('Required'),
      capacity: Yup.string().required('Required'),
      perCap: Yup.string().required('Required'),
      monSales: Yup.string().required('Required'),
      marketSer: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      covidObserv: Yup.string().required('Required'),
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
              formik?.values?.value?.products === '-' ? 'hidden' : ''
            }`}
            id={'products'}
          >
            <div className="flex gap-2 w-full">
              They manufacture products like{' '}
              <input
                type={'text'}
                id={'value.products'}
                onChange={handleChange}
                value={formik?.values?.value?.products}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.products ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('products');
                  document
                    .getElementById('products')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.details === '-' ? 'hidden' : ''
            }`}
            id={'details'}
          >
            <div className="flex gap-2 w-full">
              Details about the products{' '}
              <input
                type={'text'}
                id={'value.details'}
                onChange={handleChange}
                value={formik?.values?.value?.details}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.details ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('details');
                  document
                    .getElementById('details')
                    ?.classList.toggle('hidden');
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
              formik?.values?.value?.rawmaterial === '-' ? 'hidden' : ''
            }`}
            id={'rawmaterial'}
          >
            <div className="flex gap-2 w-full">
              What kind of raw materials are required?{' '}
              <input
                type={'text'}
                id={'value.rawmaterial'}
                onChange={handleChange}
                value={formik?.values?.value?.rawmaterial}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.rawmaterial ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('rawmaterial');
                  document
                    .getElementById('rawmaterial')
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
              formik?.values?.value?.transCost === '-' ? 'hidden' : ''
            }`}
            id={'transCost'}
          >
            <div className="flex gap-2 w-full">
              Transport cost is born by
              <input
                type={'text'}
                id={'value.transCost'}
                onChange={handleChange}
                value={formik?.values?.value?.transCost}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.transCost ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('transCost');
                  document
                    .getElementById('transCost')
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
              formik?.values?.value?.machines === '-' ? 'hidden' : ''
            }`}
            id={'machines'}
          >
            <div className="flex gap-2 w-full">
              He has{' '}
              <input
                type={'text'}
                id={'value.machines'}
                onChange={handleChange}
                value={formik?.values?.value?.machines}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.machines ? 'meta1' : 'stroke'
                }`}
              />{' '}
              machines.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('machines');
                  document
                    .getElementById('machines')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.machineWorth === '-' ? 'hidden' : ''
            }`}
            id={'machineWorth'}
          >
            <div className="flex gap-2 w-full">
              Machines worth{' '}
              <input
                type={'text'}
                id={'value.machineWorth'}
                onChange={handleChange}
                value={formik?.values?.value?.machineWorth}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.machineWorth ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('machineWorth');
                  document
                    .getElementById('machineWorth')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.workers === '-' ? 'hidden' : ''
            }`}
            id={'workers'}
          >
            <div className="flex gap-2 w-full">
              He has{' '}
              <input
                type={'text'}
                id={'value.workers'}
                onChange={handleChange}
                value={formik?.values?.value?.workers}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.workers ? 'meta1' : 'stroke'
                }`}
              />{' '}
              workers include labours and supervisors.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('workers');
                  document
                    .getElementById('workers')
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
              formik?.values?.value?.requirement === '-' ? 'hidden' : ''
            }`}
            id={'requirement'}
          >
            <div className="flex gap-2 w-full">
              Is raw materials are purchased depending upon the order & client’s
              requirement?{' '}
              <input
                type={'text'}
                id={'value.requirement'}
                onChange={handleChange}
                value={formik?.values?.value?.requirement}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.requirement ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('requirement');
                  document
                    .getElementById('requirement')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.process === '-' ? 'hidden' : ''
            }`}
            id={'process'}
          >
            <div className="flex gap-2 w-full">
              His manufacturing process is{' '}
              <input
                type={'text'}
                id={'value.process'}
                onChange={handleChange}
                value={formik?.values?.value?.process}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.process ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('process');
                  document
                    .getElementById('process')
                    ?.classList.toggle('hidden');
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
              formik?.values?.value?.perCap === '-' ? 'hidden' : ''
            }`}
            id={'perCap'}
          >
            <div className="flex gap-2 w-full">
              At{' '}
              <input
                type={'text'}
                id={'value.perCap'}
                onChange={handleChange}
                value={formik?.values?.value?.perCap}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.perCap ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % of manufacturing capacity is utilized.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('perCap');
                  document.getElementById('perCap')?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.monSales === '-' ? 'hidden' : ''
            }`}
            id={'monSales'}
          >
            <div className="flex gap-2 w-full">
              Monthly sales to them is between
              <input
                type={'text'}
                id={'value.monSales'}
                onChange={handleChange}
                value={formik?.values?.value?.monSales}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.monSales ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('monSales');
                  document
                    .getElementById('monSales')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.marketSer === '-' ? 'hidden' : ''
            }`}
            id={'marketSer'}
          >
            <div className="flex gap-2 w-full">
              How do they market there services?
              <input
                type={'text'}
                id={'value.marketSer'}
                onChange={handleChange}
                value={formik?.values?.value?.marketSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.marketSer ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('marketSer');
                  document
                    .getElementById('marketSer')
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

export default Manufacture;
