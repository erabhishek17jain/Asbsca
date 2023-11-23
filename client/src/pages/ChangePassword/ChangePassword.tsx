import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import AInputField from '../../components-global/AInputField';
import AButton from '../../components-global/AButton';
import { ArrowRightOnRectangleIcon, KeyIcon } from '@heroicons/react/24/solid';
import { selfRegister, setToken } from '../../services';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import * as Yup from 'yup';
import { useEffect } from 'react';

export const ResetPassword = ({ isFirstPassword, token }: any) => {
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
      token: '',
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
        .then((res:any) => {
          let { token } = res.data;
          setToken(token);
          navigate(isFirstPassword ? '/dashboard' : '/profile');
          toast.success(<b>Password Saved Successfully...!</b>);
        })
        .catch((e) => {
          toast.error(<b>{e?.error?.response?.data?.message}</b>);
        });
    },
  });

  useEffect(() => {
    formik.setFieldValue('token', token);
  }, []);

  return (
    <div className="p-4 text-left">
      <h2 className="mb-9 text-2xl font-bold text-main xsm:text-title-xl2 text-center">
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
  const token: any = document.cookie?.replace('token=', '');
  return (
    <>
      <ABreadcrumb pageName="Change Password" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-grey-700 shadow-lg px-5 py-5">
        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
          <ResetPassword isFirstPassword={false} token={token} />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
