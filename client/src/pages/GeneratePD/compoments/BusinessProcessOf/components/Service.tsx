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
    provideSer: '',
    detailSer: '',
    serCharge: '',

    perOfTrans: '',
    monGrossRec: '',
    expenses: '',

    afterExp: '',
    offAddress: '',
    offTiming: '',
    repArea: '',

    listedOnline: '',
    marketSer: '',
    covidObserv: '',
  },
};

const Service = ({ payloads, setBussDetails }: any) => {
  const [labels, setLabels] = useState<any>([]);

  const validationSchema = Yup.object().shape({
    value: Yup.object({
      appStart: Yup.string().required('Required'),
      provideSer: Yup.string().required('Required'),
      detailSer: Yup.string().required('Required'),
      serCharge: Yup.string().required('Required'),
      perOfTrans: Yup.string().required('Required'),
      monGrossRec: Yup.string().required('Required'),
      expenses: Yup.string().required('Required'),
      afterExp: Yup.string().required('Required'),
      offAddress: Yup.string().required('Required'),
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Service Charges ranges between.{' '}
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
              % of transaction are done via banking channel.
            </div>
          </li>
           <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
              Monthly gross receipts from then are between
              <input
                type={'text'}
                id={'value.monGrossRec'}
                onChange={handleChange}
                value={formik?.values?.value?.monGrossRec}
                className={`w-32 text-sm border-b-[1.5px] text-center border-${
                  formik?.errors?.value?.monGrossRec ? 'meta1' : 'stroke'
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
              .
            </div>
          </li>
          <li className="mb-2">
            <div className="flex gap-2 sm:w-[60%]">
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

export default Service;
