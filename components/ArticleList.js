import ArticleItem from "./ArticleItem"

const ArticleList = ({articles}) => {
    return (
      <div className="grid grid-cols-2 gap-3">
      {articles.map(article => (

        <ArticleItem key={article.id} article={article} />

      ))}
      </div>
    );
  }
  
export default ArticleList;
