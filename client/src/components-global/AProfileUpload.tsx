import { CameraIcon } from '@heroicons/react/24/solid';
import userSix from '../assets/images/logo/logo-dark.png';
const AProfileUpload = ({}: any) => {
  return (
    <div className="mb-4 flex items-center gap-3 justify-center">
      <div className="relative h-20 w-20 rounded-full">
        <img src={userSix} alt="profile" />
        <label
          htmlFor="profile"
          className="absolute bottom-0 right-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-main text-white hover:bg-opacity-90"
        >
          <CameraIcon className="h-4 w-4" />
          <input type="file" name="profile" id="profile" className="sr-only" />
        </label>
      </div>
    </div>
  );
};

export default AProfileUpload;
