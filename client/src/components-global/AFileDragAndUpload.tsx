import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import Papa from 'papaparse';
import { addBulkCsvHeaders } from '../constants';

const AFileDragAndUpload = ({
  id,
  label,
  setData,
  fileDesc,
  fileTypeText,
}: any) => {
  const handleOnChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result: any) => {
          const parsedData = result.data.map((item: any) => {
            const obj: any = {};
            for (const key in item) {
              const field: any = addBulkCsvHeaders.find(
                (el: any) => el.label === key,
              );
              obj[field.key] = item[key];
            }
            return obj;
          });
          setData(parsedData);
        },
        header: true,
      });
    }
  };

  return (
    <div className="col-span-5 xl:col-span-2">
      <label className="mb-3 block text-sm text-main" htmlFor={id}>
        {label}
      </label>

      <div
        id={id}
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-grey py-4 px-4 sm:py-7.5"
      >
        <input
          id={id}
          type="file"
          accept=".csv"
          onChange={handleOnChange}
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
          <p className="mt-1.5">{fileTypeText}</p>
          <p>({fileDesc})</p>
        </div>
      </div>
    </div>
  );
};

export default AFileDragAndUpload;
