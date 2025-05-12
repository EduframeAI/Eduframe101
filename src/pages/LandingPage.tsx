import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Clock, Video, Users, Check } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 font-bold text-gray-900">
                Transform Your Education with
                <span className="text-primary-600 block">AI-Generated Videos</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                EduFrame creates personalized educational videos based on your homework and learning style. Upload your work, choose a teaching style, and get a custom video explanation in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard" className="btn-primary text-center sm:text-left">
                  Try Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
                <a href="#how-it-works" className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400 text-center sm:text-left">
                  Learn More
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-video max-w-lg mx-auto overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student studying with AI assistance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/70 to-secondary-900/30 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Educational Videos On Demand</h3>
                    <p className="text-white/90">Personalized learning experience</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Custom AI Teacher</h4>
                    <p className="text-sm text-gray-600">Tailored to your style</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-3 top-10 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Quick Generation</h4>
                    <p className="text-sm text-gray-600">Videos in minutes</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduFrame?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Our AI-powered platform generates educational videos that are personalized to your specific learning needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-8 w-8 text-primary-600" />,
                title: "Personalized Videos",
                description: "Create videos tailored to your homework problems with explanations that match your learning style."
              },
              {
                icon: <Users className="h-8 w-8 text-secondary-600" />,
                title: "Custom AI Teachers",
                description: "Generate an AI teacher that speaks to you in a way that resonates with your learning preferences."
              },
              {
                icon: <Clock className="h-8 w-8 text-accent-500" />,
                title: "Quick Turnaround",
                description: "Get your educational videos in minutes, not hours, so you can continue learning without delay."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Creating personalized educational videos is easier than you think. Follow these simple steps to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Upload Your Homework",
                description: "Take a picture or upload a PDF of your homework assignment or study materials."
              },
              {
                step: "02",
                title: "Choose Your Teacher",
                description: "Describe your preferred teaching style and let AI generate a custom teacher for you."
              },
              {
                step: "03",
                title: "Select Video Style",
                description: "Pick from motivational, fun, or educational styles to match your learning preferences."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl font-bold text-primary-100">{step.step}</div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#D1D5DB"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/dashboard" className="btn-primary">
              Get Started Now
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Students and educators love how EduFrame transforms learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "EduFrame helped me understand complex calculus problems that I was struggling with for weeks. The personalized videos explain concepts in a way that makes sense to me.",
                name: "Sarah K.",
                role: "College Student"
              },
              {
                quote: "As a teacher, I use EduFrame to create supplementary materials for my students. It's like having a teaching assistant that works around the clock!",
                name: "Michael T.",
                role: "High School Teacher"
              },
              {
                quote: "I love how I can choose a teaching style that works for me. The motivational videos keep me engaged even with challenging topics.",
                name: "Jamie L.",
                role: "Graduate Student"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are already using EduFrame to improve their understanding and academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Try Now For Free
              </Link>
              <a href="#features" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;