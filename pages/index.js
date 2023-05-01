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

      <div className='py-5 text-5xl'>
        Welcome to next
      </div>

      <div className='text-2xl'>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
        </ul>
      </div>

    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()


  return {
    props: {
      articles,
    },
  }
}
