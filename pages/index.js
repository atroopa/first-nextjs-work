import Head from 'next/head' 
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {

  console.log(articles);

  return (
    <div>
      <Head>
        <title>Pars Click - Home</title>
        <meta name="keyword" content="home , persian, iranian , parsclick, tutorial"/>
      </Head>

      <div className='text-5xl'>
        Welcome to next
      </div>

    </div>
  )
}

export const getStaticProps = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await response.json()

  return {
    props: {
      articles
    }
  }


}