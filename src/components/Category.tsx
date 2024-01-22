export default function Category(props: any) {
    return (
        <div className="flex flex-row text-center">
            <p className="bg-teal-500 rounded-full px-1 mx-4">{props.category}</p>
        </div>
    )
}