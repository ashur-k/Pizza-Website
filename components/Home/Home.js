import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
    },
    {
      id: '2',
      name: 'Meat Feast',
      slug: 'meet-feast',
      toppings: ['Ham', 'Bacon', 'Pepporoni', 'Sussage'],
      image:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      price: 9.99,
    },
    {
      id: '3',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
      price: 9.99,
    },
    {
      id: '4',
      name: 'Smoked Sussage Pizza',
      slug: 'smoked-sussage-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1474600056930-615c3d706456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
      price: 9.99,
    },
    {
      id: '5',
      name: 'Vege Pizza',
      slug: 'vege-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
      price: 9.99,
    },
    {
      id: '6',
      name: 'Cheese Pizza',
      slug: 'Chees-pizza',
      toppings: ['mozzrella Chees'],
      image:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
      price: 9.99,
    },
  ]

  const [keyword, setKeyword] = useState('');

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }

  const filteredPizzas = pizzas.filter(
    pizza =>
    pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
  )

  return (
    <div>
      <div className={styles.searchWrapper}>
        <input 
          placeholder="Search for pizza toppings..." 
          className={styles.searchBar} 
          onChange={onInputChange}
        />
      </div>
      <div className={styles.pizzaContainer}>
        {filteredPizzas < 1 ? 
        (
          <div className={styles.noContainer}>
            <h5>There is no pizza or topping with that search.</h5>
          </div>
        ):
        (
          filteredPizzas.map(pizza => {
            return (
              <div className={styles.pizzaItem} key={pizza.id}>
                <Link href={`/${pizza.slug}`}>
                  <a className={styles.pizzaImageBox}>
                    <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}/>
                  </a>
                </Link>
                <div className={styles.pizzaText}>
                  <p className={styles.pizzaHeader}>
                    {pizza.name}
                  </p>
                  <p className={styles.pizzaToppings}>
                    {
                      pizza.toppings.map(topping=> topping).join(', ')
                    }
                  </p>
                  <p className={styles.pizzaPrice}>£{pizza.price}</p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
