import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import HomeIcon from '../../assets/images/icon/home.svg';
import LogoDark from '../../assets/images/logo/logo.png';
import { ResetPassword } from '../ChangePassword/ChangePassword';
import { useEffect } from 'react';
import { setToken } from '../../services';

const Hero = () => {
  const location = useLocation();
  const { search } = location;
  const token = search.slice(7);

  useEffect(() => {
    if (token !== '') {
      setToken(token);
    }
  }, [search]);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap justify-center items-center h-screen">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
            <div className={`p-4 ${token ? 'text-left' : 'text-center'}`}>
              <Link className="mb-5.5 inline-block w-80" to="/">
                <img className="hidden" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>
              {token ? (
                <ResetPassword isFirstPassword={true} token={token} />
              ) : (
                <>
                  <p className="2xl:px-20">
                    Create Business Analysis Report with us based on Bank Loan
                    Application.
                  </p>

                  <span className="flex justify-center w-full mt-10 inline-block">
                    <img src={HomeIcon} alt="Logo" />
                  </span>

                  <Link
                    to="/signin"
                    className="mt-12 w-90 inline-flex items-center justify-center gap-2.5 rounded-md bg-main py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
