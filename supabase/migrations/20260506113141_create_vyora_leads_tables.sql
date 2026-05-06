/*
  # Vyora Growth Lead Capture Schema

  1. New Tables
    - `service_inquiries` - general service inquiry submissions
    - `workshop_registrations` - workshop sign-ups
    - `website_quotes` - website project quote requests
    - `ads_consultations` - ads consultation requests
    - `newsletter_subscribers` - newsletter emails

  2. Security
    - RLS enabled on all tables
    - Public anon users can INSERT (lead capture from website)
    - No public SELECT — admin access only via service role
*/

CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  business_name text DEFAULT '',
  phone text NOT NULL DEFAULT '',
  service text DEFAULT '',
  budget text DEFAULT '',
  message text DEFAULT '',
  source_page text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS workshop_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  workshop text DEFAULT '',
  mode text DEFAULT '',
  city text DEFAULT '',
  experience text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS website_quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_type text DEFAULT '',
  pages_required text DEFAULT '',
  budget text DEFAULT '',
  features text DEFAULT '',
  timeline text DEFAULT '',
  phone text DEFAULT '',
  name text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ads_consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text DEFAULT '',
  ad_budget text DEFAULT '',
  current_platform text DEFAULT '',
  goal text DEFAULT '',
  contact_number text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ads_consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit service inquiry"
  ON service_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can register for workshop"
  ON workshop_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can request website quote"
  ON website_quotes FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can request ads consultation"
  ON ads_consultations FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);
