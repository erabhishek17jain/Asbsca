import { Typography } from "@material-tailwind/react";

const AddBulkCaseHeader = () => {
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-gray">
          Uploaded Cases
        </Typography>
      </div>
    </div>
  );
};

export default AddBulkCaseHeader;
