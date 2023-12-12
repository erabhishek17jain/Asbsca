import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';
import toast from 'react-hot-toast';

const initialValues = {
  value: {
    appStart: '',
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
  },
};

const Hotel = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
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
              They have a hotel located at , its{' '}
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              items from breakfast to main courses & beverages.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              item.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              %.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
          </li>{' '}
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

export default Hotel;
