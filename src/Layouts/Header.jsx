import { Menu } from 'lucide-react';

export default function HeaderLayout({action}){
    return(
        <header className="h-15 z-20 px-3 top-0 sticky flex items-center bg-white/80 backdrop-blur-lg">
            <Menu onClick={action} className="size-8 cursor-pointer text-cyan-800 max-md:size-6"/>
        </header>
    )
}