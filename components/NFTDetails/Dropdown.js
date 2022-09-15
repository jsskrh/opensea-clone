import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import NFTAttributes from "./NFTAttributes";

const style = {
  buttonWrapper: "flex items-center justify-between p-4",
  buttonLeft: "flex items-center space-x-4",
  title: "font-semibold",
  rightIcon: "h-6 w-6 text-gray-400",
  innerTextContainer: "bg-gray-50 p-4 dark:bg-[#313339]",
  textPulse: "h-2 bg-slate-700 rounded",
};

const Dropdown = ({ title, icon, description, attributes, loading }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className={style.buttonWrapper}>
              <div className={style.buttonLeft}>
                {icon}
                <span className={style.title}>{title}</span>
              </div>
              {open ? (
                <BiChevronUp className={style.rightIcon} />
              ) : (
                <BiChevronDown className={style.rightIcon} />
              )}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className={style.innerTextContainer}>
              {loading ? (
                <div className={style.textPulse}></div>
              ) : description ? (
                description
              ) : (
                <NFTAttributes attributes={attributes} />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Dropdown;
