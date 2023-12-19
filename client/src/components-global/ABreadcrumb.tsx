import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ABreadcrumb = ({ pageName }: any) => {
  const navigate = useNavigate();
  const asbsToken: any = document.cookie?.replace('asbsToken=', '');

  useEffect(() => {
    if (asbsToken === '') {
      navigate('/signin');
    }
  }, []);

  return (
    <div className="mb-5 flex flex-col gap-3 xsm:flex-row xsm:items-center xsm:justify-between">
      <h2 className="text-title-md2 font-semibold text-main capitalize">
        {pageName}
      </h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/dashboard">Dashboard /</Link>
          </li>
          <li className="text-main capitalize">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default ABreadcrumb;
