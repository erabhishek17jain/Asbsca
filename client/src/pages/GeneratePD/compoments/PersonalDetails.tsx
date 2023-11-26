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
  residanceType,
  residenceStatus,
} from '../constants';
import moment from 'moment';

const applicantInfo = {
  title: 'Applicant',
  name: '',
  dobDoi: '',
  qualification: '',
  natureOfBusiness: '',
  birthYear: '',
  age: '',
  studyFinish: '',
  study: '',
  businessStart: '',
  currExp: '',
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
      resiType: '',
      resiSince: '',
      purchaseYear: '',
      buildArea: '',
      carpetArea: '',
      agrimentValue: '',
      purchaseValue: '',
      marketValue: '',
      rentPm: '',
      familyDetails: [] as any,
    },
  };

  const validationSchema = Yup.object().shape({
    applicants: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('This field is required'),
        dobDoi: Yup.string().required('This field is required'),
        qualification: Yup.string().required('This field is required'),
        natureOfBusiness: Yup.string().required('This field is required'),
        birthYear: Yup.number().required('This field is required'),
        age: Yup.number().required('This field is required'),
        studyFinish: Yup.number().required('This field is required'),
        study: Yup.number().required('This field is required'),
        businessStart: Yup.number().required('This field is required'),
        currExp: Yup.number().required('This field is required'),
        pastExp: Yup.number().required('This field is required'),
        overallExp: Yup.number().required('This field is required'),
      }),
    ),
    residentInfo: Yup.object({
      resiAddress: Yup.string().required('This field is required'),
      resiStatus: Yup.string().required('This field is required'),
      resiSince: Yup.string().required('This field is required'),
      buildArea: Yup.number().required('This field is required'),
      carpetArea: Yup.number().required('This field is required'),
      familyDetails: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required('This field is required'),
          relation: Yup.string().required('This field is required'),
          earningStatus: Yup.string().required('This field is required'),
        }),
      ),
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

  const handleDobDoi = (e: any) => {
    const currentYear = moment().year();
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.birthYear`,
      parseInt(e.target.value.slice(0, 4)),
    );
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.age`,
      currentYear - parseInt(e.target.value.slice(0, 4)),
    );
    formik.handleChange(e);
  };

  const handleStudyFinish = (e: any) => {
    const currentYear = moment().year();
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.study`,
      currentYear - parseInt(e.target.value.slice(0, 4)),
    );
    formik.handleChange(e);
  };

  const handleBusinessStart = (e: any) => {
    const currentYear = moment().year();
    const studyFinish = formik.getFieldProps(
      `${e.target.id.slice(0, 13)}.studyFinish`,
    );
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.currExp`,
      currentYear - parseInt(e.target.value.slice(0, 4)),
    );
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.pastExp`,
      parseInt(e.target.value.slice(0, 4)) - parseInt(studyFinish?.value),
    );
    formik.setFieldValue(
      `${e.target.id.slice(0, 13)}.overallExp`,
      currentYear - parseInt(studyFinish?.value),
    );
    formik.handleChange(e);
  };

  const handleResiStatus = (e: any) => {
    formik.setFieldValue(
      `${e.target.id.slice(0, 12)}.resiType`,
      e.target.value.slice(-1),
    );
    formik.handleChange(e);
  };

  const errorsAp: any = formik?.errors?.applicants;
  const errorsRe: any = formik?.errors?.residentInfo;

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
                      <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                        <AGroupFields>
                          <AInputField
                            id={`applicants[${index}].name`}
                            label={"Applicant's Name*"}
                            value={formik?.values?.applicants[index]?.name}
                            error={
                              errorsAp?.length > 0 && errorsAp[index]?.name
                            }
                            handleChange={formik.handleChange}
                          />
                          <ADatePicker
                            id={`applicants[${index}].dobDoi`}
                            label={'Date of Birth/Incorporation*'}
                            value={formik?.values?.applicants[index].dobDoi}
                            error={
                              errorsAp?.length > 0 && errorsAp[index]?.dobDoi
                            }
                            handleChange={handleDobDoi}
                          />
                          <ASingleSelect
                            id={`applicants[${index}].qualification`}
                            label={'Qualification*'}
                            options={qualification}
                            value={
                              formik?.values?.applicants[index].qualification
                            }
                            error={
                              errorsAp?.length > 0 &&
                              errorsAp[index]?.qualification
                            }
                            handleChange={formik.handleChange}
                          />
                          <ASingleSelect
                            id={`applicants[${index}].natureOfBusiness`}
                            label={'Nature of Business*'}
                            options={natureOfAddress}
                            value={
                              formik?.values?.applicants[index].natureOfBusiness
                            }
                            error={
                              errorsAp?.length > 0 &&
                              errorsAp[index]?.natureOfBusiness
                            }
                            handleChange={formik.handleChange}
                          />
                          <div className="flex gap-2">
                            <AInputField
                              type={'number'}
                              id={`applicants[${index}].birthYear`}
                              label={'Birth Year*'}
                              value={
                                formik?.values?.applicants[index].birthYear
                              }
                              error={
                                errorsAp?.length > 0 &&
                                errorsAp[index]?.birthYear
                              }
                              disabled={true}
                              handleChange={formik.handleChange}
                            />
                            <AInputField
                              type={'number'}
                              id={`applicants[${index}].age`}
                              label={'Age'}
                              disabled={true}
                              value={formik?.values?.applicants[index].age}
                              error={
                                errorsAp?.length > 0 && errorsAp[index]?.age
                              }
                              handleChange={formik.handleChange}
                            />
                          </div>
                          <div className="flex gap-2">
                            <AInputField
                              type={'number'}
                              id={`applicants[${index}].studyFinish`}
                              label={'Study Finish*'}
                              value={
                                formik?.values?.applicants[index].studyFinish
                              }
                              error={
                                errorsAp?.length > 0 &&
                                errorsAp[index]?.studyFinish
                              }
                              handleChange={handleStudyFinish}
                            />
                            <AInputField
                              type={'number'}
                              id={`applicants[${index}].study`}
                              label={'Study'}
                              disabled={true}
                              value={formik?.values?.applicants[index].study}
                              error={
                                errorsAp?.length > 0 && errorsAp[index]?.study
                              }
                              handleChange={formik.handleChange}
                            />
                          </div>
                          <AInputField
                            type={'number'}
                            id={`applicants[${index}].businessStart`}
                            label={'Business Start/Joined*'}
                            value={
                              formik?.values?.applicants[index].businessStart
                            }
                            error={
                              errorsAp?.length > 0 &&
                              errorsAp[index]?.businessStart
                            }
                            handleChange={handleBusinessStart}
                          />
                          <AInputField
                            type={'number'}
                            id={`applicants[${index}].currExp`}
                            label={'Current Experiance'}
                            disabled={true}
                            value={formik?.values?.applicants[index].currExp}
                            error={
                              errorsAp?.length > 0 && errorsAp[index]?.currExp
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            type={'number'}
                            id={`applicants[${index}].pastExp`}
                            disabled={true}
                            label={'Past Experience'}
                            value={formik?.values?.applicants[index].pastExp}
                            error={
                              errorsAp?.length > 0 && errorsAp[index]?.pastExp
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            type={'number'}
                            id={`applicants[${index}].overallExp`}
                            disabled={true}
                            label={'Overall Experience'}
                            value={formik?.values?.applicants[index].overallExp}
                            error={
                              errorsAp?.length > 0 &&
                              errorsAp[index]?.overallExp
                            }
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
                id={'residentInfo.resiAddress'}
                label={'Residence Address*'}
                value={formik?.values?.residentInfo?.resiAddress}
                error={formik?.errors?.residentInfo?.resiAddress}
                handleChange={formik.handleChange}
              />
              <ASingleSelect
                id={'residentInfo.resiStatus'}
                label={'Residence Status*'}
                options={residenceStatus}
                value={formik?.values?.residentInfo?.resiStatus}
                error={formik?.errors?.residentInfo?.resiStatus}
                handleChange={handleResiStatus}
              />
              <ASingleSelect
                disabled={true}
                id={'residentInfo.resiType'}
                label={'Residence Type'}
                options={residanceType}
                value={formik?.values?.residentInfo?.resiType}
                error={formik?.errors?.residentInfo?.resiType}
                handleChange={formik.handleChange}
              />
            </AGroupFields>
            <p className="w-full mb-3">Ownership Details</p>
            <AGroupFields>
              <AInputField
                id={'residentInfo.resiSince'}
                label={'Residing Since*'}
                value={formik?.values?.residentInfo?.resiSince}
                error={formik?.errors?.residentInfo?.resiSince}
                handleChange={formik.handleChange}
              />
              {formik?.values?.residentInfo.resiStatus !== 'rentaln' && (
                <AInputField
                  id={'residentInfo.purchaseYear'}
                  label={'Purchase Year'}
                  value={formik?.values?.residentInfo?.purchaseYear}
                  error={formik?.errors?.residentInfo?.purchaseYear}
                  handleChange={formik.handleChange}
                />
              )}
              <AInputField
                type={'number'}
                id={'residentInfo.buildArea'}
                label={'Build-up Area*'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.residentInfo?.buildArea}
                error={formik?.errors?.residentInfo?.buildArea}
                handleChange={formik.handleChange}
              />
              <AInputField
                type={'number'}
                id={'residentInfo.carpetArea'}
                label={'Carpet Area*'}
                rightLabel={'(Sq. Ft.)'}
                value={formik?.values?.residentInfo?.carpetArea}
                error={formik?.errors?.residentInfo?.carpetArea}
                handleChange={formik.handleChange}
              />
              {formik?.values?.residentInfo.resiStatus === 'rentaln' ? (
                <AInputField
                  id={'residentInfo.rentPm'}
                  label={'Rent P.M.'}
                  value={formik?.values?.residentInfo?.rentPm}
                  error={formik?.errors?.residentInfo?.rentPm}
                  handleChange={formik.handleChange}
                />
              ) : (
                <>
                  <AInputField
                    id={'residentInfo.agrimentValue'}
                    label={'Agrmnt. Value'}
                    rightLabel={'(Lakhs)'}
                    value={formik?.values?.residentInfo?.agrimentValue}
                    error={formik?.errors?.residentInfo?.agrimentValue}
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    id={'residentInfo.purchaseValue'}
                    label={'Purchase Value'}
                    rightLabel={'(Lakhs)'}
                    value={formik?.values?.residentInfo?.purchaseValue}
                    error={formik?.errors?.residentInfo?.purchaseValue}
                    handleChange={formik.handleChange}
                  />
                  <AInputField
                    id={'residentInfo.marketValue'}
                    label={'Market Value'}
                    rightLabel={'(Lakhs)'}
                    value={formik?.values?.residentInfo?.marketValue}
                    error={formik?.errors?.residentInfo?.marketValue}
                    handleChange={formik.handleChange}
                  />
                </>
              )}
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
                                    label={'Name*'}
                                    id={`residentInfo.familyDetails[${index}].name`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].name
                                    }
                                    error={
                                      errorsRe?.familyDetails.length > 0 &&
                                      errorsRe?.familyDetails[index].name
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                  <ASingleSelect
                                    label={'Reation*'}
                                    options={familyRealtion}
                                    id={`residentInfo.familyDetails[${index}].relation`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].relation
                                    }
                                    error={
                                      errorsRe?.familyDetails.length > 0 &&
                                      errorsRe?.familyDetails[index].relation
                                    }
                                    handleChange={formik.handleChange}
                                  />
                                  <ASingleSelect
                                    label={'Earning Status*'}
                                    options={earningStatus}
                                    id={`residentInfo.familyDetails[${index}].earningStatus`}
                                    value={
                                      formik?.values?.residentInfo
                                        .familyDetails[index].earningStatus
                                    }
                                    error={
                                      errorsRe?.familyDetails.length > 0 &&
                                      errorsRe?.familyDetails[index]
                                        .earningStatus
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
