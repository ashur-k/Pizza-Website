import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
  return (
    <div className={styles.container}>
        <Head>
          <title>{pizza.name}</title>
        </Head>
        <div className={styles.pizzaContainer}>
          <div className={styles.pizzaWrapperLeft}>
            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
          </div>          
        
        <div className={styles.pizzaWrapperRight}>
          <div className={styles.pizzaInfo}>
              <p className={styles.pizzaTitle}>{pizza.name}</p>
              <p className={styles.pizzaDescription}>
                  For the absoloute mad lad who loves a morning
                  breakfast on pizza.
              </p>
              <p className={styles.pizzaPrice}>€{pizza.price}</p>
              <p className={styles.pizzaToppings}>
                {
                  pizza.toppings.map(topping => topping).join(', ')
                }
              </p>
          </div>
          <div className={styles.otherPizzasWrapper}>
              {
                otherPizzas.map(otherPizza => {
                  return (
                    <div className={styles.otherPizzas} key={otherPizza.id}>
                      <Link href={"/" + otherPizza.slug}>
                        <a>
                          <img src={otherPizza.image} alt={otherPizza.name}/>
                          <p>{otherPizza.name}</p>
                        </a>
                      </Link>
                    </div>
                  )
                })
              }
          </div>
        </div>
    </div>
    <footer className={styles.footer}>
      <a>
      Practicing NEXT-JS Django CODING. Toutorial made by Cocoa.
      </a>
    </footer>
  </div>
  )
}

export const getStaticPaths = async () => {
  
  const res = await fetch('https://ash-pizza-website.herokuapp.com/api/pizzas/');
  const pizzas = await res.json();

  console.log(pizzas)

  const paths = pizzas.map(pizza => ({
    params: {slug: `${pizza.slug}`}
  }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {

  const res = await fetch('https://ash-pizza-website.herokuapp.com/api/pizzas/');
  const pizzas = await res.json();

  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug );

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
    }
  }


}
