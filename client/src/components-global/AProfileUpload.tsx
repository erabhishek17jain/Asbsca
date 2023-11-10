import { CameraIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const AProfileUpload = ({ id, onChange, profile }: any) => {
  return (
    <div className="mb-4 flex items-center gap-3 justify-center">
      <div className="relative h-20 w-20 rounded-full">
        {profile ? (
          <img
            src={profile}
            alt={id}
            className="w-20 h-20 rounded-full border-2 p-1"
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
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default AProfileUpload;
