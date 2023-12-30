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
    provideSer: '',
    detailSer: '',
    serCharge: '',

    perOfTrans: '',
    transCost: '',
    purCycle: '',
    monGrossRec: '',
    expenses: '',

    afterExp: '',
    offAddress: '',
    offAddressAt: '',
    offTiming: '',
    repArea: '',

    listedOnline: '',
    marketSer: '',
    covidObserv: '',
    otherDetails: '',
  },
};

const ServiceWithPurchase = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      named: Yup.string().required('Required'),
      provideSer: Yup.string().required('Required'),
      detailSer: Yup.string().required('Required'),
      serCharge: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      transCost: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      monGrossRec: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      offAddress: Yup.string().required('Required'),
      offAddressAt: Yup.string().required('Required'),
      offTiming: Yup.string().required('Required'),
      repArea: Yup.string().required('Required'),
      listedOnline: Yup.string().required('Required'),
      marketSer: Yup.string().required('Required'),
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
    formik.setFieldValue('value', { ...initialValues.value });
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
              formik?.values?.value?.detailSer === '-' ? 'hidden' : ''
            }`}
            id={'detailSer'}
          >
            <div className="flex gap-2 w-full">
              Details about the services{' '}
              <input
                type={'text'}
                id={'value.detailSer'}
                onChange={handleChange}
                value={formik?.values?.value?.detailSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.detailSer ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('detailSer');
                  document
                    .getElementById('detailSer')
                    ?.classList.toggle('hidden');
                }}
              />
            </div>
          </li>
          <li
            className={`mb-2 ${
              formik?.values?.value?.serCharge === '-' ? 'hidden' : ''
            }`}
            id={'serCharge'}
          >
            <div className="flex gap-2 w-full">
              Service Charges ranges between.{' '}
              <input
                type={'text'}
                id={'value.serCharge'}
                onChange={handleChange}
                value={formik?.values?.value?.serCharge}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.serCharge ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('serCharge');
                  document
                    .getElementById('serCharge')
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
              formik?.values?.value?.monGrossRec === '-' ? 'hidden' : ''
            }`}
            id={'monGrossRec'}
          >
            <div className="flex gap-2 w-full">
              Monthly gross receipts from them are between
              <input
                type={'text'}
                id={'value.monGrossRec'}
                onChange={handleChange}
                value={formik?.values?.value?.monGrossRec}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.monGrossRec ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('monGrossRec');
                  document
                    .getElementById('monGrossRec')
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
              formik?.values?.value?.listedOnline === '-' ? 'hidden' : ''
            }`}
            id={'listedOnline'}
          >
            <div className="flex gap-2 w-full">
              Are they listed on any online market place website (like amazon,
              flipkart, india mart) or has any website?
              <input
                type={'text'}
                id={'value.listedOnline'}
                onChange={handleChange}
                value={formik?.values?.value?.listedOnline}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.listedOnline ? 'meta1' : 'stroke'
                }`}
              />
              .{' '}
              <XMarkIcon
                className="h-6 w-4 stroke-main stroke-1"
                onClick={() => {
                  removeItem('listedOnline');
                  document
                    .getElementById('listedOnline')
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

export default ServiceWithPurchase;
