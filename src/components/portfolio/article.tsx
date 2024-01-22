import React, { useEffect, useState } from "react";
import { client } from "@/utils/configSanity";
import Card from "../card";
import imageUrlBuilder from '@sanity/image-url'

export interface articleProps {
    id: string;
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


const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}

const Article = () => {
    const [articles, setArticles] = useState<articleProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            //const res = await getData();
            const query = `*[_type == 'article']`;
            const res = await client.fetch(query);
            setArticles(res); 
        }
        fetchData();
    }, []
    );

    //console.log(articles);

    return (articles.map((article) => <Card id={article.id} title={article.title} author={article.author} picture={urlFor(article.picture).url()} category={article.category} intro={article.intro} text={article.text} main={article.main} date={article.date}/>))
};
export default Article;