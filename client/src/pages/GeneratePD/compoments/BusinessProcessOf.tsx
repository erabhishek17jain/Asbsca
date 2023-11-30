import ASingleSelect from '../../../components-global/ASingleSelect';
import { AStepperPagination } from '../../../components-global/AStepper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { businessProcess } from '../constants';
import { useEffect } from 'react';

const BusinessProcessOf = ({
  steps, action,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const initialValues = {
    bussinessProcessOf: '',
  };

  const validationSchema = Yup.object().shape({
    bussinessProcessOf: Yup.string().required('This field is required'),
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

   useEffect(() => {
     if (action === 'edit') {
       formik.setFieldValue(
         'bussinessProcessOf',
         payloads.businessOf?.bussinessProcessOf,
       );
     }
   }, [payloads]);
  
  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col w-[60%] py-4">
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
