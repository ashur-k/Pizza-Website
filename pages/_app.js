import '../styles/globals.css'
import styles from '../styles/MyApp.module.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (    
    <>
      <nav className={styles.navbar}>
        <uL className={styles.navbarContactBox}>
          <Link href="/">
            <a>
              <div className={styles.brandPizza}>
                <img src="#" alt="brand" />
                <p>Pizza Shop</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.navbarContact}>
                  Home
              </li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.navbarContact}>
                About
              </li>
            </a>
          </Link>
        </uL>
      </nav>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
    )
}

export default MyApp
