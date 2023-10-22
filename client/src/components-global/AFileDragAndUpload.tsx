import { CloudArrowUpIcon } from '@heroicons/react/24/solid';

const AFileDragAndUpload = ({ type, id, label, formik }: any) => {
  return (
    <div className="col-span-5 xl:col-span-2">
      <label className="mb-3 block text-sm text-black" htmlFor="Username">
        {label}
      </label>

      <div
        id="FileUpload"
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 sm:py-7.5"
      >
        <input
          id={id}
          type={type}
          {...formik}
          accept="image/*"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
        />
        <div className="flex flex-col items-center justify-center text-sm space-y-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-stroke bg-white">
            <CloudArrowUpIcon className="h-8 w-8" />
          </span>
          <p>
            <span className="text-primary">Click to upload</span> or drag and
            drop
          </p>
          <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
          <p>(max, 800 X 800px)</p>
        </div>
      </div>
    </div>
  );
};

export default AFileDragAndUpload;
