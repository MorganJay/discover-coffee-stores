import Head from 'next/head';
import Image from 'next/image';

import Card from '@/components/card';
import Banner from '@/components/banner';

import coffeeStoresData from '/data/coffee-stores.json';

import styles from '@/styles/Home.module.css';

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const handleBannerBtnClick = () => console.log('handleBannerBtnClick');

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleBannerBtnClick}
        />
        <Image
          src="/static/hero-image.png"
          alt="lady drinking coffee on a cloud"
          className={styles.heroImage}
          width={700}
          height={400}
          priority
        />
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((store, idx) => (
                <Card
                  key={store.id}
                  name={store.name}
                  link={`/coffee-store/${store.id}`}
                  imgUrl={store.imgUrl}
                  className={styles.card}
                  imgPriority={idx <= 2}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
