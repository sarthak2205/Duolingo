import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookFill } from 'react-icons/ri';

export default function Signin() {
    const [ userID, setUserID ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ usererror, setUserError ] = useState("");
    const [ passerror, setPassError ] = useState("");

    const validate = () => {
        const errors = {}
        
        if(password===""){
            errors.password="Password is required!";
        }

        if(userID===""){
            errors.userID="Email ID or Username is required!";
        }


        return Object.keys(errors).length===0?null:errors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const errors = validate();

        if(errors){
            setUserError(errors.userID);
            setPassError(errors.password);
            console.log(setPassError);
        }
        else {
            setPassError("");
            setUserError("");
        }
    }

  return (
    <div className='w-screen h-full p-7 overflow-y-scroll'>
        <div className='flex flex-row-reverse '>
            <div className='flex flex-row-reverse'>
                <div className='flex flex-col justify-center items-center p-3 px-6 font-bold text-blue-400  text-xl rounded-2xl border-2 border-b-4 border-solid border-gray-300 invisible md:visible hover:bg-slate-200 hover:border-slate-400 hover:scale-110 transition duration-300 ease-in-out'>
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
        <div className=' h-full flex flex-col justify-center items-center  md:-mt-2'>
            <form className='h-full flex flex-col justify-center items-center md:p-2' onSubmit={handleSubmit}>
                <div className='text-2xl md:text-3xl font-bold p-4 pb-7 pt-8 mt-2'>
                    <h1 >Log in</h1>
                </div>
                <div className='w-full mb-3'>
                    <div className='rounded-2xl mb-3  bg-[#f7f7f7] focus-within:scale-110 transition duration-300 ease-in-out'>
                    <input 
                        placeholder='Email or username' 
                        type="email"
                        name='userID'
                        id='userID'
                        value={userID}
                        onChange={(e) => {
                            setUserID(e.target.value);
                        }}
                        className= 'w-full bg-[#f7f7f7] text-gray-800 p-2 rounded-2xl border-2 border-solid border-slate-300 px-5 font-thin lg:py-4 text-base md:text-xl placeholder:font-thin placeholder:text-gray-400 password'/>
                    </div>
                        <div className="text-red-500 text-sm -mt-3 mb-3 ml-2">{usererror}</div>
                </div>
                <div className='w-full mb-3'>
                    <div className='password w-full rounded-2xl flex flex-row bg-[#f7f7f7] border-2 border-solid border-slate-300 focus-within:border-sky-400 focus-within:scale-110 transition duration-300 ease-in-out'>
                        <input 
                            placeholder='Password'
                            type="password" 
                            name='password'
                            id='password'
                            value={ password }
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            className= 'w-full bg-[#f7f7f7] text-gray-800 p-2 rounded-2xl px-5 lg:py-4 text-base md:text-xl placeholder:font-thin placeholder:text-gray-400 focus:outline-none'/>
                        <div className='flex justify-center items-center text-sm font-semibold text-[#ACACAC] mr-4 '>FORGOT?</div>
                    </div>
                    <div className="text-red-500 text-sm ml-2">{passerror}</div>
                </div>
                
                <button className='w-full flex flex-row justify-center items-center bg-sky-400 font-semibold text-white text-sm lg:text-xl p-2 py-3 lg:py-3 pb-3 lg:pb-4 rounded-2xl border-b-4 border-solid border-b-sky-500 mt-5 hover:bg-sky-300 hover:scale-110 transition duration-300 ease-in-out'>LOG IN</button>
                <div className="flex items-center py-4 lg:py-7 w-full mt-2">
                    <div className=
"grow bg-gray-200 border border-solid border-gray-200 rounded-xl"></div> 
                    <span className="flex-shrink text-sm text-gray-400 px-4 font-bold">OR</span>
                    <div className="grow bg-gray-200 border border-solid border-gray-200"></div>
                </div>
                <div className='grid grid-cols-2 gap-5 w-full'>
                    <button className='w-full flex flex-row justify-center items-center bg-slate-50 hover:bg-slate-200 font-extrabold text-blue-800 text-sm p-3 rounded-2xl border-2 border-b-4 border-solid border-slate-200 hover:border-slate-400 hover:scale-110 transition duration-300 ease-in-out'>
                        <div className='text-2xl mr-1'><RiFacebookFill/></div>
                        <div className='-mt-1'>FACEBOOK</div>
                    </button>
                    <button className='w-full flex flex-row justify-center items-center bg-slate-50 hover:bg-slate-200 font-extrabold text-sky-400 text-sm p-3 rounded-2xl border-2 border-b-4 border-solid border-slate-200 hover:border-slate-400 hover:scale-110 transition duration-300 ease-in-out'>
                        <div className='text-2xl mr-2'><FcGoogle/></div>
                        <div className='-mt-1'>GOOGLE</div>
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <div className='pt-10 lg:pt-12 text-[#ACACAC] text-sm md:text-md '>
                            By signing in to Duolingo, you agree to our <a className='font-extrabold '>Terms</a> and <a className='font-extrabold '>Privacy Policy</a>.
                    </div>
                </div>
                <div className=' text-slate-900 font-black visible md:invisible pt-5 text-sm'>
                        Don't have an account? <a className='font-extrabold text-sky-400'>SIGN UP</a>
                </div>

            </form>
        </div>
        
    </div>
  )
}
