import { AStepperPagination } from '../../../components-global/AStepper';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import AFileUpload from '../../../components-global/AFileUpload';

const initialValues = {
  photos: [] as any,
};

const PhotoScreenshots = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, photos: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    if (payloads.photos) {
      formik.setFieldValue('photos', payloads?.photos?.photos);
    }
  }, [payloads]);

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <div className="flex flex-col sm:w-[60%] py-4">
          <AFileUpload
            id={'photos'}
            label={'Upload Photo'}
            value={formik?.values?.photos}
            error={formik?.errors?.photos?.length === 0}
            formik={formik}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {formik?.values?.photos?.map((obj: any, i: number) => (
            <img key={i} src={obj} alt={i.toString()} className="w-full" />
          ))}
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

export default PhotoScreenshots;
