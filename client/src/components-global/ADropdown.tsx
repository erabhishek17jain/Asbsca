import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';

const ADropdown = ({
  item,
  header,
  options,
  activeItem,
  position = 'down',
  selectCase = () => {},
}: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (activeItem?._id !== item?._id && dropdownOpen) selectCase(item);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
        {position === 'left' ? (
          header
        ) : (
          <div className="flex justify-center items-center gap-1 rounded-lg p-2 font-medium px-4 border border-main text-main hover:bg-grey">
            {header}
            <ChevronDownIcon
              className={`h-4 w-4 fill-current stroke-main stroke-2 sm:block ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute ${
          position == 'left' ? '-top-3 right-7' : 'top-8 right-0'
        } flex flex-col w-56 bg-clip-border border border-stroke rounded-lg bg-white text-grey-700 shadow-lg ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col">
          {options?.map((item: any, index: number) => (
            <li
              key={item.title}
              className={`px-4 py-3 border-stroke ${
                index !== options.length - 1 && 'border-b'
              }`}
            >
              <button
                onClick={item?.action}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-main"
              >
                {item.icon}
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ADropdown;
