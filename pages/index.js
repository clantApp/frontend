import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLANT | clever assistant</title>
        <meta name="description" content="
          make web3 space more friendly
        " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Image src={'/clant.png'} alt="logo" width={470} height="100%" />
        <h2 className={styles.comingsoon}>Coming soon</h2>
        <p className={styles.p}>
          Your web3 clever assistant is under development.
        </p>
      </div>
    </div>
  )
}
