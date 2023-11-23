import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import HomeIcon from '../../assets/images/icon/home.svg';
import LogoDark from '../../assets/images/logo/logo.png';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { authentication, setToken } from '../../services';
import AInputField from '../../components-global/AInputField';
import ACheckbox from '../../components-global/ACheckbox';
import AButton from '../../components-global/AButton';
import {
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [isRembember, setIsRembember] = useState<any>(false);
  const [showPassword, setShowPassword] = useState<any>(false);
  const token: any = document.cookie?.replace('token=', '');

  const rememberMe = (isChecked: boolean, email: string, password: string) => {
    if (isChecked) {
      localStorage.setItem('isRembember', isChecked.toString());
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.setItem('isRembember', isChecked.toString());
      localStorage.setItem('email', '');
      localStorage.setItem('password', '');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: 'erabhishek17jain@gmail.com',
      password: 'abhishek@123',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      let signinPromise = authentication(
        {
          email: values.email,
          password: values.password,
        },
        '',
      );
      signinPromise.then((res: any) => {
        toast.success(<b>SignIn Successfully...!</b>);
        let { token } = res.data;
        setToken(token);
        rememberMe(isRembember, values.email, values.password);
        navigate('/dashboard');
      });
    },
  });

  useEffect(() => {
    if (token !== '') {
      navigate('/dashboard');
    } else {
      setToken('');
      setIsRembember(
        JSON.parse(localStorage.getItem('isRembember') || 'false'),
      );
      formik.setFieldValue('email', localStorage.getItem('email') || '');
      formik.setFieldValue('password', localStorage.getItem('password') || '');
    }
  }, []);

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

              <h2 className="mb-9 text-2xl font-bold text-main xsm:text-title-xl2 text-center lg:text-left">
                Sign In to Asbsca
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <AInputField
                  type={'text'}
                  id={'email'}
                  label={'Email'}
                  formik={formik.getFieldProps('email')}
                  icon={<UserIcon className="h-4 w-4" />}
                />
                <AInputField
                  type={showPassword ? 'text' : 'password'}
                  id={'password'}
                  label={'Password'}
                  formik={formik.getFieldProps('password')}
                  icon={
                    <div onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <EyeIcon className="h-4 w-4" />
                      ) : (
                        <EyeSlashIcon className="h-4 w-4" />
                      )}
                    </div>
                  }
                />

                <div className="flex justify-between mb-5">
                  <ACheckbox
                    id={'rememberMe'}
                    label={'Remember me'}
                    checked={isRembember}
                    handleChecked={(e: any) => setIsRembember(e.target.checked)}
                  />
                  <a href="#" className="text-sm text-main">
                    Forget password?
                  </a>
                </div>
                <AButton
                  type={'submit'}
                  label={'Sign In'}
                  variant={'full'}
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

export default SignIn;
