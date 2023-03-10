import cls from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import coffeeStoresData from '../../../data/coffee-stores.json';

import styles from '@/styles/coffee-store.module.css';

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find(
        store => store.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: coffeeStoresData.map(store => {
      return { params: { id: store.id.toString() } };
    }),
    fallback: true, // can also be true or 'blocking'
  };
}

const CoffeeStore = ({ coffeeStore }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <div>Loading...</div>;

  const { name, address, neighbourhood, imgUrl } = coffeeStore;

  const handleUpvote = () => {
    console.log('Upvoted!');
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            alt={name}
            width={600}
            height={360}
            className={styles.storeImage}
          />
        </div>

        <div className={cls('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src={''} width="24" height="24" alt="Address icon" />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={''} width="24" height="24" alt="Address icon" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={''} width="24" height="24" alt="Address icon" />
            <p className={styles.text}>{32}</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvote}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
