import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import AInputField from '../../components-global/AInputField';
import AButton from '../../components-global/AButton';
import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  KeyIcon,
} from '@heroicons/react/24/solid';
import { forgotPassword, selfRegister, setAsbdToken } from '../../services';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      let resetPromise = forgotPassword(values, '');
      resetPromise
        .then(() => {
          setIsSubmit(true);
          toast.success(<b>Please check inbox to get password reset link!</b>);
        })
        .catch((e) => {
          toast.error(<b>{e?.error?.response?.data?.message}</b>);
        });
    },
  });

  return (
    <div className="p-4 text-center">
      <p className="mb-8 2xl:px-20">
        Share your register email address and check your inbox to get password
        reset link.
      </p>
      {!isSubmit ? (
        <form onSubmit={formik.handleSubmit}>
          <AInputField
            id={'email'}
            label={'Registered Email'}
            value={formik.values.email}
            error={formik.errors.email}
            handleChange={formik.handleChange}
            icon={<EnvelopeIcon className="h-4 w-4" />}
          />
          <AButton
            type={'submit'}
            variant={'full'}
            label={'Send Email'}
            icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
          />
        </form>
      ) : (
        <AButton
          label={'Login'}
          variant={'full'}
          action={() => {
            navigate('/signin');
          }}
          icon={
            <ArrowRightOnRectangleIcon className="h-5 w-5 stroke-main stroke-1" />
          }
        />
      )}
    </div>
  );
};

export const ResetPassword = ({ isFirstPassword, asbsToken }: any) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required('This field is required'),
    confirmPassword: Yup.string().required('This field is required'),
  });

  const validateFunction = async (values: any) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      asbsToken: '',
      newPassword: '',
      confirmPassword: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: validateFunction,
    validationSchema: validationSchema,

    onSubmit: async (values: any) => {
      values['password'] = values.newPassword;
      delete values.newPassword;
      delete values.confirmPassword;
      let resetPromise = selfRegister(values, '');
      resetPromise
        .then((res: any) => {
          let { token } = res.data;
          setAsbdToken(token);
          navigate(isFirstPassword ? '/dashboard' : '/profile');
          toast.success(<b>Password Saved Successfully...!</b>);
        })
        .catch((e) => {
          toast.error(<b>{e?.error?.response?.data?.message}</b>);
        });
    },
  });

  useEffect(() => {
    formik.setFieldValue('asbsToken', asbsToken);
  }, []);

  return (
    <div className="p-4 text-left">
      <h2 className="mb-9 text-2xl font-bold text-main xsm:text-title-xl2 text-center">
        Create New Password
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <AInputField
          id={'newPassword'}
          label={'New Password'}
          value={formik.values.newPassword}
          error={formik.errors.newPassword}
          handleChange={formik.handleChange}
          icon={<KeyIcon className="h-4 w-4" />}
        />
        <AInputField
          type={'password'}
          id={'confirmPassword'}
          label={'Confirm Password'}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          handleChange={formik.handleChange}
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
  const asbsToken: any = document.cookie?.replace('asbsToken=', '');
  return (
    <>
      <ABreadcrumb pageName="Change Password" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white shadow-lg px-5 py-5">
        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
          <ResetPassword isFirstPassword={false} asbsToken={asbsToken} />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
