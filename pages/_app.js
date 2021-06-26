import '../styles/globals.css'
import styles from '../styles/MyApp.module.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (    
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href="/">
            <a>
              <div className={styles.brandPizza}>
                <img src="/assests/images/pizza.svg" alt="brand" />
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
          <Link href="/about">
            <a>
              <li className={styles.navbarContact}>
                About
              </li>
            </a>
          </Link>
        </ul>
      </nav>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </div>
    )
}

export default MyApp
