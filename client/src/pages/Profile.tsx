import ABreadcrumb from '../components-global/ABreadcrumb';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import fireToast from '../hooks/fireToast';
import AInputField from '../components-global/AInputField';
import ATextField from '../components-global/ATextField';
import { useFormik } from 'formik';
import AButton from '../components-global/AButton';
import AProfileUpload from '../components-global/AProfileUpload';
import userSix from '../assets/images/logo/logo-dark.png';
import { CameraIcon, DevicePhoneMobileIcon, UserIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  const { userDetails } = useSelector((state: any) => state.users);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: 'abhishek',
      phoneNo: 'adminn@123',
      email: 'abhishek',
      address: 'abhishek',
    },
    validate: () => {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async () => {},
  });

  return (
    <>
      <ABreadcrumb pageName="Profile" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5">
        {!isEditProfile ? (
          <>
            <div className="relative z-20 h-30">
              <div className="absolute top-4 right-4 z-10 xsm:bottom-4 xsm:right-4">
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
            <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <img src={userDetails?.profile || userSix} alt="profile" />
                  <label
                    htmlFor="profile"
                    className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-main text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                  >
                    <CameraIcon className="h-4 w-4" />
                    <input
                      type="file"
                      name="profile"
                      id="profile"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-black">
                  {userDetails?.fullname}
                </h3>
                <p className="flex justify-center gap-4 font-medium my-4">
                  <span>{userDetails?.username}</span>
                  <span>{userDetails?.email}</span>
                  <span>{userDetails?.mobileNo}</span>
                </p>

                <div className="mx-auto max-w-180">
                  <h4 className="font-semibold text-black">
                    About Me
                  </h4>
                  <p className="mt-4.5">
                    {userDetails?.aboutMe
                      ? userDetails?.aboutMe
                      : 'Add more information about you.'}
                  </p>
                </div>

                <h4 className="font-semibold text-black mt-6">
                  PD Status
                </h4>
                <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1">
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
                    <span className="font-semibold text-black">
                      259
                    </span>
                    <span className="text-sm">Completed</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 xsm:flex-row">
                    <span className="font-semibold text-black">
                      2
                    </span>
                    <span className="text-sm">In Progress</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                    <span className="font-semibold text-black">
                      89%
                    </span>
                    <span className="text-sm">Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-sm px-5 py-5">
            <form action="#">
              <div className="mb-4 flex items-center gap-3 justify-center">
                <AProfileUpload />
                <AInputField
                  type={'text'}
                  id={'fullName'}
                  label={'Full Name'}
                  formik={formik.getFieldProps('fullName')}
                  icon={<UserIcon className="h-4 w-4" />}
                />
                <AInputField
                  type={'text'}
                  id={'phoneNo'}
                  label={'Phone Number'}
                  formik={formik.getFieldProps('phoneNo')}
                  icon={<DevicePhoneMobileIcon className="h-4 w-4" />}
                />
              </div>
              <AInputField
                type={'text'}
                id={'email'}
                label={'E-Mail'}
                formik={formik.getFieldProps('email')}
                icon={<></>}
              />
              <AInputField
                type={'text'}
                id={'username'}
                label={'Username'}
                formik={formik.getFieldProps('username')}
                icon={<></>}
              />
              <ATextField
                id={'aboutMe'}
                label={'About Me'}
                formik={formik.getFieldProps('aboutMe')}
                icon={<></>}
              />
              <div className="flex justify-end gap-4.5">
                <AButton
                  label={'Cancel'}
                  variant={'secondary'}
                  action={() => {
                    setIsEditProfile(false);
                  }}
                />
                <AButton
                  label={'Save'}
                  type={'submit'}
                  variant={'primary'}
                  action={fireToast}
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
