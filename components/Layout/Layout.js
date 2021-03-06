import React from 'react';
import styles from './Layout.module.css'
import Head from 'next/head';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza-Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <a>
          Practicing NEXT-JS Django CODING. Toutorial made by Cocoa.
          I coded Django API myself, Cocoa was using classbased views,
          and I like using function based views. 
        </a>
      </footer>
    </div>
  )
}
