import ASingleSelect from '../../../components-global/ASingleSelect';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOptions } from '../../../utils';
import { loanTypes, loans } from '../constants';

const LoanDetails = ({ formik }: any) => {
  const { allClients } = useSelector((state: any) => state.clients);
  const [clientOptions, setClientOptions] = useState<any>([]);
  useEffect(() => {
    setClientOptions(getOptions(allClients));
  }, [allClients]);
  return (
    <div className="flex flex-col w-[60%] py-4">
      <ASingleSelect
        name={'bankName'}
        label={'Bank Name*'}
        options={clientOptions}
        variant={'horizantal'}
        error={formik.errors.loanDetails}
        formik={formik.getFieldProps('loanDetails')}
      />
      <ASingleSelect
        name={'loan'}
        label={'Loan'}
        options={loans}
        variant={'horizantal'}
        error={formik.errors.loanDetails}
        formik={formik.getFieldProps('loanDetails')}
      />
      <ASingleSelect
        name={'loanType'}
        label={'Loan Type'}
        options={loanTypes}
        variant={'horizantal'}
        error={formik.errors.loanDetails}
        formik={formik.getFieldProps('loanDetails')}
      />
    </div>
  );
};

export default LoanDetails;
