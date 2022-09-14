import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  wrapper: "rounded -lg border dark:border-transparent dark:bg-[#313339]",
  nftHeader: "flex items-center justify-between p-4",
  likesContainer: "flex items-center justify-end space-x-2",
  heartIcon: "h-5 w-5 text-gray-500 dark:text-gray-400",
  likesCount: "text-sm font-semibold text-gray-500 dark:text-gray-400",
  nftImage: "rounded-b-lg object-cover",
  imagePulse: "h-[448px] w-[448px]",
  textPulse: "h-2 bg-slate-700 rounded",
  headerIcon: "w-5 h-5",
  iconPulse: "bg-slate-700 rounded-full",
};

const NFTImage = ({ image, loading }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        {loading ? (
          <div className={`${style.iconPulse} ${style.headerIcon}`}></div>
        ) : (
          <Image src="/eth-logo.svg" width={20} height={20} alt="eth" />
        )}
        <div className={style.likesContainer}>
          {loading ? (
            <div className={`${style.textPulse} w-12`}></div>
          ) : (
            <>
              <AiOutlineHeart className={style.heartIcon} />
              <div className={style.likesCount}>210</div>
            </>
          )}
        </div>
      </div>

      <div className={style.nftImage}>
        {loading ? (
          <div className={style.imagePulse}></div>
        ) : (
          <Image src={image} width={448} height={448} alt="nft" />
        )}
      </div>
    </div>
  );
};

export default NFTImage;
