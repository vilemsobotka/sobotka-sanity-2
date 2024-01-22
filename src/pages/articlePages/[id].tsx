import { client } from "@/utils/configSanity"
import { articleProps } from "@/components/portfolio/article";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
export default function ArticlePage(/*{ params }: { params: { id: string } }*/) {
    const [articles, setArticles] = useState<articleProps[]>([]);
    const [thisArticle, setThisArticle] = useState<articleProps>();
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            //const res = await getData();
            const query = `*[_type == 'article']`;
            const res = await client.fetch(query);
            setArticles(res); 
        }
        fetchData();
        //console.log(articles[1].id)
        for (var i = 0; i < articles.length && articles != undefined; i++){
            if(router.query.id == articles[i].id){
                setThisArticle(articles[i])
                console.log(thisArticle + " clanek")
                break;
            }
        }
    }, []
    );
    return (
        <div>
            {thisArticle?.title}
        </div>
    )
}