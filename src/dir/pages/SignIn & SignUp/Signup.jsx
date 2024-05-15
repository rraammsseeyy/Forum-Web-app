import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSigup = async (e) => {
    e.preventDefault();

 
    try {
      await axios
        .post(`http://localhost:5000/signup`, {
          email: email,
          password: password,
        })
        .then(async (result) => {
            setTimeout(() => {
              // sign the user in after 3secs
              navitage("/");
            }, 3000);
          
        }).catch((error) => {

          console.log(err);
        })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=''>
        <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up your account
            </h2>
          </div>

          <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form 
              onSubmit={handleSigup}
              className=" space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>    
                <br />
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>

                <div className='mt-2 flex'>
                  <p>Already have an account?</p>
                  <Link to="/signin" className='text-blue-600 ml-2 underline' >
                    Sign In
                  </Link>

                </div>

              </div>
            </form>

          
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default Signup