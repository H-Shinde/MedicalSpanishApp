import { useState } from 'react';
import Navbar from "../components/Navbar";

export default function Home() {
  const [selectedDialect, setSelectedDialect] = useState(null);
  const [hoveredScenario, setHoveredScenario] = useState(null);

  const dialects = [
    { id: 'mexico', name: 'Mexican Spanish', flag: '🇲🇽', difficulty: 'Beginner', users: 2341, gradient: 'from-green-500 to-red-500' },
    { id: 'argentina', name: 'Argentinian Spanish', flag: '🇦🇷', difficulty: 'Intermediate', users: 1856, gradient: 'from-blue-400 to-cyan-400' },
    { id: 'colombia', name: 'Colombian Spanish', flag: '🇨🇴', difficulty: 'Beginner', users: 1923, gradient: 'from-yellow-400 to-blue-500' },
    { id: 'spain', name: 'Peninsular Spanish', flag: '🇪🇸', difficulty: 'Advanced', users: 1445, gradient: 'from-red-500 to-yellow-400' },
    { id: 'chile', name: 'Chilean Spanish', flag: '🇨🇱', difficulty: 'Advanced', users: 987, gradient: 'from-blue-600 to-red-500' },
    { id: 'peru', name: 'Peruvian Spanish', flag: '🇵🇪', difficulty: 'Intermediate', users: 1234, gradient: 'from-red-600 to-white' }
  ];

  const scenarios = [
    { id: 'emergency', title: 'Emergency Room', icon: '🚨', description: 'Handle urgent medical situations with confidence', difficulty: 'Advanced', gradient: 'from-red-500 to-pink-600' },
    { id: 'intake', title: 'Patient Intake', icon: '📋', description: 'Master initial patient interviews and histories', difficulty: 'Beginner', gradient: 'from-blue-500 to-indigo-600' },
    { id: 'pediatrics', title: 'Pediatrics', icon: '👶', description: 'Communicate effectively with children and parents', difficulty: 'Intermediate', gradient: 'from-green-500 to-teal-600' },
    { id: 'surgery', title: 'Pre-Surgery', icon: '🏥', description: 'Explain complex procedures and obtain consent', difficulty: 'Advanced', gradient: 'from-purple-500 to-indigo-600' },
    { id: 'pharmacy', title: 'Pharmacy', icon: '💊', description: 'Provide clear medication instructions and dosages', difficulty: 'Intermediate', gradient: 'from-orange-500 to-red-600' },
    { id: 'mental', title: 'Mental Health', icon: '🧠', description: 'Navigate sensitive psychological discussions', difficulty: 'Advanced', gradient: 'from-teal-500 to-blue-600' }
  ];

  const recentActivity = [
    { scenario: 'Emergency Room', dialect: 'Mexican', score: 85, date: 'Today', improvement: '+12%' },
    { scenario: 'Pediatrics', dialect: 'Colombian', score: 92, date: 'Yesterday', improvement: '+8%' },
    { scenario: 'Pharmacy', dialect: 'Argentinian', score: 78, date: '2 days ago', improvement: '+15%' }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section with Glassmorphism */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Welcome back, Dr. Rodriguez!
              </h1>
              <p className="text-2xl opacity-95 mb-12 font-medium">
                Continue mastering medical Spanish across cultures
              </p>
              
              {/* Enhanced Stats Cards with Glassmorphism */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  { label: 'Current Level', value: 'Level 3', subvalue: 'Intermediate', icon: '🎯' },
                  { label: 'Words Mastered', value: '847', subvalue: '+23 this week', icon: '📚' },
                  { label: 'Conversations', value: '23', subvalue: '4 completed today', icon: '💬' },
                  { label: 'Dialects Studied', value: '5', subvalue: '2 new this month', icon: '🌍' }
                ].map((stat, index) => (
                  <div key={stat.label} className="group">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm opacity-80 font-medium">{stat.label}</div>
                      <div className="text-xs opacity-70 mt-1">{stat.subvalue}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <button className="group relative bg-gradient-to-r from-white via-blue-50 to-purple-50 text-transparent bg-clip-text px-12 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 group-hover:from-white/20 group-hover:to-white/30 transition-all duration-300"></div>
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  🚀 Start AI-Powered Practice
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Enhanced Dialects Section */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                      Choose Your Dialect
                    </h2>
                    <p className="text-gray-600 mt-2 font-medium">Select a region for immersive cultural practice</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dialects.map((dialect) => (
                    <div 
                      key={dialect.id}
                      onClick={() => setSelectedDialect(dialect.id)}
                      className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 overflow-hidden ${
                        selectedDialect === dialect.id 
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl scale-105' 
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50'
                      }`}
                    >
                      {/* Gradient overlay for selected state */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${dialect.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">{dialect.flag}</div>
                            <div>
                              <h3 className="font-bold text-xl text-gray-900">{dialect.name}</h3>
                              <div className="flex items-center space-x-3 mt-2">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                  dialect.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                  dialect.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {dialect.difficulty}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">
                                  {dialect.users.toLocaleString()} learners
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {selectedDialect === dialect.id && (
                          <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200">
                            <p className="text-sm text-blue-800 font-medium">
                              ✨ Perfect! You'll practice with virtual patients from this region.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enhanced Medical Scenarios */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent">
                      Medical Scenarios
                    </h2>
                    <p className="text-gray-600 mt-2 font-medium">Practice real-world situations with AI patients</p>
                  </div>
                  <button className="text-blue-600 hover:text-indigo-600 text-sm font-bold hover:scale-105 transition-all duration-300">
                    View All Scenarios →
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {scenarios.map((scenario) => (
                    <div 
                      key={scenario.id}
                      onMouseEnter={() => setHoveredScenario(scenario.id)}
                      onMouseLeave={() => setHoveredScenario(null)}
                      className="group bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden relative"
                    >
                      {/* Background gradient animation */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${scenario.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 p-8">
                        <div className="flex items-start space-x-6">
                          <div className={`text-5xl transform group-hover:scale-110 transition-transform duration-300 ${hoveredScenario === scenario.id ? 'animate-pulse' : ''}`}>
                            {scenario.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-3">{scenario.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 font-medium leading-relaxed">{scenario.description}</p>
                            <div className="flex items-center justify-between">
                              <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {scenario.difficulty}
                              </span>
                              <button className="text-blue-600 hover:text-indigo-600 text-sm font-bold group-hover:scale-110 transition-all duration-300">
                                Start Practice →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              
              {/* Enhanced Daily Challenge */}
              <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-red-600/80"></div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="font-black text-2xl mb-3">🏆 Daily Challenge</h3>
                  <p className="text-sm opacity-95 mb-6 font-medium">
                    Master 5 cardiology terms in Mexican Spanish and earn 50 XP points!
                  </p>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-white/30 hover:scale-105 transition-all duration-300">
                    Accept Challenge
                  </button>
                </div>
              </div>

              {/* Enhanced Recent Activity */}
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
                <h3 className="font-black text-2xl text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-4 px-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border hover:border-blue-200">
                      <div>
                        <div className="font-bold text-gray-900">{activity.scenario}</div>
                        <div className="text-sm text-gray-600 font-medium">
                          {activity.dialect} Spanish • {activity.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          activity.score >= 90 ? 'bg-green-100 text-green-800' :
                          activity.score >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {activity.score}%
                        </div>
                        <div className="text-xs text-green-600 font-bold mt-1">{activity.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Progress Chart */}
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
                <h3 className="font-black text-2xl text-gray-900 mb-6">This Week's Goals</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Conversations', current: 8, target: 10, color: 'blue', percentage: 80 },
                    { label: 'Vocabulary', current: 45, target: 50, color: 'purple', percentage: 90 },
                    { label: 'Dialects', current: 2, target: 3, color: 'pink', percentage: 66 },
                    { label: 'Scenarios', current: 5, target: 7, color: 'indigo', percentage: 71 }
                  ].map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium text-gray-700">
                        <span>{goal.label}</span>
                        <span>{goal.current}/{goal.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full bg-gradient-to-r from-${goal.color}-500 to-${goal.color}-600`}
                          style={{ width: `${goal.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">
                  View Detailed Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}