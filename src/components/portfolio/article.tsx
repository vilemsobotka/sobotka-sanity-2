import React, { useEffect, useState } from "react";
import { client } from "@/utils/configSanity";
import { use } from "react";

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
const [articles, setArticles] = useState([]);
/*async function getData () {
    const query = `*[_type == 'article']`;
    const data = await client.fetch(query);
    return data as articleProps[];
}*/
useEffect(() => {
    /*const arts = getData();
    setArticles(arts);*/
    const query = `*[_type == 'article']`;
    client.fetch(query)
      .then((data) => setArticles(data))
 }, []);

const Article = () => {
    //console.log(data);
    
    return <div>Article</div>
};
export default Article;