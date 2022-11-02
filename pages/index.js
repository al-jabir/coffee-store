import Head from 'next/head';
import Banner from '../components/banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handlerOnBtnClick = () => {
    console.log('load');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          btnText='View stores nearby'
          handleOnClick={handlerOnBtnClick}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
