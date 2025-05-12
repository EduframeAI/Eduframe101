/*
  # Update users table RLS policies
  
  1. Changes
    - Enable RLS on users table
    - Add policy for authenticated users to insert their own data
  
  2. Security
    - Ensures users can only insert rows where their auth.uid matches the id column
*/

-- Enable RLS (idempotent operation)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert their own data
CREATE POLICY "Users can insert their own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);