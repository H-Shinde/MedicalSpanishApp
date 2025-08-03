import { motion } from 'framer-motion';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Sign In Form */}
      <div className="w-2/5 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-sm">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  Sign in
                </motion.button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                Create New Account
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Large Image */}
      <div className="hidden md:flex w-3/5 relative bg-gradient-to-br from-slate-800 via-gray-900 to-indigo-900">
        {/* Replace this div with your actual image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-64 h-64 mx-auto mb-8 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl">🏥</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Welcome to Medical Spanish</h3>
            <p className="text-xl opacity-90">Learn medical terminology with confidence</p>
          </div>
        </div>
        
        {/* Uncomment and modify this section to use your actual image */}
        {/*
        <img 
          src="your-image-path-here.jpg" 
          alt="Medical Spanish App" 
          className="w-full h-full object-cover"
        />
        */}
      </div>
    </div>
  );
}