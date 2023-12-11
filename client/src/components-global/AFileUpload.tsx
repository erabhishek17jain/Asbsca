import { useState } from 'react';
import { fileToBase64 } from '../utils';

const AFileUpload = ({
  id,
  label,
  icon,
  formik,
  error = '',
  value = null,
  variant = 'vertical',
}: any) => {
  const [image, setImage] = useState<any>(value);

  const onImageChange = async (e: any) => {
    if (e.target.files && e.target.files[0]) {
      if (id !== 'photos') {
        const fileBase64 = await fileToBase64(e.target.files[0]);
        formik.setFieldValue(id, fileBase64);
        setImage(URL.createObjectURL(e.target.files[0]));
      } else {
        const photos = [];
        for (let i = 0; i < e.target.files.length; i++) {
          const fileBase64 = await fileToBase64(e.target.files[i]);
          photos.push(fileBase64);
        }
        setImage(URL.createObjectURL(e.target.files[0]));
        formik.setFieldValue(id, photos);
      }
    }
  };

  return (
    <div
      className={`flex gap-3 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-main text-sm ${
          variant === 'horizantal' ? 'min-w-[200px]' : ''
        }`}
      >
        {label}
      </label>
      <div className="flex gap-2">
        <div className="relative w-full">
          <input
            id={id}
            multiple
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="w-full text-sm cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2.5 file:px-3 file:hover:bg-main file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        {id !== 'photos' && image ? (
          <img src={value} className="w-13 h-13 -mt-1 rounded-full" />
        ) : id !== 'photos' &&  value !== '' ? (
          <img alt={id} src={value} className="w-13 h-13 -mt-1 rounded-full" />
        ) : (
          <div className="w-13 h-13 -mt-1 rounded-full">{icon}</div>
        )}
      </div>
      {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
    </div>
  );
};

export default AFileUpload;
