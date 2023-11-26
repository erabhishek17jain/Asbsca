import {
  PlusIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/outline';
import AButton from './AButton';

export const AddTagButton = ({ title, addTag }: any) => {
  return (
    <div className="flex justify-center w-full">
      <AButton
        label={title}
        variant="small"
        action={addTag}
        icon={<PlusIcon className="h-5 w-5 stroke-main stroke-2" />}
      />
    </div>
  );
};

export const AddTagHeader = ({ title, addTag, removeTag }: any) => {
  return (
    <div className="flex justify-between items-center w-full rounded-t-lg border-[1.5px] bg-grey py-2.5 px-3">
      <div className="flex gap-2 items-center">{title}</div>
      <div className="flex">
        <MinusCircleIcon className="h-6 w-6" onClick={removeTag} />
        <PlusCircleIcon className="h-6 w-6" onClick={addTag} />
      </div>
    </div>
  );
};

export const AddTagFooter = ({ addTag, removeTag }: any) => {
  return (
    <div className="w-7">
      <MinusCircleIcon className="h-6 w-6" onClick={removeTag} />
      <PlusCircleIcon className="h-6 w-6" onClick={addTag} />
    </div>
  );
};

const ATags = ({ tags }: any) => {
  return tags?.map((item: any) => {
    return <div className="flex flex-col items-center" key={item?.title}></div>;
  });
};

export default ATags;
