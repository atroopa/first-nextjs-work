import Head from 'next/head' 
import { Inter } from 'next/font/google'
import ArticleList from '@/components/ArticleList';
import { server } from '@/config';

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

export const getStaticProps = async()  => {

  const res      = await fetch(`${server}/api/articles`)
  const articles = await res.json()


  return {
    props: {
      articles,
    }
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
