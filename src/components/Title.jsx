export default function TitleComp({title, description}){
    return(
        <div className="mb-7 w-full max-md:mb-5">
            <h2 className="text-teal-950 text-3xl font-bold">{title}</h2>
            <span className="text-base mt-1 font-normal text-slate-500">{description}</span>
        </div>
    )
}