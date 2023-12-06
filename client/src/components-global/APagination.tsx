import AButton from './AButton';

const APagination = ({ meta, defaultFilters, setDefaultFilters }: any) => {
  const nextPage = () => {
    setDefaultFilters({ ...defaultFilters, page: parseInt(meta?.page) + 1 });
  };

  const previousPage = () => {
    setDefaultFilters({ ...defaultFilters, page: parseInt(meta?.page) - 1 });
  };

  return (
    <>
      <div className="block antialiased font-sans text-sm leading-normal text-main font-normal">
        Page {meta?.page ? meta?.page : 1} of{' '}
        {(meta?.count / meta?.limit === 0 || isNaN(meta?.count / meta?.limit))
          ? 1
          : Math.ceil(meta?.count / meta?.limit)}
      </div>
      <div className="flex gap-2">
        <AButton
          variant="small"
          label={'Previous'}
          action={previousPage}
          disabled={meta?.page == 1}
        />
        <AButton
          label={'Next'}
          variant="small"
          action={nextPage}
          disabled={Math.floor(meta?.count / meta?.page) < 10}
        />
      </div>
    </>
  );
};

export default APagination;
