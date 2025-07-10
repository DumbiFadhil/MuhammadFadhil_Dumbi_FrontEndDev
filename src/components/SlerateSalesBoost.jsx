import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, TrendingUp, Users, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SlerateSalesBoost = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Acceleration",
      description: "Accelerate your sales process with AI-powered insights and automation that delivers results 3x faster than traditional methods.",
      stat: "300%",
      statLabel: "Faster Results"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Intelligent Performance Analytics",
      description: "Transform your sales data into actionable intelligence with real-time dashboards and predictive analytics.",
      stat: "85%",
      statLabel: "Performance Boost"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration Hub",
      description: "Unite your sales team with seamless collaboration tools and shared insights that drive collective success.",
      stat: "92%",
      statLabel: "Team Alignment"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales, TechCorp",
      content: "Slerate Sales Boost transformed our entire sales operation. We're closing deals 40% faster.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Sales Director, GrowthLabs",
      content: "The intelligence and automation features are game-changing. Our team's productivity soared.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SLERATE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Sales Acceleration Platform
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Slerate Sales Boost
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
                Accelerate your sales through <span className="text-blue-400 font-semibold">people</span>, <span className="text-purple-400 font-semibold">intelligence</span>, and <span className="text-green-400 font-semibold">innovation</span>. Transform your sales process with AI-powered precision and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
                  Start Accelerating Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
                  Watch Demo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                  No Credit Card Required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                  14-Day Free Trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                  Setup in 5 Minutes
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/60">Monthly Revenue</p>
                        <p className="text-3xl font-bold text-green-400">$2.4M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/60">Growth Rate</p>
                        <p className="text-3xl font-bold text-blue-400">+47%</p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <TrendingUp className="w-6 h-6 text-blue-400 mb-2" />
                        <p className="text-sm text-white/60">Sales Velocity</p>
                        <p className="text-xl font-bold">+185%</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <Users className="w-6 h-6 text-purple-400 mb-2" />
                        <p className="text-sm text-white/60">Team Efficiency</p>
                        <p className="text-xl font-bold">+92%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Accelerate Every Aspect of Sales
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with proven methodologies to supercharge your sales performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-green-400">{feature.stat}</p>
                    <p className="text-sm text-white/60">{feature.statLabel}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Trusted by Sales Leaders
            </h2>
            <p className="text-xl text-white/70">See how teams are accelerating their success with Slerate Sales Boost</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of sales teams who trust Slerate Sales Boost to drive their success. Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
                Schedule Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-400" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SLERATE</span>
            </div>
            <div className="flex items-center space-x-6 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>© 2025 SLERATE. All rights reserved. Accelerating sales through people, intelligence, and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlerateSalesBoost;