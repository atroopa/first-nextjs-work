import { useRouter } from "next/router";

const article = () => {

    const router = useRouter();
    const {id}   = router.query;

    return (
        <div>
            {id}
        </div>
    );
}

export default article;