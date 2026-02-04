import FormLogin from "../components/Login";

export default function SigninPage(){
    return(
        <div className="h-screen">
            <div className="h-1/8 grid place-items-center font-bold text-3xl text-teal-950 bg-white/80 backdrop-blur-lg">Medical Analysis</div>
            <div className="h-6/8 pt-30">
                <FormLogin/>
            </div>
            <footer className="mb-0 h-1/8 text-sm border-t border-slate-500/30 grid place-items-center text-slate-500">Created By Our Team</footer> 
        </div>
    )
}