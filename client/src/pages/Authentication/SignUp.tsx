import { Link, useNavigate } from 'react-router-dom';
import Home from '../../assets/images/icon/home.svg';
import Logo from '../../assets/images/logo/logo.png';
import LogoDark from '../../assets/images/logo/logo.png';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import convertToBase64 from '../../helper/convert';
import { getUsername, registerUser } from '../../helper/helper';
import { useEffect, useState } from 'react';
import userSix from '../../assets/images/logo/logo-dark.png';
import { fetchCurrentUserAsync } from '../../slices/usersSlice';
import { useDispatch } from 'react-redux';
import { CameraIcon, EnvelopeIcon, EyeSlashIcon, UserIcon } from '@heroicons/react/24/solid';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const onUpload = async (e: any) => {
    const base64: any = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });
      registerPromise.then(function () {
        navigate('/auth/signin');
      });
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUsername()
        .then((response: any) => {
          console.log(response);
          if (response?.username !== '') {
            dispatch(fetchCurrentUserAsync(response?.username));
            navigate('/dashboard');
          }
        })
    }
  }, []);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center h-screen">
          <div className="hidden w-full lg:block lg:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>
              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
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
                Sign Up to Asbsca
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="flex gap-6 mb-4">
                  <div className="relative mt-4.5 h-20 w-20 rounded-full">
                    <img src={file || userSix} alt="profile" />
                    <label
                      htmlFor="profile"
                      className="absolute bottom-1.5 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#02385e] text-white hover:bg-opacity-90"
                    >
                      <CameraIcon className="h-4 w-4" />
                      <input
                        onChange={onUpload}
                        type="file"
                        name="profile"
                        id="profile"
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        {...formik.getFieldProps('fullname')}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <UserIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...formik.getFieldProps('username')}
                      placeholder="Enter your username"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <UserIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...formik.getFieldProps('email')}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <EnvelopeIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...formik.getFieldProps('password')}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <EyeSlashIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-[#02385e] p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-[#02385e]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
