import React from 'react'
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
    ethLogo:'h-8 mr-2'
  }
const NFTImage = ({ selectedNft }) => {
    return (
      <div>
        <div className={style.topBar}>
          <div className={style.topBarContent}>
          <img
                    src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="eth"
                    className={style.ethLogo}
                  />
            <div className={style.likesCounter}>
              <AiOutlineHeart />
              2.3K
            </div>
          </div>
        </div>
        <div>
          {console.log(selectedNft, '🎆')}
          <img src={selectedNft?.image} />
        </div>
      </div>
    )
  }
  
  export default NFTImage