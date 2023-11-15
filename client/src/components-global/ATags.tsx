import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const ATags = ({
  tags,
  setTags,
  children,
  defaultTag,
  disableAdd = false,
}: any) => {
  const handleAddTag = () => {
    for (let i = 0; i <= tags.length - 1; i++) {
      tags[i].isOpen = false;
    }
    tags.push({ ...defaultTag, id: `app${tags.length + 1}` });
    setTags([...tags]);
  };

  const handleRemoveTag = (tag: any) => {
    const updatedTags = tags.filter((item: any) => item.id !== tag.id);
    setTags([...updatedTags]);
  };

  const openCloseTag = (tag: any) => {
    const index = tags.findIndex((item: any) => item.id === tag.id);
    tags = tags[index]?.isOpen;
    setTags([...tags]);
  };

  return tags?.map((item: any, index: number) => {
    return (
      <div className="flex flex-col items-center mb-3" key={item}>
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
              {tags.length !== 1 && (
                <MinusCircleIcon
                  className="h-6 w-6"
                  onClick={() => handleRemoveTag(item)}
                />
              )}
              {index === tags.length - 1 && (
                <PlusCircleIcon
                  className="h-6 w-6"
                  onClick={() => handleAddTag()}
                />
              )}
            </div>
          )}
        </div>
        {item?.isOpen && (
          <div className="w-full rounded-b-lg border-[1.5px] border-t-0 bg-transparent py-2.5 px-3">
            {children}
          </div>
        )}
      </div>
    );
  });
};

export default ATags;
