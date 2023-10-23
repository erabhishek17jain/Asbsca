import { Button, Typography } from '@material-tailwind/react';

interface APaginationProps {}

const APagination = ({}: APaginationProps) => {
  return (
    <>
      <Typography variant="small" color="blue-grey" className="font-normal">
        Page 1 of 10
      </Typography>
      <div className="flex gap-2">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </div>
    </>
  );
};

export default APagination;
