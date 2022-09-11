import { useMarketplace } from "@thirdweb-dev/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

const style = {
  wrapper:
    "mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
};

function Listings() {
  const [listings, setListings] = useState([]);

  const marketplace = useMarketplace(
    "0xA69b8A56E8BDE3EdbCBf5d051E0dFA829b5638ba"
  );

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    try {
      const list = await marketplace.getActiveListings();
      setListings(list);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.wrapper}>
      {listings.length > 0 ? (
        <>
          {listings?.map((listing, index) => (
            <Link
              href={`/assets/${listing.assetContractAddress}/${listing.id}`}
              key={index}
            >
              <a>
                <NFTCard listing={listing} />
              </a>
            </Link>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Listings;
