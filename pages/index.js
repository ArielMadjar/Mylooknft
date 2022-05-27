
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'
import Team from '../components/Team'
import Features from '../components/Features'
import Create from '../components/Create'
import metamaskLogo from '../components/assets/metamask.png'



const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-gray-600 `,
  button: `border border-cyan-500/50 bg-gradient-to-r from-violet-500 to-blue-500 p-[0.8rem] text-xl font-semibold rounded-full cursor-pointer text-white`,
  details: `text-lg text-center text-[#f1f1f1] font-semibold mt-4`,
}

 
export default function Home() {
  const { address, connectWallet } = useWeb3()
  
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
      
    })()
  }, [address])
  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
          <div id="team" >
            <Team />
          </div>
          <div id="features">
            <Features/>
          </div>
          <Create/>
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <Image src={metamaskLogo} width={150} height={150} />
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome and Metamask to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}
