import {FC , memo}  from  "react";
import { Link, useHistory } from "react-router-dom";
import {FaSpinner} from "react-icons/fa"
import * as yup from "yup";
import { Formik, useFormik } from "formik";



interface Props {}

const Login: FC<Props> = (props) => {
    const history = useHistory();
    const {handleSubmit ,getFieldProps, touched ,isSubmitting , errors} =  useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        validationSchema: yup.object().shape({
            email : yup.string().required("This feild is required").email(),
            password : yup.string().required().min(8 , ({min}) => `Atleast ${min} characters`) 
        }),
        onSubmit : (data ) => {
            console.log("form submitting" , data);
            setTimeout(() => {
                history.push("/dashboard");
                console.log("setSubmitting succes");
            },5000);     
        },
    });

   
    
    return(
        <div className=" md:w-1/2 p-2">
            <div className="p-10 md:p-24 md:pt-6 font-sans tracking-wide md:pb-8">
                <div className="text-black text-5xl md:text-5xl mb-4 ">
                    Log In to <span className=" text-blue-500">CORK</span>

                </div>
                <div className="font-medium"><p>New Here? <Link to="/signup"><span className="text-blue-500 underline ">Create an account</span></Link></p></div>





                <form className="mt-8 space-y-6"
                onSubmit = {handleSubmit}
                >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className=" ">
                        <div className=" flex flex-row items-center">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user text-blue-600"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                {...getFieldProps("email")}
                                required
                                className=" text-medium font-medium relative w-3/4 block px-3 py-5 outline-none placeholder-gray-400 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        
                        <hr />
                        {touched.email && <div className = "text-red-500">{errors.email}</div>}
                        <div className=" flex flex-row items-center ">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock text-blue-600"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                {...getFieldProps("password")}
                                required
                                className="font-medium relative block px-3 py-5 text-medium outline-none placeholder-gray-400 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                                placeholder="Password"
                            /> 
                        </div>
                        
                        <hr />
                        {touched.password &&<div className = "text-red-500">{errors.password}</div>}
                    </div>
                    <div>
                    </div>
                    <div className = "flex ">
                        <button 
                            type="submit"
                            className="group relative w-4/3 shadow-lg flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 "
                        >
                            Log in 
                        </button>
                        {isSubmitting && <FaSpinner className="animate-spin m-3"></FaSpinner>}
                    </div>

                    <div className="flex items-center flex-col sm:p-6">
                        <div className="flex items-center justify-items-center pb-4">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-gray-500 md:text-base">
                                Keep me logged in
                            </label>
                        </div>

                        <div className="text-sm pt-0">
                            <Link to="/signup" className="font-bold text-indigo-500 hover:text-indigo-600 text-base">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>


                </form>
            </div>
            <footer className="p-10 md:p-28 md:pt-0  text-base ">&copy; 2020 All Rights Reserved.  <span className="text-blue-500 font-medium">CORK</span>  is a product of Designreset.
                <span className="text-blue-500 font-medium"> Cookie Preferences, Privacy,</span> and <span className="text-blue-500 font-medium">Terms.</span>
            </footer>
        </div>


    );
};

Login.defaultProps = {}

export default memo(Login);