import ABreadcrumb from '../../components-global/ABreadcrumb';
import AButton from '../../components-global/AButton';
import AInputField from '../../components-global/AInputField';

const NewAdd = () => {
  return (
    <>
      <ABreadcrumb pageName="Add New" />
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5">
        <div className="flex flex-col w-[70%]">
          <AInputField
            type="text"
            label="Name of the applicant"
            variant="horizantal"
          />
          <AInputField type="text" label="Address*" variant="horizantal" />
          <AInputField type="text" label="Mobile*" variant="horizantal" />
          <AInputField
            type="text"
            label="Loan Amt (Lacs)"
            variant="horizantal"
          />
          <AInputField type="text" label="Reference ID" variant="horizantal" />
          <AInputField type="text" label="Local/OGL" variant="horizantal" />
          <AInputField type="text" label="City" variant="horizantal" />
          <AInputField type="text" label="Branch*" variant="horizantal" />
          <AInputField
            type="text"
            label="Type - PD / LIP"
            variant="horizantal"
          />
          <AInputField type="text" label="Bank Name*" variant="horizantal" />
          <AInputField
            type="text"
            label="Received Date*"
            variant="horizantal"
          />
          <div className="flex gap-2 justify-end">
            <AButton variant="secondary" label="Cancel" />
            <AButton variant="primary" label="Save" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAdd;
