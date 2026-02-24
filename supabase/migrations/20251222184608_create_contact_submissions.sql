/*
  # Contact Form Submissions Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `company_name` (text) - Name of the company
      - `responsible_person` (text) - Name of the person responsible
      - `estimated_volume` (text) - Estimated volume in liters
      - `phone` (text) - Contact phone/WhatsApp number
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin users to read submissions
    - No public insert policy (will use edge function for submissions)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  responsible_person text NOT NULL,
  estimated_volume text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);