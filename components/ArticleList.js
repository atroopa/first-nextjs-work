import Link from "next/link";

const ArticleList = ({article}) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className="">
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}

export default ArticleList;