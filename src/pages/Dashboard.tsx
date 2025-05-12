import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Save, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your EduFrame Dashboard</h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Choose an option below to get started with your personalized educational videos.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-10 w-10 text-primary-600" />,
                title: "Generate a Video",
                description: "Upload your homework and create a new personalized educational video.",
                link: "/generate",
                color: "bg-primary-50 hover:bg-primary-100 border-primary-200"
              },
              {
                icon: <Save className="h-10 w-10 text-secondary-600" />,
                title: "Saved Videos",
                description: "Access your previously generated videos for review or sharing.",
                link: "/saved",
                color: "bg-secondary-50 hover:bg-secondary-100 border-secondary-200"
              },
              {
                icon: <Users className="h-10 w-10 text-accent-500" />,
                title: "Videos from Others",
                description: "Discover and learn from videos shared by the EduFrame community.",
                link: "/discover",
                color: "bg-accent-50 hover:bg-accent-100 border-accent-200"
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card ${option.color} border p-8 flex flex-col hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="mb-6">
                  {option.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3">{option.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                <Link to={option.link} className="flex items-center text-gray-800 font-medium hover:text-primary-600 transition-colors group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <img 
                  src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Quick tip" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Tip</h3>
                <p className="text-gray-600">
                  For the best results, make sure your homework images are clear and well-lit. You can also specify your learning style when generating an AI teacher to get more personalized videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;