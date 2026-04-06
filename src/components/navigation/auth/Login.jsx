import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { _Auth } from "../../../firebase/FirebaseBaas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {

    let [data, setData] = useState({
        email: "",
        password: ""
    })
    let redirect = useNavigate();
    let [passwordType, setPasswordType] = useState(false);

    function handleInput(event) {
        let { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            let { email, password } = data;
            let userCredential = await signInWithEmailAndPassword(_Auth, email, password);
            let { emailVerified } = userCredential.user;

            if (emailVerified) {
                toast.success("Login Successfull!!");
                window.location.assign("/");
                redirect("/");
            } else {
                toast.error("Email not verified yet!")
            }
        } catch (error) {
            toast.error(error.message);
            setData({
                ...data,
                email: "",
                password: ""
            });
        }
    }


    return (
        <main className='w-full h-[calc(100dvh-200px)]  flex flex-col justify-center items-center gap-8'>
            <h1 className='text-3xl font-bold text-gray-400 uppercase tracking-wider '>Login Form</h1>
            <form
                className="w-95 bg-gray-300 p-10 rounded-md flex flex-col justify-center items-center"
                onSubmit={handleSubmit}
            >

                <div className='m-3'>
                    <label className='text-lg tracking-wide font-semibold text-white' htmlFor="email">Email</label><br />
                    <input
                        type="text"
                        id='email'
                        placeholder='Email'
                        name='email'
                        value={data.email}
                        onChange={handleInput}
                        className=' rounded-md p-2 bg-gray-100 w-65'
                    /><br />
                </div>

                <div className='m-3 relative'>
                    <label className='text-lg tracking-wide font-semibold text-white' htmlFor="password">Password</label><br />

                    <input
                        type={passwordType ? "text" : "password"}
                        id='password'
                        placeholder='Password'
                        name='password'
                        value={data.password}
                        onChange={handleInput}
                        className=' rounded-md p-2 bg-gray-100 w-65'

                    />
                    {
                        passwordType ?
                            <IoEyeOff
                                className=' absolute right-4 top-6/10 cursor-pointer'
                                onClick={() => setPasswordType(!passwordType)}
                            /> :
                            <IoEye
                                className=' absolute right-4 top-6/10 cursor-pointer'
                                onClick={() => setPasswordType(!passwordType)}
                            />
                    }

                </div>

                <input type="submit" value={"Login"} className='w-full rounded-md bg-gray-500 text-white py-3 m-3 uppercase tracking-widest font-semibold cursor-pointer' />
            </form>
        </main>
    )
}
