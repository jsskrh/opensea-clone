import { BsCreditCard2FrontFill, BsFillTagFill } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";

const style = {
  wrapper:
    "flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black",
  header:
    "flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a38]",
  headerContent: "flex items-center space-x-2",
  headerIcon: "h-6 w-6",
  grayText: "text-gray-400",
  mainContainer: "space-y-4 rounded-b-lg px-6 py-4 dark:bg-[#313339]",
  priceInfoContainer: "space-y-1",
  mediumFont: "font-medium",
  priceContainer: "flex items-center space-x-2",
  price: "text-3xl font-bold",
  buttonsContainer: "flex space-x-4",
  button:
    "flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white",
  purchaseButton: "bg-blue-500",
  offerButton: "border border-black bg-[#363840]",
  buttonIcon: "h-6 w-6",
  textPulse: "h-2 bg-slate-700 rounded",
  iconPulse: "bg-slate-700 rounded-full",
  containerPulse: "h-10  bg-slate-700 rounded-full",
  buyContainerPulse: "bg-blue-400 rounded  h-7 w-[120px]",
  offerContainerPulse: "bg-gray-700 rounded  h-7 w-[120px]",
  disabled: "pointer-events-none",
};

const NFTSalesInfo = ({ price, buyNFT, loading }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {loading ? (
          <div className={`${style.containerPulse} w-full`}></div>
        ) : (
          <>
            <div className={style.headerContent}>
              <AiOutlineClockCircle
                className={`${style.grayText} ${style.headerIcon}`}
              />
              <div className={style.grayText}>
                Sale ends 1 December, 2022 at 8:20pm GMT +1
              </div>
            </div>

            <AiOutlineQuestionCircle className={style.headerIcon} />
          </>
        )}
      </div>

      <div className={style.mainContainer}>
        <div className={style.priceInfoContainer}>
          {loading ? (
            <div className={`${style.containerPulse} w-[200px]`}></div>
          ) : (
            <>
              <div className={`${style.grayText} ${style.mediumFont}`}>
                Buy at
              </div>

              <div className={style.priceContainer}>
                <Image src="/weth-logo.svg" width={24} height={24} alt="weth" />

                <span className={style.price}>{price}</span>
              </div>
            </>
          )}
        </div>

        <div className={style.buttonsContainer}>
          <div
            className={`${style.button} ${style.purchaseButton} ${
              loading && style.disabled
            }`}
            onClick={buyNFT}
          >
            {loading ? (
              <div className={`${style.buyContainerPulse}`}></div>
            ) : (
              <>
                <BsCreditCard2FrontFill className={style.buttonIcon} />
                <span className="text-lg font-semibold">Buy Now</span>
              </>
            )}
          </div>

          <div
            className={`${style.button} ${style.offerButton} ${
              loading && style.disabled
            }`}
          >
            {loading ? (
              <div className={`${style.offerContainerPulse}`}></div>
            ) : (
              <>
                <BsFillTagFill className={style.buttonIcon} />
                <span className="text-lg font-semibold">Make Offer</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSalesInfo;
