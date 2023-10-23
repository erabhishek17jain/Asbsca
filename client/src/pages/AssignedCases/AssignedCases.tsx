import { useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader';
import { AModal } from '../../components-global/AModal';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useNavigate } from 'react-router-dom';

const AssignedCases = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          header={<AssignedCasesHeader />}
          tableHeader={ASSIGNED_CASES_TABLE_HEAD}
          tableBody={<AssignedCasesBody openModal={() => setShowModal(true)} />}
        />
      </div>
      {showModal && (
        <AModal
          title="Generate PD"
          onSave={() => navigate('/generatePD')}
          closeModal={() => setShowModal(false)}
        >
          <div className="flex flex-col">
            <p className="flex justify-between items-center font-sans text-sm leading-relaxed text-grey-700 mt-1 font-normal mb-5">
              Lets get started with started with setting up the format.
            </p>
            <ASingleSelect
              name={'bankName'}
              label={'Bank Name'}
              variant={'horizantal'}
              options={[{ label: 'Axis Bank', value: 'axis' }]}
            />
            <ASingleSelect
              name={'applicants'}
              label={"Applicant's"}
              variant={'horizantal'}
              options={[
                { label: '1 Applicant', value: 1 },
                { label: '2 Applicant', value: 2 },
                { label: '3 Applicant', value: 3 },
                { label: '4 Applicant', value: 4 },
                { label: '5 Applicant', value: 5 },
                { label: '6 Applicant', value: 6 },
              ]}
            />
            <ASingleSelect
              name={'address'}
              label={'Address'}
              variant={'horizantal'}
              options={[
                { label: '1 Address', value: 1 },
                { label: '2 Address', value: 2 },
                { label: '3 Address', value: 3 },
              ]}
            />
            <ASingleSelect
              name={'imcomeSource'}
              label={'Income Sources'}
              variant={'horizantal'}
              options={[
                { label: '1 Income Source', value: 1 },
                { label: '2 Income Source', value: 2 },
                { label: '3 Income Source', value: 3 },
                { label: '4 Income Source', value: 4 },
                { label: '5 Income Source', value: 5 },
              ]}
            />
          </div>
        </AModal>
      )}
    </>
  );
};

export default AssignedCases;
