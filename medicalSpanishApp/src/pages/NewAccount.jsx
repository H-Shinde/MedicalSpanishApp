import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NewAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    medicalField: '',
    experienceLevel: '',
    nativeLanguage: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/home');
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Side - Sign Up Form */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-2/5 flex items-center justify-center px-6 py-12 lg:px-8 relative"
      >
        {/* Glassmorphism background blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm"></div>
        
        <div className="w-full max-w-sm relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 200 }}
              className="mx-auto h-16 w-16 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            >
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #3B82F6, #6366F1, #8B5CF6)",
                    "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
                    "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)",
                    "linear-gradient(45deg, #3B82F6, #6366F1, #8B5CF6)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0"
              />
              <span className="text-white font-bold text-2xl relative z-10">MS</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
            >
              Create Your Account
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-3 text-sm text-gray-600 font-medium"
            >
              Start your medical Spanish learning journey
            </motion.p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 space-y-4" 
            onSubmit={handleSubmit}
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02]"
                    placeholder="John"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
              <div className="group">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02]"
                    placeholder="Doe"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02]"
                  placeholder="student@medschool.edu"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
              <div className="group">
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-800 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Medical Field */}
            <div className="group">
              <label htmlFor="medicalField" className="block text-sm font-semibold text-gray-800 mb-2">
                Medical Field/Specialty
              </label>
              <div className="relative">
                <select
                  id="medicalField"
                  name="medicalField"
                  value={formData.medicalField}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02] appearance-none"
                >
                  <option value="">Select your field</option>
                  <option value="medical-student">Medical Student</option>
                  <option value="nursing">Nursing</option>
                  <option value="emergency-medicine">Emergency Medicine</option>
                  <option value="family-medicine">Family Medicine</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="surgery">Surgery</option>
                  <option value="psychiatry">Psychiatry</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Experience Level */}
            <div className="group">
              <label htmlFor="experienceLevel" className="block text-sm font-semibold text-gray-800 mb-2">
                Spanish Experience Level
              </label>
              <div className="relative">
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02] appearance-none"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner - Just starting</option>
                  <option value="elementary">Elementary - Basic conversations</option>
                  <option value="intermediate">Intermediate - Comfortable with basics</option>
                  <option value="advanced">Advanced - Fluent conversations</option>
                  <option value="native">Native - Spanish is my first language</option>
                </select>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Native Language */}
            <div className="group">
              <label htmlFor="nativeLanguage" className="block text-sm font-semibold text-gray-800 mb-2">
                Native Language
              </label>
              <div className="relative">
                <select
                  id="nativeLanguage"
                  name="nativeLanguage"
                  value={formData.nativeLanguage}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:ring-gray-300 focus:shadow-lg focus:scale-[1.02] appearance-none"
                >
                  <option value="">Select your native language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="french">French</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-focus-within:from-blue-500/10 group-focus-within:via-indigo-500/10 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-4 text-sm font-bold text-white shadow-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    background: [
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                    ],
                    x: [-100, 300]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0"
                />
                <span className="relative z-10">Create Account</span>
              </motion.button>
            </div>
          </motion.form>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Already have an account?{' '}
            <motion.button 
              whileHover={{ scale: 1.05, color: "#4F46E5" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToLogin}
              className="font-bold text-blue-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer relative"
            >
              Sign in here
              <motion.div
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 origin-left scale-x-0 transition-transform duration-300"
              />
            </motion.button>
          </motion.p>
        </div>
      </motion.div>

      {/* Right Side - Modern Medical Theme */}
      <div className="hidden md:flex w-3/5 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
          
          {/* Floating elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
          />
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-2xl blur-lg"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center text-white p-12 w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-center max-w-lg"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 100 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <motion.div 
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full"
              />
              <div className="absolute inset-2 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                <motion.span 
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(139, 92, 246, 0.7)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl"
                >
                  🩺
                </motion.span>
              </div>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
            >
              Join Our Community
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-xl opacity-90 mb-8 leading-relaxed"
            >
              Connect with thousands of medical professionals improving their Spanish skills
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              {[
                { icon: "🌎", text: "6+ Dialects", color: "from-green-400 to-emerald-400" },
                { icon: "🏥", text: "Real Scenarios", color: "from-blue-400 to-cyan-400" },
                { icon: "🧠", text: "AI-Powered", color: "from-purple-400 to-violet-400" },
                { icon: "📊", text: "Progress Tracking", color: "from-pink-400 to-rose-400" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 30px -10px rgba(255,255,255,0.3)"
                  }}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="mr-2 text-lg">{feature.icon}</span>
                  <span className={`font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}