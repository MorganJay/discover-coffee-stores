import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './card.module.css';

const Card = ({ link, name, imgUrl, imgPriority }) => {
  return (
    <Link href={link} className={styles.cardLink}>
      <div className={classNames('glass', styles.container)}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>{name}</h2>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imgUrl}
            alt={name}
            width={260}
            height={160}
            className={styles.image}
            priority={imgPriority}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
