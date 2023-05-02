import Head from "next/head";
import Meta from "@/components/Meta";

export default function about() {
    return (
        <div>
            <Meta title="about" description="this news website" keyword="persian , iranian , news" />
            <div className="text-5xl font-bold">about</div>
        </div>
    );
}