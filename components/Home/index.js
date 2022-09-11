import { useState, useEffect } from "react";
import Image from "next/image";

const style = {
  wrapper: "flex flex-col dark:bg-[#202226] relative flex flex-col",
  container: "relative flex h-[650px] flex-col",
  bannerContainer: "absolute h-1/3 w-full",
  banner: "rounded-t-lg object-cover",
  collectionInfoWrapper: "absolute inset-0 top-1/3 z-10 h-2/3 - translate-y-16",
};
