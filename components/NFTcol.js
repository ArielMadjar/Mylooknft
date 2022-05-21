import React from "react"
import Link from 'next/link'

const style = {
  wrapper: ` bg-[#303339] flex-auto w-[14rem] h-[25rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer hover:border-2 border-indigo-500/75`,
  imgContainer: `h-4/5 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full h-full object-cover`,
  padding: `p-3 `,
  info: ` justify-between text-[#e4e8eb] drop-shadow-xl`,
  collectionName: `font-semibold text-sm text-[#67696b] `,
  assetName: `font-bold text-lg mt-2 text-center`,
};

function NFTcol({ name, image,link }) {
  return (
    <div className={style.wrapper} >

      <div className={style.imgContainer} >
        <div>
          <img src={image} className={style.nftImg} />
        </div>
      </div>
      <div className={style.padding}>
        <div className={style.info}>
          <div className={style.assetName}>{name}</div>
        </div>
      </div>
      
    </div>
  );
}

export default NFTcol;
