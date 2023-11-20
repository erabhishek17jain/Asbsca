import { CameraIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { fileToBase64 } from '../utils';

const AProfileUpload = ({ id, formik, profile }: any) => {
  const [image, setImage] = useState<any>(profile);

  const onImageChange = async (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const fileBase64 = await fileToBase64(e.target.files[0]);
      formik.setFieldValue(id, fileBase64);
      setImage(fileBase64);
    }
  };
  return (
    <div className="mb-4 flex items-center gap-3 justify-center">
      <div className="relative h-20 w-20 rounded-full">
        {image ? (
          <img
            alt={id}
            src={image}
            className="w-20 h-20 rounded-full border-2"
          />
        ) : (
          <UserCircleIcon className="w-22 h-22" />
        )}
        <label
          htmlFor={id}
          className="absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-main text-white hover:bg-opacity-90"
        >
          <CameraIcon className="h-4 w-4" />
          <input
            id={id}
            name={id}
            type="file"
            className="sr-only"
            onChange={onImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default AProfileUpload;
