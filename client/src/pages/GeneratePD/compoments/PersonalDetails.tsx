import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import {
  AddTagButton,
  AddTagFooter,
  AddTagHeader,
} from '../../../components-global/ATags';
import ADatePicker from '../../../components-global/ADatePicker';
import ASection from '../../../components-global/ASection';
import AGroupFields from '../../../components-global/AGroupFields';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';
import {
  earningStatus,
  familyRealtion,
  natureOfAddress,
  qualification,
  residenceStatus,
} from '../constants';

const applicantInfo = {
  title: 'Applicant',
  name: '',
  dobDoi: '',
  qualification: '',
  natureOfBusiness: '',
  birthYear: '',
  studyFinish: '',
  businessStart: '',
  pastExp: '',
  overallExp: '',
} as any;

const familyInfo = {
  name: '',
  relation: '',
  earningStatus: '',
} as any;

const PersonalDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const initialValues = {
    applicants: [{ ...applicantInfo }] as any,
    residentInfo: {
      resiAddress: '',
      resiStatus: '',
      resiSince: '',
      purchaseYear: '',
      buildArea: '',
      carpetArea: '',
      agrimentValue: '',
      purchaseValue: '',
      marketValue: '',
      familyDetails: [] as any,
    },
  };

  const validationSchema = Yup.object().shape({
    applicants: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('This field is required'),
      }),
    ),
    residentInfo: Yup.object({
      resiAddress: Yup.string().required('This field is required'),
      resiStatus: Yup.string().required('This field is required'),
      resiSince: Yup.string().required('This field is required'),
      purchaseYear: Yup.string().required('This field is required'),
      buildArea: Yup.string().required('This field is required'),
      carpetArea: Yup.string().required('This field is required'),
      agrimentValue: Yup.string().required('This field is required'),
      purchaseValue: Yup.string().required('This field is required'),
      marketValue: Yup.string().required('This field is required'),
    }),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, loanDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateFunction,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <p className="w-full text-md text-main font-bold mb-3">
          Applicant's Details
        </p>
        <FormikProvider value={formik}>
          <form>
            <FieldArray
              name="applicants"
              render={(tag) => (
                <div>
                  {formik.values.applicants.map((item: any, index: number) => (
                    <div className="mb-3">
                      <AddTagHeader
                        title={item?.title}
                        removeTag={() => tag.remove(index)}
                        addTag={() =>
                          tag.push({
                            ...applicantInfo,
                            title: 'Co-Applicant',
                          })
                        }
                      />
                      <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                        <AGroupFields>
                          <AInputField
                            id={`applicants[${index}].name`}
                            label={"Applicant's Name"}
                            value={formik?.values?.applicants[index].name}
                            error={formik?.values?.applicants[index].name}
                            handleChange={formik.handleChange}
                          />
                          <ADatePicker
                            id={`applicants[${index}].dobDoi`}
                            label={'Date of Birth/Incorporation'}
                            value={formik?.values?.applicants[index].dobDoi}
                            error={formik?.values?.applicants[index].dobDoi}
                            handleChange={formik.handleChange}
                          />
                          <ASingleSelect
                            id={`applicants[${index}].qualification`}
                            label={'Qualification'}
                            options={qualification}
                            value={
                              formik?.values?.applicants[index].qualification
                            }
                            error={
                              formik?.values?.applicants[index].qualification
                            }
                            handleChange={formik.handleChange}
                          />
                          <ASingleSelect
                            id={`applicants[${index}].natureOfBusiness`}
                            label={'Nature of Business'}
                            options={natureOfAddress}
                            value={
                              formik?.values?.applicants[index].natureOfBusiness
                            }
                            error={
                              formik?.values?.applicants[index].natureOfBusiness
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            id={`applicants[${index}].birthYear`}
                            label={'Birth Year'}
                            value={formik?.values?.applicants[index].birthYear}
                            error={formik?.values?.applicants[index].birthYear}
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            id={`applicants[${index}].studyFinish`}
                            label={'Study Finish '}
                            value={
                              formik?.values?.applicants[index].studyFinish
                            }
                            error={
                              formik?.values?.applicants[index].studyFinish
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            id={`applicants[${index}].businessStart`}
                            label={'Business Start/Joined'}
                            value={
                              formik?.values?.applicants[index].businessStart
                            }
                            error={
                              formik?.values?.applicants[index].businessStart
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            id={`applicants[${index}].pastExp`}
                            disabled={true}
                            label={'Past Experience'}
                            value={formik?.values?.applicants[index].pastExp}
                            error={formik?.values?.applicants[index].pastExp}
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            id={`applicants[${index}].overallExp`}
                            disabled={true}
                            label={'Overall Experience'}
                            value={formik?.values?.applicants[index].overallExp}
                            error={formik?.values?.applicants[index].overallExp}
                            handleChange={formik.handleChange}
                          />
                        </AGroupFields>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </form>
        </FormikProvider>
        <p className="w-full text-md text-main font-bold my-3">
          Residential & Ownership Details
        </p>
        <ASection>
          <div>
            <AGroupFields col={3}>
              <AInputField
                id={'resiAddress'}
                label={'Residence Address'}
                value={formik?.values?.residentInfo?.resiAddress}
                error={formik?.errors?.residentInfo?.resiAddress}
                formik={formik.getFieldProps('residentInfo.resiAddress')}
              />
              <ASingleSelect
                id={'resiStatus'}
                label={'Residence Status '}
                options={residenceStatus}
                value={formik?.values?.residentInfo?.resiStatus}
                error={formik?.errors?.residentInfo?.resiStatus}
                formik={formik.getFieldProps('residentInfo.resiStatus')}
              />
            </AGroupFields>
            <p className="w-full mb-3">Ownership Details</p>
            <AGroupFields>
              <AInputField
                id={'resiSince'}
                label={'Residing Since'}
                value={formik?.values?.residentInfo?.resiSince}
                error={formik?.errors?.residentInfo?.resiSince}
                formik={formik.getFieldProps('residentInfo.resiSince')}
              />
              <AInputField
                id={'purchaseYear'}
                label={'Purchase Year'}
                value={formik?.values?.residentInfo?.purchaseYear}
                error={formik?.errors?.residentInfo?.purchaseYear}
                formik={formik.getFieldProps('residentInfo.purchaseYear')}
              />
              <AInputField
                id={'buildArea'}
                label={'Buildup Area'}
                value={formik?.values?.residentInfo?.buildArea}
                error={formik?.errors?.residentInfo?.buildArea}
                formik={formik.getFieldProps('residentInfo.buildArea')}
              />
              <AInputField
                id={'carpetArea'}
                label={'Carpet Area'}
                value={formik?.values?.residentInfo?.carpetArea}
                error={formik?.errors?.residentInfo?.carpetArea}
                formik={formik.getFieldProps('residentInfo.carpetArea')}
              />
              <AInputField
                id={'agrimentValue'}
                label={'Agrmnt. Value'}
                value={formik?.values?.residentInfo?.agrimentValue}
                error={formik?.errors?.residentInfo?.agrimentValue}
                formik={formik.getFieldProps('residentInfo.agrimentValue')}
              />
              <AInputField
                id={'purchaseValue'}
                label={'Purchase Value'}
                value={formik?.values?.residentInfo?.purchaseValue}
                error={formik?.errors?.residentInfo?.purchaseValue}
                formik={formik.getFieldProps('residentInfo.purchaseValue')}
              />
              <AInputField
                id={'marketValue'}
                label={'Market Value'}
                value={formik?.values?.residentInfo?.marketValue}
                error={formik?.errors?.residentInfo?.marketValue}
                formik={formik.getFieldProps('residentInfo.marketValue')}
              />
            </AGroupFields>
            <p className="w-full mb-3">Family Details</p>
            <FormikProvider value={formik}>
              <form>
                <FieldArray
                  name="residentInfo.familyDetails"
                  render={(tag) => (
                    <div>
                      {formik.values.residentInfo.familyDetails.length > 0 ? (
                        formik.values.residentInfo.familyDetails.map(
                          (item: any, index: any) => (
                            <div
                              key={item?.name}
                              className="flex items-center w-full gap-3 mb-3"
                            >
                              <div className="w-full border-2 rounded-lg pt-3 px-3">
                                <AGroupFields col={3}>
                                  <AInputField
                                    label={'Name'}
                                    id={`residentInfo.familyDetails[${index}].name`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].name
                                    }
                                    error={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].name
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                  <ASingleSelect
                                    label={'Reation'}
                                    options={familyRealtion}
                                    id={`residentInfo.familyDetails[${index}].relation`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].relation
                                    }
                                    error={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].relation
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                  <ASingleSelect
                                    label={'Earning Status'}
                                    options={earningStatus}
                                    id={`residentInfo.familyDetails[${index}].earningStatus`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].earningStatus
                                    }
                                    error={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].earningStatus
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                </AGroupFields>
                              </div>
                              <AddTagFooter
                                addTag={() => tag.push(familyInfo)}
                                removeTag={() => tag.remove(index)}
                              />
                            </div>
                          ),
                        )
                      ) : (
                        <AddTagButton
                          title={'Add Family Member'}
                          addTag={() => tag.push(familyInfo)}
                        />
                      )}
                    </div>
                  )}
                />
              </form>
            </FormikProvider>
          </div>
        </ASection>
      </div>
      <AStepperPagination
        steps={steps}
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={() => formik.handleSubmit()}
      />
    </>
  );
};

export default PersonalDetails;
