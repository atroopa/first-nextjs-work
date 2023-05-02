import Head from 'next/head' 
import { Inter } from 'next/font/google'
import ArticleList from '@/components/ArticleList';

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {

  return (
    <div>
      <Head>
        <title>Pars Click - Home</title>
        <meta name="keyword" content="home , persian, iranian , parsclick, tutorial"/>
      </Head>

      <div className='py-5 text-5xl'>
        Welcome to next
      </div>

      <ArticleList articles={articles} />

    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('/api/articles')
  const articles = await res.json()


  return {
    props: {
      articles,
    },
  }
}


// export async function getStaticProps() {

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()


//   return {
//     props: {
//       articles,
//     },
//   }
// }
