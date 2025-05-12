import React, { useState } from 'react';
import { Play, ThumbsUp, Clock, Filter, Search, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommunityVideo {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  createdAt: string;
  duration: string;
  likes: number;
  subject: string;
  style: string;
}

const VideosFromOthers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null);
  
  // Mock data - in a real application, this would come from Supabase
  const communityVideos: CommunityVideo[] = [
    {
      id: '1',
      title: 'Understanding Photosynthesis: A Visual Guide',
      thumbnail: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'BiologyFan42',
      createdAt: '2025-03-14',
      duration: '7:15',
      likes: 342,
      subject: 'Biology',
      style: 'Educational'
    },
    {
      id: '2',
      title: 'The American Civil War Explained',
      thumbnail: 'https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'HistoryBuff99',
      createdAt: '2025-03-10',
      duration: '12:43',
      likes: 275,
      subject: 'History',
      style: 'Educational'
    },
    {
      id: '3',
      title: 'Solving Quadratic Equations Made Fun',
      thumbnail: 'https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'MathMaster',
      createdAt: '2025-03-08',
      duration: '5:38',
      likes: 189,
      subject: 'Mathematics',
      style: 'Fun'
    },
    {
      id: '4',
      title: 'Chemical Reactions in Everyday Life',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'ChemistryPro',
      createdAt: '2025-03-05',
      duration: '8:22',
      likes: 156,
      subject: 'Chemistry',
      style: 'Fun'
    },
    {
      id: '5',
      title: 'Shakespeare&#39;s Romeo and Juliet: Key Themes',
      thumbnail: 'https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'LiteratureLover',
      createdAt: '2025-03-01',
      duration: '10:05',
      likes: 211,
      subject: 'Literature',
      style: 'Motivational'
    },
    {
      id: '6',
      title: 'How to Format a Research Paper',
      thumbnail: 'https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      creator: 'AcademicWriter',
      createdAt: '2025-02-28',
      duration: '6:47',
      likes: 134,
      subject: 'Writing',
      style: 'Educational'
    }
  ];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  const subjects = Array.from(new Set(communityVideos.map(video => video.subject)));
  
  const filteredVideos = communityVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !subjectFilter || video.subject === subjectFilter;
    
    return matchesSearch && matchesSubject;
  });
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Discover Community Videos</h1>
            <p className="text-lg text-gray-600 mb-10">
              Explore educational videos shared by the EduFrame community and find new learning resources.
            </p>
          </motion.div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input pl-10"
                  placeholder="Search videos by title or creator"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="input pl-10 appearance-none"
                  value={subjectFilter || ''}
                  onChange={(e) => setSubjectFilter(e.target.value || null)}
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="card overflow-hidden hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="relative h-48">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-lg transform hover:scale-110 transition-transform">
                        <Play className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        video.style === 'Educational' ? 'bg-primary-100 text-primary-800' :
                        video.style === 'Fun' ? 'bg-secondary-100 text-secondary-800' :
                        'bg-accent-100 text-accent-800'
                      }`}>
                        {video.style}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-700 flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {video.subject}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {video.likes}
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h2>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">By {video.creator}</span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(video.createdAt)}
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
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">No videos found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any videos matching your search criteria. Try adjusting your filters.
              </p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSubjectFilter(null);
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideosFromOthers;