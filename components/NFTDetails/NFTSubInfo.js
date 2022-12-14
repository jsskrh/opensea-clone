import { AiFillEye, AiFillHeart } from "react-icons/ai";

const style = {
  wrapper: "flex space-x-6 py-6",
  textInfoContainer: "text-lg font-medium text-gray-500 dark:text-gray-400",
  owner: "text-blue-500",
  iconTextInfoContainer: "flex items-center space-x-2 content-center",
  icon: "h-7 w-7 text-gray-500 dark:text-gray-400",
  textPulseContainer: "grid grid-cols-3 gap-4",
  textPulse: "h-2 bg-slate-700 rounded-full w-[150px] h-[20px] my-auto",
};

const NFTSubInfo = ({ loading }) => {
  return (
    <div className={style.wrapper}>
      {loading ? (
        <div class={style.textPulseContainer}>
          <div className={style.textPulse}></div>
          <div className={style.textPulse}></div>
          <div className={style.textPulse}></div>
        </div>
      ) : (
        <>
          <div className={style.textInfoContainer}>
            Owned by <span className={style.owner}>John Doe</span>
          </div>
          <div className={style.iconTextInfoContainer}>
            <AiFillEye className={style.icon} />
            <div className={style.textInfoContainer}>4.4K views</div>
          </div>
          <div className={style.iconTextInfoContainer}>
            <AiFillHeart className={style.icon} />
            <div className={style.textInfoContainer}>200 favourites</div>
          </div>
        </>
      )}
    </div>
  );
};

export default NFTSubInfo;
