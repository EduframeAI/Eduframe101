import React, { useState, useRef } from 'react';
import { Upload, Video, Check, AlertCircle, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase/client';

interface VideoStyle {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const GenerateVideo: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTeacher, setGeneratedTeacher] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const videoStyles: VideoStyle[] = [
    {
      id: 'motivational',
      name: 'Motivational',
      description: 'Engaging and encouraging teaching style to keep you motivated',
      icon: <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600"><Video /></div>
    },
    {
      id: 'fun',
      name: 'Fun',
      description: 'Entertaining and enjoyable learning experience with examples',
      icon: <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600"><Video /></div>
    },
    {
      id: 'educational',
      name: 'Educational',
      description: 'Detailed and comprehensive explanations with clear steps',
      icon: <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600"><Video /></div>
    }
  ];

  const handleGenerateTeacher = async () => {
    if (!prompt) {
      alert('Please enter a prompt first');
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert('Please sign in to generate an AI teacher');
        return;
      }

      // Save prompt to Supabase
      const { error } = await supabase
        .from('prompts')
        .insert([
          { user_id: user.id, prompt_text: prompt }
        ]);

      if (error) throw error;

      // Simulate AI teacher generation
      setIsGenerating(true);
      setTimeout(() => {
        setGeneratedTeacher('Your custom AI teacher has been generated!');
        setIsGenerating(false);
      }, 2000);
    } catch (error) {
      console.error('Error generating teacher:', error);
      alert('Failed to generate AI teacher. Please try again.');
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setUploadError(null);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setUploadError(null);
    }
  };
  
  const handleGenerateVideo = async () => {
    if (!selectedFile) {
      setUploadError('Please upload a homework image');
      return;
    }
    
    if (!prompt) {
      alert('Please enter a prompt for your AI teacher');
      return;
    }
    
    if (!selectedStyle) {
      alert('Please select a video style');
      return;
    }
    
    try {
      setIsUploading(true);
      
      // Upload to Supabase storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `homework/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('homework')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;
      
      // If upload successful, start video generation
      setIsUploading(false);
      setIsGenerating(true);
      
      // Simulate video generation (in a real app, this would call an API)
      setTimeout(() => {
        setIsGenerating(false);
        alert('Video generated successfully! It will appear in your Saved Videos section.');
      }, 3000);
      
    } catch (error) {
      setIsUploading(false);
      setUploadError('Error uploading file. Please try again.');
      console.error('Upload error:', error);
    }
  };
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Generate a Video</h1>
            <p className="text-lg text-gray-600 mb-10">
              Upload your homework, describe your ideal AI teacher, and select a video style to create a personalized educational video.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Homework Upload Section */}
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Upload Your Homework</h2>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    uploadError ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-primary-300 bg-gray-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                        <Check className="h-6 w-6" />
                      </div>
                      <p className="text-lg font-medium mb-2">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button 
                        className="text-primary-600 hover:text-primary-700"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                          }
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                        <Upload className="h-6 w-6" />
                      </div>
                      <p className="text-lg font-medium mb-2">Drag and drop your file here</p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <button 
                        className="btn-primary"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Browse Files
                      </button>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*,.pdf"
                      />
                      <p className="text-xs text-gray-500 mt-4">
                        Supported formats: JPG, PNG, PDF (max 10MB)
                      </p>
                    </div>
                  )}
                </div>
                {uploadError && (
                  <div className="mt-2 flex items-start text-red-600">
                    <AlertCircle className="h-5 w-5 mr-1 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{uploadError}</p>
                  </div>
                )}
              </div>
              
              {/* AI Teacher Prompt Section */}
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Type a prompt to generate an AI teacher</h2>
                <div className="space-y-4">
                  <textarea
                    className="input h-32 resize-none"
                    placeholder="Generate me an anime girl with glasses"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <button
                    className="btn-primary flex items-center justify-center w-full"
                    onClick={handleGenerateTeacher}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      'Generating...'
                    ) : (
                      <>
                        Generate AI Teacher
                        <Wand2 className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  {generatedTeacher && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                      {generatedTeacher}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Video Style Selection */}
              <div className="card">
                <h2 className="text-xl font-semibold mb-4">Video Style</h2>
                <div className="space-y-4">
                  {videoStyles.map((style) => (
                    <div 
                      key={style.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedStyle === style.id 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <div className="flex items-center">
                        {style.icon}
                        <div className="ml-4">
                          <h3 className="font-medium">{style.name}</h3>
                          <p className="text-sm text-gray-600">{style.description}</p>
                        </div>
                        {selectedStyle === style.id && (
                          <div className="ml-auto">
                            <div className="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                              <Check className="h-4 w-4" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Summary and Generate Button */}
              <div className="card bg-gray-50 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Homework</p>
                    <p className="font-medium">
                      {selectedFile ? selectedFile.name : 'Not uploaded yet'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">AI Teacher</p>
                    <p className="font-medium">
                      {prompt ? `${prompt.slice(0, 50)}${prompt.length > 50 ? '...' : ''}` : 'Not specified yet'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Video Style</p>
                    <p className="font-medium">
                      {selectedStyle 
                        ? videoStyles.find(style => style.id === selectedStyle)?.name 
                        : 'Not selected yet'}
                    </p>
                  </div>
                </div>
                <button
                  className="btn-primary w-full"
                  onClick={handleGenerateVideo}
                  disabled={isUploading || isGenerating}
                >
                  {isUploading 
                    ? 'Uploading...' 
                    : isGenerating 
                      ? 'Generating Video...' 
                      : 'Generate Video'}
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    By generating a video, you agree to our <a href="#" className="text-primary-600">Terms of Service</a> and <a href="#" className="text-primary-600">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateVideo;