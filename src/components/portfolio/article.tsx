import React, { useEffect, useState } from "react";
import { client } from "@/utils/configSanity";
import Card from "../card";

export interface articleProps {
    title: string;
    picture: string;
    author: string;
    category: string;
    intro: string;
    text: string;
    date: string;
    main: boolean;
}
/*async function getData() {
    const query = `*[_type == 'article']`;
    const res = await client.fetch(query);
    return res as articleProps[];
}*/

const Article = () => {
    const [articles, setArticles] = useState<articleProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            //const res = await getData();
            const query = `*[_type == 'article']`;
            const res = await client.fetch(query);
            setArticles(res); //postupne nastavit pomoci cyklu a u picture vytahnout url
        }
        fetchData();
    }, []
    );

    //console.log(articles);

    return (articles.map((article) => <Card title={article.title} author={article.author} picture={article.picture} category={article.category} intro={article.intro} text={article.text} main={article.main} date={article.date}/>))
};
export default Article;