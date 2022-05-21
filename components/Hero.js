import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://media.gq-magazine.co.uk/photos/5d13a9a0533a2369f5c63746/16:9/w_2580,c_limit/kim-jones-01-gq-24jun19_getty_b.jpg')] before:bg-cover before:bg-center before:opacity-40 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex sm:my-8`,
  accentedButton: ` transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 relative text-lg font-semibold px-12 py-4 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#fff] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] my-8 s:m-8`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.contentWrapper}>
              <div className={style.copyContainer}>
                <div className={style.title}>
                  Discover, Style, and Buy Extraordinary Designer NFTs
                </div>
                <div className={style.description}>
                  MyLook is the world&apos;s first and largest Designer NFT marketplace
                </div>
                <div className={style.ctaContainer}>
                  <button className={style.accentedButton}>Explore</button>
                  <button className={style.button}>Create</button>
                </div>
              </div>
              <div className={style.cardContainer}>
                <img
                  className="rounded-t-lg h-[35rem] w-fit"
                  src="https://www.dior.com/couture/var/dior/storage/images/horizon/mens-fashion/shows/mens-fall-2021-collection/looks/look-3/22620041-1-fre-FR/look-3_width_3000.jpg"
                  alt=""
                />
                <div className={style.infoContainer}>
                  <img
                    className="h-[2.25rem] rounded-full"
                    src="https://i.pinimg.com/originals/96/81/59/96815947eb9a4321d30f8ade2b5ead21.jpg"
                    alt=""
                  />
                  <div className={style.author}>
                    <div className={style.name}>Fall Winter 2021</div>
                    <a
                      className="text-violet-400"
                      href="https://www.dior.com/en_int/mens-fashion/man"
                    >
                      Christian Dior
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    

export default Hero