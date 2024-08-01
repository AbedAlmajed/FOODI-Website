import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

export default function AdminLogin() {
    return (
      <>
      <div className='pt-10 login w-full h-full'>
        <div className="max-w-md bg-white  shadow w-full mx-auto flex items-center justify-center my-20 rounded" >
            <div className="modal-action flex flex-col justify-centermt-20"> 
              <form className="card-body " method="dialog">
                <h3 className="font-bold text-lg">Please Login!</h3>
    
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
                  <label className="label mt-1">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
    
                {/* error */}
    
            
            {/* login btn */}
            <div className="form-control mt-4">
              <Link to="/Dashboard"  className="btn bg-green text-white">
              <input
                type="submit"
                value="Login"
              /></Link>
            </div>

           
    
             
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
        </>
      )
}
