import ABreadcrumb from '../../components-global/ABreadcrumb';
import MastersCard from '../../components-shared/MastersCard';

const Masters = () => {
  return (
    <>
      <ABreadcrumb pageName="Masters" />
      <div className="flex justify-between">
        <MastersCard />
      </div>
    </>
  );
};

export default Masters;
