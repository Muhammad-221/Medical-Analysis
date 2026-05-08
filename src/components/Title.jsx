export default function TitleComp({title, description}){
    return(
        <div className="mb-7 w-full max-md:mb-5">
            <h2 className="text-3xl font-bold tracking-tight text-foreground max-md:text-2xl">{title}</h2>
            <p className="text-sm text-muted-foreground max-md:text-xs">{description}</p>
        </div>
    )
}