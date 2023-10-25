import { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';

const ATags = ({ children }: any) => {
  const [tags, setTags] = useState(['']);

  const handleAddTag = (tag: any) => {
    tags.push(tag);
    setTags([...tags]);
  };

  const handleRemoveTag = (tag: any) => {
    tags.push(tag);
    setTags([...tags]);
  };

  return tags.map((item, index) => {
    return (
      <div className="flex items-center gap-4" key={item}>
        {children}
        <div className="w-7 mt-3">
          {tags.length !== 1 && (
            <MinusCircleIcon
              className="h-6 w-6"
              onClick={() => handleRemoveTag('')}
            />
          )}
          {index === tags.length - 1 && (
            <PlusCircleIcon
              className="h-6 w-6"
              onClick={() => handleAddTag('')}
            />
          )}
        </div>
      </div>
    );
  });
};

export default ATags;
