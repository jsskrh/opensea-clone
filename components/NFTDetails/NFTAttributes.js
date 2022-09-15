const NFTAttributes = ({ attributes }) => {
  const style = {
    wrapper:
      "mx-auto grid flex-1 grid-cols-2 gap-2 pt-24 md:grid-cols-3 md:pt-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4",
    attributeWrapper:
      "flex flex-col w-full h-[5rem] items-center cursor-pointer justify-center rounded-lg py-2 px-2 border border-black bg-[#363840]",
    keyContainer: "py-1 uppercase text-xs text-blue-500",
    valueContainer: "py-1",
  };
  return (
    <div className={style.wrapper}>
      {attributes.map((attribute, index) => (
        <div className={style.attributeWrapper}>
          <div className={style.keyContainer}>{attribute.trait_type}</div>
          <div className={style.valueContainer}>{attribute.value}</div>
        </div>
      ))}
    </div>
  );
};

export default NFTAttributes;
