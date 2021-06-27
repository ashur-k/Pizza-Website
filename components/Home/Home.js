import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';


export default function Home({ pizzas }) {
 

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
