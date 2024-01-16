import React, { useEffect, useState } from "react";
import { client } from "@/utils/configSanity";

export interface articleProps {
    title: string;
    picture: string;
    author: string;
    category: string;
    intro: string;
    text: string;
    date: string;
    main: boolean;
    _id: string;
    _createdAt: string;
}
async function getData() {
    const query = `*[_type == 'article']`;
    const data = await client.fetch(query);
    return data as articleProps[];
}

const Article = () => {
    const [articles, setArticles] = useState<articleProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            setArticles(res);
        }
        fetchData();
    }, []
    );

    console.log(articles);

    return <div>Article</div>
};
export default Article;