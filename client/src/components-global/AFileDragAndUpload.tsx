import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const AFileDragAndUpload = ({ type, id, label, formik }: any) => {
  return (
    <div className="col-span-5 xl:col-span-2">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Your Photo</h3>
        </div>
        <div className="p-7">
          <form action="#">
            <div className="mb-4 flex items-center gap-3">
              <div>
                <span className="mb-1.5 text-black dark:text-white">
                  {label}
                </span>
              </div>
            </div>

            <div
              id="FileUpload"
              className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
            >
              <input
                id={id}
                type={type}
                {...formik}
                className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              />
              <div className="flex flex-col items-center justify-center space-y-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                  <CloudArrowUpIcon className="h-8 w-8" />
                </span>
                <p>
                  <span className="text-primary">Click to upload</span> or drag
                  and drop
                </p>
                <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                <p>(max, 800 X 800px)</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AFileDragAndUpload;
