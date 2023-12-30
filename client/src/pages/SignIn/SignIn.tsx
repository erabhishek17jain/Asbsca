import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import HomeIcon from '../../assets/images/icon/home.svg';
import LogoDark from '../../assets/images/logo/logo.png';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { authentication, setAsbdToken } from '../../services';
import AInputField from '../../components-global/AInputField';
import ACheckbox from '../../components-global/ACheckbox';
import AButton from '../../components-global/AButton';
import {
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { useLayoutEffect, useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [isRembember, setIsRembember] = useState<any>(false);
  const [showPassword, setShowPassword] = useState<any>(false);
  const cookie: any = document.cookie;

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
      email: '',
      password: '',
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
        setAsbdToken(token);
        rememberMe(isRembember, values.email, values.password);
        navigate('/dashboard');
      });
    },
  });

  useLayoutEffect(() => {
    if (cookie.includes('asbsToken')) {
      const asbsToken = cookie?.replace('asbsToken=', '');
      if (asbsToken !== '') {
        navigate('/dashboard');
      } else {
        setAsbdToken('');
        setIsRembember(
          JSON.parse(localStorage.getItem('isRembember') || 'false'),
        );
        formik.setFieldValue('email', localStorage.getItem('email') || '');
        formik.setFieldValue(
          'password',
          localStorage.getItem('password') || '',
        );
      }
    } else {
      setAsbdToken('');
    }
  }, [cookie]);

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
                  id={'email'}
                  type={'email'}
                  label={'Email'}
                  value={formik.values.email}
                  error={formik.errors.email}
                  handleChange={formik.handleChange}
                  icon={<UserIcon className="h-4 w-4" />}
                />
                <AInputField
                  id={'password'}
                  type={showPassword ? 'text' : 'password'}
                  label={'Password'}
                  value={formik.values.password}
                  error={formik.errors.password}
                  handleChange={formik.handleChange}
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
                  <Link to="/?email" className="text-sm text-main">
                    Forget password?
                  </Link>
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
