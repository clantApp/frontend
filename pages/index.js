/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Pagination } from "swiper";
import "swiper/css/pagination";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>CLANT | clever assistant</title>
        <meta name="description" content="
          make web3 space more friendly
        " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Image
          src={'/clant.png'}
          alt="logo"
          width={168}
          height={44}
          stlye={{ margin: '0 auto' }}
        />
        <p className={styles.p}>
          Your web3 clever assistant is under development.
        </p>

      </div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={true}
        modules={[EffectCreative, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ width: '50%' }}>
            <h4>Analysis and Tracking the Whales :</h4>
            Surely you know that whales have a big role and best knowledge in the Crypto space, which helps them to make big profits in this space by buying and selling Crypto at the best time. Using Clant you can analyze on time what they are buying, selling and which token are they holding, which helps you to invest in valuable and best profitable tokens.</div>
          <Image
            src={'/1.png'}
            alt="logo"
            width={500}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide> <Image
          src={'/2.png'}
          alt="logo"
          width={500}
          height={250}
        />
          <div style={{ width: '50%' }}> Clant will be providing you the best tracking services, so you can track the big wins before the uptrend. Every time when your selected Whale buy or sell a token you will become in all of your favorite social media such as Telegram, Discord, email etc. notification. Which enables you to be on time and prepared for the next profit. But of course, Clant is not just track and analyze Tokens! You will also be able to use the same services to track and analyze NFT whales.</div>

        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '50%' }}>
            <h4>Joint Financial Accounts :</h4>
            Joint accounts can be a good way to combine and grow your money to work toward your common goals. Imagine it would be possible on Web3 too! For example, you and your partner could have a joint account and just with the consent of both the assets will be deducted from that account, or create a joint account with all of your team members. This is also another Clant service that allows you to create joint accounts and withdraw assets just by permission of all members.</div>
          <Image
            src={'/3.png'}
            alt="logo"
            width={500}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide> <Image
          src={'/4.png'}
          alt="logo"
          width={500}
          height={250}
        />
          <div style={{ width: '50%' }}>
            <h4>Encrypted file sharing :</h4>
            Using Clant you will be able to storage data on the decentralized space, all of your data will be storage on the Filecoin and all of your files will be encrypted. Your files will be accessible just by permissioned wallet addresses, you can share your files with as many people you want. All the process will be User friendly optimized, to increase the trust and security we will use smart contract to approve we don't collect or have a control over your assets.</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ width: '80%', textAlign: 'center' }}>
            <h2>Follow us on Twitter</h2>
            <p>Follow us on Twitter for development status, new services and news</p>
            <a href="https://twitter.com/clantApp" target="_blank" rel="noreferrer">
              <div className={styles.twitterButton}>
                FOLLOW US
              </div>
            </a>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
