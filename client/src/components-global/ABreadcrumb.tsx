import { Link } from 'react-router-dom';

const ABreadcrumb = ({ pageName }: any) => {
  return (
    <div className="mb-5 flex flex-col gap-3 xsm:flex-row xsm:items-center xsm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black">{pageName}</h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/dashboard">Dashboard /</Link>
          </li>
          <li className="text-main">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default ABreadcrumb;
