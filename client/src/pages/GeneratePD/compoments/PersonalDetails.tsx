import { useState } from 'react';
import AInputField from '../../../components-global/AInputField';
import ASingleSelect from '../../../components-global/ASingleSelect';
import {
  AddTagButton,
  AddTagHeader,
  AddTagPlusMinusRight,
} from '../../../components-global/ATags';
import ADatePicker from '../../../components-global/ADatePicker';
import ASection from '../../../components-global/ASection';
import { UserIcon } from '@heroicons/react/24/solid';
import AGroupFields from '../../../components-global/AGroupFields';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AStepperPagination } from '../../../components-global/AStepper';
import { qualification, residenceStatus, tagInfo } from '../constants';

const PersonalDetails = ({
  steps,
  payloads,
  activeStep,
  handlePrev,
  handleNext,
  setPayloads,
}: any) => {
  const [applicantList, setApplicantList] = useState<any>([
    { ...tagInfo, id: 'app1', title: 'Applicant' },
  ]);
  const [familyDetails, setFamilyDetails] = useState<any>([]);

  const initialValues = {
    applicants: [
      {
        name: '',
        dobDoi: '',
        qualification: '',
        natureOfBusiness: '',
        birthYear: '',
        studyFinish: '',
        businessStart: '',
        pastExp: '',
        overallExp: '',
      },
    ],
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
      familyDetails: [
        {
          name: '',
          relation: '',
          earningStatus: '',
        },
      ],
    },
  };

  const validationSchema = Yup.object().shape({});

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

  const addCoApplicants = (tags: any) => {
    applicantList.push({
      ...tagInfo,
      id: `app${tags.length + 1}`,
      title: `Co-Applicants ${tags.length + 1}`,
    });
    setApplicantList([...tags]);
  };

  const addFamilyDetails = (tags: any) => {
    familyDetails.push({
      ...tagInfo,
      id: `fam${tags.length + 1}`,
    });
    setFamilyDetails([...tags]);
  };

  return (
    <>
      <div className="absolute top-12 bottom-19 overflow-auto w-full">
        <p className="w-full text-md text-main font-bold mb-3">
          Applicant's Details
        </p>
        {applicantList.length > 0 ? (
          applicantList?.map((item: any) => (
            <div className="flex flex-col items-center mb-3" key={item?.id}>
              <AddTagHeader
                item={item}
                tags={applicantList}
                addTag={addCoApplicants}
                setTags={setApplicantList}
              />
              {item?.isOpen && (
                <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
                  <AGroupFields>
                    <AInputField
                      id={'name'}
                      label={'Name'}
                      icon={<UserIcon className="h-4 w-4" />}
                    />
                    <ADatePicker
                      type={'date'}
                      id={'datePicker'}
                      label={'Date of Birth/Incorporation'}
                    />
                    <ASingleSelect
                      id={'select'}
                      label={'Qualification'}
                      options={qualification}
                    />
                    <ASingleSelect
                      id={'select'}
                      label={'Nature of Business'}
                      options={[{ label: 'India', value: 'india' }]}
                    />
                    <AInputField id={'birthYear'} label={'Birth Year'} />
                    <AInputField id={'studyFinish'} label={'Study Finish '} />
                    <AInputField
                      id={'bussStartJoined'}
                      label={'Business Start/Joined'}
                    />
                    <AInputField
                      id={'expPast'}
                      disabled={true}
                      label={'Past Experience'}
                    />
                    <AInputField
                      id={'expOverall'}
                      disabled={true}
                      label={'Overall Experience'}
                    />
                  </AGroupFields>
                </div>
              )}
            </div>
          ))
        ) : (
          <AddTagButton
            title={'Add Applicant'}
            addLoan={() => addCoApplicants(applicantList)}
          />
        )}
        <p className="w-full text-md text-main font-bold my-3">
          Residential & Ownership Details
        </p>
        <ASection>
          <div>
            <AGroupFields col={3}>
              <AInputField
                id={'resiAddress'}
                label={'Residence Address'}
                error={formik?.errors?.residentInfo?.resiAddress}
                formik={formik.getFieldProps('residentInfo.resiAddress')}
              />
              <ASingleSelect
                id={'resiStatus'}
                label={'Residence Status '}
                options={residenceStatus}
                error={formik?.errors?.residentInfo?.resiStatus}
                formik={formik.getFieldProps('residentInfo.resiStatus')}
              />
            </AGroupFields>
            <p className="w-full mb-3">Ownership Details</p>
            <AGroupFields>
              <AInputField
                id={'resiSince'}
                label={'Residing Since'}
                error={formik?.errors?.residentInfo?.resiSince}
                formik={formik.getFieldProps('residentInfo.resiSince')}
              />
              <AInputField
                id={'purchaseYear'}
                label={'Purchase Year'}
                error={formik?.errors?.residentInfo?.purchaseYear}
                formik={formik.getFieldProps('residentInfo.purchaseYear')}
              />
              <AInputField
                id={'buildArea'}
                label={'Buildup Area'}
                error={formik?.errors?.residentInfo?.buildArea}
                formik={formik.getFieldProps('residentInfo.buildArea')}
              />
              <AInputField
                id={'carpetArea'}
                label={'Carpet Area'}
                error={formik?.errors?.residentInfo?.carpetArea}
                formik={formik.getFieldProps('residentInfo.carpetArea')}
              />
              <AInputField
                id={'agrimentValue'}
                label={'Agrmnt. Value'}
                error={formik?.errors?.residentInfo?.agrimentValue}
                formik={formik.getFieldProps('residentInfo.agrimentValue')}
              />
              <AInputField
                id={'purchaseValue'}
                label={'Purchase Value'}
                error={formik?.errors?.residentInfo?.purchaseValue}
                formik={formik.getFieldProps('residentInfo.purchaseValue')}
              />
              <AInputField
                id={'marketValue'}
                label={'Market Value'}
                error={formik?.errors?.residentInfo?.marketValue}
                formik={formik.getFieldProps('residentInfo.marketValue')}
              />
            </AGroupFields>
            <p className="w-full mb-3">Family Details</p>
            {familyDetails.length > 0 ? (
              familyDetails?.map((item: any) => (
                <div
                  className="flex items-center w-full gap-3 mb-3"
                  key={item?.id}
                >
                  <div className="w-full border-2 rounded-lg pt-3 px-3">
                    <AGroupFields col={3}>
                      <AInputField type={'text'} name={'name'} label={'Name'} />
                      <ASingleSelect
                        name={'select'}
                        label={'Reation'}
                        options={[{ label: 'India', value: 'india' }]}
                      />
                      <ASingleSelect
                        name={'select'}
                        label={'Earning Status'}
                        options={[{ label: 'India', value: 'india' }]}
                      />
                    </AGroupFields>
                  </div>
                  <AddTagPlusMinusRight
                    item={item}
                    tags={familyDetails}
                    addTag={addFamilyDetails}
                    setTags={setFamilyDetails}
                  />
                </div>
              ))
            ) : (
              <AddTagButton
                title={'Add Family Member'}
                addLoan={() => addFamilyDetails(familyDetails)}
              />
            )}
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
