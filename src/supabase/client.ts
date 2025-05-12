import { createClient } from '@supabase/supabase-js';

// These will be populated once the user connects to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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