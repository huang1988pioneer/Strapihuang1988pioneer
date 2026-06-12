-- Strapihuang1988pioneer table schema
-- Based on:
-- - goldshoot0720/fengbroaiappwrite app/api/create-table/route.js
-- - goldshoot0720/fengbroaisupabase components/pages/SettingsPage.vue
-- - goldshoot0720/fengbroailaravel database.sql
--
-- Run this in the Supabase SQL editor or any PostgreSQL database.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS public.article (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(100) NOT NULL,
  content TEXT,
  category VARCHAR(100),
  ref VARCHAR(100),
  newdate TIMESTAMPTZ,
  url1 TEXT,
  url2 TEXT,
  url3 TEXT,
  file1 VARCHAR(150),
  file1name VARCHAR(100),
  file1type VARCHAR(20),
  file2 VARCHAR(150),
  file2name VARCHAR(100),
  file2type VARCHAR(20),
  file3 VARCHAR(150),
  file3name VARCHAR(100),
  file3type VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.bank (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  deposit INTEGER DEFAULT 0,
  site TEXT,
  address VARCHAR(100),
  withdrawals INTEGER DEFAULT 0,
  transfer INTEGER DEFAULT 0,
  activity TEXT,
  card VARCHAR(100),
  account VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.commonaccount (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  site01 VARCHAR(100), site02 VARCHAR(100), site03 VARCHAR(100), site04 VARCHAR(100), site05 VARCHAR(100),
  site06 VARCHAR(100), site07 VARCHAR(100), site08 VARCHAR(100), site09 VARCHAR(100), site10 VARCHAR(100),
  site11 VARCHAR(100), site12 VARCHAR(100), site13 VARCHAR(100), site14 VARCHAR(100), site15 VARCHAR(100),
  site16 VARCHAR(100), site17 VARCHAR(100), site18 VARCHAR(100), site19 VARCHAR(100), site20 VARCHAR(100),
  site21 VARCHAR(100), site22 VARCHAR(100), site23 VARCHAR(100), site24 VARCHAR(100), site25 VARCHAR(100),
  site26 VARCHAR(100), site27 VARCHAR(100), site28 VARCHAR(100), site29 VARCHAR(100), site30 VARCHAR(100),
  site31 VARCHAR(100), site32 VARCHAR(100), site33 VARCHAR(100), site34 VARCHAR(100), site35 VARCHAR(100),
  site36 VARCHAR(100), site37 VARCHAR(100),
  note01 VARCHAR(100), note02 VARCHAR(100), note03 VARCHAR(100), note04 VARCHAR(100), note05 VARCHAR(100),
  note06 VARCHAR(100), note07 VARCHAR(100), note08 VARCHAR(100), note09 VARCHAR(100), note10 VARCHAR(100),
  note11 VARCHAR(100), note12 VARCHAR(100), note13 VARCHAR(100), note14 VARCHAR(100), note15 VARCHAR(100),
  note16 VARCHAR(100), note17 VARCHAR(100), note18 VARCHAR(100), note19 VARCHAR(100), note20 VARCHAR(100),
  note21 VARCHAR(100), note22 VARCHAR(100), note23 VARCHAR(100), note24 VARCHAR(100), note25 VARCHAR(100),
  note26 VARCHAR(100), note27 VARCHAR(100), note28 VARCHAR(100), note29 VARCHAR(100), note30 VARCHAR(100),
  note31 VARCHAR(100), note32 VARCHAR(100), note33 VARCHAR(100), note34 VARCHAR(100), note35 VARCHAR(100),
  note36 VARCHAR(100), note37 VARCHAR(100),
  photohash VARCHAR(256),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.commondocument (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  file VARCHAR(500),
  filetype VARCHAR(20),
  note VARCHAR(500),
  ref VARCHAR(300),
  category VARCHAR(100),
  hash VARCHAR(300),
  cover VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.food (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  amount INTEGER DEFAULT 0,
  price INTEGER DEFAULT 0,
  shop VARCHAR(100),
  todate DATE,
  photo TEXT,
  photohash VARCHAR(256),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.image (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  file VARCHAR(500),
  filetype VARCHAR(20),
  note VARCHAR(500),
  ref VARCHAR(300),
  category VARCHAR(100),
  hash VARCHAR(300),
  cover VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.music (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  file VARCHAR(500),
  filetype VARCHAR(20),
  lyrics TEXT,
  note VARCHAR(500),
  ref VARCHAR(300),
  category VARCHAR(100),
  hash VARCHAR(300),
  language VARCHAR(100),
  cover VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.podcast (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  file VARCHAR(500),
  filetype VARCHAR(20),
  note VARCHAR(500),
  ref VARCHAR(300),
  category VARCHAR(100),
  hash VARCHAR(300),
  cover VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.routine (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  note VARCHAR(100),
  lastdate1 TIMESTAMPTZ,
  lastdate2 TIMESTAMPTZ,
  lastdate3 TIMESTAMPTZ,
  link TEXT,
  photo TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.subscription (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  site TEXT,
  account TEXT,
  price INTEGER,
  nextdate DATE,
  note TEXT,
  iscontinue BOOLEAN DEFAULT true,
  currency TEXT DEFAULT 'TWD',
  category VARCHAR(100),
  purpose VARCHAR(100),
  usagefrequency VARCHAR(50),
  friendliness VARCHAR(50),
  alternative VARCHAR(200),
  retentionrecommendation VARCHAR(50),
  archived BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.video (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE,
  file TEXT,
  filetype VARCHAR(20),
  note TEXT,
  ref TEXT,
  category TEXT,
  hash TEXT,
  cover TEXT,
  filesize INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.landtophistory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source VARCHAR(20) NOT NULL,
  snapshotkey VARCHAR(220) NOT NULL,
  productid VARCHAR(180) NOT NULL,
  brand VARCHAR(20) NOT NULL,
  name VARCHAR(200) NOT NULL,
  sourceurl TEXT,
  landtopprice INTEGER,
  suggestedprice INTEGER,
  snapshotdate TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.push_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint TEXT NOT NULL UNIQUE,
  auth VARCHAR(255) NOT NULL,
  p256dh VARCHAR(500) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.resend_notification_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_key VARCHAR(191) NOT NULL UNIQUE,
  event_type VARCHAR(50) NOT NULL,
  table_name VARCHAR(50) NOT NULL,
  record_id VARCHAR(64) NOT NULL,
  target_date DATE NOT NULL,
  recipient_email VARCHAR(191) NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  setting_key VARCHAR(50) NOT NULL,
  setting_value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, setting_key)
);

CREATE TABLE IF NOT EXISTS public.tool_price_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_type VARCHAR(30) NOT NULL,
  query_text VARCHAR(500) NOT NULL,
  title VARCHAR(500),
  source VARCHAR(100),
  current_price INTEGER,
  high_price INTEGER,
  low_price INTEGER,
  result_url TEXT,
  notice TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_article_category ON public.article(category);
CREATE INDEX IF NOT EXISTS idx_article_created_at ON public.article(created_at);
CREATE INDEX IF NOT EXISTS idx_bank_name ON public.bank(name);
CREATE INDEX IF NOT EXISTS idx_commonaccount_name ON public.commonaccount(name);
CREATE INDEX IF NOT EXISTS idx_commondocument_category ON public.commondocument(category);
CREATE INDEX IF NOT EXISTS idx_food_name ON public.food(name);
CREATE INDEX IF NOT EXISTS idx_food_todate ON public.food(todate);
CREATE INDEX IF NOT EXISTS idx_image_category ON public.image(category);
CREATE INDEX IF NOT EXISTS idx_image_hash ON public.image(hash);
CREATE INDEX IF NOT EXISTS idx_music_category ON public.music(category);
CREATE INDEX IF NOT EXISTS idx_music_hash ON public.music(hash);
CREATE INDEX IF NOT EXISTS idx_podcast_category ON public.podcast(category);
CREATE INDEX IF NOT EXISTS idx_podcast_hash ON public.podcast(hash);
CREATE INDEX IF NOT EXISTS idx_routine_name ON public.routine(name);
CREATE INDEX IF NOT EXISTS idx_subscription_nextdate ON public.subscription(nextdate);
CREATE INDEX IF NOT EXISTS idx_subscription_iscontinue ON public.subscription(iscontinue);
CREATE INDEX IF NOT EXISTS idx_video_category ON public.video(category);
CREATE INDEX IF NOT EXISTS idx_video_hash ON public.video(hash);
CREATE INDEX IF NOT EXISTS idx_landtophistory_lookup ON public.landtophistory(source, productid, snapshotdate);
CREATE INDEX IF NOT EXISTS idx_tool_price_history_lookup ON public.tool_price_history(tool_type, query_text, created_at);

DO $$
DECLARE
  table_name text;
BEGIN
  FOREACH table_name IN ARRAY ARRAY[
    'article',
    'bank',
    'commonaccount',
    'commondocument',
    'food',
    'image',
    'music',
    'podcast',
    'routine',
    'subscription',
    'video',
    'landtophistory',
    'settings'
  ]
  LOOP
    EXECUTE format('DROP TRIGGER IF EXISTS set_%I_updated_at ON public.%I', table_name, table_name);
    EXECUTE format(
      'CREATE TRIGGER set_%I_updated_at BEFORE UPDATE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.set_updated_at()',
      table_name,
      table_name
    );
  END LOOP;
END $$;
