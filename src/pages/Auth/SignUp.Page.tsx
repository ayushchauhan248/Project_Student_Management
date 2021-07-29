import { useFormik } from "formik";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

interface Props {
}
const Signup: React.FC<Props> = (props) => {

    const history = useHistory ();

    const {isSubmitting,handleSubmit, touched,errors, getFieldProps ,isValid }  = useFormik({
        initialValues:{
            email : "",
            password : "",
            username: ""
        },
        validationSchema :  yup.object().required().shape({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
            username: yup.string().required().min(2)

        }),
        onSubmit:(data , {setSubmitting}) =>{
            console.log("form submittiing", data);
            setTimeout(() => {
                console.log("form submitted successfully");
                history.push("/dashboard");
                setSubmitting(false);

            },3000); 
        },
    });
    


    return (
        
        <div className=" lg:w-1/2 p-2 ">
            <div className="p-16 pt-2 lg:p-36 lg:pt-2 font-sans lg:pb-0">
                <div className="text-gray-700 text-4xl opacity-3 md:text-5xl mb-4">
                Get started with a free account
                </div>
                <div className="font-medium text-gray-700"><p>Already have an account? <Link to="/login"><span className="text-blue-500 underline ">Log in</span></Link></p></div>


                <form className="mt-8 space-y-6"
                    onSubmit= {handleSubmit}>

                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className=" ">
                    <div className=" flex flex-row items-center">
                            <label htmlFor="Username" className="sr-only">
                                Username
                            </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user text-blue-700"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <input
                                id="username"
                                type="name"
                                autoComplete="name"
                                required
                                {...getFieldProps("username")}
                                
                                className=" text-medium font-medium relative w-3/4 block px-3 py-5 outline-none placeholder-gray-400 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username "
                            />
                        </div>
                        <hr />
                        { touched.username && <div className=" text-red-500">{errors.username}</div>}

                        <div className=" flex flex-row items-center">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-at-sign text-blue-700"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                {...getFieldProps("email")}
                                
                                className=" text-medium font-medium relative w-3/4 block px-3 py-5 outline-none placeholder-gray-400 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <hr />
                        { touched.email && <div className=" text-red-500">{errors.email}</div>}
                      
                      
                        <div className=" flex flex-row items-center ">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock text-blue-700"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                {...getFieldProps("password")}
                                
                                className="font-medium relative block px-3 py-5 text-medium outline-none placeholder-gray-400 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                                placeholder="Password"
                            />
                        </div>
                        <hr />
                        { touched.password && <div className="text-red-500">{errors.password}</div>}
                        
                    </div>
                 
                    <div className="flex items-center justify-items-center ">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-500 fill-current  border-gray-300 rounded "
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-gray-500 md:text-base text-xs">
                            I agree to the <span className="text-blue-500">terms and conditions</span>
                            </label>
                    </div>
                    <div className=" flex items-center  justify-between">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={"group relative w-4/3 shadow-DEFAULT  flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 " }
                        >
                            Get Started!
                        </button>
                        {isSubmitting &&<FaSpinner className=" animate-spin"></FaSpinner>}
                        
                    </div>

                </form>
            </div>
            <footer className="p-14 pt-0 lg:p-32 md:pt-0 lg:pt-24 text-base ">&copy; 2020 All Rights Reserved.  <span className="text-blue-500 font-medium">CORK</span>  is a product of Designreset.
                <span className="text-blue-500 font-medium"> Cookie Preferences, Privacy,</span> and <span className="text-blue-500 font-medium">Terms.</span>
            </footer>
        </div>

    );
};
Signup.defaultProps = {
}
export default Signup;