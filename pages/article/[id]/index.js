import { useRouter } from "next/router";
import Link from "next/link";

const article = ({article}) => {

    // const router = useRouter();
    // const {id}   = router.query;

    return (
        <div>
            <div className="flex flex-col justify-center items-center px-10">
                <h1 key={article.id}>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <Link className="text-blue-500 font-medium px-10 py-5" href="/">GO Back</Link>
        </div>
    );
}


export const getServerSideProps = async context => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article  = await response.json()


    return {
        props: {
            article,
        }
    }

}

export default article;