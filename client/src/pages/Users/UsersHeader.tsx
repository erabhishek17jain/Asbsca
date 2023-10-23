import { Typography } from "@material-tailwind/react";

const UsersHeader = () => {
  return (
    <div className="flex flex-col justify-between gap-5 xsm:flex-row xsm:items-center">
      <div>
        <Typography variant="h5" color="blue-grey">
          Uploaded Cases
        </Typography>
      </div>
    </div>
  );
};

export default UsersHeader;
