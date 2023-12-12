import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import {
  AddTagButton,
  AddTagFooter,
  AddTagHeader,
} from '../../../components-global/ATags';
import ADatePicker from '../../../components-global/ADatePicker';
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
import { useEffect } from 'react';

const applicantInfo = {
  title: 'Applicant Info',
  name: '',
  dobDoi: '',
  qualification: '',
  natureOfBusiness: '',
  birthYear: '',
  age: '',
  studyFinish: '',
  study: '',
  businessStart: '',
  currExp: 0,
  pastExp: 0,
  overallExp: 0,
} as any;

const resiInfo = {
  title: 'Residance Info',
  resiAddress: '',
  resiStatus: '',
  resiType: '',
  resiSince: '',
  buildArea: '',
  carpetArea: '',
  purchaseYear: '',
  agrimentValue: '',
  purchaseValue: '',
  marketValue: '',
  rentPm: '',
} as any;

const familyInfo = {
  name: '',
  relation: '',
  earningStatus: '',
} as any;

const initialValues = {
  applicants: [{ ...applicantInfo }] as any,
  residents: [{ ...resiInfo }] as any,
  familyDetails: [] as any,
};

const PersonalDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const validationSchema = Yup.object().shape({
    applicants: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('This field is required'),
        dobDoi: Yup.string().required('This field is required'),
        qualification: Yup.string().required('This field is required'),
        natureOfBusiness: Yup.string().required('This field is required'),
        studyFinish: Yup.number().required('This field is required'),
        businessStart: Yup.number().required('This field is required'),
      }),
    ),
    residents: Yup.array().of(
      Yup.object().shape({
        resiAddress: Yup.string().required('This field is required'),
        resiStatus: Yup.string().required('This field is required'),
        resiSince: Yup.number().required('This field is required'),
        buildArea: Yup.number().required('This field is required'),
        carpetArea: Yup.number().required('This field is required'),
      }),
    ),
    familyDetails: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('This field is required'),
        relation: Yup.string().required('This field is required'),
        earningStatus: Yup.string().required('This field is required'),
      }),
    ),
  });

  const onSubmit = async (values: any) => {
    values = await Object.assign(values);
    setPayloads({ ...payloads, personalDetails: { ...values } });
    handleNext();
  };

  const formik = useFormik({
    initialValues: initialValues,
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

  useEffect(() => {
    if (payloads.personalDetails) {
      formik.setFieldValue('applicants', payloads.personalDetails?.applicants);
      formik.setFieldValue('residents', payloads?.personalDetails?.residents);
      formik.setFieldValue(
        'familyDetails',
        payloads?.personalDetails?.familyDetails,
      );
    }
  }, [payloads]);

  const errorsAp: any = formik?.errors?.applicants;
  const errorsRe: any = formik?.errors?.residents;
  const errorsFd: any = formik?.errors?.familyDetails;

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
                  {formik?.values?.applicants.map(
                    (item: any, index: number) => (
                      <div className="mb-3">
                        <AddTagHeader
                          title={item?.title}
                          removeTag={() =>
                            formik?.values?.applicants.length !== 1 &&
                            tag.remove(index)
                          }
                          addTag={() =>
                            tag.push({
                              ...applicantInfo,
                              title: `Co-Applicant ${formik?.values?.applicants.length}`,
                            })
                          }
                        />
                        <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                          <AGroupFields>
                            <AInputField
                              id={`applicants[${index}].name`}
                              label={"Applicant's Name"}
                              value={formik?.values?.applicants[index]?.name}
                              error={
                                errorsAp?.length > 0 && errorsAp[index]?.name
                              }
                              handleChange={formik.handleChange}
                            />
                            <ADatePicker
                              id={`applicants[${index}].dobDoi`}
                              label={'Date of Birth/Incorporation'}
                              value={formik?.values?.applicants[index].dobDoi}
                              error={
                                errorsAp?.length > 0 && errorsAp[index]?.dobDoi
                              }
                              handleChange={handleDobDoi}
                            />
                            <ASingleSelect
                              id={`applicants[${index}].qualification`}
                              label={'Qualification'}
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
                              label={'Nature of Business'}
                              options={natureOfAddress}
                              value={
                                formik?.values?.applicants[index]
                                  .natureOfBusiness
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
                                disabled={true}
                                id={`applicants[${index}].birthYear`}
                                label={'Birth Year'}
                                value={
                                  formik?.values?.applicants[index].birthYear
                                }
                                error={
                                  errorsAp?.length > 0 &&
                                  errorsAp[index]?.birthYear
                                }
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
                                label={'Study Finish'}
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
                              label={'Business Start/Joined'}
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
                              label={'Overall Experience'}
                              value={
                                formik?.values?.applicants[index].overallExp
                              }
                              error={
                                errorsAp?.length > 0 &&
                                errorsAp[index]?.overallExp
                              }
                              handleChange={formik.handleChange}
                            />
                          </AGroupFields>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            />
          </form>
        </FormikProvider>
        <p className="w-full text-md text-main font-bold my-3">
          Residential & Ownership Details
        </p>
        <FormikProvider value={formik}>
          <form>
            <FieldArray
              name="residents"
              render={(tag) => (
                <div>
                  {formik?.values?.residents.map((item: any, index: number) => (
                    <div className="mb-3">
                      <AddTagHeader
                        title={item?.title}
                        removeTag={() =>
                          formik?.values?.residents.length !== 1 &&
                          tag.remove(index)
                        }
                        addTag={() =>
                          tag.push({
                            ...resiInfo,
                            title: 'Residance Address',
                          })
                        }
                      />
                      <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3 border-stroke">
                        <AGroupFields col={3}>
                          <AInputField
                            id={`residents[${index}].resiAddress`}
                            label={'Residence Address'}
                            value={
                              formik?.values?.residents[index]?.resiAddress
                            }
                            error={
                              errorsRe?.length > 0 &&
                              errorsRe[index]?.resiAddress
                            }
                            handleChange={formik.handleChange}
                          />
                          <ASingleSelect
                            label={'Residence Status'}
                            options={residenceStatus}
                            id={`residents[${index}].resiStatus`}
                            value={formik?.values?.residents[index]?.resiStatus}
                            error={
                              errorsRe?.length > 0 &&
                              errorsRe[index]?.resiStatus
                            }
                            handleChange={handleResiStatus}
                          />
                          <ASingleSelect
                            disabled={true}
                            label={'Residence Type'}
                            options={residanceType}
                            id={`residents[${index}].resiType`}
                            value={formik?.values?.residents[index]?.resiType}
                            error={
                              errorsRe?.length > 0 && errorsRe[index]?.resiType
                            }
                            handleChange={formik.handleChange}
                          />
                        </AGroupFields>
                        <p className="w-full mb-3">Ownership Details</p>
                        <AGroupFields>
                          <AInputField
                            type={'number'}
                            id={`residents[${index}].resiSince`}
                            label={'Residing Since'}
                            value={formik?.values?.residents[index]?.resiSince}
                            error={
                              errorsRe?.length > 0 && errorsRe[index]?.resiSince
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            type={'number'}
                            id={`residents[${index}].buildArea`}
                            label={'Build-up Area'}
                            rightLabel={'(Sq. Ft.)'}
                            value={formik?.values?.residents[index]?.buildArea}
                            error={
                              errorsRe?.length > 0 && errorsRe[index]?.buildArea
                            }
                            handleChange={formik.handleChange}
                          />
                          <AInputField
                            type={'number'}
                            id={`residents[${index}].carpetArea`}
                            label={'Carpet Area'}
                            rightLabel={'(Sq. Ft.)'}
                            value={formik?.values?.residents[index]?.carpetArea}
                            error={
                              errorsRe?.length > 0 &&
                              errorsRe[index]?.carpetArea
                            }
                            handleChange={formik.handleChange}
                          />
                          {formik?.values?.residents[index]?.resiStatus !==
                          'RentalN' ? (
                            <>
                              <AInputField
                                type={'number'}
                                id={`residents[${index}].purchaseYear`}
                                label={'Purchase Year'}
                                value={
                                  formik?.values?.residents[index]?.purchaseYear
                                }
                                error={
                                  errorsRe?.length > 0 &&
                                  errorsRe[index]?.purchaseYear
                                }
                                handleChange={formik.handleChange}
                              />
                              <AInputField
                                type={'number'}
                                rightLabel={'(In Lakhs)'}
                                id={`residents[${index}].agrimentValue`}
                                label={'Agreement. Value'}
                                value={
                                  formik?.values?.residents[index]
                                    ?.agrimentValue
                                }
                                error={
                                  errorsRe?.length > 0 &&
                                  errorsRe[index]?.agrimentValue
                                }
                                handleChange={formik.handleChange}
                              />
                              <AInputField
                                type={'number'}
                                rightLabel={'(In Lakhs)'}
                                id={`residents[${index}].purchaseValue`}
                                label={'Purchase Value'}
                                value={
                                  formik?.values?.residents[index]
                                    ?.purchaseValue
                                }
                                error={
                                  errorsRe?.length > 0 &&
                                  errorsRe[index]?.purchaseValue
                                }
                                handleChange={formik.handleChange}
                              />
                              <AInputField
                                type={'number'}
                                rightLabel={'(In Lakhs)'}
                                id={`residents[${index}].marketValue`}
                                label={'Market Value'}
                                value={
                                  formik?.values?.residents[index]?.marketValue
                                }
                                error={
                                  errorsRe?.length > 0 &&
                                  errorsRe[index]?.marketValue
                                }
                                handleChange={formik.handleChange}
                              />
                            </>
                          ) : (
                            <AInputField
                              type={'number'}
                              id={`residents[${index}].rentPm`}
                              label={'Rent P.M.'}
                              rightLabel={'(In Lakhs)'}
                              value={formik?.values?.residents[index]?.rentPm}
                              error={
                                errorsRe?.length > 0 && errorsRe[index]?.rentPm
                              }
                              handleChange={formik.handleChange}
                            />
                          )}
                        </AGroupFields>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </form>
        </FormikProvider>
        <p className="w-full mb-3">Family Details</p>
        <FormikProvider value={formik}>
          <form>
            <FieldArray
              name="familyDetails"
              render={(tag) => (
                <div>
                  {formik?.values?.familyDetails?.length > 0 ? (
                    formik?.values?.familyDetails?.map(
                      (item: any, index: any) => (
                        <div
                          key={item?.name}
                          className="flex items-center w-full gap-3 mb-3"
                        >
                          <div className="w-full border-2 rounded-lg pt-3 px-3">
                            <AGroupFields col={3}>
                              <ASingleSelect
                                label={'Name'}
                                id={`familyDetails[${index}].name`}
                                value={
                                  formik?.values?.familyDetails[index].name
                                }
                                error={
                                  errorsFd?.length > 0 && errorsFd[index].name
                                }
                                options={formik?.values?.applicants.map(
                                  (item: any) => {
                                    return {
                                      label: item.name,
                                      value: item.name,
                                    };
                                  },
                                )}
                                handleChange={formik.handleChange}
                              />
                              <ASingleSelect
                                label={'Reation'}
                                options={familyRealtion}
                                id={`familyDetails[${index}].relation`}
                                value={
                                  formik?.values?.familyDetails[index].relation
                                }
                                error={
                                  errorsFd?.length > 0 &&
                                  errorsFd[index].relation
                                }
                                handleChange={formik.handleChange}
                              />
                              <ASingleSelect
                                label={'Earning Status'}
                                options={earningStatus}
                                id={`familyDetails[${index}].earningStatus`}
                                value={
                                  formik?.values?.familyDetails[index]
                                    .earningStatus
                                }
                                error={
                                  errorsFd?.length > 0 &&
                                  errorsFd[index].earningStatus
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
