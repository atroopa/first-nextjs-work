import Head from "next/head";



const Meta = ({title, keyword, description}) => {
  return (
    <Head>
        <title>
            ParsClick - {title}
        </title>

        <meta name="viewport" content="width=device-width initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta charSet="utf-8" />

    </Head>
  )
}

Meta.defaultProps = {
    title :       "omid hajavi",
    description:  "omid hajavi",
    keyword:      "omid hajavi"
}

export default Meta;