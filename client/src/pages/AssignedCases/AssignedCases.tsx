import { useEffect, useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import ATable from '../../components-global/ATable';
import { ASSIGNED_CASES_TABLE_HEAD } from '../../constants';
import AssignedCasesBody from '../AssignedCases/AssignedCasesBody';
import AssignedCasesHeader from '../AssignedCases/AssignedCasesHeader';
import { AModal } from '../../components-global/AModal';
import ASingleSelect from '../../components-global/ASingleSelect';
import { useNavigate } from 'react-router-dom';
import { BuildingLibraryIcon, CurrencyRupeeIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';
import { fetchAssignedAsync } from '../../slices/casesSlice';
import { fetchCasesByFilter } from '../../services';
import store from '../../store/store';

const AssignedCases = () => {
  const navigate = useNavigate();
  const { assignedCases } = useSelector((state: any) => state.cases);
  const [showModal, setShowModal] = useState(false);
  const [cases, setCases] = useState<any>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCasesByFilter(filters)
      .then((res: any) => {
        store.dispatch(fetchAssignedAsync(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    if (assignedCases.length) {
      setCases([...assignedCases]);
    }
  }, [assignedCases]);


  return (
    <>
      <ABreadcrumb pageName="Assigned Cases" />
      <div className="flex flex-col gap-10">
        <ATable
          data={cases}
          tableHeader={ASSIGNED_CASES_TABLE_HEAD}
          header={
            <AssignedCasesHeader filters={filters} setFilters={setFilters} />
          }
          tableBody={
            <AssignedCasesBody
              openModal={() => setShowModal(true)}
              assigned={cases}
            />
          }
        />
      </div>
      {showModal && (
        <AModal
          saveText={'Get Started'}
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
              icon={<BuildingLibraryIcon className="h-4 w-4" />}
              options={[{ label: 'Axis Bank', value: 'axis' }]}
            />
            <ASingleSelect
              name={'applicants'}
              label={"Applicant's"}
              variant={'horizantal'}
              icon={<UserIcon className="h-4 w-4" />}
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
              icon={<MapPinIcon className="h-4 w-4" />}
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
              icon={<CurrencyRupeeIcon className="h-4 w-4" />}
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
