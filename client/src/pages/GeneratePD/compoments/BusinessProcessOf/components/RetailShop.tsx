import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';

const initialValues = {
  value: {
    appStart: '',
    provideSer: '',
    detailSer: '',
    serCharge: '',
    grossMargin: '',
    perOfTrans: '',
    monGrossRec: '',
    expenses: '',
    transCost: '',
    purCycle: '',
    collection: '',
    collDuringFest: '',
    margin: '',
    marDuringFest: '',
    custWalk: '',
    afterExp: '',
    offAddress: '',
    offTiming: '',
    repArea: '',
    homeDelivery: '',
    covidObserv: '',
  },
};

const RetailShop = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      provideSer: Yup.string().required('Required'),
      detailSer: Yup.string().required('Required'),
      serCharge: Yup.string().required('Required'),
      grossMargin: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      monGrossRec: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      transCost: Yup.string().required('Required'),
      purCycle: Yup.string().required('Required'),
      collection: Yup.string().required('Required'),
      collDuringFest: Yup.string().required('Required'),
      margin: Yup.string().required('Required'),
      marDuringFest: Yup.string().required('Required'),
      custWalk: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      offAddress: Yup.string().required('Required'),
      offTiming: Yup.string().required('Required'),
      repArea: Yup.string().required('Required'),
      homeDelivery: Yup.string().required('Required'),
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
              They do retail sale of{' '}
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
              Details about the products{' '}
              <input
                type={'text'}
                id={'value.detailSer'}
                onChange={handleChange}
                value={formik?.values?.value?.detailSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.detailSer ? 'meta1' : 'stroke'
                }`}
              />
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Price Range of products are between{' '}
              <input
                type={'text'}
                id={'value.serCharge'}
                onChange={handleChange}
                value={formik?.values?.value?.serCharge}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.serCharge ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Gross Margin on products ranges between{' '}
              <input
                type={'text'}
                id={'value.grossMargin'}
                onChange={handleChange}
                value={formik?.values?.value?.grossMargin}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.grossMargin ? 'meta1' : 'stroke'
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
              .
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
              Customers are walk in customers{' '}
              <input
                type={'text'}
                id={'value.custWalk'}
                onChange={handleChange}
                value={formik?.values?.value?.custWalk}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.custWalk ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Daily Collection during festivals between{' '}
              <input
                type={'text'}
                id={'value.collDuringFest'}
                onChange={handleChange}
                value={formik?.values?.value?.collDuringFest}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.collDuringFest ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Margin sale are during festivals between{' '}
              <input
                type={'text'}
                id={'value.marDuringFest'}
                onChange={handleChange}
                value={formik?.values?.value?.marDuringFest}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.marDuringFest ? 'meta1' : 'stroke'
                }`}
              />{' '}
              Lakhs.
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
              Shop is located at, its
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
              Shop timings between
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
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Whether they provide home delivery services?{' '}
              <input
                type={'text'}
                id={'value.homeDelivery'}
                onChange={handleChange}
                value={formik?.values?.value?.homeDelivery}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.homeDelivery ? 'meta1' : 'stroke'
                }`}
              />
              .
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

export default RetailShop;
