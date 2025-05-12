import React from 'react';
import { Play, Download, Share, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface SavedVideo {
  id: string;
  title: string;
  thumbnail: string;
  createdAt: string;
  duration: string;
  style: string;
}

const SavedVideos: React.FC = () => {
  // Mock data - in a real application, this would come from Supabase
  const savedVideos: SavedVideo[] = [
    {
      id: '1',
      title: 'Calculus: Integration by Parts Explanation',
      thumbnail: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-15',
      duration: '5:23',
      style: 'Educational'
    },
    {
      id: '2',
      title: 'Physics: Projectile Motion Made Simple',
      thumbnail: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-12',
      duration: '4:17',
      style: 'Fun'
    },
    {
      id: '3',
      title: 'English Literature: Analyzing Shakespeare',
      thumbnail: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-10',
      duration: '6:45',
      style: 'Motivational'
    }
  ];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Saved Videos</h1>
            <p className="text-lg text-gray-600 mb-10">
              Access and review all your previously generated educational videos.
            </p>
          </motion.div>
          
          {savedVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {savedVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="card flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative md:w-64 h-48 md:h-auto flex-shrink-0">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity hover:opacity-100">
                      <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-lg transform hover:scale-110 transition-transform">
                        <Play className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex-grow">
                    <div className="flex flex-col h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-xl font-semibold">{video.title}</h2>
                          <span className={`text-xs px-2 py-1 rounded ${
                            video.style === 'Educational' ? 'bg-primary-100 text-primary-800' :
                            video.style === 'Fun' ? 'bg-secondary-100 text-secondary-800' :
                            'bg-accent-100 text-accent-800'
                          }`}>
                            {video.style}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Created on {formatDate(video.createdAt)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto flex justify-end space-x-2">
                        <button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200">
                          <Share className="h-4 w-4 mr-2" />
                          Share
                        </button>
                        <button className="btn-primary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-16">
              <div className="mb-4">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Play className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">No videos yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't generated any educational videos yet. Create your first video to see it here.
              </p>
              <a href="/generate" className="btn-primary">
                Generate Your First Video
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedVideos;