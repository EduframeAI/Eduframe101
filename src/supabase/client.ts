import { createClient } from '@supabase/supabase-js';

// Use development fallbacks to prevent initialization errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadHomeworkImage(file: File) {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `homework/${fileName}`;

    const { error } = await supabase.storage
      .from('homework')
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    return { filePath };
  } catch (error) {
    console.error('Error uploading homework:', error);
    throw error;
  }
}