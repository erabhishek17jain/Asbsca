import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronDownIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import AButton from './AButton';

export const AddTagButton = ({ title, addLoan }: any) => {
  return (
    <div className="flex justify-center w-full">
      <AButton
        label={title}
        variant="small"
        action={addLoan}
        icon={<PlusIcon className="h-5 w-5 stroke-main stroke-1" />}
      />
    </div>
  );
};

export const AddTagPlusMinusRight = ({ item, tags, addTag, setTags }: any) => {
  const handleAddTag = () => {
    for (let i = 0; i <= tags.length - 1; i++) {
      tags[i].isOpen = false;
    }
    addTag(tags);
  };

  const handleRemoveTag = (tag: any) => {
    const updatedTags = tags.filter((item: any) => item.id !== tag.id);
    setTags([...updatedTags]);
  };

  return (
    <div className="w-7">
      <MinusCircleIcon
        className="h-6 w-6"
        onClick={() => handleRemoveTag(item)}
      />
      <PlusCircleIcon className="h-6 w-6" onClick={() => handleAddTag()} />
    </div>
  );
};

export const AddTagHeader = ({
  item,
  tags,
  addTag,
  setTags,
  disableAdd = false,
}: any) => {
  const handleAddTag = () => {
    for (let i = 0; i <= tags.length - 1; i++) {
      tags[i].isOpen = false;
    }
    addTag(tags);
  };

  const handleRemoveTag = (tag: any) => {
    const updatedTags = tags.filter((item: any) => item.id !== tag.id);
    setTags([...updatedTags]);
  };

  const openCloseTag = (tag: any) => {
    const index = tags.findIndex((item: any) => item.id === tag.id);
    tags[index].isOpen = !tag?.isOpen;
    setTags([...tags]);
  };

  return (
    <div className="flex justify-between items-center w-full rounded-t-lg border-[1.5px] bg-grey py-2.5 px-3">
      <div
        className="flex gap-2 items-center"
        onClick={() => openCloseTag(item)}
      >
        <ChevronDownIcon
          className={`hidden h-5 w-5 fill-current stroke-main stroke-1 sm:block ${
            item?.isOpen ? 'rotate-0' : 'rotate-180'
          }`}
        />
        {item?.title}
      </div>
      {!disableAdd && (
        <div className="flex">
          <MinusCircleIcon
            className="h-6 w-6"
            onClick={() => handleRemoveTag(item)}
          />
          <PlusCircleIcon className="h-6 w-6" onClick={() => handleAddTag()} />
        </div>
      )}
    </div>
  );
};

const ATags = ({
  tags,
  addTag,
  setTags,
  children,
}: any) => {
  return tags?.map((item: any) => {
    return item?.title ? (
      <div className="flex flex-col items-center" key={item?.title}>
        <AddTagHeader
          item={item}
          tags={tags}
          addTag={addTag}
          setTags={setTags}
        />
        {item?.isOpen && (
          <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
            {children}
          </div>
        )}
      </div>
    ) : (
      <div className="flex items-center w-full gap-3 mb-3" key={item}>
        <div className="w-full border-2 rounded-lg pt-3 px-3">{children}</div>
        <AddTagPlusMinusRight tags={tags} addTag={addTag} setTags={setTags} />
      </div>
    );
  });
};

export default ATags;
