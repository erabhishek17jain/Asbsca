import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import Home from '../../assets/images/icon/home.svg';
import LogoDark from '../../assets/images/logo/logo.png';
import { usernameValidate } from '../../helper/validate';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { getUsername, verifyPassword } from '../../helper/helper';
import { useEffect } from 'react';
import { fetchCurrentUserAsync } from '../../slices/usersSlice';
import { useDispatch } from 'react-redux';
import AInputField from '../../components-global/AInputField';
import ACheckbox from '../../components-global/ACheckbox';
import AButton from '../../components-global/AButton';
import { EyeSlashIcon, UserIcon } from '@heroicons/react/24/solid';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: 'abhishek',
      password: 'adminn@123',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: any) => {
      let loginPromise = verifyPassword({
        username: values.username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res: any) => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/dashboard');
      });
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUsername().then((response: any) => {
        console.log(response);
        if (response?.username !== '') {
          dispatch(fetchCurrentUserAsync(response?.username));
          navigate('/dashboard');
        }
      });
    }
  }, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center h-screen">
          <div className="hidden w-full lg:block lg:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
                <img className="hidden dark:block" src={Logo} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Create Business Analysis Report with us based on Bank Loan
                Application.
              </p>

              <span className="mt-15 inline-block">
                <img src={Home} alt="Logo" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark lg:w-1/2 lg:border-l-2">
            <div className="w-full p-4 sm:p-12.5 lg:p-17.5">
              <Link
                className="flex lg:hidden mb-5.5 inline-block text-center justify-center"
                to="/"
              >
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white xsm:text-title-xl2 text-center lg:text-left">
                Sign In to Asbsca
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <AInputField
                  type={'text'}
                  id={'username'}
                  label={'Username'}
                  formik={formik.getFieldProps('username')}
                  icon={<UserIcon className="h-4 w-4" />}
                />
                <AInputField
                  type={'password'}
                  id={'password'}
                  label={'Password'}
                  formik={formik.getFieldProps('password')}
                  icon={<EyeSlashIcon className="h-4 w-4" />}
                />

                <div className="flex justify-between">
                  <ACheckbox name={'rememberMe'} label={'Remember me'} />
                  <a href="#" className="text-sm text-[#02385e]">
                    Forget password?
                  </a>
                </div>
                <AButton type={'submit'} label={'Save'} variant={'full'} />

                <p className="text-center">
                  Don’t have any account?{' '}
                  <Link to="/auth/signup" className="text-[#02385e]">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
