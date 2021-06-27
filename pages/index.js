import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home'

export default function HomePage({ pizzas }) {
  return (
    <Layout>
      <Home pizzas={pizzas}/>
    </Layout>
  )
}


export const getStaticProps = async ({params}) => {

  const res = await fetch('https://ash-pizza-website.herokuapp.com/api/pizzas/');
  const pizzas = await res.json();


  return {
    props: {
      pizzas,
    }
  }


}