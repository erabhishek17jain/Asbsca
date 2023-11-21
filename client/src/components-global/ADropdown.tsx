import { useEffect, useRef, useState } from 'react';

const ADropdown = ({ header, options, item, selectCase = () => {} }: any) => {
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
    selectCase(dropdownOpen ? item : null);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
        {header}
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute top-6 right-0 mt-3 z-10 flex flex-col w-50 bg-clip-border border rounded-lg bg-white text-grey-700 shadow-lg ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-4">
          {options?.map((item: any) => (
            <li>
              <button
                onClick={item?.action}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-main lg:text-base"
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
