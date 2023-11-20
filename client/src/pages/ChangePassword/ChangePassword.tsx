import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import AInputField from '../../components-global/AInputField';
import AButton from '../../components-global/AButton';
import { ArrowRightOnRectangleIcon, KeyIcon } from '@heroicons/react/24/solid';
import { resetPassword } from '../../services';
import ABreadcrumb from '../../components-global/ABreadcrumb';

export const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      token: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values: any) => {
      let resetPromise = resetPassword(values);
      resetPromise
        .then(() => {
          navigate('/signin');
          toast.success(<b>Password Saved Successfully...!</b>);
        })
        .catch((e) => {
          toast.error(<b>{e?.error?.response?.data?.message}</b>);
        });
    },
  });

  useEffect(() => {}, []);
  return (
    <div className="p-4 text-left">
      <h2 className="mb-9 text-2xl font-bold text-black xsm:text-title-xl2 text-center">
        Create New Password
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <AInputField
          type={'text'}
          id={'newPassword'}
          label={'New Password'}
          formik={formik.getFieldProps('newPassword')}
          icon={<KeyIcon className="h-4 w-4" />}
        />
        <AInputField
          type={'password'}
          id={'confirmPassword'}
          label={'Confirm Password'}
          formik={formik.getFieldProps('confirmPassword')}
          icon={<KeyIcon className="h-4 w-4" />}
        />
        <AButton
          type={'submit'}
          variant={'full'}
          label={'Change Password'}
          icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
        />
      </form>
    </div>
  );
};
const ChangePassword = () => {
  return (
    <>
      <ABreadcrumb pageName="Change Password" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <div className="w-1/2">
          <ResetPassword />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
