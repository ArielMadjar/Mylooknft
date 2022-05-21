import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import NFTcol from '../../components/NFTcol'
import Link from 'next/link'
import Image from 'next/image'

const style = {
  bannerImageContainer: `h-[50vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  divider: `border-r-2 justify-between `,
  title: `text-center text-5xl font-bold mb-4 my-8`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

const Collections = () => {
  const DATA = [
    {
      
      name: (
        <Link href="/collections/0x1FfB2AC3391A9cEa757F91d2F19a18eFc421Fd64">
          Dior
        </Link>
      ),
      image: 
        'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-videos/folder-homme/folder-fall-2021-men-collection/main-video-show/22619795-2-fre-FR/main-video-show_1440_1200.jpg',
      

    },
    {
      name: 'Louis Vuitton',
      image:
        'https://static.purseblog.com/images/2022/02/LV-Mens-SS22.jpg',
      
    },
    {
      name: 'Yves Saint Laurent ',
      image: 'https://fashionunited.uk/images/201703/Saint1.jpg',
      
    },
  ]

  return (
    <div className="overflow-hidden">
      <Header />
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          //if banner image exists, show the banner image, otherwise show a placeholder.
          src="https://media.vogue.fr/photos/5ff8385fe2b6fc6ab2b68f29/master/pass/TEMPORARYRESIDENCYAPARIS.jpg"
          alt="banner"
        />
      </div>

      <div className={style.infoContainer}>
        <div className={style.endRow}>
        </div>
        <div className={style.midRow}></div>
        <div className={style.midRow}>
          <div className={style.title}>
            <h1>Our Collections</h1>
          </div>
        </div>
        <div className={style.midRow}></div>
        <div className={style.midRow}>
          <div className={style.description}>
            Here are some of our collections
          </div>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {DATA.map((item) => (
          <NFTcol key={item.name} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Collections
