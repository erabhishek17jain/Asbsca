import ASingleSelect from '../../../../components-global/ASingleSelect';
import { AStepperPagination } from '../../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { businessProcess } from '../../constants';
import { useEffect } from 'react';
import ServiceWithPurchase from './components/ServiceWithPurchase';
import Salaried from './components/Salaried';
import Service from './components/Service';
import RetailShop from './components/RetailShop';
import Resturant from './components/Resturant';
import ResturantBar from './components/ResturantBar';
import Hotel from './components/Hotel';
import RetailWholesale from './components/RetailWholesale';
import HospitalClinic from './components/HospitalClinic';
import Manufacture from './components/Manufacture';
import Others from './components/Other';

const initialValues = {
  bussinessProcessOf: '',
  details: null,
};

const BusinessProcessOf = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const validationSchema = Yup.object().shape({
    bussinessProcessOf: Yup.string().required('This field is required'),
    details: Yup.object().required('Please fill below details.'),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, businessOf: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  const setBussDetails = (details: any) => {
    formik.setFieldValue('details', details);
  };

  useEffect(() => {
    if (formik?.values?.bussinessProcessOf === 'Trading (B2B)') {
      formik.setFieldValue('details', {});
    } else {
      formik.setFieldValue('details', null);
    }
  }, [formik?.values?.bussinessProcessOf]);

  useEffect(() => {
    if (payloads.businessOf) {
      formik.setFieldValue('details', payloads.businessOf?.details);
      formik.setFieldValue(
        'bussinessProcessOf',
        payloads.businessOf?.bussinessProcessOf,
      );
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col sm:w-[60%] py-4">
          <ASingleSelect
            id={'bussinessProcessOf'}
            label={'Business Process of'}
            variant={'horizantal'}
            options={businessProcess}
            value={formik?.values?.bussinessProcessOf}
            error={formik?.errors?.bussinessProcessOf}
            handleChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          {formik?.errors?.details && (
            <span className="text-sm text-meta1">
              {formik?.errors?.details}
            </span>
          )}
          {formik?.values?.bussinessProcessOf ===
            'Service (With Purchases)' && (
            <ServiceWithPurchase
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Salaried' && (
            <Salaried
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Service' && (
            <Service
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Retail - Shop' && (
            <RetailShop
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Resturant' && (
            <Resturant
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Resturant & Bar' && (
            <ResturantBar
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Hotel' && (
            <Hotel
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Retail & Wholesale' && (
            <RetailWholesale
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Hospital/Clinic' && (
            <HospitalClinic
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Manufacturing' && (
            <Manufacture
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
          {formik?.values?.bussinessProcessOf === 'Other' && (
            <Others
              payloads={payloads.businessOf}
              setBussDetails={setBussDetails}
            />
          )}
        </div>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={formik.handleSubmit}
      />
    </>
  );
};

export default BusinessProcessOf;
