import { GrTextAlignLeft } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import Dropdown from "./Dropdown";

const style = {
  wrapper:
    "flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black",
  icon: "h-5 w-5 text-gray-600",
};

const NFTDetails = ({ details, loading }) => {
  const dropdownData = [
    { name: "Description", icon: <GrTextAlignLeft className={style.icon} /> },
    { name: "Properties", icon: <BsFillBookmarkFill className={style.icon} /> },
  ];
  return (
    <div className={style.wrapper}>
      {dropdownData.map((item, index) => (
        <Dropdown
          key={index}
          title={item.name}
          icon={item.icon}
          description={details.description}
          loading={loading}
        />
      ))}
    </div>
  );
};

export default NFTDetails;
