import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function Register() {

    let [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    let redirect = useNavigate();

    let [privicy, setPrivicy] = useState({
        passwordEyeOpen: false,
        confirmPasswordEyeOpen: false,
    });

    function handleInput(event) {
        let { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        })
    }


    function handlePasswordEye() {
        setPrivicy({
            ...privicy,
            passwordEyeOpen: !privicy.passwordEyeOpen
        })
    }

    function handleConfirmPasswordEye() {
        setPrivicy({
            ...privicy,
            confirmPasswordEyeOpen: !privicy.confirmPasswordEyeOpen
        })
    }



    return (
        <main className='w-full h-[calc(100dvh-100px)]  flex flex-col justify-center items-center gap-8'>
            <h1 className='text-3xl font-bold text-gray-400 uppercase tracking-wider '>Register Form</h1>
            <form
                className="w-95 bg-gray-300 p-10 rounded-md flex flex-col justify-center items-center"
                onSubmit={() => { }}
            >

                <div className='m-3'>
                    <label className='text-lg tracking-wide font-semibold text-white' htmlFor="username">Username</label><br />
                    <input
                        type="text"
                        id='username'
                        placeholder='Username'
                        name='username'
                        value={data.username}
                        onChange={handleInput}
                        className=' rounded-md p-2 bg-gray-100 w-65'
                    />
                </div>

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
                        type={privicy.passwordEyeOpen ? "text" : "password"}
                        id='password'
                        placeholder='Password'
                        name='password'
                        value={data.password}
                        onChange={handleInput}
                        className=' rounded-md p-2 bg-gray-100 w-65'
                    />
                    {
                        privicy.passwordEyeOpen ?
                            <IoEyeOff
                                className='inputPassword absolute right-4 top-6/10 cursor-pointer'
                                onClick={handlePasswordEye}
                            /> :
                            <IoEye
                                className='inputPassword absolute right-4 top-6/10 cursor-pointer'
                                onClick={handlePasswordEye}
                            />
                    }

                </div>

                <div className='m-3 relative'>
                    <label className='text-lg tracking-wide font-semibold text-white' htmlFor="confirmPassword">Confirm Password</label><br />
                    <input
                        type={privicy.confirmPasswordEyeOpen ? "text" : "password"}
                        id='confirmPassword'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleInput}
                        className=' rounded-md p-2 bg-gray-100 w-65'
                    />
                    {
                        privicy.confirmPasswordEyeOpen ?
                            <IoEyeOff
                                className='absolute right-4 top-6/10 cursor-pointer'
                                onClick={handleConfirmPasswordEye}
                            /> :
                            <IoEye
                                className='absolute right-4 top-6/10 cursor-pointer'
                                onClick={handleConfirmPasswordEye}
                            />
                    }
                </div>

                <input type="submit" className='w-full rounded-md bg-gray-500 text-white py-3 m-3 uppercase tracking-widest font-semibold cursor-pointer' />
            </form>
        </main>
    )
}
