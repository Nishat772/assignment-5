import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#0D9C6D]">
            <h1 className="mb-10 text-[35px] font-bold text-white">LogIn</h1>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md h-auto border p-4 gap-5">
                <input type="email" className="input w-full" placeholder="Email" />
                <input type="password" className="input w-full" placeholder="Password" />
                <button className="btn btn-neutral my-4">Login</button>
                <div className="flex justify-between text-lg">
                    <p>Don't Have an Account ?</p>
                    <Link to="/register">
                        <a className="link link-primary">Register</a>
                    </Link>
                </div>
                <Link to="/">
                    <a className="link link-primary text-lg">Go to Home</a>
                </Link>
            </fieldset>
        </div>
    )
}
