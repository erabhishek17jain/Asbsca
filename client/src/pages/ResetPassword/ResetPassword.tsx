import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import HomeIcon from '../../assets/images/icon/home.svg';
import LogoDark from '../../assets/images/logo/logo.png';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { signin } from '../../services';
import { useEffect } from 'react';
import AInputField from '../../components-global/AInputField';
import AButton from '../../components-global/AButton';
import { ArrowRightOnRectangleIcon,  KeyIcon } from '@heroicons/react/24/solid';

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      let resetPromise = signin({
        username: values.username,
        password: values.password,
      });
      toast.promise(resetPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });
      resetPromise.then((res: any) => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/signin');
      });
    },
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center h-screen">
          <div className="hidden w-full lg:block lg:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
                <img className="hidden" src={Logo} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Create Business Analysis Report with us based on Bank Loan
                Application.
              </p>

              <span className="mt-15 inline-block">
                <img src={HomeIcon} alt="Logo" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke lg:w-1/2 lg:border-l-2">
            <div className="w-full p-4 sm:p-12.5 lg:p-17.5">
              <Link
                className="flex lg:hidden mb-5.5 inline-block text-center justify-center"
                to="/"
              >
                <img className="hidden" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <h2 className="mb-9 text-2xl font-bold text-black xsm:text-title-xl2 text-center lg:text-left">
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
                  label={'Save Password'}
                  icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
