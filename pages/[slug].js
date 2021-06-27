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
      <a rel="follow" target="_blank" href="https://www.shanekeenan.dev">
      Practicing NEXT-JS Django CODING. Toutorial made by Cocoa.</a>
    </footer>
  </div>
  )
}

export const getStaticPaths = async () => {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '2',
      name: 'Meat Feast',
      slug: 'meet-feast',
      toppings: ['Ham', 'Bacon', 'Pepporoni', 'Sussage'],
      image:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '3',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '4',
      name: 'Smoked Sussage Pizza',
      slug: 'smoked-sussage-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1474600056930-615c3d706456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '5',
      name: 'Vege Pizza',
      slug: 'vege-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '6',
      name: 'Cheese Pizza',
      slug: 'Chees-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
  ]

  const paths = pizzas.map(pizza => ({
    params: {slug: `${pizza.slug}`}
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {

  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '2',
      name: 'Meat Feast',
      slug: 'meet-feast',
      toppings: ['Ham', 'Bacon', 'Pepporoni', 'Sussage'],
      image:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '3',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '4',
      name: 'Smoked Sussage Pizza',
      slug: 'smoked-sussage-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1474600056930-615c3d706456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '5',
      name: 'Vege Pizza',
      slug: 'vege-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
    {
      id: '6',
      name: 'Cheese Pizza',
      slug: 'Chees-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
      price: 9.99,
      description: "really nice pizza"
    },
  ]

  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug );

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
    }
  }


}
