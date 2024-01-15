import { articleProps } from "./portfolio/article"
export default function Article(props: articleProps) {
    return (
        <div className={props.main ? "rounded-lg shadow-lg flex flex-row" : "rounded-md shadow-md w-80 text-center flex flex-col"}>
            <img className="rounded-t-md w-80 mx-5" src={props.picture}></img>
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-center">{props.title}</h1>
                <h3 className="text-center">by: {props.author}</h3>
                {props.main ? props.intro : <></>}

                <div className="flex flex-row text-center">
                    <p className="bg-teal-500 rounded-full px-1 mx-4">{props.category}</p>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}