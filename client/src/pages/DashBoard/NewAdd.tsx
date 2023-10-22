import ABreadcrumb from "../../components-global/ABreadcrumb";
import AButton from "../../components-global/AButton";
import AInputField from "../../components-global/AInputField";

const NewAdd = () => {

  return (
    <>
      <ABreadcrumb pageName="Add New"/>
      <div className="overflow-hidden bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg px-5 py-5 dark:border-strokedark dark:bg-boxdark">
			<div className="flex flex-col w-[90%]">
        <AInputField type='text' label="Name of the applicant" AddclassName="flex basis-1/4 text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Address*" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Mobile*" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Loan Amt (Lacs)" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Reference ID" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Local/OGL" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="City" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Branch*" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Type - PD / LIP" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Bank Name*" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <AInputField type='text' label="Received Date*" AddclassName="flex text-center" AddclassNameInput="flex-1" AddclassNameLabel="flex w-64 items-center pl-5 mb-0 mr-3"/>
        <div className="flex gap-2 justify-end">
        	<AButton variant="primary" label="Save"/>
        	<AButton variant="secondary" label="Cancel"/>
        </div>
      </div>
			</div>
    </>
  );
};

export default NewAdd;
