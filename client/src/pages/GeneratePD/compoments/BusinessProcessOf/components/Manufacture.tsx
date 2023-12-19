import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AButton from '../../../../../components-global/AButton';
import ASection from '../../../../../components-global/ASection';

const initialValues = {
  value: {
    appStart: '',
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
    offTiming: '',
    otherDetails: '',
  },
};

const Manufacture = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Price range of products is between Rs.{' '}
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
              Transport cost is born by{' '}
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
              Purchase cycle details (like weekly monthly)?{' '}
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
              machines.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              workers include labours and supervisors.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Area of representation is{' '}
              <input
                type={'text'}
                id={'value.repArea'}
                onChange={handleChange}
                value={formik?.values?.value?.repArea}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.repArea ? 'meta1' : 'stroke'
                }`}
              />{' '}
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Maximum production capacity is{' '}
              <input
                type={'text'}
                id={'value.capacity'}
                onChange={handleChange}
                value={formik?.values?.value?.capacity}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.capacity ? 'meta1' : 'stroke'
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
                id={'value.perCap'}
                onChange={handleChange}
                value={formik?.values?.value?.perCap}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.perCap ? 'meta1' : 'stroke'
                }`}
              />{' '}
              % of manufacturing capacity is utilized.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              Lakhs.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              How do they market there product to clients?
              <input
                type={'text'}
                id={'value.marketSer'}
                onChange={handleChange}
                value={formik?.values?.value?.marketSer}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.marketSer ? 'meta1' : 'stroke'
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
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Factory is located at, its
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
              Factory timings between
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
              Other Details?
              <textarea
                id={'value.otherDetails'}
                onChange={handleChange}
                value={formik?.values?.value?.otherDetails}
                className={`w-48 h-20 text-sm border-[1.5px] py-2 px-3 border-${
                  formik?.errors?.value?.otherDetails ? 'meta1' : 'stroke'
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

export default Manufacture;
