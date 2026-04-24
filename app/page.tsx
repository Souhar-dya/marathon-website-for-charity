'use client'

import { ChevronDown, MapPin, Clock, Users, Heart, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('Marathon (42 km)')
  const [terms, setTerms] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !phone || !terms) {
      alert('Please fill in all fields and accept the terms')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('[v0] Registration submitted:', { name, email, phone, category })
      setRegistrationSuccess(true)
      setIsSubmitting(false)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setName('')
        setEmail('')
        setPhone('')
        setCategory('Marathon (42 km)')
        setTerms(false)
        setRegistrationSuccess(false)
      }, 3000)
    }, 1000)
  }

  const scrollToRegister = () => {
    const element = document.getElementById('register')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const teamMembers = [
    { name: 'Kalki', role: 'Permissions & Administration', icon: '📋' },
    { name: 'Siddharth', role: 'Health & Refreshments', icon: '🥤' },
    { name: 'Vedant', role: 'Security', icon: '🛡️' },
    { name: 'Souhardya', role: 'Registrations, Certificates & Outreach', icon: '📝' },
    { name: 'Ousnik', role: 'Finance', icon: '💰' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Mind Over Miles
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition font-medium text-sm">
              About
            </a>
            <a href="#details" className="text-slate-700 hover:text-blue-600 transition font-medium text-sm">
              Details
            </a>
            <a href="#team" className="text-slate-700 hover:text-blue-600 transition font-medium text-sm">
              Team
            </a>
            <a href="#register" className="text-slate-700 hover:text-blue-600 transition font-medium text-sm">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-6">
              🌍 World Mental Health Day - October 10th
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold text-center mb-6 text-slate-900">
            Mind Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Miles</span>
          </h1>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us for a charity marathon dedicated to raising awareness and funds for mental health. Run with purpose. Run with heart. Run with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToRegister}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Register Now
            </button>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>
          </div>

          {showDetails && (
            <div className="bg-white/80 backdrop-blur rounded-xl p-8 border border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Marathon Highlights</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>42 km challenging route from Napier Bridge to Indian Maritime University</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Multiple hydration stations with health support throughout</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>All proceeds support mental health awareness and initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Certificate of completion for all participants</span>
                </li>
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center border border-white/50">
              <div className="text-4xl mb-3">📅</div>
              <p className="text-slate-600 font-medium">October 10, 2026</p>
              <p className="text-sm text-slate-500">World Mental Health Day</p>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center border border-white/50">
              <div className="text-4xl mb-3">🏃</div>
              <p className="text-slate-600 font-medium">4 AM Reporting</p>
              <p className="text-sm text-slate-500">5 AM Start • 11 AM Finish</p>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center border border-white/50">
              <div className="text-4xl mb-3">💚</div>
              <p className="text-slate-600 font-medium">₹3,000</p>
              <p className="text-sm text-slate-500">Participation Fee</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Mind Over Miles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Supporting Mental Health Awareness</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Mind Over Miles is not just a marathon—it&apos;s a movement. We&apos;re bringing together individuals from all walks of life to run in solidarity with those facing mental health challenges.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every step you take, every mile you run contributes to raising awareness and funds for mental health initiatives. Together, we can break the stigma, build support, and create positive change.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Heart className="text-red-500 flex-shrink-0 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-slate-900">Raise Awareness</p>
                    <p className="text-slate-600 text-sm">Breaking stigma around mental health</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="text-green-500 flex-shrink-0 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-slate-900">Collect Funds</p>
                    <p className="text-slate-600 text-sm">Supporting mental health initiatives</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="text-yellow-500 flex-shrink-0 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-slate-900">Build Community</p>
                    <p className="text-slate-600 text-sm">Creating a network of support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Why Mental Health Matters</h4>
              <ul className="space-y-4 text-lg">
                <li className="flex gap-3">
                  <span className="text-2xl">💭</span>
                  <span>1 in 5 people struggle with mental health</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🤝</span>
                  <span>Community support reduces isolation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🌟</span>
                  <span>Early intervention saves lives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">💪</span>
                  <span>Together we are stronger</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Event Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule</h3>
                  <div className="space-y-3 text-slate-600">
                    <p><span className="font-semibold text-slate-900">4:00 AM</span> - Reporting begins</p>
                    <p><span className="font-semibold text-slate-900">5:00 AM</span> - Marathon starts</p>
                    <p><span className="font-semibold text-slate-900">11:00 AM</span> - Marathon ends</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Marathon Route</h3>
                    
                    {/* Starting Point */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">START</span>
                        <p className="font-semibold text-slate-900">Napier Bridge</p>
                      </div>
                      <img 
                        src="/napier-bridge.jpg" 
                        alt="Napier Bridge - Marathon starting point"
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-slate-600">The iconic checkered Napier Bridge marks the beginning of your journey</p>
                    </div>

                    {/* Route Info */}
                    <div className="flex items-center justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-indigo-600"></div>
                    </div>
                    <p className="text-center text-slate-500 text-sm mb-6">~42 km marathon route</p>

                    {/* Ending Point */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">FINISH</span>
                        <p className="font-semibold text-slate-900">Indian Maritime University</p>
                      </div>
                      <img 
                        src="/imu-venue.jpg" 
                        alt="Indian Maritime University - Marathon finishing point"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <p className="text-sm text-slate-600 mt-3">Complete your marathon at the prestigious Indian Maritime University headquarters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Participation Fee</h3>
                  <div className="space-y-3 text-slate-600">
                    <p><span className="font-semibold text-slate-900">₹3,000</span> per participant</p>
                    <p className="text-sm">Includes race kit, refreshments & certificate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">What&apos;s Included</h3>
                  <div className="space-y-2 text-slate-600 text-sm">
                    <p>✓ Race bib & timing chip</p>
                    <p>✓ Hydration stations</p>
                    <p>✓ Finisher certificate</p>
                    <p>✓ Post-race refreshments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Meet Our Team</h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Behind every successful marathon is a dedicated team of passionate individuals. Here are the people making Mind Over Miles possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Together We Are Strong</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Every team member is committed to making Mind Over Miles a success. Their dedication ensures a safe, organized, and inspiring event for all participants.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Join the Movement</h2>

          {registrationSuccess ? (
            <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-green-200 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">Registration Successful!</h3>
              <p className="text-slate-600 mb-4">Thank you {name} for registering for Mind Over Miles!</p>
              <p className="text-slate-600 mb-6">A confirmation email will be sent to {email}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-700 mb-2"><span className="font-semibold">Category:</span> {category}</p>
                <p className="text-sm text-slate-700 mb-2"><span className="font-semibold">Participation Fee:</span> ₹3,000</p>
                <p className="text-sm text-slate-700"><span className="font-semibold">Reference ID:</span> MOM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
              <p className="text-slate-600 text-sm">See you on October 10th! 🏃‍♂️💚</p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="bg-white rounded-2xl p-10 shadow-xl border-2 border-blue-100">
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option>Marathon (42 km)</option>
                  <option>Half Marathon (21 km)</option>
                  <option>10K Run</option>
                </select>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
                <p className="text-slate-700 mb-2">
                  <span className="font-semibold">Participation Fee:</span> ₹3,000
                </p>
                <p className="text-sm text-slate-600">
                  Your registration helps us support mental health initiatives. Thank you for your contribution!
                </p>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded cursor-pointer"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                  I agree to the terms and conditions and understand the risks involved
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Complete Registration'}
              </button>

              <p className="text-center text-slate-600 text-sm mt-6">
                Questions? Contact us at support@mindovermiles.com
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Mind Over Miles
              </h4>
              <p className="text-slate-400">Running for mental health awareness and support.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#details" className="hover:text-white transition">Details</a></li>
                <li><a href="#team" className="hover:text-white transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-slate-400 text-sm">support@mindovermiles.com</p>
              <p className="text-slate-400 text-sm">October 10, 2026</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 Mind Over Miles. All rights reserved. 💚</p>
            <p className="mt-2">Running together, healing together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
