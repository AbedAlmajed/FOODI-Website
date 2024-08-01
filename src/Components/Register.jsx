import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

export default function Register() {
    return (
      <div className='pt-10 login'>
        <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 rounded">
            <div className="modal-action flex flex-col justify-center mt-0">
              <form  className="card-body" method="dialog">
                <h3 className="font-bold text-lg">Create An Account!</h3>
       {/* Name */}
       <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered bg-white"
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-white"
                  
                  />
                </div>
    
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-white"
              
                  />
                </div>
    
                {/* error */}
    
                {/* login btn */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Register"
                    className="btn bg-green text-white"
                  />
                </div>
    
                <p className="text-center my-2">
                  Have an account?
                  <Link to="/login">
                  
                  <button className=" text-green ml-1"
                  >
                    Login
                  </button></Link>
                </p>
    
             
              </form>
    
              {/* social sign in */}
              <div className="text-center space-x-3 mb-5">
                <button className="btn btn-circle hover:bg-green hover:text-white">
                  <FaGoogle />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                  <FaFacebookF />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaGithub />
                </button>
              </div>
            </div>
        </div>
        </div>
      )
}
