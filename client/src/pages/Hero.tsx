import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.png';
import Home from '../assets/images/icon/home.svg';
import LogoDark from '../assets/images/logo/logo.png';

const Hero = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center h-screen">
          <div className="w-full lg:block lg:w-full">
            <div className="p-4 text-center">
              <Link className="mb-5.5 inline-block w-80" to="/">
                <img className="hidden" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Create Business Analysis Report with us based on Bank Loan
                Application.
              </p>

              <span className="flex justify-center w-full mt-10 inline-block">
                <img src={Home} alt="Logo" />
              </span>

              <Link
                to="/auth/signin"
                className="mt-12 w-90 inline-flex items-center justify-center gap-2.5 rounded-md bg-main py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
