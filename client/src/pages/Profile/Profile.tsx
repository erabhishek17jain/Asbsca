import ABreadcrumb from '../../components-global/ABreadcrumb';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AInputField from '../../components-global/AInputField';
import ATextField from '../../components-global/ATextField';
import { useFormik } from 'formik';
import AButton from '../../components-global/AButton';
import AProfileUpload from '../../components-global/AProfileUpload';
import {
  BookmarkIcon,
  CameraIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { selfUpdateUser } from '../../services';
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.users);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const initialValues = {
    ...userDetails,
  };

  const onSubmit = async (values: any) => {
    let payload = {
      about: values?.about,
      profile: values?.profile,
    };
    payload = await Object.assign(payload);
    let updateUserPromise = selfUpdateUser(payload);
    updateUserPromise
      .then((res: any) => {
        console.log(res.data);
        toast.success(<b>Profile updated sucessfully.</b>);
      })
      .catch((e: any) => {
        toast.error(<b>{e?.error?.response?.data?.message}</b>);
      });
  };

  const formikUser = useFormik({
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  return (
    <>
      <ABreadcrumb pageName="Profile" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        {!isEditProfile ? (
          <>
            <div className="relative z-20 h-30">
              <div className="absolute top-4 right-4 xsm:bottom-4 xsm:right-4">
                <label
                  htmlFor="cover"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded bg-main py-1.5 px-3 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                >
                  <span>
                    <CameraIcon className="h-4 w-4" />
                  </span>
                  <span
                    onClick={() => {
                      setIsEditProfile(true);
                    }}
                  >
                    Edit
                  </span>
                </label>
              </div>
            </div>
            <div className="px-4 pb-6 text-center">
              <div className="relative mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-40 sm:max-w-40 sm:p-3">
                <div className="relative rounded-full">
                  {userDetails?.profile ? (
                    <img
                      alt="profile"
                      src={userDetails?.profile}
                      className={`w-40 h-36 rounded-full border-6 p-0.5 ${
                        userDetails?.status === 'active'
                          ? 'border-meta3'
                          : 'border-meta1'
                      }`}
                    />
                  ) : (
                    <UserCircleIcon className="w-40 h-40" />
                  )}
                  <span
                    className={`absolute bottom-5 right-0.5 h-6 w-6 rounded-full border-2 border-white ${
                      userDetails?.status === 'active' ? 'bg-meta3' : 'bg-meta1'
                    }`}
                  ></span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-main">
                  {userDetails?.fullName}
                </h3>
                <p className="flex justify-center gap-3 font-medium my-4">
                  <span className="flex gap-2 items-center">
                    <UserIcon className="h-5 w-5" />
                    {userDetails?.username}
                  </span>
                  <span className="flex gap-2 items-center">
                    <EnvelopeIcon className="h-5 w-5" />
                    {userDetails?.email}
                  </span>
                  <span className="flex gap-2 items-center">
                    <PhoneIcon className="h-5 w-5" />
                    {userDetails?.mobile}
                  </span>
                </p>

                <div className="mx-auto max-w-180">
                  <h4 className="font-semibold text-main">About Me</h4>
                  <p className="mt-4.5">
                    {userDetails?.about
                      ? userDetails?.about
                      : 'Add more information about you.'}
                  </p>
                </div>

                <h4 className="font-semibold text-main mt-6">PD Status</h4>
                <div className="mx-auto mt-4.5 mb-5.5 grid max-w-lg grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1">
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
                    <span className="font-semibold text-main">
                      {userDetails?.completedPD}
                    </span>
                    <span className="text-sm">PD Completed</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
                    <span className="font-semibold text-main">
                      {userDetails?.assignedPD}
                    </span>
                    <span className="text-sm">PD Assigned</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                    <span className="font-semibold text-main">
                      {userDetails?.accuracy}
                    </span>
                    <span className="text-sm">Accuracy</span>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <AButton
                    variant="link"
                    label="Change Password"
                    action={() => {
                      navigate('/resetPassword');
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-sm px-5 py-5">
            <form action="#">
              <div className="mb-4 flex items-center gap-3 justify-center">
                <AProfileUpload
                  id={'profile'}
                  profile={userDetails?.profile}
                  formik={formikUser.getFieldProps('profile')}
                />
                <AInputField
                  id={'fullName'}
                  label={'Full Name'}
                  disabled={true}
                  value={formikUser.values.fullName}
                  error={formikUser.errors.fullName}
                  handleChange={formikUser.handleChange}
                  icon={<UserIcon className="h-4 w-4" />}
                />
                <AInputField
                  id={'mobile'}
                  label={'Mobile No'}
                  disabled={true}
                  value={formikUser.values.mobile}
                  error={formikUser.errors.mobile}
                  handleChange={formikUser.handleChange}
                  icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
                />
              </div>
              <div className="mb-4 flex items-center gap-3 justify-center">
                <AInputField
                  id={'email'}
                  label={'E-Mail'}
                  disabled={true}
                  value={formikUser.values.email}
                  error={formikUser.errors.email}
                  handleChange={formikUser.handleChange}
                  icon={<></>}
                />
                <AInputField
                  id={'username'}
                  label={'Employee ID'}
                  disabled={true}
                  value={formikUser.values.username}
                  error={formikUser.errors.username}
                  handleChange={formikUser.handleChange}
                  icon={<></>}
                />
              </div>
              <ATextField
                id={'about'}
                label={'About Me'}
                value={formikUser.values.about}
                error={formikUser.errors.about}
                handleChange={formikUser.handleChange}
                icon={<></>}
              />
              <div className="flex justify-end gap-3.5">
                <AButton
                  label={'Cancel'}
                  variant={'secondary'}
                  action={() => setIsEditProfile(false)}
                  icon={<XMarkIcon className="h-5 w-5 stroke-main stroke-1" />}
                />
                <AButton
                  label={'Save'}
                  variant={'primary'}
                  action={formikUser.handleSubmit}
                  icon={<BookmarkIcon className="h-5 w-5" />}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
