import { useState } from 'react';

const AFileUpload = ({
  id,
  label,
  icon,
  formik,
  error = '',
  variant = 'vertical',
}: any) => {
  const [image, setImage] = useState<any>(null);

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      formik.setFieldValue(id, e.target.files[0].toString());
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div
      className={`flex gap-3 w-full ${error ? 'mb-2' : 'mb-8'} ${
        variant === 'horizantal' ? 'items-center' : 'flex-col'
      }`}
    >
      <label
        className={`block text-black text-sm ${
          variant === 'horizantal' ? 'min-w-[200px]' : ''
        }`}
      >
        {label}
      </label>
      <div className="flex gap-2">
        <div className="relative w-full">
          <input
            id={id}
            type="file"
            onChange={onImageChange}
            className="w-full text-sm cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2.5 file:px-3 file:hover:bg-main file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        {image ? (
          <img
            alt={id}
            src={image}
            className="w-13 h-13 -mt-1 rounded-full p-1"
          />
        ) : (
          icon
        )}
      </div>
      {error && <span className="ml-1 text-xs text-meta1">{error}</span>}
    </div>
  );
};

export default AFileUpload;
