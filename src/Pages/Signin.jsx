import FormLogin from "../components/Login";

export default function SigninPage(){
    return(
        <div className="h-screen">
            <div className="h-1/7 grid place-items-center font-bold text-3xl text-cyan-50 bg-cyan-950">Manly Style</div>
            <div className="h-5/7 pt-30">
                <FormLogin/>
            </div>
            <div className="h-1/7 grid place-items-center text-center leading-20 text-cyan-50 bg-cyan-950">Created By Our Team</div>
        </div>
    )
}